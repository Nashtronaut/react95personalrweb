import { useState } from "react";
import TabContentHeader from "./TabContentHeader";
import handleSubmit from "./api/handleSubmit";
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
                <Fieldset style={{margin: '1rem 0'}} label="Email address">
                    <Anchor href="mailto:nashboisvert1@gmail.com">nashboisvert1@gmail.com</Anchor>
                </Fieldset>
                <Fieldset style={{margin: '1rem 0'}} label="Primary Phone">
                    <Anchor href="tel:780-878-8786">+1 (780) 878 - 8786</Anchor>
                </Fieldset>
            </div>
            <Divider style={{margin: "1rem 0"}}/>

            <form className='contact-form' type="post">
                <div style={{display: 'flex', flexDirection: 'column', gap: '0.5rem'}}>
                    <TextField name="Email" id="email" type='email' placeholder="Your email address..." required />
                    <TextField name="Name" id="name" type="text" placeholder="Your Name or Company..." required />
                    <TextField name="Message" id="message" type="text" placeholder="Message... " multiline rows={10} required />
                </div>
                {contactSent && (
                    <div style={{marginTop: '2rem'}}>
                        <div style={{display: 'flex', justifyContent: 'space-between', alignContent: 'center'}}>
                            <p style={{ textAlign: 'center', margin: '0.5rem 0', fontWeight: 'bold' }}>{feedback}</p>
                            <Button onClick={handleResetMessage} size='sm'>{resetButton}</Button>
                        </div>
                        
                        {loadingBar && (
                            <LoadingIndicator isLoading={loadingBar} />
                        )}
                    </div>
                )}
                {!contactSent && (
                    <div style={{display: 'flex', gap: '0.3rem', justifyContent: 'end', marginTop: '2rem'}}>
                    <Button onClick={handleSubmitListener}>Send!</Button>
                    <Button type='reset'>Clear</Button>
                </div>
                )}
            </form>
        </div>
    );
};

export default Contact;
