import { UserEntity } from "../../domain/entities/userEntity";


interface Props {

    name: string,
    lastname: string,
    email: string,
    address: string,
    createdAt?: Date | null,
}


export class UserMap {



    public static formObject ( object: Props) {

        const { name, lastname, address, email, createdAt } = object;

        if(!name) throw 'name is required';
        if(!lastname) throw 'lastname is required';
        if(!email) throw 'email is required';
        if(!address) throw 'address is required';

        let newCreateAt;
        if( newCreateAt ){
            newCreateAt = new Date( newCreateAt );
            if(isNaN( newCreateAt.getTime())){
                throw 'createAt is not valid date'
            };
        }

        return new UserEntity(name, lastname, address, email, newCreateAt);

    }
}