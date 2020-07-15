import React from 'react';
import CollectionOverview from '../../components/CollectionOverview/CollectionOverview';
import { Route } from 'react-router-dom';
import CollectionPage from '../collectionpage/CollectionPage';
import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils';
import { connect } from 'react-redux';
import { updateCollections } from '../../redux/shop/shopAction';
import withSpinner from '../../components/withSpinner/withSpinner';


const CollectionOverviewWithSpinner = withSpinner(CollectionOverview);
const CollectionPageWithSpinner = withSpinner(CollectionPage);

class ShopPage extends React.Component{

        state = {
            loading: true
        }

        unsubscribeFromSnapshot = null;
        componentDidMount(){
            const { updateCollections } = this.props;
            const collectionRef = firestore.collection('collections');
            collectionRef.onSnapshot(async snapShot => {
                const collectionsMap =  convertCollectionsSnapshotToMap(snapShot);
                updateCollections(collectionsMap);
                this.setState({
                    loading: false
                });
            });
        }
        render(){
            const {match} = this.props;
            const {loading} = this.state;
            return(
                <div className="shop-page">
                    <Route exact path={`${match.path}`} render={(props) => <CollectionOverviewWithSpinner isLoading={loading} {...props}/>}/>
                    <Route exact path={`${match.path}/:collectionId`} render={(props) => <CollectionPageWithSpinner isLoading={loading} {...props}/>}/>
                </div>
            );
        }
       
    }


const mapDispatchToProps = (dispatch) => {
    return {
        updateCollections: collectionsMap => dispatch(updateCollections(collectionsMap))
    }
}


export default connect(null, mapDispatchToProps)(ShopPage);