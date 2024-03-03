import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type TaskDocument = HydratedDocument<Task>;

@Schema()
export class Task {
  @Prop()
  name: string;

  @Prop()
  description: string;

  @Prop()
  done: boolean;

  @Prop()
  created_at: Date;
}

export const TaskSchema = SchemaFactory.createForClass(Task);
