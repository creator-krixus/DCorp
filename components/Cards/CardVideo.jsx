import React, {useState} from 'react';
import styles from '../../styles/Cards/CardVideo.module.css'

export default function CardVideo({ videoUrl }) {
const [showVideo, setShowVideo] = useState(true);

return (
    <div className={styles.containerVideo}>
    {videoUrl ? (
    <div>
        {showVideo && (
        <iframe
            className={styles.video}
            src={`${videoUrl}?autoplay=1`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
        ></iframe>
        )}
    </div>
        ) : (
        <img
            className={styles.image}
            src="https://elcomercio.pe/resizer/nkT80ZNO1tn-oyEU6p31MzPRuFs=/1200x900/smart/filters:format(jpeg):quality(75)/arc-anglerfish-arc2-prod-elcomercio.s3.amazonaws.com/public/UGOY4ZWJYZHEZPV3TSIIM5FJBE.jpg"
            alt="Poster"
            />
        )}
    </div>
    );
}
