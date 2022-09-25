import TabContentHeader from "./TabContentHeader";
import { Button } from 'react95';
const Resume = () => {
    return(
        <div>
            <TabContentHeader header="Get a copy of my resume!" initials="R" />
            <form style={{display: 'flex', justifyContent: 'center'}} method="get" action="../Cover-Letter-Resume-Nash-Boisvert.pdf">
                <Button type="submit">Click me!</Button>
            </form>
        </div>
    );
};

export default Resume;