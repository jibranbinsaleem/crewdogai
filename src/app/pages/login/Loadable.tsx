/**
 * Asynchronously loads the component for Signup page
 *
 */

import { lazyLoad } from 'utils/loadable';

export const Login = lazyLoad(
  () => import('./index'),
  module => module.Login,
);
