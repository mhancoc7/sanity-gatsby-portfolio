export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '61b35846fcc1f9333277950a',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-dfgh244q',
                  apiId: '3130004f-6d63-460a-9555-33e19f0f36e2'
                },
                {
                  buildHookId: '61b358462a10a425ee14bf37',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-hds12318',
                  apiId: 'e0af7f20-d034-484c-87a6-9cda67537abc'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/mhancoc7/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-hds12318.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
