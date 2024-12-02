import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const sidebars: SidebarsConfig = {
  packagesSidebar: [
    {
      type: 'category',
      label: 'Packages',
      link: { type: 'doc', id: 'README' },
      items: [
        {
          type: 'autogenerated',
          dirName: '.',
        },
      ],
    },
  ],
};

export default sidebars;