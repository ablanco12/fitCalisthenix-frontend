import React, { Component } from "react";
import { Form, FormGroup, Label, Input, FormText, Button } from "reactstrap";

class SignUpPage extends Component {
  render() {
    return (
      <div className="signup-form-container">
        <br></br>
        <Form onSubmit={this.props.handleSubmit}>
          <FormGroup>
            <Label for="name">Your Name</Label>
            <Input
              type="name"
              name="name"
              id="exampleName"
              placeholder="Enter your name"
              onChange={this.props.handleChange}
            />
          </FormGroup>
          <FormGroup>
            <Label for="exampleEmail">Email</Label>
            <Input
              type="email"
              name="email"
              id="exampleEmail"
              placeholder="Enter your email"
              onChange={this.props.handleChange}
            />
          </FormGroup>
          <FormGroup>
            <Label for="examplePassword">Password</Label>
            <Input
              type="password"
              name="password"
              id="examplePassword"
              placeholder="Enter a password"
              onChange={this.props.handleChange}
            />
          </FormGroup>
          <FormGroup>
            <Label for="confirmationPassword">Confirm Password</Label>
            <Input
              type="password"
              name="Confirm password"
              id="confirmationPassword"
              placeholder="Enter password again"
              onChange={this.props.handleChange}
            />
          </FormGroup>
          <FormGroup>
            <Label for="exampleNumber">AGE</Label>
            <Input
              type="number"
              name="number"
              id="exampleNumber"
              placeholder="Enter your age"
              onChange={this.props.handleChange}
            />
          </FormGroup>

          <FormGroup>
            <Label for="exampleSelect">Select Fitness Experience</Label>
            <Input type="select" name="select" id="exampleSelect">
              <option>1 - Beginner</option>
              <option>2 - Intermediate</option>
              <option>3 - Advanced</option>
            </Input>
          </FormGroup>

          <FormGroup>
            <Label for="exampleFile">Upload Selfie</Label>
            <Input type="file" name="file" id="exampleFile" />
            <FormText color="muted">
              This will be your photo for motivation.
            </FormText>
          </FormGroup>

          <Button color="primary" size="lg" block>
            Create Account
          </Button>
          <br></br>
        </Form>
      </div>
    );
  }
}

export default SignUpPage;
