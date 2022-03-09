import { Default } from './Users.stories';
import { render, screen } from '@testing-library/react';
import { USER_QTY } from './Users.contants';

describe('features/Users', () => {
  it(`should render ${USER_QTY} users`, () => {
    render(<Default {...Default.args} />);

    expect(screen.getAllByTestId('user')).toHaveLength(USER_QTY);
  });
});
