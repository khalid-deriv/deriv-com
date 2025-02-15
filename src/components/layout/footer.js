import React from 'react'
import PropTypes from 'prop-types'
import { Container } from '../containers'
import { LocationContext } from './location-context'
import { DefaultFooter, FooterGrid } from './footer/common/style.js'
import LogoSection from './footer/logo'
import MainLinksSection from './footer/main-links'
import DisclaimerSection from './footer/disclaimer'
import BottomSocialSection from './footer/bottom-social-wrapper'
import { DerivStore } from 'store'
// TODO: (discussion) make footer pure component, and move usage of footer to custom

const Footer = ({ type, is_ppc, is_ppc_redirect, academy }) => {
    const { show_cookie_banner } = React.useContext(LocationContext)
    const { is_eu_country } = React.useContext(DerivStore)

    return (
        <DefaultFooter has_banner_cookie={show_cookie_banner} is_eu_country={is_eu_country}>
            <Container>
                <FooterGrid>
                    <LogoSection type={type} />
                    <MainLinksSection is_ppc={is_ppc} is_ppc_redirect={is_ppc_redirect} />
                    <DisclaimerSection is_academy={academy} />
                    <BottomSocialSection type={type} />
                </FooterGrid>
            </Container>
        </DefaultFooter>
    )
}

Footer.propTypes = {
    academy: PropTypes.bool,
    is_ppc: PropTypes.bool,
    is_ppc_redirect: PropTypes.bool,
    type: PropTypes.string,
}

export default Footer
