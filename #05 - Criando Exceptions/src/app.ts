import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import Controller from './controllers/Controller';

class App {
public app: express.Application;

public constructor(controllers: Controller[]) {
  this.app = express();
  this.app.use(cors());

  this.initMongoose();
  this.connectDatabase();
  this.initExpressJson();
  this.initControllers(controllers);
}

private initMongoose(): void {
  mongoose.set('runValidators', true);
}

private connectDatabase(): void {
  mongoose.connect('mongodb+srv://devinvestidor:GF57yCzLCPzKkmKU@cluster0.sxzpy.mongodb.net/curso-javascript?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  });
}

private initExpressJson(): void {
  this.app.use(express.json());
}

private initControllers(controllers: Controller[]): void {
  controllers.forEach((controller) => {
    this.app.use('/', controller.router);
  });
}

public listen(port: number): void {
  this.app.listen(port, () => {
    console.log(`Aplicação iniciada na porta: ${port}`);
  });
}
}

export default App;
