import {
  bugAdded,
  bugAssignedToUser,
  bugResolved,
  getBugsByUsers,
  getResolvedBugs,
  getUnresolvedBugs,
} from './src/store/bugs.js';
import { projectAdded } from './src/store/projects.js';
import store from './src/store/store.js';
import { userAdd } from './src/store/users.js';

store.dispatch(bugAdded({ description: 'Test1' }));
store.dispatch(bugResolved({ id: 1 }));
store.dispatch(bugAdded({ description: 'Test2' }));
store.dispatch(projectAdded({ name: 'p1' }));
store.dispatch(userAdd({ name: 'user1 ' }));
store.dispatch(userAdd({ name: 'user2 ' }));
store.dispatch(bugAssignedToUser({ bugId: 1, userId: 1 }));
// console.log(getResolvedBugs(store.getState()));
console.log(getBugsByUsers(1)(store.getState()));

const unresolves = getUnresolvedBugs(store.getState());
console.log(unresolves);
