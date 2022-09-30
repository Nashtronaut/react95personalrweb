import { useState } from 'react';
import TabContentHeader from './TabContentHeader';
import skills from '../components/helpers/utils/skills.js';
import {
    Fieldset,
    Tree,
    Button
} from 'react95';


const Skills = () => {
    const allIds = [];

    const getAllIds = (item) => {
        allIds.push(item.id);
        item.items?.forEach(getAllIds);
    }

    skills.forEach(getAllIds);

    const [expanded, setExpanded] = useState([]);

    const handleCollapse = () => {
        setExpanded([]);
    };

    const handleExpand = () => {
        setExpanded([...allIds]);
    };

    return(
        <div>
            <TabContentHeader header="A growing collection" />
            <div style={{display: 'flex', justifyContent: 'space-between'}}>
                <Button disabled={expanded.length === allIds.length} onClick={handleExpand} style={{marginBottom: '0.8rem'}}>Expand All</Button>
                <Button disabled={expanded.length === 0} onClick={handleCollapse} style={{marginBottom: '0.8rem'}}>Collapse All</Button>
            </div>
            
            <Fieldset label="Catalogue" style={{background: 'white', fontWeight: 'bold'}}>
                <Tree tree={skills} expanded={expanded} onNodeToggle={(event, ids) => setExpanded(ids)}/>
            </Fieldset>
        </div>
        
    );
};

export default Skills;