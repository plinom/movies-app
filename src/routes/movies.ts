import { Request, Response, Router } from 'express'
import { Movie } from '../models/movie'

const router = Router()
let movies: Movie[] = []

router.post('/', (req: Request, res: Response) => {
  const movie: Movie = {
    id: movies.length + 1,
    title: req.body.title,
    description: req.body.description,
    duration: req.body.duration,
    inProduction: req.body.inProduction,
  }
  movies.push(movie)
  res.status(201).json(movie)
})

router.get('/', (req: Request, res: Response) => {
  res.json(movies)
})

router.get('/:id', (req: Request, res: Response) => {
  const movie = movies.find(t => t.id === parseInt(req.params.id))
  if (!movie) {
    res.status(404).send('Movie not found')
  } else {
    res.json(movie)
  }
})

router.put('/:id', (req: Request, res: Response) => {
  const movie = movies.find(t => t.id === parseInt(req.params.id))

  if (!movie) {
    res.status(404).send('Movie not found')
  } else {
    movie.title = req.body.title || movie.title
    movie.description = req.body.description || movie.description
    movie.duration = req.body.duration || movie.duration
    movie.inProduction = req.body.inProduction || movie.inProduction
  }
  res.json(movie)
})

router.delete('/:id', (req: Request, res: Response) => {
  const index = movies.findIndex(t => t.id === parseInt(req.params.id))

  if (index === -1) {
    res.status(404).send('Movie not found')
  } else {
    movies.splice(index, 1)
    res.status(204).send()
  }
})

export default router
