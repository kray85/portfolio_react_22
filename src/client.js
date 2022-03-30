import sanityClient from '@sanity/client'
import imageURLBuilder from '@sanity/image-url'

export const client = sanityClient({
  projectId: process.env.REACT_APP__SANITY_PROJECT_ID,
  dataset: 'production',
  apiVerison: '2022-03-01',
  useCdn: 'true',
  token: process.env.REACT_APP__SANITY_TOKEN,
})

const builder = imageURLBuilder(client)

export const urlFor = (source) => builder.image(source)
