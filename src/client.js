import sanityClient from '@sanity/client'
import imageURLBuilder from '@sanity/image-url'

export const client = sanityClient({
  projectId: process.env.SANITY_STUDIO_SANITY_PROJECT_ID,
  dataset: 'production',
  apiVerison: '2022-02-01',
  useCdn: 'true',
  token: process.env.SANITY_STUDIO_SANITY_TOKEN,
})

const builder = imageURLBuilder(client)

export const urlFor = (source) => builder.image(source)
