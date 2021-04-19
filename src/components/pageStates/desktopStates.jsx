import Landing from "../layouts/desktop/landing";
import MobileBanner from "../layouts/mobile/mobileBanner/mobileBanner";
import SwitchComp from "./switchComp";

function DisplaySwitch({ view, setView, viewstate }) {

  return (
    <>
      {viewstate === "mobile" && view !== "" ? (
        <MobileBanner setView={setView} />
      ) : (
        <Landing setView={setView} view={view} viewstate={viewstate} />
      )}
      <SwitchComp view={view} viewstate={viewstate} setView={setView}/>
    </>
  );
}

export default DisplaySwitch;
