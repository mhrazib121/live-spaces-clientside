import React, { useEffect, useState } from 'react';

const useData = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/popularshows')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return [products]
};

export default useData;