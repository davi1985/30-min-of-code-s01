import { Users } from './Users';
import { USER_QTY } from './Users.contants';
import { getUsers } from '../../miragejs/api/users';

export default {
  title: 'Features/Users',
  component: Users,
};

const Template = (args) => (
  <div className="container mx-auto">
    <Users {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  users: getUsers({ quantity: USER_QTY }),
};
