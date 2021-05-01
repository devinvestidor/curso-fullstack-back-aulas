import App from './app';
import UserController from './controllers/UserController';

const app = new App([
  new UserController(),
]);

app.listen(3333);
