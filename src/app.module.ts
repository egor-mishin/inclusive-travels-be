import { Module } from '@nestjs/common';
import {ConfigModule, ConfigService} from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { TourModule } from './tour/tour.module';
import {MongooseModule} from "@nestjs/mongoose";
import {getMongoConfig} from "./configs/mongo.config";



@Module({
	imports: [
		MongooseModule.forRootAsync({
			imports:[ConfigModule],
			inject:[ConfigService],
			useFactory: getMongoConfig
		}),
		ConfigModule.forRoot(),
		AuthModule,
		TourModule
	],
	controllers: [AppController],
	providers: [AppService],
})
export class AppModule {}
