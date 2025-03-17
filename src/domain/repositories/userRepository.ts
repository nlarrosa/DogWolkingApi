import { CreateUserDto } from "domain/dtos/user/createUserDto";
import { UserEntity } from "domain/entities/userEntity";



export abstract class UserRepository {

    abstract create( createUserDto: CreateUserDto ): Promise<UserEntity>;
    abstract getAll( ): Promise<UserEntity[]>;
    abstract getById( id: number ): Promise<UserEntity>;
}