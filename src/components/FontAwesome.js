// import the library
import { library } from '@fortawesome/fontawesome-svg-core'
// import individual icons
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons' //fab
import { faFileAlt, faPaperPlane } from "@fortawesome/free-solid-svg-icons"; //fas
import { faSun, faMoon } from "@fortawesome/free-regular-svg-icons"; //far


export default function registerIcons() {
    library.add(
        faGithub,
        faLinkedin,
        faFileAlt,
        faPaperPlane,
        faSun,
        faMoon,
    );
}
