import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose"
@Schema()
export class states {
   @Prop()
   _id: string;
   @Prop()
   States: string;
   @Prop()
   Governor: string;
   @Prop()
   Population: string;
   @Prop()
   Description: string;
   @Prop()
   LGA: string;
   @Prop()
   LGAs: string;
   @Prop()
   Region: string;

}
export const statesSchema = SchemaFactory.createForClass(states)