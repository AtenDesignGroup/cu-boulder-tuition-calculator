export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
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
    {name: 'project-users', layout: {width: 'medium'}},
    // {
    //   name: 'document-list',
    //   options: {title: 'Recent Questions', order: '_createdAt desc', types: ['question']},
    //   layout: {width: 'medium'}
    // }
  ]
}
