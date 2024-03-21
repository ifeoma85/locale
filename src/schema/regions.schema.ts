import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose"
@Schema()
export class regions {
   @Prop()
   _id: string;
   @Prop()
   Regions: string;
   @Prop()
   Description: string;
   @Prop()
   States: string;
}
export const regionsSchema = SchemaFactory.createForClass(regions)