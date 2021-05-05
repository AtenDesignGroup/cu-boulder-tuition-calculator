import { FcSettings } from "react-icons/fc";

export default {
  name: 'siteSettings',
  type: 'document',
  title: 'Sitewide Settings',
  icon: FcSettings,
  __experimental_actions: ['update', 'publish'],
  liveEdit: false,
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Site Title',
      description: 'This is used in the sitewide footer.'
    },
    {
      title: 'Global SEO (fallback) Settings',
      name: 'seoSettings',
      type: 'seo',
      options: {collapsible: true, collapsed: false},
      validation: Rule => Rule.required()
    }
  ],
  preview: {
    select: {
      title: 'title'
    }
  }
}
