import React from 'react';
import styled from 'styled-components';
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
const Login = styled.div`
    color: blue;
`;

const Signup = () => {
    return (
        <Container>
            <Top>Sign up</Top>
            <Input>
                <Heading>First name</Heading>
                <InputContainer>
                    <input type="name" placeholder='Enter firstname' />
                </InputContainer>
            </Input>
            <Input>
                <Heading>Last name</Heading>
                <InputContainer>
                    <input type="name" placeholder='Enter lastname' />
                </InputContainer>
            </Input>
            <Input>
                <Heading>Email address</Heading>
                <InputContainer>
                    <input type="email" placeholder='Enter email' />
                </InputContainer>
            </Input>
            <Input>
                <Heading>Password</Heading>
                <InputContainer>
                    <input type="password" placeholder='Enter password' />
                </InputContainer>
            </Input>
            <Button>
                <button>Submit</button>
            </Button>
            <SignupLink>
                Already a user?<Link to={"/login"}> <Login>Sign in</Login>
                </Link>
            </SignupLink>
        </Container>
    )
}

export default Signup