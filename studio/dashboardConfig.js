export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gridsome-blog'
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
                  buildHookId: '631b2094eb3e322db18ab35c',
                  title: 'Sanity Studio',
                  name: 'sanity-gridsome-blog-studio-4f7azv82',
                  apiId: 'ba388845-0b80-43c2-a526-7e9d1c6a9805'
                },
                {
                  buildHookId: '631b2095fffa572cc6998ad9',
                  title: 'Blog Website',
                  name: 'sanity-gridsome-blog-web-nm7ut3sp',
                  apiId: '5c57b929-109c-4224-8746-27fcb43b785e'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/jibrilmohamod/sanity-gridsome-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gridsome-blog-web-nm7ut3sp.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
