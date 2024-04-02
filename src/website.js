import createHeader from "./header"
import createMain from "./main"
import createFooter from "./footer"

function loadWebsite() {
    const content = document.querySelector("#content");
    content.appendChild(createHeader());
    content.appendChild(createMain());
    content.appendChild(createFooter());
}

export default loadWebsite;