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
            
        };
    }

    onChange = (e) =>{
        if(this.props.handleChange){
            this.props.handleChange(e);
        }
    }

    // * Render form
    render() {
        const { label, id,  reportType} = this.props;
        return (
            <>
                <label htmlFor="basic-url">{label}</label>
                <InputGroup className="mb-3">
                    <Form.Control as="textarea" value={this.props[id]} onChange={this.onChange} data-reportType={reportType} rows="3" id={id} />
                </InputGroup>
            </>

        );
    }
}

export default YesTextInput;
