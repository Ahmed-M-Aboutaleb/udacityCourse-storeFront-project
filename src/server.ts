import express from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import routes from './routes';

export const app: express.Application = express();
const address: string = '0.0.0.0:3000';

app.use(bodyParser.json());
dotenv.config();

app.use('/', routes);

app.listen(3000, async function () {
    console.log(`starting app on: ${address}`);
});
