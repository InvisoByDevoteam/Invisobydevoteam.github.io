 
/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Inviso Alteryx Documetation',
  tagline: 'Alteryx rules the world!',
  url: 'https://invisobydevoteam.github.io',
  baseUrl: '/build/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.png',
  organizationName: 'invisobydevoteam', // Usually your GitHub org/user name.
  projectName: 'portal.github.io', // Usually your repo name.
  themeConfig: {
    
      algolia: {
      apiKey: 'YOUR_API_KEY',
      indexName: 'YOUR_INDEX_NAME',

      // Optional: see doc section below
      contextualSearch: true,

      // Optional: see doc section below
      appId: 'YOUR_APP_ID',

      // Optional: Algolia search parameters
      searchParameters: {},

      //... other Algolia params
    },
      
      
      navbar: {
      title: 'Documentation',
      logo: {
        alt: 'My Site Logo',
        src: 'img/Inviso_Logo.png',
      },
      items: [
        {
          type: 'doc',
          docId: 'intro',
          position: 'left',
          label: 'Alteryx',
        },
          {
          type: 'doc',
          docId: 'intro',
          position: 'left',
          label: 'Sales',
        docsPluginId: 'sales',
        },
        /**{to: '/blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/carleneoestergaard/inviso-alteryx',
          label: 'GitHub',
          position: 'right',
        },*/
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Designer',
              to: '/docs/intro',
            },
          ],
        },
        /** This is where links can go on the bottom
        
        
        {
          title: 'Communityf',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/docusaurus',
            },
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/docusaurus',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/docusaurus',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: '/blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/facebook/docusaurus',
            },
          ],
        },*/
      ],
      
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
    plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'sales',
        path: 'sales',
        routeBasePath: 'sales',
        sidebarPath: require.resolve('./sidebarsSales.js'),
        // ... other options
      },
    ],
  ],
};
