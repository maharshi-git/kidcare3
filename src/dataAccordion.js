import React, { useState } from 'react';
import { Tab, Nav } from 'react-bootstrap';

import {VaccineZeroToSix, VaccineSixMToOneY} from './editableList';

import EditableTable from './EditableTable'

function FourTabBars({ tabs }) {
    const [activeTab, setActiveTab] = useState(0);

    const handleSelect = (selectedIndex) => {
        setActiveTab(selectedIndex);
    };

    tabs = [{ "title": "1 year - 1.5 years", "content": <EditableTable></EditableTable> },
    { "title": "0 - 6 months", "content": <VaccineZeroToSix></VaccineZeroToSix> }, 
    { "title": "6 months - 1 year", "content": <VaccineSixMToOneY></VaccineSixMToOneY> },
    
    
    // { "title": "6 months to 1 year", "content": <EditableList></EditableList> },
    // { "title": "1 year to 1.5 year", "content": <EditableList></EditableList> }
]

    return (
        <Tab.Container activeKey={activeTab} onSelect={handleSelect}>
            <Nav variant="tabs">
                {tabs.map((tab, index) => (
                    <Nav.Item key={index}>
                        <Nav.Link eventKey={index}>
                            {tab.title}
                        </Nav.Link>
                    </Nav.Item>
                ))}
            </Nav>
            <Tab.Content>
                {tabs.map((tab, index) => (
                    <Tab.Pane key={index} eventKey={index}>
                        {tab.content}
                    </Tab.Pane>
                ))}
            </Tab.Content>
        </Tab.Container>
    );
}

export default FourTabBars;
