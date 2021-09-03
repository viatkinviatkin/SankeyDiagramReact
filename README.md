<<<<<<< HEAD
# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
=======
# SankeyDiagramReact

Sankey diagram builder

A Amcharts4/React app to build and visualize Sankey diagrams:

- amcharts v4 core runs all the calculation 
- React handles state and renderings.

## Demo
![Demo](https://s9.gifyu.com/images/sankeyGifDemo1.gif)
![Demo](https://s9.gifyu.com/images/sankeyGifDemo2.gif)
![Demo](https://s9.gifyu.com/images/sankeyGifDemo3.gif)
## Install:

Install npm dependencies:

` npm i`

launch the application:

`npm start`

Serve your localhost:3000 via http to see and use the Sankey Diagram Builder App. 

## DataFormat

You can import/export sankey diagrams using the following 

### json format:

```
[
  {
    "from": "B",
    "to": "D",
    "value": "8"
  },
  {
    "from": "D",
    "to": "C",
    "value": "4"
  }
]
```
### .csv format:
```
from,to,value
B,D,8
D,C,4

```
Also you can add a column with a custom unique id

## Features

- Build a hierarchy
- Customize graph nodes and links (choose a color and click on the element with the left mouse button)
- Add/remove nodes (double click with the left mouse button)
- Change links thickness (mouse wheel rotation)
- Reposition nodes (left mouse button grab)
- Display node IDs
- Upload/download chart in many formats
>>>>>>> 32e15e9b5d5b93a5e93617b94e875e2a95cc37a1
