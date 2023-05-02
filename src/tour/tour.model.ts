import {Prop, Schema, SchemaFactory} from "@nestjs/mongoose";
import {HydratedDocument} from "mongoose";

export type TourDocument = HydratedDocument<TourModel>
class Accessibility {
	@Prop()
	key: string

	@Prop()
	value: string
}

@Schema()
export class TourModel {
	@Prop()
	image: string;
	@Prop()
	title: string;
	@Prop()
	description: string;
	@Prop({type: () => [Accessibility], _id: false})
	accessibility: Accessibility[]
	@Prop()
	calcRating: number;
	@Prop([String])
	categories: string[];
	@Prop({type: () => [String] })
	tags: string[];
}

export const TourSchema = SchemaFactory.createForClass(TourModel)
