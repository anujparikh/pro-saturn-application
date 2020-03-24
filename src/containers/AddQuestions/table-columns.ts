export default [
  {
    title: 'Title',
    dataIndex: 'title',
    key: 'title',
    width: '15%',
  },
  {
    title: 'Description',
    dataIndex: 'description',
    key: 'description',
    width: '40%',
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
    width: '25%',
    render: (categories: string[]) => {
      return categories.join(', ');
    },
  },
];
