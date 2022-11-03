import { createClient } from '@prismicio/client';

export function getPrismicClient(req){
  const prismic = createClient(process.env.PRISMIC_ENDPOUNT,{
    req,
    accessToken: process.env.PRISMIC_ACCESS_TOKEN
  })

  return prismic;
}