import React, { Component } from 'react';
import { Container, Card, Button, Col, Row } from 'react-bootstrap'
import Image from 'react-bootstrap/Image'
import entry from "../static/img/gaming.jpg"

class Start extends Component {
    render() {
        return (
            <div>
                <Container>
                    <h1 style={{ display: 'table', margin: '0 auto'}}>Answer To Win</h1>
                    <Button style={{ display: 'table', margin: '0 auto'}}>
                        start game
                    </Button>
                </Container>

            </div>
        )
    }
}


export default Start;