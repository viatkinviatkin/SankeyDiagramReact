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
