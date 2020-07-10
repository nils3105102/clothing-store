import React from 'react';
import CollectionOverview from '../../components/CollectionOverview/CollectionOverview';
import { Route } from 'react-router-dom';
import CollectionPage from '../collectionpage/CollectionPage';

const ShopPage = ({ match }) => {
        return(
            <div className="shop-page">
                <Route exact path={`${match.path}`} component={CollectionOverview}/>
                <Route exact path={`${match.path}/:collectionId`} component={CollectionPage}/>
            </div>
        );
    }


export default ShopPage;