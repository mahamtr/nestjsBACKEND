import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

export type UserDocument  = User & Document;

@Schema()
export class User {
    @Prop()
    userId: string;

    @Prop()
    password: string;

    @Prop()
    userName: string;

}

export const UserSchema = SchemaFactory.createForClass(User);