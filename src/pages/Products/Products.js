import React from 'react'
import { InfoSection, Pricing } from '../../components'
import { homeObjFore, homeObjThree, homeObjTwo } from './Data'

const Home = () => {
    return (
        <>
            <InfoSection {...homeObjTwo} />
            <InfoSection {...homeObjThree} />
            <Pricing />
            <InfoSection {...homeObjFore} />
        </>
    )
}

export default Home;
