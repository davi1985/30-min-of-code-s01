import { Products } from './Products';

export default {
  title: 'Products',
  component: Products,
};

const Template = (args) => <Products {...args} />;

export const Default = Template.bind({});
