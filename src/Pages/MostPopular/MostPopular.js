import React from 'react';
import Card from '../../Card/Card';
import useData from '../../Hooks/useData';

const MostPopular = () => {
    const [products] = useData();
    console.log(products)
    return (
        <div className='container mx-auto'>
            <div className="sm:grid md:grid-cols-3 my-4 md:gap-4 grid-cols-2 sm:gap-1 justufy-center container">
                {
                    products.map(data => <Card key={data._id} data={data}></Card>)
                }
            </div>
        </div>
    );
};

export default MostPopular;