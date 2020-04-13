import { templateDataType } from './dummy';
export default [
  {
    title: 'Actions',
    key: 'actions',
    width: '10%',
  },
  {
    title: 'Title',
    dataIndex: 'title',
    key: 'title',
    width: '15%',
  },
  {
    title: 'Duration',
    dataIndex: 'duration',
    key: 'duration',
    width: '10%',
  },
  {
    title: 'Categories',
    dataIndex: 'categories',
    key: 'categories',
    width: '15%',
    render: (categories: string[]) => {
      return categories.join(', ');
    },
  },
  {
    title: 'Last Update At',
    dataIndex: 'lastUpdateAt',
    key: 'lastUpdateAt',
    sorter: (a: templateDataType, b: templateDataType) =>
      Date.parse(a.lastUpdateAt) - Date.parse(b.lastUpdateAt),
    width: '15%',
  },
  {
    title: '# Interviews',
    dataIndex: 'usedForInterviews',
    key: 'usedForInterviews',
    sorter: (a: templateDataType, b: templateDataType) => a.usedForInterviews - b.usedForInterviews,
    width: '10%',
  },
  {
    title: 'Associated Roles',
    dataIndex: 'associatedRoles',
    key: 'associatedRoles',
    width: '25%',
  },
];
