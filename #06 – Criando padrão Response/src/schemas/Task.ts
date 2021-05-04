import { model, Schema, Document } from 'mongoose';
import { UserInterface } from './User';

export enum StatusEnum {
    OPEN = 'OPEN',
    FINISHED = 'FINISHED'
}

export interface TaskInterface extends Document {
    description: string,
    status: StatusEnum,
    concluded: Date,
    responsible: UserInterface,
    creation: Date,
}

const TaskSchema = new Schema({
  description: {
    type: String,
    required: [true, 'Descrição obrigatória'],
  },
  status: {
    type: String,
    validate: {
      validator: (value) => {
        if (value === StatusEnum.OPEN || value === StatusEnum.FINISHED) return true;
        return false;
      },
      message: (props) => `${props.value} não é um status válido.`,
    },
    required: [true, 'Status obrigatório'],
    uppercase: true,
  },
  concluded: {
    type: Date,
  },
  responsible: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: [true, 'Responsável obrigatório'],
  },
  creation: {
    type: Date,
    default: Date.now,
  },
});

export default model<TaskInterface>('Task', TaskSchema);
