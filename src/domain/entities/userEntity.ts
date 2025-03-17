


export class UserEntity {

    constructor(
        public  name: string,
        public  lastname: string,
        public  email: string,
        public  address: string,
        public  createdAt?: Date | null,
    ){}


    get isCompleted(){
        return !! this.createdAt;
    }
}