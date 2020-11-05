import {Request, Response} from 'express';
import CreateUser from './services/CreateUser';

export function helloword(request: Request, response: Response) {

    const user = CreateUser({
        name: 'patrick cavalcante',
        email:'patrickc.lima2@gmail.com',
        password:'123456',
        techs: ['node js', { title:'javascript',experience: 100}]
    });
    
    return response.json({message: user});
}