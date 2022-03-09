import { Default } from './Cart.stories';

import { screen, render } from '@testing-library/react';

describe('Card', () => {
  it('should render correctly', () => {
    render(<Default {...Default.args} />);

    expect(screen.getByTestId('product')).toBeInTheDocument();
  });
});
