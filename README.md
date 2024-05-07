# movies-app

### In root create .env file

```.env
PORT=
DB_PORT=
DB_HOST=''
DB_PASSWORD=''
DB_NAME=''
DB_USER=''
```

### To install dependencies:

```bash
bun install
```

### To run:

```bash
bun start
```

### To get all movies

```bash
curl -X GET -H "Content-Type: application/json" http://localhost:8080/movies
```

### To create new movie

```bash
curl -X POST -H "Content-Type: application/json" -d '{"name": "Example Movie", "description": "This is an example movie", "duration": 120, "inProduction": true}' http://localhost:8080/movies
```

### To update movie

```bash
curl -X PUT -H "Content-Type: application/json" -d '{"<column_name>": "<new_value>"}' http://localhost:8080/movies/<movie_id>

**replace <column_name>, <new_value> and <movie_id> to corresponding values**
```

### To delete movie

```bash
curl -X DELETE -H "Content-Type: application/json" http://localhost:8080/movies/<movie_id>

**replace <movie_id> to real movie id value**
```

This project was created using `bun init` in bun v1.0.26. [Bun](https://bun.sh) is a fast all-in-one JavaScript runtime.
