import React, { useState, useRef } from "react";
import "./InstagramPosts.styles.scss";
import PostCard from "../../components/PostCard/PostCard";
import { postBanners } from "../../assets/data";

function InstagramPosts() {
    
    const postContainer = useRef(null);
    
    const [scrollLength, setScrollLength] = useState(0);

  return (
    <div className="post-container">
      <div className="posts-header">
        <h2 className="posts-title">INSTAGRAM</h2>
        <p className="posts-subtitle">
          A small river named Duden flows by their place and supplies it with
          the necessary regelialia. It is a paradisematic country, in which
          roasted parts of sentences fly into your mouth.
        </p>
      </div>

      <div className="post-inner-container" ref={postContainer} style={{ transform: `translateX(${scrollLength}px)`}}>
        {postBanners && postBanners.map((img, i) => <PostCard key={i} img={img} />)}
      </div>
    </div>
  );
}

export default InstagramPosts;
