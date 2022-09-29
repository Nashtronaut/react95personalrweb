import Image from 'next/future/image';
import avatar from '../public/img/me.webp'
import { 
    Avatar,
    Divider,
    Tooltip
} from 'react95';

const TabContentHeader = (props) => {

    let header = props.header;
    let initials = props.initials;

    return(
        <div>
            <div style={{display: 'flex', alignItems: 'center'}}>
                <Tooltip text='me.jpg' enterDelay={200} leaveDelay={500}>
                    <Avatar size={90}><Image src={avatar} height={100} width={100} alt="me" /></Avatar>
                </Tooltip>
                <Divider style={{margin: '0 1rem'}} orientation="vertical" size={50} />
                <p style={{fontWeight: 'bold'}}>{header}</p>
            </div>
            <Divider style={{margin: '1rem 0'}} /> 
        </div>
    );
};

export default TabContentHeader;