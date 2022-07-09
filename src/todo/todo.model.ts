import { Prop, Schema, SchemaFactory} from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type TodoDocument = Todo & Document;

@Schema()
export class Todo {
    @Prop( { required: true } )
    title: string;

    @Prop()
    description?: string;

    @Prop( { required: true } )
    createdAt: Date;

    @Prop()
    changedAt?: Date;
}

export const TodoSchema = SchemaFactory.createForClass(Todo);