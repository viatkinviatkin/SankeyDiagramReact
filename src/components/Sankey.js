
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import React from "react"
import _ from 'lodash';
am4core.useTheme(am4themes_animated);
class Sankey extends React.Component {

state= {
  checked:false
}

  componentDidMount() {
    this.chart = am4core.create("chartdiv", am4charts.SankeyDiagram);
    this.chart.exporting.menu = new am4core.ExportMenu();
    this.chart.paddingRight = 100;
    this.chart.nodes.template.events.off("hit");
    this.chart.nodes.template.cursorOverStyle = am4core.MouseCursorStyle.pointer;
    this.chart.links.template.cursorOverStyle = am4core.MouseCursorStyle.pointer;
    
     //#region Events
     this.chart.nodes.template.events.on("hit", function(ev) {
      var node = ev.target;
      node.color = this.props.colorFromPicker;
      var links = node.outgoingDataItems;
      links.values.forEach(value => {
          value.link.fill = node.color;
      });
  
     }, this);

     this.chart.nodes.template.events.on("doublehit", function(ev) {
      var node = ev.target;
      this.chart.data = this.chart.data.filter(function( obj ) {
        return obj.from !== node.name && obj.to !== node.name ;
    });
      //update parent chart data
      this.props.sendActionToParent(this.chart.data) ;
     }, this);
    
    
     this.chart.links.template.events.on("wheeldown", function(ev) {
      var link = ev.target;
      
      if(link.linkWidth>10)
      link.linkWidth = link.linkWidth-5;
     }, this);
  
     this.chart.links.template.events.on("wheelup", function(ev) {
      var link = ev.target;
      
      var toNodeHeight=link._dataItem.toNode.height;
      var fromNodeHeight=link._dataItem.fromNode.height;
      var toNodeY=link._dataItem.toNode.y+toNodeHeight;
      var fromNodeY=link._dataItem.fromNode.y+fromNodeHeight;
      var linkEndY = link.endY+link.linkWidth;
      var linkStartY =link.startY+link.linkWidth; 
      
      var maxLinkWidthIncrease =0;
      if(toNodeHeight>fromNodeHeight){
          maxLinkWidthIncrease = fromNodeHeight;
      }else{
          maxLinkWidthIncrease = toNodeHeight;
      }
  
      if(link.linkWidth+3<maxLinkWidthIncrease&&fromNodeY>linkStartY&&toNodeY>linkEndY)
          link.linkWidth = link.linkWidth+5;
  
     }, this);
     this.chart.links.template.events.on("hit", function(ev) {
      var link = ev.target;
      link.fill = this.props.colorFromPicker;
     }, this);


     document.getElementById('checkboxId').onchange = event => {
     
      this.setState({
        checked: !this.state.checked
      });
      
        if(this.state.checked == true){
          this.chart.nodes.template.nameLabel.label.text = "{uid}"
        }
        else{
          this.chart.nodes.template.nameLabel.label.text = "{name}"
        }
        this.chart.validateData()
      
    };
     //#endregion     
  }

    componentDidUpdate(){
      
     if(!_.isEqual(this.chart.data, this.props.loadSankeyData)){
      this.chart.data = this.props.loadSankeyData.slice(0);
      this.chart.dataFields.fromName = "from";
      this.chart.dataFields.toName = "to";
      this.chart.dataFields.value = "value";
     }
    }

  componentWillUnmount() {
    if (this.chart) {
      this.chart.dispose();
    }
  }
  
 
  render() {
    return (
    <div>
      <div  >
      <input
      id='checkboxId'
      type="checkbox"
      checked={this.state.checked}
      />
      <label>Show nodes id</label>
      </div >
      <div  id="chartdiv" style={{ width: "700px", height: "500px"}} ></div>
    </div>
    );
  }
}

export default Sankey;
