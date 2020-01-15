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


class YesTextInput extends React.Component {
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
        const { label, id } = this.props;
        return (
            <>
                <label htmlFor="basic-url">{label}</label>
                <InputGroup className="mb-3">
                    <Form.Control as="textarea" rows="3" name={id} />
                </InputGroup>
            </>

        );
    }
}

export default YesTextInput;
