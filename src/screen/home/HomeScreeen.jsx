// import AppHeader from '../../component/home/header';
import AppHeader from '../../component/home/header';
import AppHeroBanner from '../../component/home/hero_banner';
import AppOpenning from '../../component/home/opening_hour';
import AppPopularDrink from '../../component/home/popular_drink';
// import AppCareer from '../component/home/career';
import AppCareer from'../../component/home/career';
import AppFooter from '../../component/home/footer';
import React from 'react';
import '../../App.css';
export default function AppHomeScreen() {
    return (
        <div>
            <header>
                <AppHeader />
            </header>

            <main>
                <AppHeroBanner />
                <AppOpenning />
                <AppPopularDrink />
                <AppCareer />
            </main>
            <footer>
                <AppFooter />
            </footer>
        </div>
    ) 
}