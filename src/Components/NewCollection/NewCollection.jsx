import React, {useEffect,useState} from 'react';
import './NewCollection.css';
// import new_collections from '../Assets/new_collections.js';
import Item from '../Item/Item.jsx';

const NewCollection = () => {

    const [new_collections,setNewCollection] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:4000/newcollection')
        .then((response)=>response.json())
        .then((data)=>setNewCollection(data));
    },[]);

    return (
        <div className='new-collection'>
            <h1>NEW COLLECTION</h1>
            <hr />
            <div className="collections">
                {new_collections.map((item,i)=>{
                    return <Item key = {i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
                })}
            </div>
        </div>
    );
};

export default NewCollection;