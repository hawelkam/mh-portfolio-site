import React, { Component } from 'react'
import { Tab } from 'react-bootstrap'
import { faBolt, faCog } from '@fortawesome/free-solid-svg-icons'
import ExperienceTabSection from './ExperienceTabSection'
import ExperienceTabExtension from './ExperienceTabExtension'

export class ExperienceTab extends Component {
    createList = (isOdd, data) => (
        <ul>
            {data.filter((element, index) => 
                index % 2 === isOdd 
            ).map(element => (
                <li key={element}>{element}</li>
            ))}
        </ul>
    )

    render() {
        let { key, skills, tools, experience } = this.props.data
        return (
            <Tab.Pane eventKey={key} className="fade skills__tab">
                <ExperienceTabSection title="SKILLS" icon={faBolt} data={skills} />
                <hr/>
                <ExperienceTabSection title="TOOLS" icon={faCog} data={tools} />
                <hr/>
                <ExperienceTabExtension experience={experience} />
            </Tab.Pane>
        )
    }
}

export default ExperienceTab
