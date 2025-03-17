import { Router } from "express";
import { UserRoutes } from "./routes/userRoutes";




export class AppRoutes {


    static get routes(): Router {

        const path = '/api/dogwalking';
        const router = Router();
        
        router.use(`${path}/user`, UserRoutes.routes);

        return router;
    }
}