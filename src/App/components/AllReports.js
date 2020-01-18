import React from 'react';
import {
  Row,
  Col,
  Card,
  Form,
  Button,
  InputGroup,
  Table
} from "react-bootstrap";

import Aux from "../../hoc/_Aux";
import getCurrentDate from "../helper";
import API from "../../api";
import { QUERY_PARAM_AREA_ID } from '../constants/AppConstants';
import { getQueryParamValue, formatDate } from '../util/Util';
import { JSON_LIST_OF_REPORTS } from './reports/Constants';

class AllReports extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      areadId: parseInt(getQueryParamValue(props, QUERY_PARAM_AREA_ID), 10)
    };
  }

  componentDidUpdate(prevProps, prevState) {
    let prevAreaId = getQueryParamValue(prevProps, QUERY_PARAM_AREA_ID);
    let currentAreaId = getQueryParamValue(this.props, QUERY_PARAM_AREA_ID);
    if (prevAreaId !== currentAreaId) {
      this.setState({ areadId: parseInt(currentAreaId, 10)});
    }
  }

  //* Get data from API. GET
  componentDidMount() {
    // API.get("shiftreport/1").then(res => {
    //   const report = res.data;
    //   this.setState({ SafetyTopic: report.SafetyTopic,LMRAs:report.LMRAs });
    //   console.log(report);
    // });
  }

  getListOfReports = () =>{
    return JSON_LIST_OF_REPORTS.filter(report => report.Area_ID === this.state.areadId);
  }

  // * Render form
  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Aux>
          
          <Row>
            <Col>
              <Card>
                <Card.Header>
                  <Card.Title as="h5">List of reports</Card.Title>
                </Card.Header>
                <Card.Body>
                  <Row>
                    <Col md={12}>
                      <Table responsive hover>
                        <thead>
                          <tr>
                            <th>#</th>
                            <th>Report Name</th>
                            <th>Created Date</th>
                            <th>Created By</th>
                          </tr>
                        </thead>
                        <tbody>
                          {this.getListOfReports().map(report => {
                            return <tr>
                              <th scope="row">1</th>
                              <td>{`Area ${report.Area_ID} Report`}</td>
                              <td>{formatDate(new Date(report.CreatedDate))}</td>
                              <td>{report.CreatedBy}</td>
                            </tr>
                          })}
                        </tbody>
                      </Table>
                    </Col>
                  </Row>
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