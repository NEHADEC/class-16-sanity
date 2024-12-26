// // sanity/pet.ts
// export default {
//     name: 'blog',
//     type: 'document',
//     title: 'Blog',
//     fields: [
//         {
//             name: 'name',
//             type: 'string',
//             title: 'Name'
//         },
       
//     ]
// }

export default {
    name: 'blog',
    type: 'document',
    title: 'Blog',
    fields: [
      {
        name: 'name',
        type: 'string',
        title: 'Name'
      },
      {
        name: 'description',
        type: 'string',
        title: 'Description'
      },
      {
        name: 'price',
        type: 'number',
        title: 'Price'
      },
      {
        name: 'image',
        type: 'image',
        title: 'Image',
        options: {
          hotspot: true, // Allow cropping in Sanity Studio
        }
      },
      {
        name: 'category',
        type: 'string',
        title: 'Category'
      }
    ]
  };
  