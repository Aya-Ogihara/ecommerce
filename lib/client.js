import sanityClient from '@sanity/client';
import { ImageUrlBuilder } from 'next-sanity-image';

export const client = sanityClient({
  projectId: 'iuns1vjm',
  dataset: 'production',
  apiVersion: '2023-03-11',
  useCdn: true,
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
});

const builder = ImageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
