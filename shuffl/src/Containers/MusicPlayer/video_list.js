import React from 'react';
import VideoListItem from './video_list_item';

const VideoList = (props) => {
    const videoItems = props.videos.map((video) => {
        return (
            <VideoListItem
                key={video.etag}
                video={video} 
                addToQueue={props.addToQueue}
                />
        );
    });

    return (
        <ul id="listOfVid" className="col-md-4 list-group">
            {videoItems}
        </ul>
    );
};

export default VideoList;