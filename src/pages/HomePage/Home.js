import React from 'react'
import { InfoSection, Pricing } from '../../components'
import { homeObjFore, homeObjOne, homeObjThree, homeObjTwo } from './Data'

const Home = () => {
    return (
        <>
            <InfoSection {...homeObjOne} />
            <InfoSection {...homeObjTwo} />
            <InfoSection {...homeObjThree} />
            <Pricing />
            <InfoSection {...homeObjFore} />
        </>
    )
}

export default Home;
