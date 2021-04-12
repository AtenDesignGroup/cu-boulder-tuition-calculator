import client, { previewClient } from '@/lib/sanity'

const getClient = (preview) => (preview ? previewClient : client)

export async function getSiteSettings() {
  const results = await getClient()
    .fetch(` *[_id == "siteSettings"] {
      ...
    }[0]`)
  return results
}