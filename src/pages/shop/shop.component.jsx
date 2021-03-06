import React from 'react';

import SHOP_DATA from './shop.data';
import CollectionPreview from '../../components/collection-preview/collections-preview.component';

class ShopPage extends React.Component {
    constructor(props){
        super(props);
        this.state={
            collections: SHOP_DATA
        }        
    }

    render(){

        const { collections } = this.state;

        return (
            <div className='shop-page'>
                {collections.map(({id, ...otherItems}) => (
                    <CollectionPreview key={id} {...otherItems}/>
                ))}
            </div>
        );
    }
}

export default ShopPage;