import React from 'react';
import { SketchPicker } from 'react-color';


class Colorpicker extends React.Component {
  state = {
    background: this.props.color,
  };

  handleChangeComplete = (color) => {
    this.setState({ background: color.hex });
  };

  render() {
    return (
        <SketchPicker
        color={ this.state.background }
        onChangeComplete={ this.handleChangeComplete }
       />
      
    );
  }
}

export default Colorpicker;