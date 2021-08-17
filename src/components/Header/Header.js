import Container from 'components/Container'
import logo from 'img/logo.png';
import React from 'react'
import { Wrapper } from './header.css'

const Header = () => {
    return (
        <Wrapper>
            <Container>
                <div className="df-lc">
                    <img src={logo} alt="img" />
                    <h2>Pilica</h2>
                </div>

            </Container>
        </Wrapper>
    )
}
export default Header;

