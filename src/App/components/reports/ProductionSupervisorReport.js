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
                                        <label htmlFor="basic-url">Road Closures</label>
                                        <InputGroup className="mb-3">
                                            <Form.Control
                                                as="textarea"
                                                rows="3"
                                                name="SafetyTopic"
                                            />
                                        </InputGroup>

                                        <YesNoInput label="First Maintenance Start" id="LMRAs" />
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
                                                    <th>#</th>
                                                    <th>First Name</th>
                                                    <th>Last Name</th>
                                                    <th>Username</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <th scope="row">1</th>
                                                    <td>Mark</td>
                                                    <td>Otto</td>
                                                    <td>@mdo</td>
                                                </tr>
                                            </tbody>
                                        </Table>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md={12}>
                                        <InputGroup className="mb-3">
                                            <Form.Control
                                                as="textarea"
                                                rows="3"
                                                name="SafetyTopic"
                                            />
                                        </InputGroup>

                                    </Col>
                                </Row>
                                <Row>
                                    <Col md={12}>
                                        <label htmlFor="basic-url">Instruction for Targets</label>
                                        <InputGroup className="mb-3">
                                            <Form.Control
                                                as="textarea"
                                                rows="3"
                                                name="SafetyTopic"
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
                                                name="SafetyTopic"
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
                                                    <th>#</th>
                                                    <th>First Name</th>
                                                    <th>Last Name</th>
                                                    <th>Username</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <th scope="row">1</th>
                                                    <td>Mark</td>
                                                    <td>Otto</td>
                                                    <td>@mdo</td>
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
                                                    <th>#</th>
                                                    <th>First Name</th>
                                                    <th>Last Name</th>
                                                    <th>Username</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <th scope="row">1</th>
                                                    <td>Mark</td>
                                                    <td>Otto</td>
                                                    <td>@mdo</td>
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
                                <YesNoInput label="Abnormal Operations" id="abnormalOperations" />

                                <YesNoInput label="Operation Problems" id="operationProblems" />

                                <YesNoInput label="Conditions" id="conditions" />

                                <YesNoInput label="Counter Measures" id="counterMeasures" />

                                <YesNoInput label="Follow Ups" id="followUps" />
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Card>
                            <Card.Body>
                                <YesNoInput label="Feedstock Changes" id="feedstockChanges" />
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Card>
                            <Card.Body>
                                <YesNoInput label="Lineup Changes" id="lineupChanges" />
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
