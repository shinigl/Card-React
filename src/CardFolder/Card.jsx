import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShare, faHeart, faComment } from '@fortawesome/free-solid-svg-icons';
import styles from './Card.module.css';

const Card = (props) => {
  return (
    <div className={styles.card} style={{ backgroundImage: `url(${props.background_url})` }}>
      <div className={styles.content}>
        <div className={styles.poster}>
          <img src={props.poster_url} alt={`${props.title} poster`} />
        </div>
        <div className={styles.details}>
          <h1 className={styles.title}>{props.title}</h1>
          <h2 className={styles.subtitle}>
            {props.year}, {props.director}
          </h2>
          <p className={styles.duration}>
            {props.duration} | {props.genres.join(', ')}
          </p>
          <p className={styles.description}>{props.description}</p>
          <div className={styles.icons}>
            <FontAwesomeIcon icon={faShare} />
            <FontAwesomeIcon icon={faHeart} />
            <FontAwesomeIcon icon={faComment} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
