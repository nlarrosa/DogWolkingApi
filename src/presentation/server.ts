import express from 'express';


interface Props {
    port: number;
}

export class Server {

    private app = express();
    private readonly port: number;

    constructor(options: Props){
        const { port } = options;
        this.port = port;
    }


    async start () {
        this.app.listen( this.port, () => {
            console.log(`Escuchando en el Puerto: ${this.port}`);
        });
    }
}