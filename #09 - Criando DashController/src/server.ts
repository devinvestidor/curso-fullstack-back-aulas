import App from './app';
import DashController from './controllers/DashController';
import TaskController from './controllers/TaskController';
import UserController from './controllers/UserController';

const app = new App([
  new UserController(),
  new TaskController(),
  new DashController(),
]);

app.listen(3333);
