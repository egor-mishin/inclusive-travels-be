import { Injectable } from '@nestjs/common';
import {InjectModel} from "@nestjs/mongoose";
import {AuthDocument, AuthModel} from "./auth.model";
import {Model} from "mongoose";

@Injectable()
export class AuthService {
    constructor(
        @InjectModel(AuthModel.name) private  authModel: Model<AuthDocument>
    ) {

    }

    async getByLogin(login: string){
            return this.authModel.findOne({login})
    }

    async createUser({email, password} : {email: string, password: string}){
        const newUser = new this.authModel({email})
        await newUser.save();
    }
}
