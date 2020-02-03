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

class AreaAReport extends React.Component {
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
                                        Area A Report
                                </Card.Title>
                                </Card.Header>
                            </Card>
                        </Col>
                    </Row>
                    {/* <Row>
                        <Col>
                            <Card>

                                <Card.Body>
                                    <YesTextInput label="Safety Meetings" id="SafetyMeetings" reportType="ASR"/>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row> */}
                    <Row>
                        <Col>
                            <Card>
                            <Card.Header>
                                <Card.Title as="h5">Safety and Health</Card.Title>
                            </Card.Header>
                                <Card.Body>
                                    <YesTextInput label="Incidents" id="Incidents"  reportType="AR"/>
                                    <YesTextInput label="Near Misses" id="NearMisses"  reportType="AR"/>
                                    <YesTextInput label="LMRA's" id="LMRA_s"  reportType="AR"/>
                                    <YesTextInput label="Safe Operating Parameter Deviations" id="SOP_Deviations"  reportType="AR"/>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Card>
                            <Card.Header>
                                <Card.Title as="h5">Safety Critical Devices</Card.Title>
                            </Card.Header>
                                <Card.Body>
                                    <YesTextInput label="Device"  reportType="AR"/>
                                    <YesTextInput label="Active or Closed during shift"   reportType="AR"/>
                                    <YesTextInput label="System Being Protected"  reportType="AR"/>
                                    <YesTextInput label="Mitigation Plan" reportType="AR"/>
                                    <YesTextInput label="Status" reportType="AR"/>
                                    <YesTextInput label="WO#" reportType="AR"/>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Card>
                                <Card.Body>
                                    <YesTextInput label="Schedule High Risks Jobs"  reportType="AR"/>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Card>
                            <Card.Header>
                                <Card.Title as="h5">Reliability</Card.Title>
                            </Card.Header>
                                <Card.Body>
                                    <YesTextInput label="Process Consequence Analysis"  reportType="AR"/>
                                    <YesTextInput label="Reliability Operating Parameter Deviations"   reportType="AR"/>
                                    <YesTextInput label="Equipment out of service impacting MOP"  reportType="AR"/>
                                    <YesTextInput label="Equipment Returned to Service" reportType="AR"/>
                                    <YesTextInput label="Total Critical Instrumentation of Failure??????" reportType="AR"/>
                                    <YesTextInput label="Critical Instrumentation Out of Service" reportType="AR"/>
                                    <YesTextInput label="Equipment" reportType="AR"/>
                                    <YesTextInput label="Process Affected" reportType="AR"/>
                                    <YesTextInput label="Process Affected" reportType="AR"/>
                                    <YesTextInput label="PCA Created" reportType="AR"/>
                                    <YesTextInput label="Maintenance Status" reportType="AR"/>
                                    <YesTextInput label="WO#" reportType="AR"/>
                                    <YesTextInput label="Estimated Return to Service" reportType="AR"/>
                                    <YesTextInput label="Total Equipment Failure" reportType="AR"/>
                                    <YesTextInput label="Equipment Returned to Operations" reportType="AR"/>
                                    <YesTextInput label="Equipment" reportType="AR"/>
                                    <YesTextInput label="Placed in Service" reportType="AR"/>
                                    <YesTextInput label="WO#" reportType="AR"/>
                                    <YesTextInput label="Total Single Point of Failure" reportType="AR"/>
                                    <YesTextInput label="Single Point of Failure" reportType="AR"/>
                                    <YesTextInput label="Equipment" reportType="AR"/>
                                    <YesTextInput label="Process Affected" reportType="AR"/>
                                    <YesTextInput label="Mitigation Plan" reportType="AR"/>
                                    <YesTextInput label="WO#" reportType="AR"/>
                                    <YesTextInput label="Estimated Return to Service" reportType="AR"/>
                                    <YesTextInput label="Maintenance Status" reportType="AR"/>
                                    <YesTextInput label="Comments" reportType="AR"/>
                                    <YesTextInput label="Off Shift Maintenance Scheduled or in progress:" reportType="AR"/>
                                    <YesTextInput label="Active Permits" reportType="AR"/>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Card>
                            <Card.Header>
                                <Card.Title as="h5">Streams</Card.Title>
                            </Card.Header>
                                <Card.Body>
                                    <YesNoInput label="Off Speciation"  reportType="AR"/>
                                    <YesNoInput label="In Slop"   reportType="AR"/>
                                    <YesNoInput label="Finished Product Off Speciation"  reportType="AR"/>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Card>
                            <Card.Header>
                                <Card.Title as="h5">Chemical</Card.Title>
                            </Card.Header>
                                <Card.Body>
                                    <YesNoInput label="Loaded"  reportType="AR"/>
                                    <YesNoInput label="Off-Loaded"   reportType="AR"/>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Card>
                            <Card.Header>
                                <Card.Title as="h5">Inventories</Card.Title>
                            </Card.Header>
                                <Card.Body>
                                    <YesNoInput label="Loaded" reportType="AR"/>
                                    <YesNoInput label="Off-Loaded" reportType="AR"/>
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

export default AreaAReport;
