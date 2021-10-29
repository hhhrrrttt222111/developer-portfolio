import React, { useContext } from 'react';

import './Gallery.css';
import { ThemeContext } from '../../contexts/ThemeContext';
import { aboutData } from '../../data/aboutData'



function Gallery() {

    const { theme } = useContext(ThemeContext);
    return (
        <div className="about" id="about" style={{backgroundColor: theme.secondary}}>
            
            <div className="about-body">
                <div className="about-description">
                    <h2 style={{color: theme.primary}}>Gallery Name</h2>
                   
                </div>
              

                <div ID="Emerald" data-nanogallery2='{
                 "flickrAPIKey": "c4822dff2dd7850b95dba9803e46809b",
        "userID": "194247040@N07",
        "kind": "flickr",
        "photoset": "72157720067007893",
        "thumbnailOpenOriginal": true,
        "thumbnailWidth": "auto",
        "thumbnailHeight": "300",
        "thumbnailBorderVertical": 1,
        "thumbnailBorderHorizontal": 1,
        "colorScheme": {
          "thumbnail": {
            "background": "rgba(0,0,0,1)"
          }
        },
        "thumbnailLabel": {
          "position": "overImageOnBottom",
          "display": false
        },
        "thumbnailHoverEffect2": "imageScale150",
        "thumbnailAlignment": "center",
        "thumbnailGutterWidth": 1,
        "thumbnailGutterHeight": 1,
        "thumbnailOpenImage": true
      }'>

        </div>
            </div>
        </div>

    )
}

export default Gallery
