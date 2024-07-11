import React from 'react';
import styled from "styled-components";
import { HomeRounded, CloseRounded, LogoutRounded, SearchRounded, FavoriteRounded, UploadRounded, LightModeRounded } from '@mui/icons-material';
import { FaMicrophone } from 'react-icons/fa';
import { Link } from "react-router-dom";

const MenuContainer = styled.div`
    display: flex;
    flex: 0.3;
    flex-direction: column;
    height: 100vh;
    background-color: ${({ theme }) => theme.bg};
    color: ${({ theme }) => theme.text_primary};
    // @media (max-width: 1100px) {
    //     position: fixed;
    //     z-index: 1000;
    //     width: 100%;
    //     max-width: 250px;
    //     left: ${({ setMenuOpen }) => (setMenuOpen ? "0" : "-100%")};
    //     transition: 0.3s ease-in-out;
    // }
`;
const Logo = styled.div`
    width: 100% ;
    color: ${({ theme }) => theme.primary};
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 6px;
    font-weight: bold;
    font-size: 20px;
    margin: 16px 0px;
`;

// const Image = styled.div`
//     height: 40px;
// `;

const Flex = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;

const Close = styled.div`
    display: none;
    @media (max-width: 1100px) {
        display:block;
    }
`;
const Elements = styled.div`
    padding: 4px 16px;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    gap: 12px;
    cursor: pointer;
    text-decoration: none !important;
    color: ${({ theme }) => theme.text_secondary};
    &:hover {
        background-color: ${({ theme }) => theme.text_secondary + 50};
    }
`;
const NavText = styled.div`
    padding: 12px 0px;
    text-decoration: none !important;
`;
const HR = styled.div`
    width: 100%;
    height: 2px;
    background-color: ${({ theme }) => theme.text_secondary + 50};
    margin: 10px 0px;
`;

const menuItems = [
    {
        link: "/",
        name: "Dashboard",
        icon: <HomeRounded />
    },
    {
        link: "/search",
        name: "Search",
        icon: <SearchRounded />
    },
    {
        link: "/favourites",
        name: "Favourites",
        icon: <FavoriteRounded />
    },
]

const button = [
    {
        fun: () => console.log("upload"),
        name: "Upload",
        icon: <UploadRounded />
    },
    {
        fun: () => console.log("lightmode"),
        name: "LightMode",
        icon: <LightModeRounded />
    },
    {
        fun: () => console.log("log out"),
        name: "Log Out",
        icon: <LogoutRounded />
    },
]

const Sidebar = () => {
    return (
        <MenuContainer>
            <Flex>
                <Logo>
                    <FaMicrophone className="bg-white" />
                    Podstream
                </Logo>
                <Close>
                    <CloseRounded />
                </Close>
            </Flex>
            {
                menuItems.map((item) => (
                    <Link TO={item.link}>
                        <Elements>
                            {item.icon}
                            <NavText>{item.name}</NavText>
                        </Elements>
                    </Link>
                ))
            }
            <HR />
            {
                button.map((item) => (
                    <Elements onClick={item.fun}>
                        {item.icon}
                        <NavText>{item.name}</NavText>
                    </Elements>
                ))
            }

        </MenuContainer>
    )
}

export default Sidebar;