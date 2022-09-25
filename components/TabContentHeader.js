import Image from 'next/future/image';
import avatar from '../public/img/me.png'
import { 
    Avatar,
    Divider
} from 'react95';

const TabContentHeader = (props) => {

    let header = props.header;
    let initials = props.initials;

    return(
        <div>
            <div style={{display: 'flex', alignItems: 'center'}}>
                <Avatar size={90}><Image src={avatar} height={100}/></Avatar>
                <Divider style={{margin: '0 1rem'}} orientation="vertical" size={50} />
                <p style={{fontWeight: 'bold'}}>{header}</p>
            </div>
            <Divider style={{margin: '1rem 0'}} /> 
        </div>
    );
};

export default TabContentHeader;