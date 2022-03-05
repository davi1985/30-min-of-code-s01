import user from './user';
import message from './message';
import products from './products';

export default {
  ...products,
  ...user,
  ...message,
};
