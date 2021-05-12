import React from "react";
import PropTypes from "prop-types";
import styled from 'styled-components'
const VideoResponsive = styled.div`
    overflow: hidden;
    padding-bottom: 56.25%;
    position: relative;
    height: 0;
    display:flex;
    flex-direction:column;
    justify-content:flex-end;
    height:428px;
`
const VideoIframe = styled.iframe`
    // left: 35%;
    // top: 20%;
    height: 400px;
    width: 600px;
    // position: absolute;
`

const YoutubeEmbed = ({ embedId }) => (
    <VideoResponsive>
        <VideoIframe
        width="600"
        height="800"
        src={`https://www.youtube.com/embed/${embedId}`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embedded youtube"
        />
    </VideoResponsive>
);

YoutubeEmbed.propTypes = {
  embedId: PropTypes.string.isRequired
};

export default YoutubeEmbed;


  
 