import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { UserDocument, Users } from './schema/users.schema';
import { Model } from 'mongoose';

@Injectable()
export class UsersService {
    constructor(@InjectModel(Users.name) 
    private userModel: Model<UserDocument>,
    ) { }

    async getAll():Promise<Users[]>{
        return this.userModel.find().exec();
    }

    async create(Users:Users){
        const newUsers = new this.userModel(Users);
        return newUsers.save();
    }

    async getById(id:string){
        return await this.userModel.findById(id).exec();
    }

    async update(id:string, users:Users){
        return await this.userModel.findByIdAndUpdate(id, users,{
            new:true,
        });
    }

    async delete(id: string){
        await this.userModel.findByIdAndRemove(id);
    }
}
