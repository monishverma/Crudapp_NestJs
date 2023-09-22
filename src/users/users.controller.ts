import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { UsersService } from './users.service';
import { Users } from './schema/users.schema';

@Controller('users')
export class UsersController {

    constructor(private usersService:UsersService){}

    @Get()
    async getAll(){
        return this.usersService.getAll();
    }

    @Post()
    async createUsers(@Body() users:Users){
        return this.usersService.create(users);
    }

    @Get("/:id")
    async getById(@Param('id') id:string){
        return this.usersService.getById(id);
    }

    @Put('/:id')
    async updateUsers(@Param('id') id:string,@Body() users:Users){
        return await this.usersService.update(id, users);
    }

    @Delete('/:id')
    async deleteUser(@Param('id') id:string){
        await this.usersService.delete(id);
    }
}
