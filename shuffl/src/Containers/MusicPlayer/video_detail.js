import React from 'react';

const VideoDetail = (props) => {
    const video = props.video;
    if (!video) {
        return <div>Loading....</div>
    }

    const videoId = video.id.videoId;
    const url = `https://www.youtube.com/embed/${videoId}`;
    console.log(videoId);

    const videoOptions = {
        playerVars: { // https://developers.google.com/youtube/player_parameters
            autoplay: 1,
            controls: 0,
            rel: 0,
            showinfo: 0
        }
    };

    return (

        <div id="vidContainer" className="video-detail col-md-8">
            <div className="embed-responsive embed-responsive-16by9">
                <iframe className="embed-responsive-item" src={url}></iframe>
            </div>
            <div className="details">
                <div>{video.snippet.title}</div>
                {/*<div>{video.snippet.description}</div>*/}
            </div>
        </div>
    );
};

export default VideoDetail;