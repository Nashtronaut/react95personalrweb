import styles from '../styles/Contact.module.css';
import { useState } from "react";
import TabContentHeader from "./TabContentHeader";
import handleSubmit from "./helpers/api/handleSubmit"
import {
    Fieldset,
    Anchor,
    Divider,
    TextField,
    Button,
    LoadingIndicator
} from 'react95';

const endPoint = 'https://formspree.io/f/xqkjqllq'

const Contact = () => {

    const [contactSent, setContactSent] = useState(false);
    const [feedback, setFeedBack] = useState('');
    const [loadingBar, setLoadingBar] = useState(true);
    const [resetButton, setResetButton] = useState('');

    const handleResetMessage = () => {
        setContactSent(false);
        setFeedBack('');
        setLoadingBar(true);
    };

    const handleSubmitListener = () => {
        const form = document.querySelector('.contact-form');

        setFeedBack('Sending...');
        handleSubmit(form).then((response) => {
            setContactSent(true);
            if (response)
            {
                    setFeedBack('Message Sent! Thanks!');
                    setLoadingBar(false);
                    setResetButton('Send another!');
                    form.reset();
                    return
            } else {
                setFeedBack('Fill out the fields!');
                setLoadingBar(false);
                setResetButton('Try again!');
                form.reset();
                return
            }
        })
    };

    return (
        <div>
            <TabContentHeader header="Give me a ring!" />
            {/* MAKE FLEX BOX SIDE BY SIDE */}
            <div> 
                <Fieldset className={styles.margin} label="Email address">
                    <Anchor href="mailto:nashboisvert1@gmail.com">nashboisvert1@gmail.com</Anchor>
                </Fieldset>
                <Fieldset className={styles.margin} label="Primary Phone">
                    <Anchor href="tel:780-878-8786">+1 (780) 878 - 8786</Anchor>
                </Fieldset>
            </div>
            <Divider className={styles.margin}/>

            <form className='contact-form' type="post">
                <div className={styles.formTextFieldContainer}>
                    <TextField name="Email" id="email" type='email' placeholder="Your email address..." required />
                    <TextField name="Name" id="name" type="text" placeholder="Your Name or Company..." required />
                    <TextField name="Message" id="message" type="text" placeholder="Message... " multiline rows={10} required />
                </div>
                {contactSent && (
                    <div style={{marginTop: '2rem'}}>
                        <div className={styles.feedBack}>
                            <p className={styles.feedBackText}>{feedback}</p>
                            <Button onClick={handleResetMessage} size='sm'>{resetButton}</Button>
                        </div>
                        
                        {loadingBar && (
                            <LoadingIndicator isLoading={loadingBar} />
                        )}
                    </div>
                )}
                {!contactSent && (
                    <div className={styles.btnContainer}>
                    <Button onClick={handleSubmitListener}>Send!</Button>
                    <Button type='reset'>Clear</Button>
                </div>
                )}
            </form>
        </div>
    );
};

export default Contact;
