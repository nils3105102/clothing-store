import React from 'react';
import SHOP_DATA from '../../data/shopData';
import CollectionPreview from '../../components/CollectionPreview/CollectionPreview';

class ShopPage extends React.Component {

    state = {
        collections: SHOP_DATA
    }

    render() {
        return(
            <div className="shop-page">
                {this.state.collections.map(({id, ...otherParams}) => {
                    return <CollectionPreview key={id} {...otherParams} />
                })}
            </div>
        );
    }
}

export default ShopPage;