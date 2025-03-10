import express from 'express';


export class Server {

    private app = express();


    async start () {
        this.app.listen( 3000, () => {
            console.log(`Escuchando en el Puerto: ${3000}`);
        });
    }
}