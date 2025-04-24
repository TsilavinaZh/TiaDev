import { Topic } from '@/types/course';
import { COLORS } from '@/constants/Colors';

export const topics: Topic[] = [
  {
    id: 'python',
    title: 'Python',
    description: 'Learn Python programming from the ground up',
    icon: 'terminal',
    color: '#3776AB',
  },
  {
    id: 'javascript',
    title: 'JavaScript',
    description: 'Learn the fundamentals of JavaScript programming',
    icon: 'code',
    color: COLORS.primary,
  },
  {
    id: 'dsa',
    title: 'Data Structures',
    description: 'Learn essential data structures for efficient programming',
    icon: 'folder-tree',
    color: COLORS.accent,
  },
  {
    id: 'react',
    title: 'React',
    description: 'Build user interfaces with the React library',
    icon: 'atom',
    color: '#61DAFB',
  },
  {
    id: 'algorithms',
    title: 'Algorithms',
    description: 'Master common algorithms and problem-solving techniques',
    icon: 'brain-circuit',
    color: COLORS.secondary,
  },
];
