import {Body, Controller, Delete, Get, HttpCode, Param, Patch, Post} from '@nestjs/common';
import {TourModel} from "./tour.model";
import {FindTourDto} from "./dto/find-tour.dto";

@Controller('tour')
export class TourController {
    @Post('create')
    async create(@Body() dto: Omit<TourModel, '_id'>) {

    }

    @Get(':id')
    async get(@Param('id') id:string) {

    }

    @Patch(':id')
    async patch(@Param('id') id:string, @Body() dto: TourModel) {

    }

    @Delete(':id')
    async delete(@Param('id') id:string) {

    }

    @HttpCode(200)
    @Post(':id')
    async find(@Body() dto: FindTourDto) {

    }
}
