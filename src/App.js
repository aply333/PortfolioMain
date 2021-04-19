import { useEffect, useState } from "react";
import BoundaryBox from "./components/layouts/desktop/boundaryBox";
import DisplaySwitch from "./components/pageStates/desktopStates";



function App() {
  const [size, setSize] = useState(window.innerWidth)
  const [viewstate, setviewstate] = useState("desktop")

  useEffect(() => {
    if(size > 1410){
      setviewstate("desktop")
    }else if(size<=1410 && size > 760){
      setviewstate("tablet")
    }else if(size <=760){
      setviewstate("mobile")
    }
  }, [size]);

  window.addEventListener("resize", ()=>{
    setSize(window.innerWidth)
  })

  const [view, setView] = useState("")
  const DesktopTabletView = () => {
    return(
      <BoundaryBox viewstate={viewstate}>
        <DisplaySwitch view={view} setView={setView} viewstate={viewstate}/>
      </BoundaryBox>
      )
  }

  return  <DesktopTabletView viewstate={viewstate}/>
  ;
}

export default App;
