import React from 'react';
import './Menu.scss';
import MenuItem from '../MenuItem/MenuItem';
import { connect } from 'react-redux';

import { createStructuredSelector } from 'reselect';
import { selectMenuCategories } from '../../redux/menu/menuSelector';

const Menu = ({menu}) => {
    return (
        <div className="menu">
            {menu.map(({ title, imageUrl, id, size, linkUrl }) => {
                return <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} linkUrl={linkUrl} />
            })}
        </div>
    );
}

const mapStateToProps = createStructuredSelector({
    menu: selectMenuCategories
});

export default connect(mapStateToProps)(Menu);