import React, { useContext } from 'react';
import {
    Container, 
    Row,
    Col,
} from 'react-bootstrap'
import me from '../../images/me.jpg'
import NavbarContext from '../NavbarContext';
import * as SiIcons from 'react-icons/si'
import { AiOutlineLink } from 'react-icons/ai'
import { BiCoinStack } from 'react-icons/bi'
import { FcEngineering } from 'react-icons/fc'
import { MdSchool } from 'react-icons/md'

const Home = () => {
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
                                <h3>#About</h3>
                                <p>
                                    Motivated Software Engineer dedicated to improving my skills and continuous learning. On my free time, I share my passion by making coding tutorials on youtube.
                                </p>
                            </div>
                        </Col>
                    </Row>
                    <Row className='Row'>
                        <Col className='Col' md={6}>
                            <div className='panel'>
                                <h3>#Skills</h3>
                                <ul>
                                    <li><FcEngineering className='icon'/>React</li>
                                    <li><FcEngineering className='icon'/>Javascript</li>
                                    <li><FcEngineering className='icon'/>Express</li>
                                    <li><FcEngineering className='icon'/>Node</li>
                                    <li><FcEngineering className='icon'/>Agile/Scrum</li>
                                    <li><FcEngineering className='icon'/>Data structures</li>
                                </ul>
                                <p>... Download my resume for more</p>
                            </div>
                        </Col>
                        <Col className='Col' md={6}>
                            <div className='panel'>
                                <h3>#Links</h3>
                                <ul>
                                    <li><a href='https://www.youtube.com/channel/UCNLn3ObPTFqbf4bS9m0l2hA'><AiOutlineLink className='icon'/>YouTube</a></li>
                                    <li><a href='https://alexlogorz.medium.com/'><AiOutlineLink className='icon'/>Medium</a></li>
                                    <li><a href='https://github.com/alexlogorz'><AiOutlineLink className='icon'/>GitHub</a></li>
                                </ul>
                            </div>
                        </Col>
                    </Row>
                    <Row className='Row'>
                        <Col className='Col'>
                            <div className='panel'>
                                <h3>#Achievments</h3>
                                <ul>
                                    <li><MdSchool className='icon'/>BS in Computer Science</li>
                                    <li><a href='https://www.usf.edu/education/areas-of-study/instructional-technology/programs/graduate-certificates/web-design-certificate.aspx'><AiOutlineLink className='icon'/>Certificate</a></li>
                                </ul>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    );
};

export default Home;
