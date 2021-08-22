import React, { useContext } from 'react';
import {
    Container, 
    Row,
    Col,
} from 'react-bootstrap'
import me from '../../images/me.jpg'
import NavbarContext from '../NavbarContext';
import * as AiIcons from 'react-icons/ai'

const Projects = () => {
    const {state, dispatch} = useContext(NavbarContext)


    return (
        <>
            <div className={state.sidebar ? 'overlay': ''}></div>
            <div className='page-content-wrapper'>
                <Container className='Container'>
                    <Row className='Row' align='center'>
                        <Col className='Col'>
                            <div className='panel' style={{background: 'none'}}>
                                <img src={me} alt='me' className='profile-pic'/>
                            </div>
                            <h1 style={{color: 'white', fontWeight: 'bold', marginBottom: 25}}>Alex Logorz</h1>
                        </Col>
                    </Row>
                    <Row className='Row'>
                        <Col className='Col'>
                            <div className='panel'>
                                <h3>#Projects</h3>
                                <h4>Download a copy of my resume to see recent projects</h4>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    );
};

export default Projects;
