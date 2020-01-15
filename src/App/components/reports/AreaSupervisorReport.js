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
                                    <YesTextInput label="Safety Meetings" id="safetyMeetings" />
                                    <YesTextInput label="Environmental" id="environmental" />
                                    <YesTextInput label="Incidents" id="incidents" />
                                    <YesTextInput label="Near Misses" id="nearMisses" />
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Card>
                                <Card.Body></Card.Body>
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
