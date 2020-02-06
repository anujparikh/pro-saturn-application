export const roleTypes = ['Software Engineer', 'Tech Lead', 'QA', 'Senior Software Engineer'];
export const categories = [
  { name: 'Full Stack', no: 10 },
  { name: 'DevOps', no: 15 },
  { name: 'Backend', no: 13 },
  { name: 'Frontend', no: 20 },
  { name: 'React', no: 21 },
  { name: 'Angular', no: 5 },
  { name: 'Javascript', no: 80 },
  { name: 'AWS', no: 25 },
  { name: 'Leadership', no: 10 },
  { name: 'Testing', no: 15 },
  { name: 'Microservices', no: 10 },
  { name: 'Architechure', no: 10 },
  { name: 'UX', no: 10 },
  { name: 'Java', no: 10 },
  { name: 'Springboot', no: 10 },
  { name: 'Selenium', no: 10 },
  { name: 'Databases', no: 10 },
  { name: 'Kafka', no: 10 },
  { name: 'Algorithms', no: 10 },
  { name: 'Datastructures', no: 10 },
];

export type questionTypes = {
  description: string;
  difficultyLevel: string;
  categories: string[];
  frequency: number;
};

export const questionsData = [
  {
    id: 1,
    description:
      'What are the various operations that can be performed on different Data Structures?',
    categories: ['Datastructures', 'Algorithms'],
    difficultyLevel: 'easy',
    frequency: 8,
  },
  {
    id: 2,
    description: 'How is an Array different from Linked List?',
    categories: ['Datastructures', 'Algorithms'],
    difficultyLevel: 'easy',
    frequency: 8,
  },
  {
    id: 3,
    description: 'What is Stack and where it can be used?',
    categories: ['Datastructures', 'Algorithms'],
    difficultyLevel: 'medium',
    frequency: 8,
  },
  {
    id: 4,
    description:
      'What is a Queue, how it is different from stack and how is it implemented? Can we do the Queue implementation with Java?',
    categories: ['Datastructures', 'Algorithms'],
    difficultyLevel: 'easy',
    frequency: 8,
  },
  {
    id: 5,
    description: 'Which data structures are used for BFS and DFS of a graph?',
    categories: ['Datastructures', 'Algorithms'],
    difficultyLevel: 'medium',
    frequency: 8,
  },
  {
    id: 6,
    description: 'Difference between Real DOM and Virtual DOM?',
    categories: ['React', 'Javascript'],
    difficultyLevel: 'hard',
    frequency: 8,
  },
  {
    id: 7,
    description: 'What are latest feature of React?',
    categories: ['React', 'Javascript'],
    difficultyLevel: 'easy',
    frequency: 8,
  },
  {
    id: 8,
    description: 'How is React different from Angular?',
    categories: ['Angular', 'Javascript', 'Frontend'],
    frequency: 8,
    difficultyLevel: 'hard',
  },
  {
    id: 9,
    description: 'What do you understand from “In React, everything is a component"?',
    categories: ['React', 'Javascript'],
    difficultyLevel: 'medium',
    frequency: 8,
  },
  {
    id: 10,
    description: 'Differentiate between stateful and stateless components?',
    categories: ['Javascript'],
    difficultyLevel: 'hard',
    frequency: 8,
  },
  {
    id: 11,
    description:
      'What is the difference between “==” and “equals(…)” in comparing Java String objects?',
    categories: ['Java'],
    difficultyLevel: 'easy',
    frequency: 8,
  },
  {
    id: 12,
    description: 'Can you explain how Strings are interned in Java?',
    categories: ['Java'],
    difficultyLevel: 'medium',
    frequency: 8,
  },
  {
    id: 13,
    description:
      'Can you describe what the following code does and what parts of memory the local variables, objects, and references to the objects occupy in Java?',
    categories: ['Java'],
    difficultyLevel: 'hard',
    frequency: 8,
  },
  {
    id: 14,
    description: 'Are overriding & polymorphism applicable to static methods as well?',
    categories: ['Java'],
    difficultyLevel: 'hard',
    frequency: 8,
  },
  {
    id: 15,
    description: 'Explain static vs. dynamic class loading?',
    categories: ['Java'],
    difficultyLevel: 'medium',
    frequency: 8,
  },
  {
    id: 16,
    description:
      'What is the difference between “==” and “equals(…)” in comparing Java String objects?',
    categories: ['Java'],
    difficultyLevel: 'easy',
    frequency: 8,
  },
  {
    id: 17,
    description: 'Can you explain how Strings are interned in Java?',
    categories: ['Java'],
    difficultyLevel: 'hard',
    frequency: 8,
  },
  {
    id: 18,
    description:
      'Can you describe what the following code does and what parts of memory the local variables, objects, and references to the objects occupy in Java?',
    categories: ['Java'],
    difficultyLevel: 'easy',
    frequency: 8,
  },
  {
    id: 19,
    description: 'Are overriding & polymorphism applicable to static methods as well?',
    categories: ['Java'],
    difficultyLevel: 'hard',
    frequency: 8,
  },
  {
    id: 20,
    description: 'Explain static vs. dynamic class loading?',
    categories: ['Java'],
    difficultyLevel: 'hard',
    frequency: 8,
  },
];
