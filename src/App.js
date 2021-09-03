import './App.css';
import React  from "react"
import Sankey from "./components/Sankey"
import { SketchPicker } from 'react-color';
import * as d3 from "d3"
import demoData from "./demoData"

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      background: '#fff',
      sankeyData: [],
      sankeyDataOptions: [],
      displayColorPicker: false,
      refToChartData:[]
    };
    this.loadFromCsv = this.loadFromCsv.bind(this)
    this.removeNodeEvent = this.removeNodeEvent.bind(this)
  }

  //#region ColorPickerEvents
  handleChangeComplete = (color) => {
    this.setState({ background: color.hex });
  };
  handleClick = () => {
    this.setState({ displayColorPicker: !this.state.displayColorPicker })
  };

  handleClose = () => {
    this.setState({ displayColorPicker: false })
  };
  //#endregion
  
  //#region Data loading
  async getSankeyDataFromFile(fileUrl){
    try{
      this.setState({sankeyData: await d3.csv(fileUrl)})
    }
    catch{
      alert("Failed to load data")
    }
  }

  loadFromCsv(e){
    var file = e.target.files[0]
    var reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = () => {
      this.getSankeyDataFromFile( reader.result);
    };
  }
 
  demoSankeyData =  (e) =>{
    e.preventDefault();
    var data = demoData
    this.setState({sankeyData: data})
  }

  
  emptySankeyData =  (e) =>{
    e.preventDefault();
    this.setState({sankeyData: []})
  }
  //#endregion

  //#region Add node
  addNode =  (e) =>{
    e.preventDefault();
    var nodeName = e.target.newNodeName.value;
    var nodeValue =e.target.newNodeNameValue.value;
    var newDataObject = {"from":nodeName,"to":e.target.pathName.value,"value":nodeValue}
    // this.state.sankeyData.length==0 ?
    //  newDataObject = {"from":nodeName,"to":e.target.pathName.value,"value":nodeValue} : newDataObject =  {"from":nodeName,"to":e.target.nodeSelection.value,"value":nodeValue}
    console.log("zashel")
    var data = this.state.sankeyData;
    data.push(newDataObject);
    this.setState({sankeyData: data})
    console.log(this.state.sankeyData)
    e.target.reset();
  }
//   createSelectItems() {
//     var fromListNodes = [... new Set(this.state.sankeyData.map(a => a.from))]
//     var toListNodes = [... new Set(this.state.sankeyData.map(a => a.to))]
//     var result = [...new Set([...fromListNodes ,...toListNodes])];
//   return result
// }  
 //#endregion


 removeNodeEvent =  (chartData) => {
   var getChartData = chartData.slice(0)
  this.setState({sankeyData: getChartData})
}
  render() {
    return (
      <div className="container">
        <label className="h3"  style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>Sankey diagram builder</label>
        <div className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="col ">
      <label className="h5 ">Choose color</label>
      <br/>
        <button   className="btn btn-secondary" onClick={ this.handleClick }>Pick Color</button>
        { this.state.displayColorPicker ? <div >
          <div  onClick={ this.handleClose }/>
          <SketchPicker color={ this.state.background } onChangeComplete={ this.handleChangeComplete }/>
        </div> : null }
    </div>

    <div className="col">
    <label className="h5">Add node</label>
    <form onSubmit={this.addNode} >
        <input type="text" className="form-control" name="newNodeName" placeholder="Node name" required pattern="^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$"/>
        <br/>
        <input type="text" className="form-control" name="pathName" placeholder="Link node name" required pattern="^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$"/>

        {/* { this.state.sankeyData.length==0 ?  */}
      
        
        {/* : <select  name="nodeSelection" className="form-control">
        <option value="" disabled selected hidden >Select link to node...</option>
            { 
            this.createSelectItems().map(node => {
                return (
                    <option key={node} value={node}>
                      {node}
                    </option>
                       )
            })
        } </select > } */}

       
        <br/>
        <input type="number" className="form-control" name="newNodeNameValue" placeholder="Value" min="1" required data-bind="value:replyNumber"/>
        <br/>
          <button className="btn btn-secondary" >Add</button>
       </form>
    </div>

    <div className="col">
    <br/>

        <br/>
    <label className="h5">Data upload</label>
        <br/>
        <input type="file" className="input-file" name="csvUpload"  accept="application/vnd.ms-excel, .csv " onChange={this.loadFromCsv} onClick={e => (e.target.value = null)}/>
        <br/>
        <br/>
        <div >
        <button className="btn btn-secondary" onClick={this.demoSankeyData}>Demo sankey data</button>
        </div>
        <br/>
        <div>
        <button className="btn btn-secondary" onClick={this.emptySankeyData}>Create empty diagram</button>
        </div>
    </div>
    </div>
        
        <div style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
        <Sankey colorFromPicker={ this.state.background}  loadSankeyData={this.state.sankeyData} sendActionToParent = {this.removeNodeEvent}/>
        </div>
     </div>
    );
  }
}

export default App;
