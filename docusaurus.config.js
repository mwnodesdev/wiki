// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'База Знаний MWNODES',
  tagline: 'Расскажем и покажем как сделать на MWNODES',
  favicon: 'https://cdn.mwnodes.xyz/files/856VS6.png',

  // Set the production url of your site here
  url: 'https://wiki.mwnodes.xyz',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'MWNODES', // Usually your GitHub org/user name.
  projectName: 'wiki', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'ru',
    locales: ['ru'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/mwnodesdev/wiki/edit/main/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
colorMode: {
      defaultMode: 'dark', // По умолчанию светлая тема
      disableSwitch: false, // Включить переключатель темы
      respectPrefersColorScheme: true, // Использовать системные настройки пользователя
    },
      // Replace with your project's social card
      image: 'https://cdn.mwnodes.xyz/files/856VS6.png',
      navbar: {
        title: 'База Знаний MWNODES',
        logo: {
          alt: 'MWNODES',
          src: 'https://cdn.mwnodes.xyz/files/856VS6.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'База знаний',
          },
          {
            href: 'https://github.com/mwnodesdev/wiki',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
        ],
        copyright: `Copyright © ${new Date().getFullYear()} MWNODES`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
