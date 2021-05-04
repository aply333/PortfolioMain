## 05/3/2021


### Figma Design :

[https://www.figma.com/file/W2ZY6bYY40NvieMWVKQCkM/?node-id=338%3A168](https://www.figma.com/file/W2ZY6bYY40NvieMWVKQCkM/?node-id=338%3A168)

Portfolio for displaying projects I have completed, as well itself as a display. Built using ReactJs and is purely front-end, the form uses formspree to capture form submissions, which will then forward to my email.


#### Design Goals:



1. Keep it simple and clean. It should deliver what I have done and can do, and provide means to contact.
2. Needs to be responsive, should function well on Phone, Tablet, and Desktop.
3. Should represent me, shows a bit of who I am.
    *   All components were made and no bootstrap was used in hopes to further this.


#### Deviations From Design:



1. Project Page Mobile: It was changed to a grid/card layout. The original design, in use, took too much space. Users/Viewers would have to scroll a lot, to see the projects, and to reach the contact button, they would have to scroll to the bottom. This design would also make scrolling an awkward experience, If you wanted to go back to the top you would first have to scroll through the nested div, rather than simply go up. The same was true about going to the bottom.
    *   Changes Made:
        *   Removed Content from cards, into a display of its own. Now when a card is selected a larger card will slide down, showing the relevant information. This allows for a more compact fit while retaining all the information.
        *   Cards are shown as a grid. They display a small portion of the project screenshot and the project name.  Clicking the card will display the full/large card.
2. Mobile Nav/Hamburger Menu: This never had a set design, I needed to get a feel for how and where I would put it before, so it was designed as I coded the main site. The banner on top seemed to be a good fit. It allows me to place the menu without blocking content, and as a bonus, it makes the banner a functional piece without breaking the look of the portfolio.


### Hosting:

The site is hosted on Linode and is managed by NGINX. Encryption is automated and handled by Let'sEncrypt. Email is handled by Google Workspaces.



*   Linode:
    *   Their billing structure works best for me and opens me up to be more creative with personal projects.
    *   They use Linux, I am comfortable with any operating system, but Linux is where my knowledge base is the strongest. Currently running on an LTS of Ubuntu, for simplicity, but may move to CentOS or Fedora.
*   NGINX:
    *   It is quick and simple to set up, I plan on creating live demos of the projects I have made and I feel this client will make it simple to do so. I thought of using APACHE but for my purposes, it seemed to be more work than necessary.
*   Let'sEncrypt:
    *   Setup was quick and painless, and admittedly free. I had done much research on whether to try to make my certificates, buy one, or use a free option. Given I want to move onto another project, building one was ruled out. Buying was deemed unnecessary, my site acts as a brochure and will not be managing any sensitive data. That left finding a free alternative.
    *   Let'sEncrypt offers a "bot" that will auto-renew the certificates, a huge plus, and Is the main reason for going with them.
*   Google Workspaces:
    *   Easy setup, and reliable. I found other free solutions but those only would forward rather than allow for sending.


#### Planned Changes:



1. **Redesign Mobile Projects Cards**: As is, it works, but I think aesthetically it could be improved. I want there to be less space, maybe none at all around the cards. The other pages fill the screen, so as it is, it feels a tad out of place.
2. **Hamburger Menu**: Functional but I want to create new components for the links within it. Currently, it uses buttons, and well they work but feel out of place. I also need to play with the transition timing, I feel it is still a little slow. Finally, I should add the links for Resume/GitHub/LinkedIn.
3. **Live Links**: This will take some time, the projects run fine locally but will need a final check. I also need to figure out how I want to connect/host them on the server.
4. **Canvas**: This is a new skill I picked up and am honing in my current project. I want to add a subtle animation to the background, one that is there but not distracting. And to be honest, I think it's a cool feature of HTML5, and I need an excuse to use it.