import React from 'react';
import VideoListItem from './Video_List-_Item';

const VideoList = (props) => {
  const videoItems = props.videos.map((video) => 
    {return (
      <VideoListItem 
        onVideoSelect={props.onVideoSelect}
        key={video.etag} 
        video={video} /> 
    )
  });

  return (
      <ul className="col-4 list-group">
        { videoItems }
      </ul>
  );
}

export default VideoList;
