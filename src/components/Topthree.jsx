import React from 'react';

const Topthree = async () => {
    const res = await fetch("/data.json");
    const products = await res.json();

    console.log(products)
    return (
        <div>
            data product
        </div>
    );
};

export default Topthree;