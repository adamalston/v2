import React from 'react';
import { Config } from './types';
import { GitHub, LinkedIn, Resume, Email } from 'icons';

const config: Config = {
  name: {
    display: 'Adam Alston',
    aria: 'My name is Adam Alston',
  },
  title: {
    display: 'Software Engineer',
    aria: 'I am a software engineer',
  },
  buttons: [
    {
      display: 'GitHub',
      aria: 'Visit my GitHub profile',
      icon: <GitHub />,
      href: 'https://github.com/adamalston/',
    },
    {
      display: 'LinkedIn',
      aria: 'Visit my LinkedIn profile',
      icon: <LinkedIn />,
      href: 'https://www.linkedin.com/in/adam-alston/',
    },
    {
      display: 'Resume',
      aria: 'View my resume in Google Drive',
      icon: <Resume />,
      href: 'https://drive.google.com/drive/folders/10k8NWflSYQ5laPzuWtK3bzUKzuOeas8i/',
    },
    {
      display: 'Email',
      aria: 'Send me an email',
      icon: <Email />,
      href: 'mailto:aalston9@gmail.com',
    },
  ],
};

export default config;
