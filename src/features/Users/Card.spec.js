import { render, screen } from '@testing-library/react';

import { Default } from './Card.stories';

describe('Card component', () => {
  it('should render correctly', () => {
    render(<Default {...Default.args} />);

    expect(screen.getByTestId('user')).toBeInTheDocument();
  });
});
