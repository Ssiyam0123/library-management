import React from 'react';
import Slider from '../components/Slider';
import BookCategories from '../components/BookCategories';
import TopBorrowedBooks from '../components/TopBorrowedBooks';
import FeaturedServices from '../components/FeaturedServices';

const Home = () => {
    return (
        <div>
            <Slider/>
            <BookCategories/>
            <TopBorrowedBooks/>
            <FeaturedServices/>
        </div>
    );
};

export default Home;