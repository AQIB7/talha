import React from 'react'
import { InfoSection, Pricing } from '../../components'
import { homeObjFore } from './Data'

const Home = () => {
    return (
        <>
            <Pricing />
            <InfoSection {...homeObjFore} />
        </>
    )
}

export default Home;
