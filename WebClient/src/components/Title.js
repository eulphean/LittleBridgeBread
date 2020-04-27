import React from 'react'
import Radium from 'radium'
import { color, fontFamily, fontSize, padding } from './CommonStyles';

const styles = {
    title: {
        fontFamily: fontFamily.righalftone,
        color: color.leafy,
        letterSpacing: '1.5px',
        fontSize: fontSize.huge
    }
};

class Title extends React.Component {
  constructor(props) {
    super(props);
    this.state={
        
    };
  }

  render() {
    return (
        <div style={styles.title}>
            {this.props.children}
        </div>
    );
  }
}

export default Radium(Title);