import React from 'react'
import styled from "styled-components"

const Overlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
`;

const PopupContainer = styled.div`
    background: white;
    padding: 20px;
    border-radius: 5px;
    text-align: center;
`;

const CloseButton = styled.button`
    margin-top: 10px;
`;

const Popup = ({ message, onClose }) => {
    return (
        <Overlay>
            <PopupContainer>
                <p>{message}</p>
                <CloseButton onClick={onClose}>Close</CloseButton>
            </PopupContainer>
        </Overlay>
    )
}

export default Popup