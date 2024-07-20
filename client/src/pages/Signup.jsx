import React, { Component, useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Popup from '../components/Popup';
import { useNavigate } from 'react-router-dom';

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


const Signup = () => {

    // constructor(props){
    //     super(props)
    //     this.state = {
    //             fname: "",
    //             lname: "",
    //             email: "",
    //             password: "",
    //             popupMessage: "",
    //             showPopup: false,
    //             redirect: false
    //         };
    //     this.handleSubmit = this.handleSubmit.bind(this);
    //     this.handleClosePopup = this.handleClosePopup.bind(this);
    // }

    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [popupMessage, setPopupMessage] = useState("");
    const [showPopup, setShowPopup] = useState(false);
    const [changeLink, setChangeLink] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(fname, lname, email, password);
        fetch("http://localhost:5000/register", {
            method: "POST",
            crossDomain: true,
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
                "Access-Control-Allow-Origin": "*",
            },
            body: JSON.stringify({
                fname,
                lname,
                email,
                password,
            }),
        }).then((res) => {
            if (!res.ok) {
                throw new Error("Netwrok response was not ok");
            }
            return res.json();
        })
            .then((data) => {
                console.log(data);
                if (data.status === "ok") {
                    setPopupMessage("User registered successfully");
                    setShowPopup(true);
                    setChangeLink(true);
                    // setTimeout(() => {
                    //     setShowPopup(false);
                    // }, 2000);
                } else {
                    if(data.error === "User exists"){
                        setPopupMessage("User Exists.")
                    } else{
                        setPopupMessage("There is some error. Try again.");
                    }
                    setShowPopup(true);
                }
            }).catch(error => {
                console.log('Error during fetch:', error);
                setPopupMessage("Network Error");
                setShowPopup(true);
            })
    };

    const handleClosePopup = () => {
        if (showPopup && changeLink) {
            setShowPopup(false);
            setChangeLink(false);
            navigate("/login");
        } else{
            setShowPopup(false);
        }
    };

    return (
        <Container>
            {showPopup && (
                <Popup
                    message={popupMessage}
                    onClose={handleClosePopup}
                />
            )}
            <Top>Sign up</Top>
            <Form onSubmit={handleSubmit}>
                <Input>
                    <Heading>First name</Heading>
                    <InputContainer>
                        <input type="text" placeholder='Enter firstname' onChange={(e) => setFname(e.target.value)} />
                    </InputContainer>
                </Input>
                <Input>
                    <Heading>Last name</Heading>
                    <InputContainer>
                        <input type="text" placeholder='Enter lastname' onChange={(e) => setLname(e.target.value)} />
                    </InputContainer>
                </Input>
                <Input>
                    <Heading>Email address</Heading>
                    <InputContainer>
                        <input type="email" placeholder='Enter email' onChange={(e) => setEmail(e.target.value)} />
                    </InputContainer>
                </Input>
                <Input>
                    <Heading>Password</Heading>
                    <InputContainer>
                        <input type="password" placeholder='Enter password' onChange={(e) => setPassword(e.target.value)} />
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

export default Signup;