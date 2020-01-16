import React from "react";
import {
    Row,
    Col,
    Card,
    Form,
    Button,
    InputGroup,
    Table,
    Alert
} from "react-bootstrap";

import Aux from "../../../hoc/_Aux";
import getCurrentDate from "../../helper";
import API from "../../../api";
import ProductionSupervisorReport from "./ProductionSupervisorReport";
import AreaSupervisorReport from "./AreaSupervisorReport";
import AreaAReport from "./AreaAReport";
import SampleFormFields from "./SamplFormFields";

class SampleReport extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            formStatus : "NEW"
        };
    }
    // * Handle button click
    handleChange = (event) => {
        console.log(event.target.id);
        console.log(event.target.value);
        this.setState({ [event.target.id]: event.target.value });
    };

    getPSRRequest = () => {
        return this.state;

    }

    // * Submit form to API. POST
    handleSubmit = event => {
        event.preventDefault();

        //create request
        let requestObj = {};
        requestObj.Area_ID = 1;
        requestObj.Shift = "1";
        requestObj.User_ID = 1;
        requestObj.CreatedBy = "HSimpson";
        requestObj.UpdatedBy = "HSimpson";

        requestObj = { ...requestObj, ...this.getPSRRequest() };
        console.log(requestObj);


        API.post(
            "http://localhost:53878/api/ShiftReport/AddNewReport",
            {
                ...requestObj
            },
            { headers: { "Content-Type": "application/json" } }
        )
            .then(response => {
                //this.props.history.push("/");
                console.log(response.data);
                let existingState = { ...this.state };
                for (var key in existingState) {
                    existingState[key] = "";
                }
                this.setState({ formStatus: "SUCCESS", ...existingState });
            })
            .catch(err => {
                console.log(err)
                let existingState = { ...this.state };
                for (var key in existingState) {
                    existingState[key] = "";
                }
                this.setState({ formStatus: "ERROR"});
            });    
    };

    //* Get data from API. GET
    componentDidMount() {
        // API.get("shiftreport/1").then(res => {
        //   const report = res.data;
        //   this.setState({ SafetyTopic: report.SafetyTopic,LMRAs:report.LMRAs });
        //   console.log(report);
        // });
    }

    // * Render form
    render() {
        let variant = this.state.formStatus === "SUCCESS" ? "success" :
            (this.state.formStatus === "ERROR" ? "danger" : "");
        let message = this.state.formStatus === "SUCCESS" ? "Form submitted successfully!" :
            (this.state.formStatus === "ERROR" ? "Form submittion failed!" : "");
        return (
            <Form onSubmit={this.handleSubmit}>
                <Aux>
                {this.state.formStatus && this.state.formStatus !== "NEW" && <Row>
                        <Col>
                            <Card>
                                <Card.Body>
                                   <Alert variant={variant}>
                                        {message}
                                    </Alert>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>}
                    <SampleFormFields {...this.state}  handleChange={this.handleChange} />
                    <Row>
                        <Col>
                            <Card>
                                <Card.Body>
                                    <Button type="submit">Submit</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Aux>
            </Form>
        );
    }
}

export default SampleReport;