import React from 'react';
import Navbar from '../Components/Navbar';
import Header from '../Components/Header';
import MiniAbout from '../Components/MiniAbout';
import '../App.css';

const Home = () => {
    return (
        <section>
            <Header></Header>
            <Navbar></Navbar>
            <MiniAbout></MiniAbout>
        </section>
    );
};

export default Home;