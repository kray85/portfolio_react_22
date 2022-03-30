import sanityClient from '@sanity/client'
import imageURLBuilder from '@sanity/image-url'

export const client = sanityClient({
  projectId: "41kprfol",
  dataset: 'production',
  apiVerison: '2022-03-01',
  useCdn: 'true',
  token: "skeFR8wwJYRV3QdLMwLb9cFgieuXV7ufdgjbajHdfYo47o7WFCHvEdcNnSutDr0nvBuNPrNBxbAi2TOudVK2xpvl3WShExB9zPqRhxjt5z7ek",
})

const builder = imageURLBuilder(client)

export const urlFor = (source) => builder.image(source)
