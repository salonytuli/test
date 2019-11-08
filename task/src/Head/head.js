import React, {Component} from 'react'
import {Button, Form, FormGroup, Label, Container, Input, Table, Alert} from 'reactstrap';
import {getData} from '../actions'
import './head.css'


class Head extends Component {

    state = {
        latitude: null,
        longitude: null,
        data: {data: [], err: null},
        error: false
    };

    changeHandler = (e) => {
        this.setState({[e.target.name]: e.target.value})
    };

    clickHandler = () => {
        const {latitude, longitude} = this.state;
        if (latitude && longitude) {
            this.setState({error: false})
            getData(latitude, longitude)
                .then(data => this.setState({data}, () => {
                }))
                .catch((err) => {
                    console.info('There is some error performing API', err)
                })
        } else {
            this.setState({error: true})
        }
    };

    render() {
        const {data, error} = this.state;
        return (
            <Container>
                <Form className="formWrap">
                    <FormGroup>
                        <Label for="exampleEmail">Enter latitude</Label>
                        <Input type="text" name="latitude" onChange={this.changeHandler}/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="exampleEmail">Enter longitude</Label>
                        <Input type="text" name="longitude" onChange={this.changeHandler}/>
                    </FormGroup>
                    <Button className="btn" onClick={this.clickHandler}>Submit</Button>
                    {error &&
                    <Alert color="danger">
                        Please enter latitude and longitude
                    </Alert>
                    }
                </Form>
                {!!data.data.length &&
                <Table bordered>
                    <thead>
                    <tr>
                        <th>Location</th>
                        <th>Country code</th>
                        <th>City code</th>
                        <th>Latitude</th>
                        <th>Longitude</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        data.data.map((e, i) => {
                            return (
                                <tr key={i}>
                                    <td>{e.locName}</td>
                                    <td>{e.countryCode}</td>
                                    <td>{e.subnational1Code}</td>
                                    <td>{e.lat}</td>
                                    <td>{e.lng}</td>
                                </tr>
                            )
                        })
                    }

                    </tbody>
                </Table>
                }
            </Container>
        )
    }
}

export default Head;
