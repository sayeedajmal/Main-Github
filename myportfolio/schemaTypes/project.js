export default {
    name: 'project',
    title: 'Project',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Title',
        type: 'string',
      },
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
        type: 'array',
        of: [{ type: 'string' }],
      },
      {
        name: 'links',
        title: 'Links',
        type: 'array',
        of: [
          {
            type: 'object',
            fields: [
              { name: 'href', title: 'URL', type: 'url' },
              { name: 'text', title: 'Text', type: 'string' },
            ],
          },
        ],
      },
    ],
  }
  