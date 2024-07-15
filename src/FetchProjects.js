import client from './SanityClient'

export const fetchProjects = async () => {
  const query = '*[_type == "project"]{title, imgSrc, altText, description, links}'
  return await client.fetch(query)
}
