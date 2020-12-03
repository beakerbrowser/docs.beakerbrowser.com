module.exports = {
  title: 'Beaker Docs',
  url: 'https://docs.beakerbrowser.com',
  baseUrl: '/',
  favicon: 'img/favicon.png',
  themeConfig: {
    image: 'img/twitter-card.png',
    navbar: {
      title: 'Beaker Docs',
      logo: {
        alt: 'Beaker Logo',
        src: 'img/logo.svg',
        srcDark: 'img/logo-white.svg'
      },
      items: [
        {
          href: 'https://beakerbrowser.com/install/',
          label: 'Install',
          position: 'left',
          target: '_self',
        },
        {
          href: 'https://github.com/beakerbrowser/beaker/discussions',
          label: 'Ask Questions',
          position: 'left',
        },
      ],
    },
    algolia: {
      apiKey: '8e801593bf85623c9a64dfd9470d06ab',
      indexName: 'beakerbrowser'
    }
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/beakerbrowser/docs.beakerbrowser.com/edit/master/',
          routeBasePath: '/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
