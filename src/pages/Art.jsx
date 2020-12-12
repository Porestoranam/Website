import React from 'react';
import styles from './Art.module.css'

function Art() {
    return (
        <div>
            <div className={styles.content_wrapper}>
                <div className={styles.describtion_wrapper}>
                    <p className={styles.content_describtion}>
                        A little bit of describtion
                    </p>
                </div>
                <div className= {styles.photos_wrapper}>
                    <ul className={styles.photo_list}>
                        <img src="101.png" class ={styles.photo} alt=""/>
                        <img src="104.png" class ={styles.photo} alt=""/>
                    </ul>
                
                    <ul className={styles.photo_list}>
                        <img src="102.png" class ={styles.photo} alt=""/>
                        <img src="105.png" class ={styles.photo} alt=""/>
                    </ul>
                        
                    <ul className={styles.photo_list}>
                        <img src="103.png" class ={styles.photo} alt=""/>
                    </ul>
                </div>
            </div>
        </div>
        
    )
}

export default Art;