// schemas/pet.ts
export default {
  name: 'pet',
  type: 'document',
	title: 'Pet',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name'
    },
    {
        name: 'gender',
        type: 'string',
        title: 'Gender'
    },
    {
        name: 'weight',
        type: 'number',
        title: 'Weight'
    }
  ]
}