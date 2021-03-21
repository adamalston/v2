import React from 'react';
import { GitHub, LinkedIn, Resume, Email } from './../icons';

export const Buttons = () => {
  const DATA = [
    {
      href: 'https://github.com/adamalston/',
      aria: 'Visit my GitHub profile',
      icon: <GitHub />,
      label: 'Github',
    },
    {
      href: 'https://www.linkedin.com/in/adam-alston/',
      aria: 'Visit my LinkedIn profile',
      icon: <LinkedIn />,
      label: 'LinkedIn',
    },
    {
      href: 'https://drive.google.com/drive/folders/10k8NWflSYQ5laPzuWtK3bzUKzuOeas8i/',
      aria: 'Visit Google Drive to view and download my resume',
      icon: <Resume />,
      label: 'Resume',
    },
    {
      href: 'mailto:aalston9@gmail.com',
      aria: 'Send me an email with this template',
      icon: <Email />,
      label: 'Email',
    },
  ];

  return (
    <div>
      {DATA.map(({ href, aria, icon, label }, i) => (
        <span className='button-container' key={i}>
          <a className='button' href={href} target='_self' aria-label={aria} rel='noopener noreferrer'>
            <div className='icon'>{icon}</div>
            <span className='icon_title'>{label}</span>
          </a>
        </span>
      ))}
    </div>
  );
};
