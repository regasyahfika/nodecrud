import express, { Application } from 'express';

import { MONGO_URL } from './constants/pokeApi.constants';
import { Controller } from './main.controller';
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';

class App {
    public app: Application;
    public pokeController: Controller;

    constructor() {
        this.app = express();
        this.setConfig();
        this.setMongoConfig();

        this.pokeController = new Controller(this.app);
    }

    private setConfig(){
        //Allows us to receive requests with data in json format
        this.app.use(bodyParser.json({ limit: '50mb'}));
        
        this.app.use(bodyParser.urlencoded({ limit: '50mb', extended:true }))

        this.app.use(cors());
    }

    private setMongoConfig(){
        mongoose.Promise = global.Promise;
        mongoose.connect('mongodb://localhost:27017/Pokemon', {
            useNewUrlParser: true
        });
    }
}

export default new App().app

