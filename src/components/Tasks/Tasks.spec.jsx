import { render, screen } from '@testing-library/react';
import Tasks from './Tasks';

const tasksMock = [
  {
    title: 'title1',
    id: 1,
  },
  {
    title: 'title2',
    id: 2,
  },
  {
    title: 'title3',
    id: 3,
  },
];

describe('<Tasks />', () => {
  it('should loop and return a task correctly', () => {
    render(<Tasks tasks={tasksMock} />);
    expect(screen.getAllByText(/title/i)).toHaveLength(3);
  });
});
