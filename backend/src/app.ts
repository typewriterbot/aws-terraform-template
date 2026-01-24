import express, { Request, Response } from 'express';
import serverless from 'serverless-http';
import cors from 'cors';

const app = express();

app.use(cors());

app.get('/', (req: Request, res: Response) => {
  res.json({ message: 'Hello Lambda with TypeScript!' });
});

export default app;
export const handler = serverless(app);
