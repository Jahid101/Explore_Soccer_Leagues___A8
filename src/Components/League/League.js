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

    const { strGender, strBanner, strLogo, strCountry, intFormedYear, strLeague, strSport, strDescriptionEN, strDescriptionES } = league;

    let gender;
    let genderImg;
    if (league.strGender === 'Male') {
        gender = <p><FontAwesomeIcon className="mr-2" icon={faMars} />Gender : {strGender}</p>
        genderImg = <img className="genderImg w-100" src={malePic} alt="" />
    }
    else if (league.strGender === 'Female') {
        gender = <p><FontAwesomeIcon className="mr-2" icon={faVenus} />Gender : {strGender}</p>
        genderImg = <img className="genderImg w-100" src={femalePic} alt="" />
    }
    else if (league.strGender === 'Mixed') {
        gender = <p><FontAwesomeIcon className="mr-2" icon={faVenus} /><FontAwesomeIcon className="mr-2" icon={faVenus} />Gender : {strGender}</p>
        genderImg = <img className="genderImg w-100" src={femalePic} alt="" />
    }

    const banner = {
        backgroundRepeat: "noRepeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundImage: `url(${strBanner})`
    }

    return (

        <div>
            <div style={banner}>
                <div className="container text-center" >
                    <div>
                        <img className="w-50 mb-5 mt-5 img-fluid logo" src={strLogo} alt="" />
                    </div>
                </div>
            </div>
            <div className="container LeagueBackground">
                <div className="LeagueInfo">
                    <div className="row">
                        <div className="col-md-8 col-sm-12">
                            <h3>{strLeague}</h3>
                            <p><FontAwesomeIcon className="mr-2" icon={faPodcast} />Founded: {intFormedYear}</p>
                            <p><FontAwesomeIcon className="mr-2" icon={faFlag} />County: {strCountry}</p>
                            <p><FontAwesomeIcon className="mr-2" icon={faFutbol} />Sport Type: {strSport}</p>
                            {
                                gender
                            }
                        </div>
                        <div className="col-md-4 col-sm-12">
                            <div>
                                {
                                    genderImg
                                }
                            </div>
                        </div>
                    </div>
                </div>
                <br />
                <p>{strDescriptionEN}</p>
                <p>{strDescriptionES}</p>
            </div>
            <div className="socialIcon">
                <br />
                {
                    <SocialLink lg={league}></SocialLink>
                }
            </div>
        </div>
    );
};

export default League;
