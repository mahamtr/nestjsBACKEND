import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

export type UserDocument  = User & Document;

@Schema()
export class User {
    @Prop({unique:true})
    userId: string;

    @Prop({unique: true})
    password: string;

    @Prop()
    userName: string;

}

export const UserSchema = SchemaFactory.createForClass(User);