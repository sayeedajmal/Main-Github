export default {
    name: 'gallery',
    title: 'gallery',
    type: 'document',
    fields: [

        {
            name: 'imgSrc',
            title: 'Image Source',
            type: 'image',
            options: {
                hotspot: true,
            },
        },
        {
            name: 'altText',
            title: 'Alt Text',
            type: 'string',
        },
        {
            name: 'description',
            title: 'Description',
            type: 'string',
        }
    ],
}
