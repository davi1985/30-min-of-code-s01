import {
  CustomMessage,
  Blue,
  Red,
  Orange,
  Green,
  Default,
  Unknown,
} from './Spinner.stories';

import { render, screen } from '@testing-library/react';
import { customColors } from './Spinner';

describe('Components Spinner', () => {
  it('should render a spinnner with default state', () => {
    render(<Default />);

    expect(screen.getByText(/loading.../i)).toBeInTheDocument();
  });

  it('should render a spinner with custom message', () => {
    render(<CustomMessage {...CustomMessage.args} />);

    expect(screen.getByText(/please wait.../i)).toBeInTheDocument();
  });

  describe('Variants', () => {
    const components = {
      Red: Red,
      Blue: Blue,
      Green: Green,
      Orange: Orange,
      Unknown: Unknown,
    };

    const testCases = [
      ['Red', customColors.red],
      ['Blue', customColors.blue],
      ['Green', customColors.green],
      ['Orange', customColors.orange],
      ['Unknown', customColors.unknown],
    ];

    it.each(testCases)(
      'Should render a %s component with color %s',
      (variant, expected) => {
        const Component = components[variant];

        render(<Component {...Component.args} />);

        expect(screen.getByText(Component.args.message)).toBeInTheDocument();

        expect(screen.getByTestId('spinner')).toHaveStyle({
          'border-color': expected,
        });
      },
    );

    // it('should render a spinner with red variant', async () => {
    //   render(<Red {...Red.args} />);

    //   expect(screen.getByTestId('spinner')).toHaveStyle({
    //     'border-color': customColors.red,
    //   });
    //   expect(screen.getByText(/Look Ma: I'm red!/)).toBeInTheDocument();
    // });

    // it('should render a spinner with blue variant', async () => {
    //   render(<Blue {...Blue.args} />);

    //   expect(screen.getByTestId('spinner')).toHaveStyle({
    //     'border-color': customColors.blue,
    //   });
    //   expect(screen.getByText(/Look Ma: I'm blue!/)).toBeInTheDocument();
    // });
  });
});
