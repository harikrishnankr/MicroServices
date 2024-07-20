import express from 'express';
import cors  from 'cors';
import { appEvents, customer } from './api';
import HandleErrors from './utils/error-handler';
import { __dirname } from './utils';

export default async (app) => {

    app.use(express.json({ limit: '1mb'}));
    app.use(express.urlencoded({ extended: true, limit: '1mb'}));
    app.use(cors());
    app.use(express.static(__dirname + '/public'))

    //events
    appEvents(app);

    //api
    customer(app);

    // error handling
    app.use(HandleErrors);
    
}