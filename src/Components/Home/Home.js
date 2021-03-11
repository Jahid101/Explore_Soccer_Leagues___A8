import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';
import './Home.css';

const Home = () => {

    const [leagues, setLeagues] = useState([]);

    useEffect(() => {
        const url = 'https://www.thesportsdb.com/api/v1/json/1/all_leagues.php';
        fetch(url)
            .then(res => res.json())
            .then(data => setLeagues(data.leagues.slice(0,21)))
    }, [])

    return (
        <div className="fluid-container">
            <div>
                <h1 className="banner bannerName"><strong>Explore Soccer Leagues</strong></h1>
            </div>
            <div className="row m-0">
                {
                    leagues.map(league =>
                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <Card league={league}></Card>
                        </div>)
                }
            </div>
        </div>
    );
};

export default Home;
