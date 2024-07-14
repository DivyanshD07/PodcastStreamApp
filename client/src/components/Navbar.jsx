import { Menu, PersonRounded } from '@mui/icons-material';
import React from 'react';
import { Link } from 'react-router-dom';
import styled from "styled-components";

const NavBarDiv = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding: 16px 40px;
    align-items: center;
    color: ${({ theme }) => theme.text_primary};
    gap: 30px;
    background: ${({ theme }) => theme.bgLight};
    border-radius: 16px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(5.7px);
    -webkit-backdrop-filter:blur(5.7px);
    @media (max-width: 768px) {
        padding: 16px;
    }
`;

const IconButton = styled.div`
    color: ${({ theme }) => theme.text_secondary} !important;
`;

const ButtonDiv = styled.div`
    font-size: 14px;
    cursor: pointer;
    text-decoration: none;
    // max-width: 70px;
    display: flex;
    align-items: center;
    color: ${({ theme }) => theme.primary};
    border: 1px solid ${({ theme }) => theme.primary};
    border-radius: 12px;
    padding: 8px 10px;
    gap: 8px;
`;

const Navbar = ({menuOpen, setMenuOpen}) => {
    return (
        <NavBarDiv>
            <IconButton onClick={() => setMenuOpen(!menuOpen)}>
                <Menu />
            </IconButton>

            <ButtonDiv>
                <PersonRounded />
                <Link to={"/login"}>
                    Login
                </Link>
            </ButtonDiv>
        </NavBarDiv>
    )
}

export default Navbar