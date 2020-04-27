import React from 'react'
import Radium from 'radium'
import { color, fontFamily, fontSize, padding } from './CommonStyles';
import { ReactComponent as RoundLogo } from './roundlogo.svg'
import { ReactComponent as FlatLogo } from './flatlogo.svg'
import About from './About.js'
import Menu from './Menu.js'
import Contact from './Contact.js'

const styles = {
  container: {
    margin: padding.small,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },

  logoContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignSelf: 'center'
  },

  topLogo: {
    width: fontSize.extraGaia,
    height: fontSize.extraGaia
  },

  bottomLogo: {
    marginTop: padding.small,
    width: fontSize.enormous,
    height: fontSize.enormous
  }
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state={
    };
  }

  render() {
    return (
      <div style={styles.container}>
        <div style={styles.title}>
          <div style={styles.logoContainer}>
            <RoundLogo style={styles.topLogo} />
          </div>
          <About />
          <Menu />
          <Contact />
          <div style={styles.logoContainer}>
            <FlatLogo style={styles.bottomLogo} />
          </div>
        </div>
      </div>
    );
  }
}

export default Radium(App);