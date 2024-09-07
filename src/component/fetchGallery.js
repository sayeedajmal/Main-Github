import client from '../SanityClient'

export const fetchGallery = async () => {
    const query = '*[_type == "gallery"]{_id, imgSrc, altText, description}'
    return await client.fetch(query)
}
