import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import AddTask from './AddTask';

describe('<AddTask />', () => {
  it('should render the AddTask input', () => {
    render(<AddTask />);
    const input = screen.getByPlaceholderText(/write your task/i);
    expect(input).toBeInTheDocument();
  });

  it('should display what was writen on the input', () => {
    render(<AddTask />);
    const input = screen.getByPlaceholderText(/write your task/i);
    userEvent.type(input, 'a test input');
    expect(input).toHaveValue('a test input');
  });

  it('should trigger the AddTask buton', () => {
    const fn = jest.fn();
    render(<AddTask handleTaskAddition={fn} />);
    const button = screen.getByRole('button', { name: /adicionar/i });
    userEvent.click(button);
    expect(fn).toBeCalledTimes(1);
  });
});
