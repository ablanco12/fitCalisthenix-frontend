import React, { Component } from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";

class SignUpPage extends Component {
  render() {
    const { handleSubmit, handleChange, accounts } = this.props;
    return (
      <div className="signup-form-container">
        <br></br>
        <Form onSubmit={handleSubmit}>
          <FormGroup>
            <Label for="name">Your Name</Label>
            <Input
              type="name"
              name="name"
              id="exampleName"
              placeholder="Enter your name"
              onChange={handleChange}
              value={accounts.name}
            />
          </FormGroup>
          <FormGroup>
            <Label for="username">Username</Label>
            <Input
              type="username"
              name="username"
              id="username"
              placeholder="Enter your email"
              onChange={handleChange}
              value={accounts.username}
            />
          </FormGroup>
          <FormGroup>
            <Label for="exampleEmail">Email</Label>
            <Input
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email"
              onChange={handleChange}
              value={accounts.email}
            />
          </FormGroup>
          <FormGroup>
            <Label for="examplePassword">Password</Label>
            <Input
              type="password"
              name="password"
              id="password"
              placeholder="Enter a password"
              onChange={handleChange}
              value={accounts.password}
            />
          </FormGroup>
          <FormGroup>
            <Label for="confirmationPassword">Confirm Password</Label>
            <Input
              type="password"
              name="confirmationPassword"
              id="confirmationPassword"
              placeholder="Enter password again"
              onChange={handleChange}
              value={accounts.password_digest}
            />
          </FormGroup>
          <FormGroup>
            <Label for="exampleNumber">AGE</Label>
            <Input
              type="number"
              name="age"
              id="age"
              placeholder="Enter your age"
              onChange={handleChange}
              value={accounts.age}
            />
          </FormGroup>
          <FormGroup>
            <Label for="height">Height</Label>
            <Input
              type="number"
              name="height"
              id="height"
              placeholder="Enter your height"
              onChange={handleChange}
              value={accounts.height}
            />
          </FormGroup>
          <FormGroup>
            <Label for="weight">Weight</Label>
            <Input
              type="number"
              name="weight"
              id="weight"
              placeholder="Enter your weight"
              onChange={handleChange}
              value={accounts.weight}
            />
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
