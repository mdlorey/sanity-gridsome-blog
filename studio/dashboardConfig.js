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
                  buildHookId: '5eea5bf82e863001e6955f84',
                  title: 'Sanity Studio',
                  name: 'sanity-gridsome-blog-studio-ap2x8573',
                  apiId: 'a05fb444-9641-453e-b9c2-cafdf44c68d1'
                },
                {
                  buildHookId: '5eea5bf94e537d023c569aeb',
                  title: 'Blog Website',
                  name: 'sanity-gridsome-blog-web-nv722uh4',
                  apiId: '0810603b-0f48-43ae-98fe-522899bb8cac'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/mdlorey/sanity-gridsome-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gridsome-blog-web-nv722uh4.netlify.app', category: 'apps'}
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
