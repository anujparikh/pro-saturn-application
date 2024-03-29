export default [
  {
    title: 'Title',
    dataIndex: 'title',
    key: 'title',
    width: '15%',
  },
  {
    title: 'Question',
    dataIndex: 'question',
    key: 'question',
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
  {
    title: 'Frequency',
    dataIndex: 'frequency',
    key: 'frequency',
    width: '10%',
  },
];
