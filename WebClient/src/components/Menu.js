import React from 'react'
import Radium from 'radium'
import Title from './Title.js'
import { color, fontFamily, fontSize, padding } from './CommonStyles.js';
import MenuItem from './MenuItem.js'

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignSelf: 'center',
        alignItems: 'center',
        marginTop: padding.small
    }
};

const sourdough="bread flour, water, whole wheat flour, whole rye flour, cracked wheat berries, salt";
const rye="whole rye flour, water, whole wheat flour, sunflower seeds, salt";
const bird="rolled oats, water, pumpkin seeds, sunflower seeds, buckwheat, flax seeds, olive oil, maple syrup, oat flour, psyllium husk, salt";


class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state={

    };
  }

  render() {
    return (
      <div style={styles.container}>
        <Title>MENU</Title>
        <MenuItem title={'Country Sourdough'} price={'$10'} ingredients={sourdough} />
        <MenuItem topMargin={true} title={'Sunflower Rye'} price={'$12'} ingredients={rye} />
        <MenuItem topMargin={true} title={'"BIRD" Bread'} price={'$12'} ingredients={bird} />
      </div>
    );
  }
}

export default Radium(Menu);