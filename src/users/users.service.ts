import { Injectable } from '@nestjs/common';
import { CreateUsersDto } from '../dto/create-users.dto';

import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IUsers } from 'src/interface/users.interface';
export type User = any;

@Injectable()
export class UsersService {
    constructor (@InjectModel('users') private usersModel:Model<IUsers>) { }
    private readonly users = [
        {
            username: 'Ifeoma Ugwu',
            email: 'ifeomaugwu85@gmail.com',
            password: 'Eunice85',
        },
        {
            username: 'Ogechi Maah',
            email: 'calistababy@gmail.com',
            password: 'Oge85',
        },
    ];
    async createUsers(CreateUsersDto: CreateUsersDto):
    Promise<IUsers> {
        const newUser = await new this.usersModel(CreateUsersDto);
        return newUser.save();
    }
    async findOne(username: string): Promise<User | undefined> {
        return this.users.find(user =>user.username === username);
}
private apiKeys: string[] = [
    'a03na188ame03u1d78620de67282882a84',
    '2e621a6646a4211768cd68e26f21228a81',
    ];
    validateApiKey(apiKey: string) {
    return this.apiKeys.find(apiK => apiKey === apiK);
    }
}