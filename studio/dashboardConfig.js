export default {
  widgets: [
    // {
    //   name: 'sanity-tutorials',
    //   options: {
    //     templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
    //   }
    // },
    { name: 'structure-menu' },
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
                  buildHookId: '6266da5ba616b70519c9460d',
                  title: 'Sanity Studio',
                  name: 'nextjs-landing-pages-studio-qpyffyrw',
                  apiId: 'c1231933-b9cc-4678-ac70-8f4d75a2498e'
                },
                {
                  buildHookId: '6266da5ba64e410868a382ce',
                  title: 'Landing pages Website',
                  name: 'nextjs-landing-pages-web-bk2pf1am',
                  apiId: '4fbfc53f-2ed8-407a-8914-3e399268d2d1'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/jschmucke/nextjs-landing-pages',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://nextjs-landing-pages-web-bk2pf1am.netlify.app', category: 'apps' }
        ]
      }
    },
    {
      name: 'document-list',
      options: { title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page'] },
      layout: { width: 'medium' }
    },
    { name: 'project-users', layout: { height: 'auto' } }
  ]
}
