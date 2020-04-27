import React from 'react'
import Radium from 'radium'
import Title from './Title.js'
import { ReactComponent as Leaf } from './leaf.svg'
import { color, fontFamily, fontSize, padding } from './CommonStyles.js';
import sourdough from './sourdough.jpg'

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignSelf: 'center',
        alignItems: 'center'
    },

    titleContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        justifyContent: 'space-between'
    },

    svgContainer: {
        width: fontSize.verySmall, 
        height: fontSize.verySmall,
        display: 'flex',
        alignItems: 'center'
    },

    svg: {
        fill: color.leafy, 
        width: '100%',
        height: '100%'
    },

    title: {
        fontFamily: fontFamily.opensansregular,
        fontSize: fontSize.small,
        color: color.leafy,
        letterSpacing: '1px'
    },

    priceFont: {
        fontFamily: fontFamily.opensanslight,
        letterSpacing: '0px'
    },

    imgContainer: {
        height: '100%',
        // 3% is to accomodate the margins.
        width: '100%',
    },

    img: {
        marginTop: padding.extraSmall,
        width: '100%',
        height: '100%',
        display: 'flex',
        alignSelf: 'center'
    },

    topSpacing: {
        marginTop: padding.small
    },

    ingredients: {
        marginTop: padding.extraSmall,
        fontFamily: fontFamily.opensanslight,
        fontSize: fontSize.verySmall,
        color: color.leafy, 
        letterSpacing: '1px',
        textAlign: 'center'
    }
};


class MenuItem extends React.Component {
  constructor(props) {
    super(props);
    this.state={

    };
  }

  render() {
    let containerStyle = this.props.topMargin ? [styles.container, styles.topSpacing] : styles.container;  
    let priceStyle = [styles.title, styles.priceFont]; 
    return (
      <div style={containerStyle}>
        <div style={styles.titleContainer}>
            <div style={styles.svgContainer}>
                <Leaf style={styles.svg} />
            </div>
            <div style={styles.title}>
                {this.props.title.toUpperCase()}
            </div>
            <div style={priceStyle}>
                {this.props.price}
            </div>
        </div>
        <img style={styles.img} src={sourdough} alt='Sourdough' />
        <div style={styles.ingredients}>
            {this.props.ingredients}
        </div>
      </div>
    );
  }
}

export default Radium(MenuItem);

// Title 

// Image