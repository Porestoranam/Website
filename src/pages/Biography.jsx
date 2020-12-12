import React from 'react';

import styles from './Biography.module.css'

function Biography() {
    return (
        <div class={styles.content_wrapper}>
            <article class={styles.biography_article}>
                <h1 class={styles.Biography_header}>
                    Biography
                </h1>
                <p class={styles.biography_text1}>
                    Lera Agbash is a russian photographer, painter and disigner
                </p>
                
            </article>
        </div>
    )
}

export default Biography;