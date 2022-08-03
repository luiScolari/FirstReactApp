import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Button from './Button';

// https://prog.world/checking-children-passed-to-a-mock-react-component/

describe('<Button />', () => {
  it('should render the button with the children element inside', () => {
    render(<Button>a test</Button>);
    const button = screen.getByRole('button', { name: /a test/i });
    expect(button).toBeInTheDocument();
  });

  it('should render the button with the default children value', () => {
    render(<Button></Button>);
    const button = screen.getByRole('button', { name: /sem valor/i });
    expect(button).toBeInTheDocument();
  });

  it('should trigger the function onClick', () => {
    const fn = jest.fn();
    render(<Button onClick={fn}></Button>);
    const button = screen.getByRole('button', { name: /sem valor/i });
    userEvent.click(button);
    expect(fn).toBeCalledTimes(1);
  });
});
