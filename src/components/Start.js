import React, { Component } from 'react';
import { Container, Card, Button, Col, Row, Form, ProgressBar } from 'react-bootstrap'
import Image from 'react-bootstrap/Image'
import entry from "../static/img/gaming.jpg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRocket, faAngleDoubleRight, faAngleDoubleLeft } from '@fortawesome/free-solid-svg-icons'

import { Link } from 'react-router-dom'

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as startActions from "../redux/actions/startActions"

const element = <FontAwesomeIcon icon={faRocket} />
const arrowRight = <FontAwesomeIcon icon={faAngleDoubleRight} />
const arrowLeft = <FontAwesomeIcon icon={faAngleDoubleLeft} />



class Start extends Component {

    render() {
        
        console.log(this.props.difficltyLevel.Beginner)
        return (
            <div className="start-bg">


                <Card className="card-position card-opacity  col-lg-6 mr-auto ml-auto">
                    <Card.Header className="text-center bg-transparent">
                        <h1 className="text-primary">Welcome</h1>
                        <h1 className="text-primary ">Answer To Win</h1>
                    </Card.Header>
                    <Card.Body>


                        <Form>
                            <Form.Group as={Row}>
                                <Col className="mt-lg-1" lg="2">
                                    <Form.Label className="text-primary font-weight-bold">Username</Form.Label>
                                </Col>

                                <Col lg="7">
                                    <Form.Control type="text" placeholder="Enter Username" />
                                </Col>
                            </Form.Group>
                            {/* <Form.Group controlId="formBasicRange">
                                    <Form.Label>Range</Form.Label>
                                    <Form.Control type="range" />
                                </Form.Group> */}
                            {/* <Form.Group as={Row}>
                                    <Form.Label className="text-primary"  ></Form.Label>
                                </Form.Group> */}
                        </Form>


                        <Row>
                            <Col className="mb-2 mt-lg-3" lg="6">
                                
                                <ProgressBar className="progressbar-height" >

                                    <ProgressBar variant="success" now={this.props.difficltyLevel["Beginner"]} key={1} />
                                    <ProgressBar variant="primary" now={this.props.difficltyLevel["Medium"]} key={2} />
                                    <ProgressBar variant="warning" now={this.props.difficltyLevel["Hard"]} key={3} />
                                    <ProgressBar variant="danger" now={this.props.difficltyLevel["VeryHard"]} key={4} />
                                </ProgressBar>
                            </Col>
                            <Col className="text-center" lg="4">
                                <Button className="mr-2" onClick={()=> this.props.actions.decreaseDifficultyLevel(this.props.difficltyLevel)} >{arrowLeft}</Button>
                                <Button className="ml-2 danger-dark" onClick={()=> this.props.actions.increaseDifficultyLevel(this.props.difficltyLevel)}>{arrowRight}</Button>
                            </Col>
                        </Row>


                        







                        <Card.Text>
                            With supporting text below as a natural lead-in to additional content.
                        </Card.Text>
                        <Link to={"/questions"}>
                            <Button style={{ display: 'table', margin: '0 auto' }}>
                                {element} start game
                        </Button>
                        </Link>
                    </Card.Body>
                </Card>




            </div>
        )
    }
}

function mapStateToProps(state){
    console.log("dddddddd")
    return{
        difficltyLevel:state.startReducer
    }
}
function mapDispatchToProps(dispatch){
    return{
        actions:{
            increaseDifficultyLevel: bindActionCreators(startActions.increaseDifficultyLevel, dispatch),
            decreaseDifficultyLevel: bindActionCreators(startActions.decreaseDifficultyLevel,dispatch)
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Start);