import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from 'mongoose';

export type UserDocument = Users & Document;

@Schema({ collection: 'UserNames' })
export class Users {
    @Prop()
    name: string;

    @Prop()
    email: string;

    @Prop()
    skills: string;

    @Prop()
    gender: string;


}

export const UsersSchema = SchemaFactory.createForClass(Users)
