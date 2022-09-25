import { useState } from "react";
import TabContentHeader from "./TabContentHeader";
import {
    Fieldset,
    Anchor,
    Divider,
    TextField,
    Button
} from 'react95';

const Contact = () => {

    const [contactSent, setContactSent] = useState('false');

    const handleSend = (e) => {
        e.preventDefault();
        setContactSent('true');
    };

    return(
        <div>
            <TabContentHeader header="Give me a ring!" initials="C"/>
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
            <form onSubmit={handleSend} className="contactForm" display={!contactSent ? "block" : "none"} type="post" action="https://public.herotofu.com/v1/f7460290-3cae-11ed-a10f-d1a38bd15d37">
                <div style={{display: 'flex', flexDirection: 'column', gap: '0.5rem'}}>
                    <TextField name="Email" id="email" type='email' placeholder="Your email address..." required />
                    <TextField name="Name" id="name" type="text" placeholder="Your Name..." required />
                    <TextField name="Message" id="message" type="text" placeholder="Message..." multiline rows={10} required />
                </div>
                <div style={{display: 'flex', gap: '0.3rem', justifyContent: 'end', marginTop: '3rem'}}>
                    <Button type='submit'>Send!</Button>
                    <Button type='reset'>Clear</Button>
                </div>
            </form>
            <div display={contactSent ? "block" : "none"}></div>
        </div>
    );
};

export default Contact;
