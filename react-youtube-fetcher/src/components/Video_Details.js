import React from 'react';
//{video} === props.video
const VideoDetails = ({video}) => {
  if (!video) {
    return <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">Loading...</div>
  }

  const videoId = video.id.videoId;
  const url = `https://www.youtube.com/embed/${videoId}`;
  
  return (
    <div className="video-detail col-8">
      <div className="embed-responsive embed-responsive-16by9">
        <iframe className="embed-responsive-item" title="videoId" src={url}></iframe>
      </div>
      <div className="details">
        <div>{video.snippet.title}</div>
        <div className="descr">{video.snippet.description}</div>
      </div>
    </div>
  )
};

export default VideoDetails;