import React from 'react';
import Navbar from '../Components/Navbar';
import Header from '../Components/Header';
import MiniAbout from '../Components/MiniAbout';
import Portfolio from '../Components/Portfolio';
import '../App.css';

const Home = () => {
    return (
        <section>
            <Header></Header>
            <Navbar></Navbar>
            <MiniAbout></MiniAbout>
            <Portfolio></Portfolio>
        </section>
    );
};

export default Home;