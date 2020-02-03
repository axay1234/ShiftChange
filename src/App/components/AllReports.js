import React from 'react';
import {
  Row,
  Col,
  Card,
  Form,
  Button,
  InputGroup,
  Table,
  Dropdown
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
      areadId: parseInt(getQueryParamValue(props, QUERY_PARAM_AREA_ID), 10),
      userFilterId: null,
      userName: "Select Manager"
    };
  }

  componentDidUpdate(prevProps, prevState) {
    let prevAreaId = getQueryParamValue(prevProps, QUERY_PARAM_AREA_ID);
    let currentAreaId = getQueryParamValue(this.props, QUERY_PARAM_AREA_ID);
    if (prevAreaId !== currentAreaId) {
      this.setState({ areadId: parseInt(currentAreaId, 10), userName: "Select Manager" });
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

  getListOfReports = () => {
    return JSON_LIST_OF_REPORTS.filter(report => {
      let userFilter = true;
      if (this.state.userFilterId) {
        let user = report.User_Master;
        if (user) {
          let userId = user.User_ID;
          userFilter = userId === this.state.userFilterId;
        } else {
          userFilter = false;
        }
      }
      return report.Area_ID === this.state.areadId && userFilter
    });
  }

  openReport = (e) =>{
    this.props.history.push(`/newReport?areaId=${this.state.areadId}`)
  } 

  getListOfUsers = () => {
    const userMap = {};
    const users = [];
    JSON_LIST_OF_REPORTS.filter(report => report.Area_ID === this.state.areadId).map(report => {
      let user = report.User_Master;
      if (user) {
        let userId = user.User_ID;
        let userExist = userMap["" + userId + ""];
        if (!userExist) {
          userMap["" + userId + ""] = user;
          users.push(user);
        }
      }
    });
    return users;
  }

  onUserFilterChange = (e) => {
    let userId = e.currentTarget.dataset.userid;
    let userName = e.currentTarget.dataset.username;
    this.setState({ userFilterId: userId && userId.length > 0 ? parseInt(e.currentTarget.dataset.userid, 10): null,
    userName: userName });
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
                <Row>
                    <Col xs={4}>
                      <Card.Title as="h5">List of reports</Card.Title>
                    </Col>
                    <Col id="user-filter-drop-down" xs={4} className="text-left">
                      <span className="manager-label">Area Manager</span>
                    </Col>
                    <Col id="user-filter-drop-down" xs={4} className="text-left">
                      <span className="manager-label">Shift Manager</span>
                    </Col>
                  </Row>
                  <Row>
                    <Col xs={4}>
                      
                    </Col>
                    <Col id="user-filter-drop-down" xs={4} className="text-left">
                      <Dropdown alignRight={true}>
                        <Dropdown.Toggle variant={'link'} id="dropdown-basic">
                          {this.state.userName}
                        </Dropdown.Toggle>
                        <ul>
                          <Dropdown.Menu>
                            <li data-userName={"Select Manager"} onClick={this.onUserFilterChange}><a className="dropdown-item">Select Manager</a></li>
                            {this.getListOfUsers().length > 0 && this.getListOfUsers().map(user => {
                              return <li data-userName={user.User_Name} data-userId={user.User_ID} onClick={this.onUserFilterChange}><a className="dropdown-item" >{user.User_Name}</a></li>
                            })}
                          </Dropdown.Menu>
                        </ul>
                      </Dropdown>
                    </Col>
                    <Col id="user-filter-drop-down" xs={4} className="text-left">
                    <Dropdown alignRight={true}>
                        <Dropdown.Toggle variant={'link'} id="dropdown-basic">
                          {this.state.userName}
                        </Dropdown.Toggle>
                        <ul>
                          <Dropdown.Menu>
                            <li data-userName={"Select Manager"} onClick={this.onUserFilterChange}><a className="dropdown-item">Select Manager</a></li>
                            {this.getListOfUsers().length > 0 && this.getListOfUsers().map(user => {
                              return <li data-userName={user.User_Name} data-userId={user.User_ID} onClick={this.onUserFilterChange}><a className="dropdown-item" >{user.User_Name}</a></li>
                            })}
                          </Dropdown.Menu>
                        </ul>
                      </Dropdown>
                    </Col>
                  </Row>
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
                            return <tr onClick={this.openReport}>
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