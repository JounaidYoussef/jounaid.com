import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Blog',
      href: getBlogPermalink(),
      // links: [
      //   {
      //     text: 'Blog List',
      //     href: getBlogPermalink(),
      //   },
      //   {
      //     text: 'Article',
      //     href: getPermalink('get-started-website-with-astro-tailwind-css', 'post'),
      //   },
      //   {
      //     text: 'Article (with MDX)',
      //     href: getPermalink('markdown-elements-demo-post', 'post'),
      //   },
      //   {
      //     text: 'Category Page',
      //     href: getPermalink('tutorials', 'category'),
      //   },
      //   {
      //     text: 'Tag Page',
      //     href: getPermalink('astro', 'tag'),
      //   },
      // ],
    },
    {
      text: 'Projects',
      href: getPermalink('/projects'),
    },
    {
      text: 'About',
      href: getPermalink('/about'),
    },
    {
      text: 'Resume',
      href: getPermalink('/resume'),
    },
    {
      text: 'Services',
      href: getPermalink('/services'),
    },
  ],
  actions: [{ text: 'Get In Touch', href: getPermalink('/contact') }],
};

export const footerData = {
  links: [],
  secondaryLinks: [],
  socialLinks: [
    { ariaLabel: 'X', icon: 'tabler:brand-x', href: 'https://x.com/JounaidYoussef' },
    { ariaLabel: 'Unsplash', icon: 'tabler:brand-unsplash', href: 'https://unsplash.com/fr/@jounaidyoussef' },
    { ariaLabel: 'LinkedIn', icon: 'tabler:brand-linkedin', href: 'https://www.linkedin.com/in/jounaidyoussef/' },
    // { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: '#' },
    { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/JounaidYoussef' },
  ],
  footNote: `
    Copyright © 2024 · All rights reserved.
  `,
};
