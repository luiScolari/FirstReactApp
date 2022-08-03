import { render, screen } from '@testing-library/react';
import Header from './Header';
describe('<Header />', () => {
  it('should be in the screen', () => {
    render(<Header />);
    expect(screen.getByRole('heading', { name: /minhas tarefas/i })).toBeInTheDocument();
  });
});
