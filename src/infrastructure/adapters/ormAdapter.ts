import { PrismaClient } from "@prisma/client";




export class OrmAdapter {

    public prismaAdapter: PrismaClient;
    

    constructor(){
        this.prismaAdapter = new PrismaClient();
    }


    get ormConnect() {
        return this.prismaAdapter;
    }

}