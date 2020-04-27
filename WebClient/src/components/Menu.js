import React from 'react'
import Radium from 'radium'
import Title from './Title.js'
import { color, fontFamily, fontSize, padding } from './CommonStyles.js';
import MenuItem from './MenuItem.js'
import sourdough from './sourdough.jpg'
import rye from './rye.jpg'
import bird from './bird.jpg'

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignSelf: 'center',
        alignItems: 'center',
        marginTop: padding.small
    }
};

const sdough="bread flour, water, whole wheat flour, whole rye flour, cracked wheat berries, salt";
const ry="whole rye flour, water, whole wheat flour, sunflower seeds, salt";
const brd="rolled oats, water, pumpkin seeds, sunflower seeds, buckwheat, flax seeds, olive oil, maple syrup, oat flour, psyllium husk, salt";


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
        <MenuItem img={sourdough} title={'Country Sourdough'} price={'$10'} ingredients={sdough} />
        <MenuItem img={rye} topMargin={true} title={'Sunflower Rye'} price={'$12'} ingredients={ry} />
        <MenuItem img={bird} topMargin={true} title={'"BIRD" Bread'} price={'$12'} ingredients={brd} />
      </div>
    );
  }
}

export default Radium(Menu);