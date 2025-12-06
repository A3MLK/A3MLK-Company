import React, { useState } from 'react';
import '../styles/Video.css'; // لو عندك CSS منفصل
import { FaPlay } from 'react-icons/fa';
const Video = ({ videoSrc, description }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className='vidoD'>
    <div className="content">
          <button className="open-video-btn" onClick={() => setOpen(true)}>
        <FaPlay/>
      </button>

      {open && (
        <div className="modal-overlay" onClick={() => setOpen(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={() => setOpen(false)}>×</button>
            <video controls autoPlay className="modal-video">
              <source src={videoSrc} type="video/mp4" />
            </video>
            {description && <p>{description}</p>}
          </div>
        </div>
      )}
    </div>
    </div>
  );
};

export default Video;
