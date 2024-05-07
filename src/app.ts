import express, { type Request, type Response } from 'express'
import { myDataSource } from './db/app-data-source'
import { Movie } from './entity/movie.entity'

myDataSource
  .initialize()
  .then(() => console.log('Data Source has been initialized!'))
  .catch(err => console.log('Error during Data Source initialization:', err))

const app = express()
const port = process.env.PORT || 3000
app.use(express.json())

app.get('/movies', async (res: Response) => {
  const movies = await myDataSource.getRepository(Movie).find()
  res.json(movies)
})

app.get('/movies/:id', async (req: Request, res: Response) => {
  const results = await myDataSource
    .getRepository(Movie)
    .findOneBy({ id: req.params.id })
  return res.send(results)
})

app.post('/movies', async (req: Request, res: Response) => {
  const movie = await myDataSource.getRepository(Movie).create(req.body)
  const results = await myDataSource.getRepository(Movie).save(movie)
  return res.send(results)
})

app.put('/movies/:id', async (req: Request, res: Response) => {
  const movie = await myDataSource
    .getRepository(Movie)
    .findOneBy({ id: req.params.id })
  if (movie !== null) {
    myDataSource.getRepository(Movie).merge(movie, req.body)
    const results = await myDataSource.getRepository(Movie).save(movie)
    return res.send(results)
  }
  return res.send('Movie not found')
})

app.delete('/movies/:id', async (req: Request, res: Response) => {
  const results = await myDataSource.getRepository(Movie).delete(req.params.id)
  return res.send(results)
})

app.listen(port, () => {
  console.log(`Server listen in port ${port}`)
})
