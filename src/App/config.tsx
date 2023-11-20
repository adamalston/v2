import { Config } from 'types';
import { Email, GitHub, LinkedIn, Resume } from 'icons';

export const config: Config = {
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
      name: 'github',
      display: 'GitHub',
      aria: 'Visit my GitHub profile',
      icon: <GitHub />,
      href: 'https://github.com/adamalston/',
    },
    {
      name: 'linked-in',
      display: 'LinkedIn',
      aria: 'Visit my LinkedIn profile',
      icon: <LinkedIn />,
      href: 'https://www.linkedin.com/in/adam-alston/',
    },
    {
      name: 'resume',
      display: 'Resume',
      aria: 'View my resume in Google Drive',
      icon: <Resume />,
      href: 'https://drive.google.com/file/d/1VQ_Oeim_e92QEMi64ejGWY5Hf4RRxfeJ/view',
    },
    {
      name: 'email',
      display: 'Email',
      aria: 'Send me an email',
      icon: <Email />,
      href: 'mailto:aalston9@gmail.com',
    },
  ],
};
