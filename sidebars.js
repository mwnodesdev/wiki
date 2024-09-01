/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  tutorialSidebar: [
  {
      type: 'doc',
      id: 'intro',
  },
  {
    type: 'doc',
    id: 'terminy',
  },
  {
    type: 'category',
    label: '💵 Биллинг',
    items: [
      {
        type: 'doc',
        id: 'billing/topup',
      },
      {
        type: 'doc',
        id: 'billing/createserver',
      },
      {
        type: 'doc',
        id: 'billing/subdomain',
      },
      
    ],
  },
  {
    type: 'category',
    label: '⚡ VDS',
    items: [
      {
        type: 'doc',
        id: 'vds/faq',
      },
      {
        type: 'doc',
        id: 'vds/buyvds',
      },
      {
        type: 'doc',
        id: 'vds/vdspanel',
      },
      
    ],
  },
  ],
};

export default sidebars;
