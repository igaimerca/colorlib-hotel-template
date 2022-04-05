import React from 'react';
import "./PostCard.scss";
import { FaInstagram } from "react-icons/fa";

function PostCard({img}) {
    return (
        <div class="post-card">
                <img src={img} alt="Image" class="post-banner" />
            <a class="instagram-icon">
                <FaInstagram size="35" color="#fff" />
            </a>
        </div>
    )
}

export default PostCard