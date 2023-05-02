import { Module } from '@nestjs/common';
import { TourController } from './tour.controller';
import {MongooseModule} from "@nestjs/mongoose";
import {TourModel, TourSchema} from "./tour.model";

@Module({
  controllers: [TourController],
  imports: [MongooseModule.forFeature([{
    name: TourModel.name,
    schema: TourSchema
  }])]
})
export class TourModule {}
