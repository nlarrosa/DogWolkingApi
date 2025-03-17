import { Router } from "express";
import { UserController } from "../../presentation/controllers";
import { UserRepositoryImpl } from "../../infrastructure/repositories/userRepository.impl";
import { UserDatasourceImp } from "../../infrastructure/datasources/userDatasource.impl";






export class UserRoutes {


    static get routes(): Router {

        const router = Router();
        const userDatasource = new UserDatasourceImp();
        const userRepository = new UserRepositoryImpl(userDatasource)
        const userController = new UserController(userRepository);

        router.post('/', userController.getUser);
        router.post('/create', userController.createUser);
        router.get( '/', userController.getUsers);

        return router;
    }
}