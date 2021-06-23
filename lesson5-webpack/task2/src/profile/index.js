import { fetchUser } from './gateaway.js';
import { printProfile } from './printProfile.js';

fetchUser('github').then(({ name, location }) =>
  printProfile({
    name,
    location,
  }),
);
