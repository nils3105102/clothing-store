import React from 'react';
import './CollectionOverview.scss';
import CollectionPreview from '../CollectionPreview/CollectionPreview';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import {  selectCollectionsForPreview } from '../../redux/shop/shopSelector';


const CollectionOverview = ({shop}) => {
    return (
        <div className="collections-overview">
            {shop.map(({id, ...otherParams}) => {
                    return <CollectionPreview key={id} {...otherParams} />
            })}
        </div>
    );
}
const mapStateToProps = createStructuredSelector({
    shop: selectCollectionsForPreview
})


export default connect(mapStateToProps)(CollectionOverview);