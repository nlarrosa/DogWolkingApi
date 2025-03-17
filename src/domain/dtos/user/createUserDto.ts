
interface Props {
    name: string,
    lastname: string,
    email: string,
    address: string,
    birthday: string,
    createdAt?: Date,
}


export class CreateUserDto {

    private constructor(
        public readonly name: string,
        public readonly lastname: string,
        public readonly email: string,
        public readonly address: string,
        public readonly createAt?: Date
    ){}


    static create( props: {[key:string]: any} ): [ string?, CreateUserDto? ]{

        const {name, lastname, email, address, birthdate, createdAt } = props;
        
        if(!name) return ['name is required', undefined];
        if(!lastname) return ['lastname is required', undefined];
        if(!email) return ['email is required', undefined];
        if(!address) return ['address is required', undefined];

        return [ undefined, new CreateUserDto(
            name,
            lastname,
            email,
            address,
            createdAt
        )];
    }
}