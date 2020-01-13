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

import Aux from "../../hoc/_Aux";
import getCurrentDate from "../helper";
import API from "../../api";

class Areaa extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      SafetyTopic: "",
      LMRAs:""
    };
  }
// * Handle button click
  handleChange = event => {
    console.log(event.target.value);
    //this.setState({ [event.target.name]: event.target.value });
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  // * Submit form to API. POST
  handleSubmit = event => {
    event.preventDefault();    
    API.post(
      "shiftreport",
      {
        Id: "1",
        ReportName: "SF0112182019",
        SafetyTopic: this.refs.SafetyTopic.value,
        LMRAs:this.refs.LMRAs.value        
      },
      { headers: { "Content-Type": "application/json" } }
    )
      .then(response => {
        //this.props.history.push("/");
        console.log(response.data);
      })
      .catch(err => console.log(err));    
  };

  //* Get data from API. GET
  componentDidMount() {
    API.get("shiftreport/1").then(res => {
      const report = res.data;
      this.setState({ SafetyTopic: report.SafetyTopic,LMRAs:report.LMRAs });
      console.log(report);
    });
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
                  <Card.Title as="h5">
                    Shift Report - {getCurrentDate()}
                  </Card.Title>
                </Card.Header>
                <Card.Body>
                  <Row>
                    <Col md={12}>
                      <label htmlFor="basic-url">Road Closures</label>
                      <InputGroup className="mb-3">
                        <Form.Control
                          as="textarea"
                          rows="3"
                          name="SafetyTopic"
                          ref="SafetyTopic"
                          value={this.state.SafetyTopic}
                          onChange={this.handleChange}
                        />
                      </InputGroup>

                      <label htmlFor="basic-url">LMRAs</label>
                      <InputGroup className="mb-3">
                        <Form.Control as="textarea" rows="3" name="LMRAs" ref="LMRAs" value={this.state.LMRAs} onChange={this.handleChange} />
                      </InputGroup>

                      <label htmlFor="basic-url">Handing over work </label>
                      <InputGroup className="mb-3">
                        <Form.Control
                          as="textarea"
                          rows="3"
                          name="handingoverwork"
                        />
                      </InputGroup>

                      <label htmlFor="basic-url">Whats Completed</label>
                      <InputGroup className="mb-3">
                        <Form.Control
                          as="textarea"
                          rows="3"
                          name="WhatsCompleted"
                        />
                      </InputGroup>

                      <label htmlFor="basic-url">SOPs</label>
                      <InputGroup className="mb-3">
                        <Form.Control as="textarea" rows="3" name="SOPs" />
                      </InputGroup>

                      <label htmlFor="basic-url">MOCs</label>
                      <InputGroup className="mb-3">
                        <Form.Control as="textarea" rows="3" name="MOCs" />
                      </InputGroup>

                      <label htmlFor="basic-url">SIS Bypass</label>
                      <InputGroup className="mb-3">
                        <Form.Control as="textarea" rows="3" name="SISBypass" />
                      </InputGroup>

                      <label htmlFor="basic-url">Out of Service</label>
                      <InputGroup className="mb-3">
                        <Form.Control
                          as="textarea"
                          rows="3"
                          name="OutofService"
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
                          <tr>
                            <th scope="row">2</th>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                          </tr>
                          <tr>
                            <th scope="row">3</th>
                            <td>Larry</td>
                            <td>the Bird</td>
                            <td>@twitter</td>
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
                          <tr>
                            <th scope="row">2</th>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                          </tr>
                          <tr>
                            <th scope="row">3</th>
                            <td>Larry</td>
                            <td>the Bird</td>
                            <td>@twitter</td>
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
                  <Row>
                    <Col md={12}>
                      <label htmlFor="basic-url">Dual Pump</label>
                      <InputGroup className="mb-3">
                        <Form.Control as="textarea" rows="3" name="DualPump" />
                      </InputGroup>

                      <label htmlFor="basic-url">Single Point of Failure</label>
                      <InputGroup className="mb-3">
                        <Form.Control
                          as="textarea"
                          rows="3"
                          name="PointofFailure"
                        />
                      </InputGroup>

                      <label htmlFor="basic-url">Work Orders</label>
                      <InputGroup className="mb-3">
                        <Form.Control
                          as="textarea"
                          rows="3"
                          name="WorkOrders"
                        />
                      </InputGroup>

                      <label htmlFor="basic-url">Priority</label>
                      <InputGroup className="mb-3">
                        <Form.Control as="textarea" rows="3" name="Priority" />
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
                  <Card.Title as="h5">Alarm Report</Card.Title>
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
                          <tr>
                            <th scope="row">2</th>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                          </tr>
                          <tr>
                            <th scope="row">3</th>
                            <td>Larry</td>
                            <td>the Bird</td>
                            <td>@twitter</td>
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
                  <Card.Title as="h5">Control Valves</Card.Title>
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
                          <tr>
                            <th scope="row">2</th>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                          </tr>
                          <tr>
                            <th scope="row">3</th>
                            <td>Larry</td>
                            <td>the Bird</td>
                            <td>@twitter</td>
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
                  <Card.Title as="h5">Tank Levels</Card.Title>
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
                          <tr>
                            <th scope="row">2</th>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                          </tr>
                          <tr>
                            <th scope="row">3</th>
                            <td>Larry</td>
                            <td>the Bird</td>
                            <td>@twitter</td>
                          </tr>
                        </tbody>
                      </Table>
                    </Col>
                    <Col md={12}>
                      <label htmlFor="basic-url">
                        Tanks Additional Infomation
                      </label>
                      <InputGroup className="mb-3">
                        <Form.Control as="textarea" rows="3" />
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
                  <Card.Title as="h5">Ciritcal Readings</Card.Title>
                </Card.Header>
                <Card.Body>
                  <Row>
                    <Col md={12}>
                      <InputGroup className="mb-3">
                        <Form.Control
                          as="textarea"
                          rows="3"
                          name="CiritcalReadings"
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
                  <Card.Title as="h5">TimeSheet</Card.Title>
                </Card.Header>
                <Card.Body>
                  <Row>
                    <Col md={12}>
                      <InputGroup className="mb-3">
                        <Form.Control as="textarea" rows="3" name="TimeSheet" />
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

export default Areaa;
