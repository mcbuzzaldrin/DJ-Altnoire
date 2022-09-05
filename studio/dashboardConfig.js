export default {
  widgets: [
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
                  buildHookId: '63158783ea029409bcf61aee',
                  title: 'Sanity Studio',
                  name: 'dj-altnoire-studio',
                  apiId: 'de2a66c5-e139-4c62-a1ff-7b806e4a1703'
                },
                {
                  buildHookId: '63158783c38f740398439ed7',
                  title: 'Blog Website',
                  name: 'dj-altnoire',
                  apiId: '89079c19-57d1-481b-957f-7df3eb539620'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/mcbuzzaldrin/DJ-Altnoire',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://dj-altnoire.netlify.app', category: 'apps'}
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
