import React from "react";
import {
    Row,
    Col,
    Card,
    Form,
    Button,
    InputGroup,
    Table,
    FormControl
} from "react-bootstrap";

import Aux from "../../../hoc/_Aux";
import getCurrentDate from "../../helper";
import API from "../../../api";
import YesNoInput from "./YesNoFormInput";
import YesTextInput from "./YesTextInput";

class ProductionSupervisorReport extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }


    // * Render form
    render() {
        return (
            <Row>
            <Col>
                <Row>
                    <Col>
                        <Card>
                            <Card.Header>
                                <Card.Title as="h5">
                                    Production Supervisor Report
                                </Card.Title>
                            </Card.Header>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Card>
                            <Card.Body>
                                <Row>
                                    <Col md={12}>
                                        <YesTextInput  {...this.props} handleChange={this.props.handleChange}  label="Road Closures" id="RoadClosures" reportType="PSR" />
                                        <YesNoInput  {...this.props} handleChange={this.props.handleChange} label="First Maintenance Start" id="FirstMaintainStart" reportType="PSR" />
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Card>
                            <Card.Header>
                                <Card.Title as="h5">Operating Target</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <Row>
                                    <Col md={12}>
                                        <Table responsive hover>
                                            <thead>
                                                <tr>
                                                    <th>Tag Id #</th>
                                                    <th>Target Value</th>
                                                    <th>Achieved</th> 
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <th scope="row">AGO</th>
                                                    <td>2000</td>
                                                    <td>2917</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">AGO</th>
                                                    <td>2000</td>
                                                    <td>2917</td>
                                                </tr>
                                            </tbody>
                                        </Table>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md={12}>
                                        <label htmlFor="basic-url">Instruction for Targets</label>
                                        <InputGroup className="mb-3">
                                            <Form.Control
                                                as="textarea"
                                                rows="3"
                                                name="Reason"
                                            />
                                        </InputGroup>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md={12}>
                                        <label htmlFor="basic-url">Operating Constraint</label>
                                        <InputGroup className="mb-3">
                                            <Form.Control
                                                as="textarea"
                                                rows="3"
                                                name="Remediation"
                                            />
                                        </InputGroup>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Card>
                            <Card.Header>
                                <Card.Title as="h5">Lab Data</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <Row>
                                    <Col md={12}>
                                        <Table responsive hover>
                                        <thead>
                                                <tr>
                                                    <th>Id #</th>
                                                    <th>Target Value</th>
                                                    <th>Achieved</th> 
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <th scope="row">1</th>
                                                    <td>2000</td>
                                                    <td>2917</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">2</th>
                                                    <td>2000</td>
                                                    <td>2917</td>
                                                </tr>
                                            </tbody>
                                        </Table>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Card>
                            <Card.Header>
                                <Card.Title as="h5">Lab Data Target</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <Row>
                                    <Col md={12}>
                                        <Table responsive hover>
                                            <thead>
                                                <tr>
                                                    <th>Id #</th>
                                                    <th>Target Value</th>
                                                    <th>Achieved</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <th scope="row">1</th>
                                                    <td>2000</td>
                                                    <td>2917</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">2</th>
                                                    <td>2000</td>
                                                    <td>2917</td>
                                                </tr>
                                            </tbody>
                                        </Table>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row> 
                <Row>
                    <Col>
                        <Card>
                            <Card.Header>
                                <Card.Title as="h5"> </Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <YesNoInput  {...this.props} handleChange={this.props.handleChange}
                                    label="Abnormal Operations" id="PSR_AbnormalOperations" reportType="PSR" /> 
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Card>
                            <Card.Header>
                                <Card.Title as="h5">Operation Problems</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <YesNoInput label="Conditions" id="Conditions" reportType="PSR" />

                                <YesNoInput label="Counter Measures" id="CounterMeasures" reportType="PSR" />

                                <YesNoInput label="Notifications" id="Notifications" reportType="PSR" /> 
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Card>
                            <Card.Body>
                                <YesNoInput   {...this.props} handleChange={this.props.handleChange} 
                                 label="Feedstock Changes" id="FeedstockChanges" reportType="PSR" />
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Card>
                            <Card.Body>
                                <YesNoInput {...this.props} handleChange={this.props.handleChange}
                                    label="Lineup Changes" id="LineupChanges" reportType="PSR" />
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                {/* <Row>
                    <Col>
                        <Card>
                            <Card.Body>
                                <Button type="submit">Submit</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row> */}
            </Col>
            </Row>
        );
    }
}

export default ProductionSupervisorReport;
