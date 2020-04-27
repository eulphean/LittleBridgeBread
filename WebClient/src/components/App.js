import React from 'react'
import Radium from 'radium'
import { color, fontFamily, fontSize, padding } from './CommonStyles';

const styles = {
  container: {
    margin: padding.small
  },

  title: {
    fontFamily: fontFamily.righalftone,
    color: color.leafy,
    fontSize: fontSize.huge,
    letterSpacing: '1.5px'
  }
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      imageSrc: '',
      showButtons: true
    };
  }

  render() {
    return (
      <div style={styles.container}>
        <div style={styles.title}>
          ABOUT
        </div>
      </div>
    );
  }
}

export default Radium(App);