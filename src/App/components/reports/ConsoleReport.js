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

class ConsoleReport extends React.Component {
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
                                        Console Report
                                </Card.Title>
                                </Card.Header>
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
                                    label="Abnormal Operations" id="PSR_AbnormalOperations" reportType="CR" /> 
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
                                <YesNoInput label="Conditions" id="Conditions" reportType="CR" />

                                <YesNoInput label="Counter Measures" id="CounterMeasures" reportType="CR" />

                                <YesNoInput label="Notifications" id="Notifications" reportType="CR" /> 
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                    <Row>
                    <Col>
                        <Card>
                            <Card.Header>
                                <Card.Title as="h5">Active Emergency/High Priority Alarms (Automated Report?)</Card.Title>
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
                            <Card.Body>
                                <YesTextInput label="Impairment to Fire Protection Systems"  reportType="CR" />
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Card>
                            <Card.Header>
                                <Card.Title as="h5">Alarms Inhibited/Disabled or Reactivated</Card.Title>
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
                                <Card.Title as="h5">Process Controls</Card.Title>
                            </Card.Header>
                            <Card.Body>
                            <YesTextInput label="Alarms" id="Alarms" reportType="CR" />

                                <YesNoInput label="Controllability" id="Controllability" reportType="CR" />

                                <YesNoInput label="Loops in control (Tuning, Valve or Instrument issues)" id="Loops_in_Control" reportType="CR" />

                                <YesNoInput label="Loop on in highest mode of operations" id="Loops_on_high_mode" reportType="CR" /> 
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Card>
                            <Card.Header>
                                <Card.Title as="h5">Inventory Tank Levels</Card.Title>
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

export default ConsoleReport;
