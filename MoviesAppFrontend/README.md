# About
This is the frontend for the movie app. It will display a list of movies from the database, will allow the user to add entries, and modify existing ones.

# Technologies
- Angular
- Angular Material component library
- RxJS
- Jest

# Setup
1. After cloning the repo `cd MoviesAppBackend/`
2. run `npm install`

# Commands
- [See package.json](./package.json)
- `npm run start` to start the server
- `npm run test` to run the tests

# Test Notes
Currently the tests are broken. Possibly the setup was done incorrectly, but now it seem as if Jest doesn't recognize the angular components in the template.


This will output from `app.component.spec.ts`
```
  console.error
    NG0304: 'app-movies' is not a known element (used in the 'AppComponent' component template):
    1. If 'app-movies' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
    2. If 'app-movies' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.
```