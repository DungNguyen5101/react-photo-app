import React from 'react';
import PropTypes from 'prop-types';
import './Header.scss'
import { Col, Container, Row } from 'reactstrap';
import { NavLink } from 'react-router-dom';

Header.propTypes = {
    
};

function Header(props) {
    const navLinkClass = ({isActive}) => {
        return isActive ? "header__link header__link--active" : "header__link"
    }
    return (
        <header className="header">
            <Container>
                <Row className='justify-content-between'>
                    <Col xs='auto'>
                        <a 
                            href="https://www.facebook.com/profile.php?id=100012710771814" 
                            className="header__link header__title"
                            target='_blank'
                            rel='noopener noreferrer'
                        >
                            Photo App
                        </a>
                    </Col>

                    <Col xs='auto'>
                        <NavLink 
                            to='/photos'
                            className={navLinkClass}
                        >
                            Redux Project
                        </NavLink>
                    </Col>
                </Row>
            </Container>
        </header>
    );
}

export default Header;