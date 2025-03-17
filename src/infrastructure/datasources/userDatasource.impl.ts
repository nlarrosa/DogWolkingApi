import { UserDatasource } from "domain/datasources/userDatasource";
import { CreateUserDto } from "domain/dtos/user/createUserDto";
import { UserEntity } from "domain/entities/userEntity";
import { UserMap } from "../../domain/maps/userMap";
import { OrmAdapter } from "../../infrastructure/adapters/ormAdapter";




export class UserDatasourceImp implements UserDatasource {

    private readonly ormAdapter = new OrmAdapter();


    async create(createUserDto: CreateUserDto): Promise<UserEntity> {

        const user = await this.ormAdapter.ormConnect.user.create({
            data: createUserDto
        });

        if(!user) throw 'user not create';
        return UserMap.formObject(user);
    }


    getAll(): Promise<UserEntity[]> {
        throw new Error("Method not implemented.");
    }
    

    getById(id: number): Promise<UserEntity> {
        throw new Error("Method not implemented.");
    }

}