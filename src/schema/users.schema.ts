import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose"
@Schema()
export class users {
   @Prop()
   name: string;
   @Prop()
   email: string;
   @Prop()
   password: string;
}
export const usersSchema = SchemaFactory.createForClass(users)