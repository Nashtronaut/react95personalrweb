import { useState } from 'react';
import TabContentHeader from './TabContentHeader';
import {
    Fieldset,
    Tree,
    Button
} from 'react95';


const catalogue = [
    {
        id: 'javascript',
        label: 'Javascript',
        items: [
            {
                id: 'vanilla',
                label: 'Vanilla'
            },
            {
                id:'react',
                label: 'React',
                items: [
                    {
                        id: 'vue.js',
                        label: 'Vue.js'
                    },
                    {
                        id: 'next.js',
                        label: 'Next.js'
                    },
                    {
                        id: 'angular',
                        label: 'Angular',
                    },
                    {
                        id: 'materialUI',
                        label: 'Material UI',
                    },
                    {
                        id: 'grommet',
                        label: 'Grommet'
                    }
                ]
            }
        ]
    },
    {
        id: 'Csharp',
        label: 'C#',
        items: [
            {
                id: 'dotnet',
                label: '.NET family',
                items: [
                    {
                        id: 'blazor',
                        label: 'Blazor'
                    },
                    {
                        id: 'razor',
                        label: 'Razor'
                    },
                    {
                        id: 'maui',
                        label: 'MAUI'
                    },
                    {
                        id: 'entity',
                        label: 'Entity Framework'
                    }
                ]
            }
        ]
    },
    {
        id: 'python',
        label: 'Python3',
        items: [
            {
                id: 'django',
                label: 'Django'
            },
            {
                id: 'flask',
                label: 'Flask'
            }
        ]
    },
    {
        id: 'database',
        label: 'Database',
        items: [
            {
                id: 'SQL',
                label: 'SQL',
                items: [
                    {
                        id:'mysql',
                        label: 'MySQL'
                    },
                    {
                        id:'sqlite',
                        label: 'SQLite'
                    },
                    {
                        id: 'mssql',
                        label: 'MSSQL'
                    },
                    {
                        id: 'postgres',
                        label: 'PostgreSQL'
                    },
                    {
                        id: 'oracle',
                        label: 'Oracle'
                    },
                    {
                        id: 'sqlserver',
                        label: 'SQL Server'
                    }
                ]
            },
            {
                id: 'no-sql',
                label: 'No SQL',
                items: [
                    {
                        id: 'mongo',
                        label: 'MongoDB'
                    },
                    {
                        id:'apache',
                        label: 'Apache'
                    },
                    {
                        id: 'firebase',
                        label: 'Firebase'
                    }
                ]
            }
        ]
    },
    {
        id: 'linux',
        label: 'Linux'
    }
]

const Skills = () => {
    const allIds = [];

    const getAllIds = (item) => {
        allIds.push(item.id);
        item.items?.forEach(getAllIds);
    }

    catalogue.forEach(getAllIds);

    const [expanded, setExpanded] = useState([]);

    const handleCollapse = () => {
        setExpanded([]);
    };

    const handleExpand = () => {
        setExpanded([...allIds]);
    };

    return(
        <div>
            <TabContentHeader header="A growing collection of aquired skills..." initials="SK" />
            <div style={{display: 'flex', justifyContent: 'space-between'}}>
                <Button onClick={handleExpand} style={{marginBottom: '0.8rem'}}>Expand All</Button>
                <Button onClick={handleCollapse} style={{marginBottom: '0.8rem'}}>Collapse All</Button>
            </div>
            
            <Fieldset label="Catalogue" style={{background: 'white', fontWeight: 'bold'}}>
                <Tree tree={catalogue} expanded={expanded} onNodeToggle={(event, ids) => setExpanded(ids)}/>
            </Fieldset>
        </div>
        
    );
};

export default Skills;