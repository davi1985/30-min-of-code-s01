import { Default } from './Products.stories';
import { render, screen } from '@testing-library/react';
import { PRODUCT_QTY } from './Products.constants';

describe('features/Products', () => {
  it(`should render ${PRODUCT_QTY} products`, () => {
    render(<Default {...Default.args} />);

    expect(screen.getAllByTestId('product')).toHaveLength(PRODUCT_QTY);
  });
});
