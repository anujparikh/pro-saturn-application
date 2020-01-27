export default [
  {
    type: 'upcoming',
    columns: [
      {
        title: 'Cadidate Name',
        dataIndex: 'name',
        width: '25%',
      },
      {
        title: 'Role',
        dataIndex: 'role',
        width: '25%',
      },
      {
        title: 'Time',
        dataIndex: 'dateTime',
        width: '20%',
      },
      {
        title: 'Duration',
        dataIndex: 'duration',
      },
      {
        title: '# Categories',
        dataIndex: 'noOfCategories',
      },
    ],
  },
  {
    type: 'pending',
    columns: [
      {
        title: 'Cadidate Name',
        dataIndex: 'name',
        width: '25%',
      },
      {
        title: 'Role',
        dataIndex: 'role',
        width: '25%',
      },
      {
        title: 'Time',
        dataIndex: 'dateTime',
        width: '20%',
      },
      {
        title: 'Overall Feedback',
        dataIndex: 'feedback',
        width: '30%',
      },
    ],
  },
];
