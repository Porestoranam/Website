import React from 'react'

import styles from './Contact.module.css'

function Contact() {
    return (
        <div class={styles.content_wrapper}>
            <div className={styles.describtion_wrapper}>
                <p className={styles.content_describtion}>
                    A little bit of describtion
                </p>    
            </div>
           <div className={styles.forms_wrapper}>
                <form className={styles.decor}>
                    <div className={styles.form_inner}>
                        <h3 className={styles.contact_text}>Contact me</h3>
                        <input className={styles.enter_form} type="text" placeholder="First name"/>
                        <input className={styles.enter_form} type="email" placeholder="Second name"/>
                        <input className={styles.enter_form} type="text" placeholder="Phone number"/>
                        <textarea placeholder="Message..." rows="3"></textarea>
                        <input className={styles.form_submit} type="submit" value="Submit"/>
                    </div>
                </form>
           </div>
        </div>
    )
}

export default Contact
