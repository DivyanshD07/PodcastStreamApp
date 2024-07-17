import React, { Component } from 'react';
import styled from "styled-components";
import {Link} from 'react-router-dom';

const Container = styled.form`
    color: ${({ theme }) => theme.text_secondary};
    width: 100%;   
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
    height: 75vh;
`;
const Top = styled.div`
    color: ${({ theme }) => theme.text_primary};
`;
const Input = styled.div``;
const Heading = styled.div``;
const InputContainer = styled.div``;
const Remember = styled.div``;
const Button = styled.div`
    background: ${({ theme }) => theme.button};
    &:hover {
        color: ${({ theme }) => theme.text_primary}
    }
`;
const SignupLink = styled.div`
    display: flex;
    gap: 4px;
`;
const Register = styled.div`
    color: blue;
`;




export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: ""
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        const { email, password } = this.state;
        fetch("http ://localhost:5000/login" , {
            method: "POST",
            crossDomain: true,
            headers: {
                "Content-type": "application/json",
                Accept: "application/json",
                "Access-Control-Allow-Origin": "*",
            },
            body: JSON.stringify ({
                email,
                password
            }),
        }).then((res) => res.json())
        .then((data) => {
            console.log(data, "user signed in");
        })
    }

    render() {
        return (
            <Container onSubmit={ this.handleSubmit }>
                <Top>Sign In</Top>
                <Input>
                    <Heading>Email address</Heading>
                    <InputContainer>
                        <input type="email" placeholder='Enter email' onChange={(e) => this.state({ email: e.target.value })} />
                    </InputContainer>
                </Input>
                <Input>
                    <Heading>Password</Heading>
                    <InputContainer>
                        <input type="password" placeholder='Enter password' onChange={(e) => this.state({ password: e.target.value })} />
                    </InputContainer>
                </Input>
                <Input>
                    <input type="checkbox" />Remember me
                </Input>
                <Button>
                    <button type='submit'>Submit</button>
                </Button>
                <SignupLink>
                        Not a user?<Link to={"/signup"}> <Register>Register</Register>
                    </Link>
                </SignupLink>
            </Container>
        )
    }
}