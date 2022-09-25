import TabContentHeader from "./TabContentHeader";
import styled from "styled-components";
import media from 'styled-media-query'
import {
    Fieldset,
    Anchor,
    Divider,
    TextField,
    Button
} from 'react95';

const Contact = () => {

    const handleSend = (e) => {
        e.preventDefault();
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
            <form>
                <div style={{display: 'flex', flexDirection: 'column', gap: '0.5rem'}}>
                    <TextField type='email' placeholder="Your email address..."/>
                    <TextField placeholder="Subject..."/>
                    <TextField placeholder="Message..." multiline rows={10}/>
                </div>
                <div style={{display: 'flex', gap: '0.3rem', justifyContent: 'end', marginTop: '3rem'}}>
                    <Button onClick={handleSend}>Send!</Button>
                    <Button type='reset'>Clear</Button>
                </div>
            </form>
            
            

        </div>
    );
};

export default Contact;
