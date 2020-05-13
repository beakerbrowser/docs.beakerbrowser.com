module.exports = {
  title: 'Beaker Docs',
  url: 'https://beaker-docs.netlify.app',
  baseUrl: '/',
  favicon: 'img/favicon.png',
  themeConfig: {
    navbar: {
      title: 'Beaker Docs',
      logo: {
        alt: 'Beaker Logo',
        src: 'img/logo.svg',
        srcDark: 'img/logo-white.svg'
      },
      links: [
        {
          href: 'https://beakerbrowser.com/install/',
          label: 'Install',
          position: 'left',
        },
        {
          href: 'https://beaker.dev/docs/templates/',
          label: 'Templates',
          position: 'left',
        },
        {
          href: 'https://beaker.dev/docs/tutorials/',
          label: 'Tutorials',
          position: 'left',
        },
        {
          href: 'https://github.com/beakerbrowser/beaker/discussions',
          label: 'Ask Questions',
          position: 'left',
        },
      ],
    },
  },
  plugins: ['docusaurus-lunr-search'],
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/frabrunelle/beaker-docs/edit/master/',
          routeBasePath: '/'
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
