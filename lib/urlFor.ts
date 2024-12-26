import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

const client = createClient({
  projectId: 'a862cgyn', // Replace with your Sanity project ID
  dataset: 'production',       // Replace with your dataset name
  apiVersion: 'v2024-12-25',    // Use your API version
  useCdn: true,
});

const builder = imageUrlBuilder(client);

export function urlFor(source: any) {
  return builder.image(source);
}
