import 'reflect-metadata';

import express from 'express';
import routes from './routes';

import './database';

const app = express();

app.use(express.json());
app.use(routes);

app.listen(3333, () => {
    console.log('\u{1F680} Server started on port 3333');
});

/*
app.get('/', (request, response) => {
    return response.json({ message: 'Hello World' });
});
*/