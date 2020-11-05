import express from 'express';
import {helloword} from './rotas';

const app = express();

app.get('/', helloword )

app.listen(3333);