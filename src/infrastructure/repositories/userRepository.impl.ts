import { UserDatasource } from "domain/datasources/userDatasource";
import { CreateUserDto } from "domain/dtos/user/createUserDto";
import { UserEntity } from "domain/entities/userEntity";
import { UserRepository } from "domain/repositories/userRepository";



export class UserRepositoryImpl implements UserRepository {

    constructor(
        private readonly userDatasource: UserDatasource
    ){}


    create(createUserDto: CreateUserDto): Promise<UserEntity> {
        return this.userDatasource.create(createUserDto);
    }


    getAll(): Promise<UserEntity[]> {
        throw new Error("Method not implemented.");
    }


    getById(id: number): Promise<UserEntity> {
        throw new Error("Method not implemented.");
    }

}