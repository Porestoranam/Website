import React from 'react';

import styles from './Blog.module.css'

function Blog() {
    return (
            <div className={styles.content_wrapper}>
                <div className={styles.main_column_wrapper}>
                    <img src="106.png" alt="photo"/>
                </div>

                <h2 className={styles.header_describtion}>
                    Together
                </h2>

                <p className={styles.text_describtion}>
                    November, 2019  
                </p>
                <p className={styles.text_describtion}>
                    Describtion
                </p>
            </div>
    )
}

export default Blog;