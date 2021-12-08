import React from 'react'
import styled from 'styled-components'
import { graphql, useStaticQuery } from 'gatsby'
import { PlatformSelector, Platform, PlatformDetails } from './_platform_selector'
import { localize } from 'components/localization'
import { Header, QueryImage, Text } from 'components/elements'
import { Container, SectionContainer } from 'components/containers'
import device from 'themes/device.js'
//SVG
import DTraderIcon from 'images/svg/dtrader/dtrader-icon.svg'
import DMT5Icon from 'images/svg/dmt5/dmt5-icon.svg'
import DerivGOIcon from 'images/svg/dmt5/dmt5-icon.svg'
import DerivXIcon from 'images/svg/deriv-x/derivx-logo.svg'
import DBotIcon from 'images/svg/dbot/dbot-icon.svg'
import BinaryBotIcon from 'images/svg/binarybot-icon.svg'
import SmartTraderIcon from 'images/svg/custom/smarttrader.svg'
import APIIcon from 'images/svg/dmt5/dmt5-icon.svg'

const platforms: Array<Platform> = [
    {
        title: 'DTrader',
        icon: DTraderIcon,
        description: 'Our flagship app for trading options, multipliers & spreads.',
        learn_more_link: '#',
    },
    {
        title: 'DMT5',
        icon: DMT5Icon,
        description: 'The all-in-one FX & CFD trading platform.',
        learn_more_link: '#',
    },
    {
        title: 'Deriv GO',
        icon: DerivGOIcon,
        description: 'Our best trading experience on your mobile.',
        learn_more_link: '#',
    },
    {
        title: 'DerivX',
        icon: DerivXIcon,
        description: 'The multi-asset trading platform to fit your style.',
        learn_more_link: '#',
    },
    {
        title: 'DBot',
        icon: DBotIcon,
        description: 'Automate your trading. No coding required.',
        learn_more_link: '#',
    },
    {
        title: 'Binary Bot',
        icon: BinaryBotIcon,
        description: 'Our legacy automated trading platform.',
        learn_more_link: '#',
    },
    {
        title: 'SmartTrader',
        icon: SmartTraderIcon,
        description: 'Our legacy options trading platform.',
        learn_more_link: '#',
    },
    {
        title: 'API',
        icon: APIIcon,
        description: 'Build your own apps with our API.',
        learn_more_link: '#',
    },
]

const query = graphql`
    query {
        platforms_dtrader: file(relativePath: { eq: "home/platforms_dtrader.png" }) {
            ...homePageHeroFadeIn
        }
        platforms_mt5: file(relativePath: { eq: "home/platforms_mt5.png" }) {
            ...fadeIn
        }
        platforms_deriv_go: file(relativePath: { eq: "home/platforms_deriv_go.png" }) {
            ...fadeIn
        }
        platforms_derivx: file(relativePath: { eq: "home/platforms_derivx.png" }) {
            ...fadeIn
        }
        platforms_dbot: file(relativePath: { eq: "home/platforms_dbot.png" }) {
            ...fadeIn
        }
        platforms_binary_bot: file(relativePath: { eq: "home/platforms_binary_bot.png" }) {
            ...fadeIn
        }
        platforms_smarttrader: file(relativePath: { eq: "home/platforms_smarttrader.png" }) {
            ...fadeIn
        }
        platforms_api: file(relativePath: { eq: "home/platforms_api.png" }) {
            ...fadeIn
        }
    }
`

const StyledSection = styled(SectionContainer)`
    background: #f9fbff;
`

const ContentWrapper = styled(Container)`
    width: 100%;

    h2 {
        text-align: center;
    }
`

const SubTitle = styled(Text)`
    @media ${device.tablet} {
        margin: 1.6rem;
        text-align: center;
    }
`

const MainContent = styled(Container)`
    height: 100%;
    width: 100%;
    padding: 5rem;
    padding-right: 0;
    display: flex;
    justify-content: space-between;

    @media ${device.tablet} {
        padding: 1rem;
        padding-top: 3rem;
        flex-direction: column;
        justify-content: center;
    }
`

const SelectorContainer = styled.div`
    width: 35vw;
    padding-right: 3rem;

    @media ${device.tablet} {
        display: none;
    }
`

const PlatformImageWrapper = styled.div`
    width: 65vw;
    display: flex;
    align-items: flex-end;
    margin-right: 3rem;

    @media ${device.tablet} {
        width: 90vw;
        margin-right: 0;
    }
`

const MobileContainer = styled.div`
    @media ${device.desktop} {
        display: none;
    }
    @media ${device.tablet} {
        display: flex;
        margin-top: 2rem;
    }
`

const OurPlatforms = (): React.ReactElement => {
    // const {
    //     platforms_dtrader,
    //     platforms_mt5,
    //     platforms_smarttrader,
    //     platforms_dbot,
    //     platforms_binary_bot,
    //     platforms_deriv_go,
    //     platforms_derivx,
    //     platforms_api,
    // }

    const [selectedIndex, setSelectedIndex] = React.useState(3)

    const images = useStaticQuery(query)
    return (
        <StyledSection height="1065px">
            <ContentWrapper direction="column">
                <Header as="h2" size="4.8rem" type="heading-1" weight="700">
                    {localize('Our platforms')}
                </Header>
                <SubTitle size="2.4rem">
                    {localize(
                        'Choose from 8 powerful platforms — each designed with your needs in mind',
                    )}
                </SubTitle>
                <MainContent>
                    <SelectorContainer>
                        <PlatformSelector
                            platforms={platforms}
                            selected_index={selectedIndex}
                            selectIndex={setSelectedIndex}
                        />
                    </SelectorContainer>
                    <PlatformImageWrapper>
                        <QueryImage
                            data={images[Object.keys(images)[selectedIndex]]}
                            alt={Object.keys(images)[selectedIndex]}
                        />
                    </PlatformImageWrapper>
                    <MobileContainer>
                        <PlatformDetails
                            title={platforms[selectedIndex].title}
                            icon={platforms[selectedIndex].icon}
                            description={platforms[selectedIndex].description}
                            learn_more_link={platforms[selectedIndex].learn_more_link}
                        />
                    </MobileContainer>
                </MainContent>
            </ContentWrapper>
        </StyledSection>
    )
}

export default OurPlatforms
