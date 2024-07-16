import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';


const Container = styled.div`
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
const Button = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 8px;
    background: ${({ theme }) => theme.button};
    &:hover {
        color: ${({ theme }) => theme.text_primary}
    }
`;
const SignupLink = styled.div`
    display: flex;
    gap: 4px;
`;
const Login = styled.div`
    color: blue;
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 5px;

`;


export default class Signup extends Component {

    constructor(props){
        super(props)
        this.state = {
                fname: "",
                lname: "",
                email: "",
                password: ""
            };
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleSubmit(e) {
        e.preventDefault();
        const { fname, lname, email, password } = this.state;
        console.log(fname, lname, email, password);
        fetch("http://localhost:5000/register", {
            method:"POST",
            crossDomain:true,
            headers:{
                "Content-Type":"application/json",
                Accept:"application/json",
                "Access-Control-Allow-Origin":"*",
            },
            body:JSON.stringify({
                fname,
                lname,
                email,
                password
            }),
        }).then((res) => res.json())
        .then((data) => {
            console.log(data, "userRegister");
        })
    }
    

    render() {
        return (
            <Container>
                <Top>Sign up</Top>
                <Form onSubmit={this.handleSubmit}>
                    <Input>
                        <Heading>First name</Heading>
                        <InputContainer>
                            <input type="text" placeholder='Enter firstname' onChange={(e) => this.setState({ fname: e.target.value })} />
                        </InputContainer>
                    </Input>
                    <Input>
                        <Heading>Last name</Heading>
                        <InputContainer>
                            <input type="text" placeholder='Enter lastname' onChange={(e) => this.setState({ lname: e.target.value })} />
                        </InputContainer>
                    </Input>
                    <Input>
                        <Heading>Email address</Heading>
                        <InputContainer>
                            <input type="email" placeholder='Enter email' onChange={(e) => this.setState({ email: e.target.value })} />
                        </InputContainer>
                    </Input>
                    <Input>
                        <Heading>Password</Heading>
                        <InputContainer>
                            <input type="password" placeholder='Enter password' onChange={(e) => this.setState({ password: e.target.value })} />
                        </InputContainer>
                    </Input>
                    <Button>
                        <button type='submit'>Submit</button>
                    </Button>
                </Form>
                <SignupLink>
                    Already a user?<Link to={"/login"}> <Login>Sign in</Login>
                    </Link>
                </SignupLink>
            </Container>
        )
    }
}