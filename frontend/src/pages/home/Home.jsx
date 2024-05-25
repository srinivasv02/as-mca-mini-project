import React from 'react';
import { Link } from 'react-router-dom';
import MessageContainer from "../../components/messages/MessageContainer";
import Sidebar from "../../components/sidebar/Sidebar";
import NewsPage from "../../components/messages/news"; // Import NewsPage

const Home = () => {
    return (
        <div className='flex sm:h-[450px] md:h-[550px] rounded-lg overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
            <Sidebar />
            <MessageContainer />
            <Link to='/news' className='text-sm  hover:underline hover:text-blue-600 mt-2 inline-block'> {/* Link to news page */}
                View News
            </Link>
        </div>
    );
};

export default Home;
