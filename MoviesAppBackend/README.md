# About
This is the backend api server to handle movie requests such as displaying a list of movies, editing movies, and adding movies.

# Technologies
- Express
- Mongodb (Specifically through Cloud Atlas)
- Jest

# Setup
1. After cloning the repo `cd MoviesAppBackend/`
2. run `npm install`.
3. Create a `.env` file

# .env sample
- PORT=8000
- DB_CONN_STRING="mongodb+srv://new-user31:test123@cluster0.qdzs4vm.mongodb.net/?retryWrites=true&w=majority"
- DB_NAME="gfe_movies"
- GFE_MOVIES_COLLECTION_NAME="movies"

# Commands
- [See package.json](./package.json)
- `npm run dev` to start the server
- `npm run test` to run the tests
