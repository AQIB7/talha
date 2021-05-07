import React from 'react'
import { Button } from '../../globalStyles'
import { GiCrystalBars, GiCutDiamond, GiRock } from 'react-icons/gi'
import { IconContext } from 'react-icons'
import {
    PricingSection,
    PricingWrapper,
    PricingHeading,
    PricingContainer,
    PricingCard,
    PricingCardInfo,
    PricingCardIcon,
    PricingCardPlan,
    PricingCardCost,
    PricingCardLength,
    PricingCardFeatures,
    PricingCardFeature
    } from './Pricing.element'

const Pricing = () => {
    return (
        <>
            <IconContext.Provider value={{color: '#a9b3c1', size: 64}}>
                <PricingSection>
                    <PricingWrapper>
                        <PricingHeading>Our Services</PricingHeading>
                        <PricingContainer>
                            <PricingCard to='/sign-up'>
                                <PricingCardInfo>
                                    <PricingCardIcon>
                                        <GiRock />
                                    </PricingCardIcon>
                                    <PricingCardPlan>Starter Pack</PricingCardPlan>
                                    <PricingCardCost>$99.99</PricingCardCost>
                                    <PricingCardLength>Per month</PricingCardLength>
                                    <PricingCardFeatures>
                                        <PricingCardFeature>100 New Users</PricingCardFeature>
                                        <PricingCardFeature>$10,000 Budget</PricingCardFeature>
                                        <PricingCardFeature>Retargeting analytics</PricingCardFeature>
                                    </PricingCardFeatures>
                                    <Button primary>Choose Plan</Button>
                                </PricingCardInfo>
                            </PricingCard>
                            <PricingCard to='/sign-up'>
                                <PricingCardInfo>
                                    <PricingCardIcon>
                                        <GiCrystalBars />
                                    </PricingCardIcon>
                                    <PricingCardPlan>Starter Pack</PricingCardPlan>
                                    <PricingCardCost>$99.99</PricingCardCost>
                                    <PricingCardLength>Per month</PricingCardLength>
                                    <PricingCardFeatures>
                                        <PricingCardFeature>100 New Users</PricingCardFeature>
                                        <PricingCardFeature>$10,000 Budget</PricingCardFeature>
                                        <PricingCardFeature>Retargeting analytics</PricingCardFeature>
                                    </PricingCardFeatures>
                                    <Button primary>Choose Plan</Button>
                                </PricingCardInfo>
                            </PricingCard>
                            <PricingCard to='/sign-up'>
                                <PricingCardInfo>
                                    <PricingCardIcon>
                                        <GiCutDiamond />
                                    </PricingCardIcon>
                                    <PricingCardPlan>Starter Pack</PricingCardPlan>
                                    <PricingCardCost>$99.99</PricingCardCost>
                                    <PricingCardLength>Per month</PricingCardLength>
                                    <PricingCardFeatures>
                                        <PricingCardFeature>100 New Users</PricingCardFeature>
                                        <PricingCardFeature>$10,000 Budget</PricingCardFeature>
                                        <PricingCardFeature>Retargeting analytics</PricingCardFeature>
                                    </PricingCardFeatures>
                                    <Button primary>Choose Plan</Button>
                                </PricingCardInfo>
                            </PricingCard>
                        </PricingContainer>
                    </PricingWrapper>
                </PricingSection>
            </IconContext.Provider>
        </>
    )
}

export default Pricing
