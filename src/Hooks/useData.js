import React, { useEffect, useState } from 'react';

const useData = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('https://rocky-wildwood-78553.herokuapp.com/popularshows')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return [products]
};

export default useData;