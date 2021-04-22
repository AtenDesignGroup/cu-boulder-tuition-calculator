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
                // {
                //   buildHookId: '604f4f9b64e222b1128efe36',
                //   title: 'Sanity Studio',
                //   name: 'sanity-gatsby-base-site-screencast-demo-studio',
                //   apiId: '4a1d8367-6613-4e4f-8dc4-8795be819271'
                // },
                {
                  buildHookId: '6079d02d809b1749b6a87376',
                  title: 'Website',
                  name: 'cu-boulder-tuition-calculator',
                  apiId: '8fed8594-8808-42d4-991d-157a75246a0b'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/AtenDesignGroup/cu-boulder-tuition-calculator',
            category: 'Code'
          },
          {title: 'Website', value: 'https://cu-boulder-tuition-calculator.netlify.app/', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent questions', order: '_createdAt desc', types: ['question']},
      layout: {width: 'medium'}
    }
  ]
}
