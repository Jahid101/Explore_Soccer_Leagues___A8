import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFlag, faFutbol, faMars, faPodcast, faVenus } from '@fortawesome/free-solid-svg-icons';
import './League.css';
import malePic from '../../photo/male.png';
import femalePic from '../../photo/female.png';
import SocialLink from '../SocialLink/SocialLink';

const League = () => {

    const [league, setLeague] = useState({})

    const { id } = useParams();

    useEffect(() => {
        const url = `https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setLeague(data.leagues[0]))
    }, [id])

    let gender;
    let genderImg;
    if (league.strGender === 'Male') {
        gender = <p><FontAwesomeIcon className="mr-2" icon={faMars} />Gender : {league.strGender}</p>
        genderImg = <img className="genderImg" src={malePic} alt="" />
    }
    if (league.strGender === 'Female') {
        gender = <p><FontAwesomeIcon className="mr-2" icon={faVenus} />Gender : {league.strGender}</p>
        genderImg = <img className="genderImg" src={femalePic} alt="" />
    }

    const banner = {
        backgroundRepeat: "noRepeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundImage: `url(${league.strBanner})`
    }

    return (
        
        <div>
            <div style={banner} className="detailsBanner">
                <img className="logo w-25" src={league.strLogo} alt="" />
            </div>
            <div className="container LeagueBackground">
                <div className="LeagueInfo d-flex">
                    <div>
                        <h3>{league.strLeague}</h3>
                        <p><FontAwesomeIcon className="mr-2" icon={faPodcast} />Founded: {league.intFormedYear}</p>
                        <p><FontAwesomeIcon className="mr-2" icon={faFlag} />County: {league.strCountry}</p>
                        <p><FontAwesomeIcon className="mr-2" icon={faFutbol} />Sport Type: {league.strSport}</p>
                        {
                            gender
                        }
                    </div>
                    <div>
                        {
                            genderImg
                        }
                    </div>
                </div>
                <br />
                <p>{league.strDescriptionEN}</p>
                <p>{league.strDescriptionES}</p>
            </div>
            <div className="socialIcon mb-3">
                <br />
                {
                    <SocialLink lg={league}></SocialLink>
                }
            </div>
        </div>
    );
};

export default League;
