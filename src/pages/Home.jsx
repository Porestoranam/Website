import React from 'react';

import {Categories, Title, Describtion} from '../components';
import styles from './Home.module.css'

function Home(){
    return (
    <main className="main">
        <section className= {styles.intro}>
                <div className={styles.references__wrapper}>
                    <Title text= 'Agbash Studio'/>
                    <Describtion text='Designer, photographer, painter'/>
                    <Categories items={['BIOGRAPHY', 'LOVE STORY', 'CONTACTS']}/>
                    <Categories items={['ART', 'WEDDING', 'BLOG']}/>
                </div>
        </section>
    </main>
    )
}

export default Home;