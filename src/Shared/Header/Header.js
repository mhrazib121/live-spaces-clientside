import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='container mx-auto'>
            <div className='my-5'>
                <h1 data-aos="fade-up-right" data-aos-delay="400" data-aos-duration="800" data-aos-easing="ease-in-sine" className='text-4xl font-bold mb-3'>Love Spaces</h1>
                <p data-aos="fade-up" data-aos-delay="900" data-aos-duration="600" data-aos-easing="ease-in-sine">All NFTs on Cyber either belong to or were minted by their space creator</p>
            </div>
            <div className='mt-5'>
                <ul data-aos="fade-down" data-aos-delay="600" data-aos-duration="800" data-aos-easing="ease-in-sine" className='md:flex'>
                    <li className='my-4'> <Link className='transition ease-in-out mx-3 py-1 px-6 border-solid border border-gray-300 rounded-2xl hover:bg-black hover:text-white' to='trending'> 24 Trending</Link></li>

                    <li className='my-4'> <Link className='transition ease-in-out mx-3 py-1 px-6 border-solid border border-gray-300 rounded-2xl hover:bg-black hover:text-white' to='/latest'> Latest Shows </Link></li>

                    <li className='my-4'> <Link className='transition ease-in-out mx-3 py-1 px-6 border-solid border border-gray-300 rounded-2xl hover:bg-black hover:text-white' to='/popular'>Popular Shows </Link></li>

                    <li className='my-4'> <Link className='transition ease-in-out mx-3 py-1 px-6 border-solid border border-gray-300 rounded-2xl hover:bg-black hover:text-white' to='/ingenesis'> In Genesis</Link></li>

                    <li className='my-4'> <Link className='transition ease-in-out mx-3 py-1 px-6 border-solid border border-gray-300 rounded-2xl hover:bg-black hover:text-white' to='/intemple'> In Temple </Link></li>

                    <li className='my-4'> <Link className='transition ease-in-out mx-3 py-1 px-6 border-solid border border-gray-300 rounded-2xl hover:bg-black hover:text-white' to='/invoid'>In Void </Link></li>

                    <li className='my-4'> <Link className='transition ease-in-out mx-3 py-1 px-6 border-solid border border-gray-300 rounded-2xl hover:bg-black hover:text-white' to='/bayc'> BAYC</Link></li>
                </ul>
            </div>
        </div>
    );
};

export default Header;