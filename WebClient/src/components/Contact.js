import React from 'react'
import Radium from 'radium'
import Title from './Title.js'
import { color, fontFamily, fontSize, padding } from './CommonStyles.js';

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignSelf: 'center',
        alignItems: 'center',
        marginTop: padding.small
    },

    list: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        color: color.leafy,
        fontFamily: fontFamily.opensansregular,
        fontSize: fontSize.verySmall
    }
};


class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state={

    };
  }

  render() {
    return (
      <div style={styles.container}>
        <Title>CONTACT</Title>
        <div style={styles.list}>
            <a>MATTPONTARELLI@GMAIL.COM</a>
            <a 
                target='_blank' 
                rel="noopener noreferrer" 
                href="https://instagram.com/MARQUE_P">
                @MARQUE_P
            </a>
        </div>
      </div>
    );
  }
}

export default Radium(Contact);