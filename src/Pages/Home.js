import React from 'react';
import Header from '../Components/Header';
import Navbar from '../Components/Navbar';
import MiniAbout from '../Components/MiniAbout';
import Portfolio from '../Components/Portfolio';
import Skills from '../Components/Skills';
import Footer from '../Components/Footer';
import '../App.css';

const Home = () => {
    return (
        <section>
            <Header></Header>
            <Navbar></Navbar>
            <MiniAbout></MiniAbout>
            <Portfolio></Portfolio>
            <Skills></Skills>
            <Footer></Footer>
        </section>
    );
};

export default Home;