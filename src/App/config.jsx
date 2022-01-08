import { GitHub, LinkedIn, Resume, Email } from './../icons';

const config = {
  info: {
    name: 'Adam Alston',
    title: 'Software Engineer',
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
  ],
};

export default config;
