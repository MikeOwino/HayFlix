import './App.css';
import {Helmet} from "react-helmet";

export default function App() {
  return (
    <>
      <video
        id="my-video"
        className="video-js"
        controls
        preload="auto"
        poster="https://res.cloudinary.com/weknow-creators/image/upload/v1649428791/wallhaven-0jq55q_gvsk5w.png"
        data-setup
        loop
      >
        <source
          src="https://nw1.seedr.cc/ff_get/1142913621/Tom.and.Jerry.2021.1080p.WEBRip.x264-RARBG.mp4?st=6O1RIDnrrjINif0krlNJgw&e=1649514969"
          type="video/mp4"
        />
      </video>
      <Helmet>
        <script
          src="https://vjs.zencdn.net/5.4.6/video.js"
          type="text/javascript"
        />
      </Helmet>
    </>
  );
}
