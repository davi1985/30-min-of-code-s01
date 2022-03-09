import { Default } from './Users.stories';
import { render, screen } from '@testing-library/react';
import { USER_QTY } from './Users.contants';

describe('features/Products', () => {
  it(`should render ${USER_QTY} products`, () => {
    render(<Default {...Default.args} />);

    expect(screen.getAllByTestId('product')).toHaveLength(USER_QTY);
  });
});
