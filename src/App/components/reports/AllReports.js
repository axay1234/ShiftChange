import React from "react";
import {
  Row,
  Col,
  Card,
  Form,
  Button,
  InputGroup,
  Table
} from "react-bootstrap";

import Aux from "../../../hoc/_Aux";
import getCurrentDate from "../../helper";
import API from "../../../api";
import ProductionSupervisorReport from "./ProductionSupervisorReport";
import AreaSupervisorReport from "./AreaSupervisorReport";
import AreaAReport from "./AreaAReport";
import ConsoleReport from "./ConsoleReport";
import FieldReport from "./FieldReport";

class AllReports extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
    };
  }
// * Handle button click
  handleChange = (event) => {
    console.log(event.target.id);
    console.log(event.target.value);
    this.setState({ [event.target.id]: event.target.value });
  };

  getPSRRequest = () =>{
    let pSRRequest = {};
    
    return pSRRequest;

  }

  getASRRequest = () =>{

  }

  // * Submit form to API. POST
  handleSubmit = event => {
    event.preventDefault(); 

    //create request
    let requestObj = {};
    requestObj.Area_ID = 1;
    requestObj.Shift = "1";
    requestObj.User_ID = 1;

    requestObj = {...requestObj, ...this.getPSRRequest()};
    requestObj = {...requestObj, ...this.getASRRequest()};
    console.log(requestObj);
  

    // API.post(
    //   "shiftreport",
    //   {
    //     Id: "1",
    //     ReportName: "SF0112182019",
    //     SafetyTopic: this.refs.SafetyTopic.value,
    //     LMRAs:this.refs.LMRAs.value        
    //   },
    //   { headers: { "Content-Type": "application/json" } }
    // )
    //   .then(response => {
    //     //this.props.history.push("/");
    //     console.log(response.data);
    //   })
    //   .catch(err => console.log(err));    
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
        return (
            <Form onSubmit={this.handleSubmit}>
                <Aux>

                        <ProductionSupervisorReport handleChange={this.handleChange}/>
                        <AreaSupervisorReport />
                    <AreaAReport />
                    <ConsoleReport />
                    <FieldReport />
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

export default AllReports;