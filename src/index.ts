import express, { Request, Response } from 'express'
import moviesRouter from './routes/movies'

const app = express()
const port = process.env.PORT || 3000

app.use(express.json())
app.use('/movies', moviesRouter)

app.get('/', (req: Request, res: Response) => {
  res.send('Hello, bro!')
})

app.listen(port, () => {
  console.log(`App running at port ${port}`)
})
