import { Card } from './Card';
import { getUser } from '../../miragejs/api/users';

export default {
  title: 'Features/Users/Card',
  component: Card,
};

const Template = (args) => (
  <div className="max-w-xl mx-auto">
    <Card {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  user: getUser(),
};
