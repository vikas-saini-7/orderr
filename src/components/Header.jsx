import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header class="bg-white shadow-md p-4">
            <div class="container mx-auto flex items-center justify-between">
                <Link to='/'><div class="text-2xl font-semibold text-gray-800">Orderr.</div></Link>
                <div class="flex items-center space-x-4">
                    <div class="relative">
                        <input type="text" placeholder="Search" class="bg-gray-100 border-2 border-gray-300 rounded-lg py-2 px-4 w-48 focus:outline-none focus:border-blue-500" />
                        {/* <button class="absolute right-2 top-2 text-gray-600 hover:text-blue-500">
                        Search
                        </button> */}
                    </div>
                    <Link to='/cart'>
                        <button>
                            Cart
                        </button>
                    </Link>
                </div>
            </div>
        </header>
    );
}

export default Header;
