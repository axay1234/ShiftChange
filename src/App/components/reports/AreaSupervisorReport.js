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

class AreaSupervisorReport extends React.Component {
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
                                        Area Supervisor Report
                                </Card.Title>
                                </Card.Header>
                            </Card>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Card>

                                <Card.Body>
                                    <YesTextInput label="Safety Meetings" id="SafetyMeetings" reportType="ASR"/>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Card>
                            <Card.Header>
                                <Card.Title as="h5">Environmental</Card.Title>
                            </Card.Header>
                                <Card.Body>
                                    {/* <YesTextInput label="Environmental" id="environmental"  reportType="ASR"/> */}
                                    <YesTextInput label="Incidents" id="Incidents"  reportType="ASR"/>
                                    <YesTextInput label="Near Misses" id="NearMisses"  reportType="ASR"/>
                                    <YesTextInput label="Draining of Equipment" id="DrainingofEquipment"  reportType="ASR"/>
                                    <YesTextInput label="Venting" id="Venting"  reportType="ASR"/>
                                    <YesTextInput label="Venting Flare" id="Venting_Flare"  reportType="ASR"/>
                                    <YesTextInput label="Venting Atmosphere" id="Venting_Atmosphere"  reportType="ASR"/>
                                    <YesTextInput label="Deviations" id="Deviations"  reportType="ASR"/>
                                    <YesTextInput label="Special Monitoring" id="SpecialMonitoring"  reportType="ASR"/>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Card>
                                <Card.Header>
                                    <Card.Title as="h5">MOC</Card.Title>
                                </Card.Header>
                                <Card.Body>
                                    <YesTextInput label="Number" id="Number" reportType="ASR" />
                                    <YesTextInput label="Title" id="Title" reportType="ASR" />
                                    <YesTextInput label="Status" id="Status" reportType="ASR" />
                                    <YesNoInput label="Authorize For Use" id="Authorize" reportType="ASR" />
                                    <YesNoInput  label="Training Notification Complete" id="Training" reportType="ASR" />
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

export default AreaSupervisorReport;
