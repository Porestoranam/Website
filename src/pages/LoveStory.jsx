import React from 'react';
import styles from './LoveStory.module.css';

function LoveStory() {
    return (
            <div className={styles.content_wrapper}>
                <div className={styles.describtion_wrapper}>
                    <p className={styles.content_describtion}>
                        A little bit of describtion
                    </p>    
                </div>

                <div className={styles.photos_wrapper}>
                    <ul className={styles.photo_list}>
                        Photos here
                    </ul>
                
                    <ul className={styles.photo_list}>
                
                    </ul>
                        
                    <ul className={styles.photo_list}>
                    
                    </ul>
                </div>
            </div>
    )
}


export default LoveStory
