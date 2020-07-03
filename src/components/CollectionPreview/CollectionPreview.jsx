import React from 'react';

import './CollectionPreview.scss';
import CollectionItem from '../CollectionItem/CollectionItem';

const CollectionPreview = ({items, title}) => {
    return (
        <div className="collection-preview">
            <h1 className="title">{title.toUpperCase()}</h1>
            <div className="preview">
            {
                items.filter((item, idx) => idx < 4)
                .map(({id, ...otherProps}) => {
                    return (<CollectionItem key={id} {...otherProps}/>)
                })
            }
            </div>
        </div>
    );
}

export default CollectionPreview;