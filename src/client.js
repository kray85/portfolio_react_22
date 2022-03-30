import sanityClient from '@sanity/client'
import imageURLBuilder from '@sanity/image-url'

export const client = sanityClient({
  projectId: '41kprfol',
  dataset: 'production',
  apiVerison: '2022-03-01',
  useCdn: 'true',
  token: 'sk0nLteB4uGrhzxW151EkPUtqku2ZA7dVa1Xdfi6agC1gNKWa5EVfLXRWkAncT8Cyv4nSRFByW1tNMbV4MCixPGVoauhS8Tg8AXZnFdfhuKzXmkgkgh1UFDHWE7KOWivBYaFmJCeTlFU2WxDCYbtiGDArqb29lHMtOjUmmUZmLw4FuIFN3Yp',
})

const builder = imageURLBuilder(client)

export const urlFor = (source) => builder.image(source)
