import express, { Application, Request, Response } from 'express'
import cors from 'cors'
import router from './app/routes';
const app: Application = express()
app.use(express.json());
app.use(cors());

app.use('/api', router)

export default app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!')
})

