import { Injectable } from "@nestjs/common";
import { v4 as uuidv4 } from 'uuid';
import { User } from "./schema/user.schema";
import { UsersRepository } from "./user.repository";


@Injectable()
export class UsersService {
    constructor(private readonly usersRepository: UsersRepository) {}

    async getUserByUserName(userName: string): Promise<User> {
        return this.usersRepository.findOne({ userName })
    }


    async createUser(userName: string, password: string): Promise<User> {
        return this.usersRepository.create({
            userId: uuidv4(),
            userName,
            password,
        })
    }

}