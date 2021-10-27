import axios from 'axios'
import React, { useEffect, useState } from 'react';
import PreviewCollection from '../components/PreviewCollection';
// import shopData from './shopData';

const Shop = () => {
    const [collections, setCollections] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:8082/api/fakeDb/getClothes')
            .then(response => {
                console.log(response.data)
                setCollections(response.data)
            })
    })



    // state={
    //     collections: shopData
    // }

    // const {collections} = this.state

    return (
        <div className='shop-page'>
            {
                collections.map(({ id, ...otherCollectionProps }) => (
                    <PreviewCollection key={id} {...otherCollectionProps} />
                ))
            }
        </div>
    );
}


export default Shop;