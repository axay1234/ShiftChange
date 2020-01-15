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


class YesNoInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showInput: false
        };
    }

    onClick = (value) => {
        this.setState({ showInput: value })
    }


    // * Render form
    render() {
        const {label, id} = this.props;
        return (
            <>
                <label htmlFor="basic-url">{label}</label>

                <Row className="mb-3">
                    <Col md={2}>

                        <InputGroup>
                            <InputGroup.Prepend>
                                <InputGroup.Radio checked={this.state.showInput === true} value={this.state.showInput} onClick={() => this.onClick(true)} name={id + "yesno"} />
                            </InputGroup.Prepend>
                            <FormControl value="Yes" disabled={true} />
                        </InputGroup>

                    </Col>
                    <Col md={2}>

                        <InputGroup>
                            <InputGroup.Prepend>
                                <InputGroup.Radio checked={this.state.showInput === false} value={this.state.showInput} onClick={() => this.onClick(false)} name={id + "yesno"} />
                            </InputGroup.Prepend>
                            <FormControl value="No" disabled={true} />
                        </InputGroup>

                    </Col>
                </Row>
                {this.state.showInput && <InputGroup className="mb-3">
                    <Form.Control as="textarea" rows="3" name={id} />
                </InputGroup>}
            </>

        );
    }
}

export default YesNoInput;