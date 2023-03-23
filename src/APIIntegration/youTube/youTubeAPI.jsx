import React, {useState, useEffect} from "react";
import "./youTube.css"
// import config from "./config";

const Youtubeapi = () => {
  const [youTubeVideos, setVideo] = useState([]);

      useEffect(() => {
          fetch("https://www.googleapis.com/youtube/v3/search?key=AIzaSyBVNeeA6NT66uI-rZicJdPgqkKIjO3K12I&channelId=UCE_M8A5yxnLfW0KghEeajjw&part=snippet,id&order=date&maxResults=9")
          .then((response) => response.json())
          .then((data) => {
              const youTubeVideosData = data.items;

              setVideo( youTubeVideosData);
            })
            ;
      },[])

      console.log(youTubeVideos);
    return (
    <div>
      <div className="allVideosWrapper">
        <div className="container">
          <div className="row h-100 align-items-center justify-content-center text-center">
            <div className="col-12">
            <br/>
            <br/>          
              <div className="title-wraper bold video-title-wrapper">
                Latest Videos
              <br/>
              <br/>              
              </div>
              </div>
              {youTubeVideos.map((singleVideo, i) => {
              let vidId = singleVideo.id.videoId;
              let vidLink = `https://www.youtube.com/watch?v=${vidId}`;
              let videoWrapper = (
                <div key={i} className="col-sm-12 col-md-6 col-lg-4">
                  <div className="singleVideoWrapper">
                    <div className="videoThumbnail">
                      <a href={vidLink} target="_blank">
                        <img src={singleVideo.snippet.thumbnails.high.url} />
                      </a>
                    </div>
                    <div className="videoInfoWrapper">
                      <div className="videoTitle">
                        <a href={vidLink} target="_blank">
                          {singleVideo.snippet.title}
                        </a>
                      </div>
                      <div className="videoDesc">
                        {singleVideo.snippet.description}
                      </div>
                    </div>
                  </div>
                </div>
              );
              return videoWrapper;
              })}
              </div>
            </div>
          </div>
        </div>
      
    
  );
}

export default Youtubeapi;
