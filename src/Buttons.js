import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import registerIcons from './FontAwesome';
import resume from './assets/resume.pdf';

registerIcons();

// class Buttons extends Component {
//     render() {
//         return (
//             <div>

//                 <span className="button">
//                     <a href="https://github.com/adamalston" target="_self" rel="noopener noreferrer">
//                         <FontAwesomeIcon className="icon" icon={['fab', 'github']} size={size} />
//                         <span className="icon_title">Github</span>
//                     </a>
//                 </span>

//                 <span className="button">
//                     <a href="https://www.linkedin.com/in/adammalston/" target="_self" rel="noopener noreferrer">
//                         <FontAwesomeIcon className="icon" icon={['fab', 'linkedin']} size={size} />
//                         <span className="icon_title">LinkedIn</span>
//                     </a>
//                 </span>

//                 <span className="button">
//                     <a href={Resume} target="_self" rel="noopener noreferrer">
//                         <FontAwesomeIcon className="icon" icon={['fas', 'file-alt']} size={size} />
//                         <span className="icon_title">Resume</span>
//                     </a>
//                 </span>

//                 <span className="button">
//                     <a href="mailto:aalston9@gmail.com" target="_self" rel="noopener noreferrer">
//                         <FontAwesomeIcon className="icon" icon={['fas', 'paper-plane']} size={size} />
//                         <span className="icon_title">Email me</span>
//                     </a>
//                 </span>

//             </div>
//         )
//     }
// }

// export default Buttons;

const DATA = [
    {
        href: "https://github.com/adamalston",
        icon: ["fab", "github"],
        label: "Github",
    },
    {
        href: "https://www.linkedin.com/in/adammalston/",
        icon: ["fab", "linkedin"],
        label: "LinkedIn",
    },
    {
        href: resume,
        icon: ["fas", "file-alt"],
        label: "Resume",
    },
    {
        href: "mailto:aalston9@gmail.com",
        icon: ["fas", "paper-plane"],
        label: "Email me",
    }
];

const Icon = ({ href, icon, label }) => {
    return (
        <span className="button">
            <a href={href} target="_self" rel="noopener noreferrer">
                <FontAwesomeIcon className="icon" icon={icon} size="3x" />
                <span className="icon_title">{label}</span>
            </a>
        </span>
    );
};

class Buttons extends Component {
    render() {
        return (
            <div>
                {DATA.map(props => (
                    <Icon {...props} key={props.label}/>
                ))}
            </div>
        );
    }
}

export default Buttons;