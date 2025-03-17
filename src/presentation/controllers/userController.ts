
import { Request, Response } from "express";
import { CreateUserDto } from "../../domain/dtos/user/createUserDto";
import { UserRepository } from "domain/repositories/userRepository";





export class UserController {

    
    constructor(
        private readonly userRepository: UserRepository
    ){}
  

    public getUsers = async (req: Request, res: Response) => {

        return res.json([
            { name: 'Nicolas', lastname: 'Larrosa', dni: 25478818 },
            { name: 'Lirena', lastname: 'Gaecia', dni: 29854126 },
            { name: 'Guille', lastname: 'Perez', dni: 35478952 },
        ]).status(200);

    };

    
    public getUser = async (req: Request, res: Response) => {

        return res.json([
            { name: 'Nicolas', lastname: 'Larrosa', dni: 25478818 },
        ]).status(200);

    };


    public createUser = async (req: Request, res: Response) => {

        const [error, createUserDto] = CreateUserDto.create(req.body);
        if ( error ) return res.status( 400 ).json( { error } );
        const user = await this.userRepository.create(createUserDto!);

        return res.json(user);
        
        
    }

}