import sanityClient from '@sanity/client'
import sanityImage from '@sanity/image-url'

const options = {
  // Find your project ID and dataset in `sanity.json` in your studio project
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  apiVersion: 'v1',
  token: '',
  useCdn: true,
  // useCdn: process.env.NODE_ENV === 'production'
  // useCdn == true gives fast, cheap responses using a globally distributed cache.
  // Set this to false if your application require the freshest possible
  // data always (potentially slightly slower and a bit more expensive).
}

const client = sanityClient(options)

export const imageBuilder = sanityImage(client)

export const previewClient = sanityClient({
  ...options,
  useCdn: true,
  // useCdn: false,
  apiVersion: 'v1',
  token: ''
})

export default client
