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

class SampleFormFields extends React.Component {
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
                                        Sample Report
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
                                            <YesTextInput {...this.props} handleChange={this.props.handleChange} label="Road Closures" id="RoadClosures" reportType="PSR" />
                                            <YesNoInput {...this.props} handleChange={this.props.handleChange} label="First Maintenance Start" id="FirstMaintainStart" reportType="PSR" />
                                            <YesNoInput {...this.props} handleChange={this.props.handleChange} label="PSR Abnormal Operations" id="PSR_AbnormalOperations" reportType="PSR" />
                                            <YesNoInput {...this.props} handleChange={this.props.handleChange} label="Feedstock Changes" id="FeedstockChanges" reportType="PSR" />
                                            <YesNoInput {...this.props} handleChange={this.props.handleChange} label="Lineup Changes" id="LineupChanges" reportType="PSR" />
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
                                    <YesTextInput {...this.props} handleChange={this.props.handleChange} label="Safety Meetings" id="SafetyMeetings" reportType="ASR" />
                                    <YesNoInput {...this.props} handleChange={this.props.handleChange} label="CR Abnormal Operations" id="CR_AbnormalOperations" reportType="CR" />
                                    <YesNoInput {...this.props} handleChange={this.props.handleChange} label="High Abnormal Alarms" id="HighPriorityAlarms" reportType="CR" />
                                    <YesNoInput {...this.props} handleChange={this.props.handleChange} label="Impairment to Fire Protection Systems" id="Impairment_to_fire_protection_systems" reportType="CR" />
                                    <YesNoInput {...this.props} handleChange={this.props.handleChange} label="Alarms Inhibited" id="AlarmsInhibited" reportType="CR" />
                                    <YesNoInput {...this.props} handleChange={this.props.handleChange} label="FR Abnormal Operations" id="FR_AbnormalOperations" reportType="FR" />
                                    <YesTextInput {...this.props} handleChange={this.props.handleChange} label="Maintenance" id="Maintenance" reportType="FR" />
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Card>
                                <Card.Body>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Col>
            </Row>
        );
    }
}

export default SampleFormFields;
