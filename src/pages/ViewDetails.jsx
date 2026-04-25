import React from 'react';
import { useLoaderData } from 'react-router';

const ViewDetails = () => {
   const viewDetailsCoffee = useLoaderData();
   const {_id, name,chef, price, supplier, taste, category, details, photo} = viewDetailsCoffee;
   console.log(viewDetailsCoffee)
    return (
        <div>
            <h2>Details Page</h2>
            <img src={photo} alt="coffee" />
            <p>{name}</p>
            <p>{chef}</p>
            <p>{price}</p>
            <p>{supplier}</p>
            <p>{taste}</p>
            <p>{category}</p>
            <p>{details}</p>
            
        </div>
    );
};

export default ViewDetails;