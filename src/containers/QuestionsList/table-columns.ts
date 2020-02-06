export default [
  {
    title: 'Description',
    dataIndex: 'description',
    key: 'description',
    width: '50%',
  },
  {
    title: 'Difficultly',
    key: 'difficultyLevel',
    dataIndex: 'difficultyLevel',
    width: '10%',
  },
  {
    title: 'Categories',
    dataIndex: 'categories',
    key: 'duration',
    width: '30%',
    render: (categories: string[]) => {
      return categories.join(', ');
    },
  },
  {
    title: 'Frequency',
    dataIndex: 'frequency',
    key: 'frequency',
    width: '10%',
  },
];
