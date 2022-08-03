import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Task from './Task';

const taskMock = {
  title: 'title1',
  id: 1,
};

describe('<Task />', () => {
  it('should render a task', () => {
    render(<Task task={taskMock} />);
    expect(screen.getByText('title1')).toBeInTheDocument();
  });

  it('should call the "handleTaskClick" and "handleTaskDeletion" functions', () => {
    const fn = jest.fn();
    render(<Task task={taskMock} handleTaskClick={fn} handleTaskDeletion={fn} />);
    userEvent.click(screen.getByText('title1'));
    const buttons = screen.getAllByRole('button');
    userEvent.click(buttons[0].firstChild);
    expect(fn).toBeCalledTimes(2);
    expect(buttons[1].firstChild).toBeInTheDocument();
  });
});
