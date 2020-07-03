import React from 'react';
import './Menu.scss';
import MenuItem from '../MenuItem/MenuItem';

class Menu extends React.Component {

    state = {
        sections: [
            {
              title: 'hats',
              imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
              id: 1,
              size:'',
              linkUrl: 'hats'
            },
            {
              title: 'jackets',
              imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
              id: 2,
              size:'',
              linkUrl: ''
            },
            {
              title: 'sneakers',
              imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
              id: 3,
              size: '',
              linkUrl: ''
            },
            {
              title: 'womens',
              imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
              size: 'large',
              id: 4,
              linkUrl: ''
            },
            {
              title: 'mens',
              imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
              size: 'large',
              id: 5,
              linkUrl: ''
            }
          ]
    }
    render(){
        return (
            <div className="menu">
                {this.state.sections.map(({title, imageUrl, id, size, linkUrl}) => {
                    return <MenuItem key={id} title = {title} imageUrl={imageUrl} size={size} linkUrl={linkUrl}/>
                })}
            </div>
        );
    }
}

export default Menu;