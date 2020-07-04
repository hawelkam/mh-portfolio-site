import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const ExperienceTabSectionHeader = ({title, icon}) => {
    return (
        <>
            <h2>{title}</h2>
            <FontAwesomeIcon icon={icon} size="2x"/>
        </>
    )
}

export default ExperienceTabSectionHeader
