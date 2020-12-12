import React from 'react'

import styles from './Categories.module.css'
function Categories({items}) {
    return (
        <div className={styles.first_list}>
            <nav className="intro__nav">
                        <ul className={styles.intro__list_first}>
                            {items && items.map((name) => (<li key = {name} className={styles.intro__section}>
                                <a key = {name} href="#!" className={styles.intro__link}>{name}</a>
                            </li>))}
                        </ul>
            </nav>
        </div>
    )
}

export default Categories;
