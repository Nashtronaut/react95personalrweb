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
                <Avatar size={50} style={{background: '#008080', color: 'white'}}>{initials}</Avatar>
                <Divider style={{margin: '0 1rem'}} orientation="vertical" size={50} />
                <p style={{fontWeight: 'bold'}}>{header}</p>
            </div>
            <Divider style={{margin: '1rem 0'}} /> 
        </div>
    );
};

export default TabContentHeader;