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

class FieldReport extends React.Component {
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
                                        Field Report
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
                                    label="Abnormal Operations" id="PSR_AbnormalOperations" reportType="FR" /> 
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
                                <YesNoInput label="Conditions" id="Conditions" reportType="FR" />

                                <YesNoInput label="Counter Measures" id="CounterMeasures" reportType="FR" />

                                <YesNoInput label="Notifications" id="Notifications" reportType="FR" /> 
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Card>
                            <Card.Body>
                                <YesNoInput label="Bypasses Opened"  reportType="FR" />
                                <YesTextInput label="BEquipment Number (What was bypassed)"  reportType="FR" />
                                <YesTextInput label="How much is the bypass opened?"  reportType="FR" />
                                <YesTextInput label="Comments"  reportType="FR" />
                                <YesTextInput label="Why was it by passed?"  reportType="FR" />
                                <YesTextInput label="How much is the bypass opened?"  reportType="FR" />
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Card>
                            <Card.Body>
                                <YesTextInput label="Dual Pumps Running"  reportType="FR" />
                                <YesTextInput label="Equipment"  reportType="FR" />
                                <YesNoInput label="Mitigation Plan"  reportType="FR" />
                                <YesTextInput label="WO#"  reportType="FR" />
                                <YesTextInput label="Estimated Return to Service"  reportType="FR" />
                                <YesTextInput label="Maintenance Status"  reportType="FR" />
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Card>
                            <Card.Body>
                                <YesTextInput label="Maintenance"  reportType="FR" />
                                <YesNoInput label="Equipment Ready for Maintenance"  reportType="FR" />
                                <YesTextInput label="Operations Hours to Ready for Maintenance"  reportType="FR" />
                                <YesNoInput label="LOTO"  reportType="FR" />
                                <YesTextInput label="Comments"  reportType="FR" />
                                <YesTextInput label="Maintenance Status"  reportType="FR" />
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Card>
                            <Card.Body>
                                <YesNoInput label="Special Meetings (? For Brad Rose Unit Message Board?)"  reportType="FR" />
                                <YesTextInput label="Additional Comments"  reportType="FR" />
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

export default FieldReport;
