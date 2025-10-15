    import React, { useState } from "react";
import ReactPlayer from "react-player";

const VideoPlayer = () => {
  const [url, setUrl] = useState("");
  const [playUrl, setPlayUrl] = useState("");

  const handlePlay = () => {
    setPlayUrl(url);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "30px" }}>
      <h2>🎥 Livestream Player</h2>

      <input
        type="text"
        placeholder="Enter RTSP or HLS (m3u8) URL"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        style={{
          padding: "10px",
          width: "60%",
          border: "1px solid #ccc",
          borderRadius: "8px",
          marginBottom: "10px",
        }}
      />

      <br />
      <button
        onClick={handlePlay}
        style={{
          padding: "10px 20px",
          backgroundColor: "#007bff",
          color: "#fff",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
        }}
      >
        Play Stream
      </button>

      <div style={{ marginTop: "20px", display: "flex", justifyContent: "center" }}>
        {playUrl && (
          <ReactPlayer
            url={"https://www.youtube.com/watch?v=dQw4w9WgXcQ"}
            playing ={true}
            controls
            width="750px"
            height="405px"
          />
        )}
      </div>
    </div>
  );
};



export default VideoPlayer;
