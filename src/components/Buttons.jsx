import React, { Component } from 'react';
import { GitHub, LinkedIn, Resume, Email } from './../icons'

const DATA = [
    {
        href: "https://github.com/adamalston/",
        aria: "Visit my GitHub profile",
        icon: <GitHub />,
        label: "Github",
    },
    {
        href: "https://www.linkedin.com/in/adam-alston/",
        aria: "Visit my LinkedIn profile",
        icon: <LinkedIn />,
        label: "LinkedIn",
    },
    {
        href: "https://drive.google.com/drive/folders/10k8NWflSYQ5laPzuWtK3bzUKzuOeas8i/",
        aria: "Visit Google Drive to view and download my resume",
        icon: <Resume />,
        label: "Resume",
    },
    {
        href: "mailto:aalston9@gmail.com",
        aria: "Send me an email with this template",
        icon: <Email />,
        label: "Email",
    }
];

const Button = ({ href, aria, icon, label }) => {
    return (
        <span className='button-container'>
            <a className='button' href={href} target='_self' aria-label={aria} rel='noopener noreferrer'>
                <div className='icon'>{icon}</div>
                <span className='icon_title'>{label}</span>
            </a>
        </span>
    );
};

class Buttons extends Component {
    render() {
        return (
            <div>
                {DATA.map((props, i) => (
                    <Button {...props} key={i} />
                ))}
            </div>
        );
    }
}

export default Buttons;
