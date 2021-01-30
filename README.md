# SEAGE webpage
Hosted at https://seage.github.com with alias https://www.seage.org

## Webpage Development 
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Install dependecies
```
npm install
```
### Start the webpage in development mode
```
npm start
```

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### Testing
```
npm test
```

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### Build the webpage
```
npm run build
```

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!


## Webpage Deployment

```
npm run deploy
```
Deploys the built webpage to GitHub at https://seage.github.com

### Important facts
- The dev package `gh-pages` is used for the deployment
- The code is in the `master` branch in here: 
https://github.com/seage/seage.github.com

- The webpage is served from `gh-pages` branch of the same repository.

- DNS stuff 
    - DNS record www.seage.org points at seage.github.com
    - There must be `CNAME` file with content `www.seage.org` in the root of `gh-pages` branch
