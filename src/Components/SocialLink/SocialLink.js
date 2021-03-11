import React from 'react';
import facebook from '../../icon/Facebook.png';
import twitter from '../../icon/Twitter.png';
import youtube from '../../icon/YouTube.png';

const SocialLink = (props) => {

    const { strFacebook, strTwitter, strYoutube } = props.lg;

    let urlFacebook = `http://${strFacebook}`;
    let urlTwitter = `http://${strTwitter}`;
    let urlYoutube = `http://${strYoutube}`;

    return (
        
        <div className="">
            <a href={urlFacebook} target="_blank" rel="noopener noreferrer">
                <img src={facebook} alt="" />
            </a>
            <a href={urlTwitter} target="_blank" rel="noopener noreferrer">
                <img src={twitter} alt="" />
            </a>
            <a href={urlYoutube} target="_blank" rel="noopener noreferrer">
                <img src={youtube} alt="" />
            </a>
        </div>
    );
};

export default SocialLink;
