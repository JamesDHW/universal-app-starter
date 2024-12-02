import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const GITHUB_REPO = 'https://github.com/JamesDHW/universal-app-starter/';

const config: Config = {
  title: 'Universal App Docs',
  tagline: 'One Codebase to Rule Them All!',
  favicon: 'img/universal-app-icon.png',

  url: 'https://jamesdhw.github.io',
  baseUrl: '/universal-app-starter/',

  projectName: 'docs', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'throw',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: false, // Disable the default docs plugin
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    navbar: {
      title: 'Home',
      logo: {
        alt: 'My Site Logo',
        src: 'img/universal-app-icon.png',
      },
      items: [
        {
          label: 'Docs',
          to: '/docs/',
        },
        {
          label: 'Apps',
          to: '/apps/',
        },
        {
          label: 'Packages',
          to: '/packages/',
        },
        {
          href: 'https://github.com/JamesDHW/universal-app-starter',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },

    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Main',
              to: '/docs',
            },
            {
              label: 'Apps',
              to: '/apps',
            },
            {
              label: 'Packages',
              to: '/packages',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: GITHUB_REPO,
            },
          ],
        },
      ],
      copyright: `James Haworth Wheatman (${new Date().getFullYear()})`,
    },

    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,

  plugins: [
    [
      '@easyops-cn/docusaurus-search-local',
      {
        hashed: true,
        indexDocs: true,
        indexPages: false,
        docsRouteBasePath: ['/docs', '/apps', '/packages'],
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'default',
        path: 'docs',
        routeBasePath: '/docs',
        include: ['**/*.md'],
        sidebarPath: './sidebars/docs.ts',
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'appsDocs',
        path: '../apps',
        routeBasePath: '/apps',
        include: ['**/docs.md', '**/README.md'],
        exclude: ['**/node_modules/**'],
        sidebarPath: './sidebars/apps.ts',
      },
    ],

    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'packagesDocs',
        path: '../packages',
        routeBasePath: '/packages',
        include: ['**/docs.md', '**/README.md'],
        exclude: ['**/node_modules/**'],
        sidebarPath: './sidebars/packages.ts',
      },
    ],
  ],
};

export default config;
