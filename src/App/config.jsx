import { GitHub, LinkedIn, Resume, Email } from 'icons';

const config = {
  name: {
    text: 'Adam Alston',
    aria: 'My name is Adam Alston',
  },
  title: {
    text: 'Software Engineer',
    aria: 'I am a software engineer',
  },
  buttons: [
    {
      href: 'https://github.com/adamalston/',
      aria: 'Visit my GitHub profile',
      icon: <GitHub />,
      label: 'GitHub',
    },
    {
      href: 'https://www.linkedin.com/in/adam-alston/',
      aria: 'Visit my LinkedIn profile',
      icon: <LinkedIn />,
      label: 'LinkedIn',
    },
    {
      href: 'https://drive.google.com/drive/folders/10k8NWflSYQ5laPzuWtK3bzUKzuOeas8i/',
      aria: 'View my resume in Google Drive',
      icon: <Resume />,
      label: 'Resume',
    },
    {
      href: 'mailto:aalston9@gmail.com',
      aria: 'Send me an email',
      icon: <Email />,
      label: 'Email',
    },
  ],
};

export default config;
