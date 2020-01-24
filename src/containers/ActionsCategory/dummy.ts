export default [
  {
    type: 'upcoming',
    title: 'Upcoming Interviews',
    columns: [
      {
        title: 'Cadidate Name',
        dataIndex: 'name',
      },
      {
        title: 'Role',
        dataIndex: 'role',
      },
      {
        title: 'Date - Time',
        dataIndex: 'dateTime',
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
    data: [
      {
        key: '1',
        name: 'Anuj Parikh',
        role: 'Software Engineer',
        dateTime: '15 Jan - 01:00 PM',
        duration: '1hr',
        noOfCategories: 3,
      },
      {
        key: '2',
        name: 'Palak Parikh',
        role: 'Senior Software Engineer',
        dateTime: '15 Jan - 09:00 AM',
        duration: '1.5hr',
        noOfCategories: 5,
      },
      {
        key: '3',
        name: 'Arya Parikh',
        role: 'Engineering Manager',
        dateTime: '15 Jan - 03:00 PM',
        duration: '1hr',
        noOfCategories: 4,
      },
      {
        key: '4',
        name: 'Anuj Parikh',
        role: 'Software Engineer',
        dateTime: '15 Jan - 01:00 PM',
        duration: '1hr',
        noOfCategories: 3,
      },
      {
        key: '5',
        name: 'Palak Parikh',
        role: 'Senior Software Engineer',
        dateTime: '16 Jan - 09:00 AM',
        duration: '1.5hr',
        noOfCategories: 5,
      },
    ],
  },
  {
    type: 'pending',
    title: 'Pending Feedback',
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
        title: 'Date - Time',
        dataIndex: 'dateTime',
        width: '25%',
      },
      {
        title: 'Overall Feedback',
        dataIndex: 'feedback',
        width: '25%',
      },
    ],
    data: [
      {
        key: '1',
        name: 'Anuj Parikh',
        role: 'Software Engineer',
        dateTime: '15 Jan - 01:00 PM',
        feedback: true,
      },
      {
        key: '2',
        name: 'Palak Parikh',
        role: 'Senior Software Engineer',
        dateTime: '15 Jan - 09:00 AM',
        feedback: false,
      },
      {
        key: '3',
        name: 'Arya Parikh',
        role: 'Engineering Manager',
        dateTime: '15 Jan - 03:00 PM',
        feedback: true,
      },
      {
        key: '4',
        name: 'Palak Parikh',
        role: 'Senior Software Engineer',
        dateTime: '15 Jan - 09:00 AM',
        feedback: false,
      },
      {
        key: '5',
        name: 'Arya Parikh',
        role: 'Engineering Manager',
        dateTime: '15 Jan - 03:00 PM',
        feedback: true,
      },
    ],
  },
];
