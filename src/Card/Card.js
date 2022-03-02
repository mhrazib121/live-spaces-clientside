import React from 'react';
import './Card.css'

const Card = (props) => {
    const { _id, img, tittle, subTittle, description } = props.data;
    return (
        <div data-aos="zoom-in-down" data-aos-duration="800" data-aos-delay="600" data-aos-easing="ease-in-sine">
            <div className='shadow-2xl m-3 card-design '>
                <div className=''>
                    <img className='w-full h-60' src={img} alt="" />
                </div>
                <div className='bg-black text-white'>
                    <div className='p-4'>
                        <h4 className='text-xl font-bold  my-2'> {tittle}</h4>
                        <div className='bg-gray-600 w-40 rounded-md pb-3 px-3 py-1 mt-5'>
                            <h4 className='font-bold'> {subTittle} </h4>
                            <p className='  text-sm'> {description}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;