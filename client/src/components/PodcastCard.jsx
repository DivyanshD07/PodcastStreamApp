import React from 'react';
import styled from "styled-components";
import Avatar from "@mui/material/Avatar";
import { IconButton } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";

const Card = styled.div``;
const Top = styled.div``;
const Favorite = styled.div``;
const CardImage = styled.div``;
const CardInformation = styled.div``;
const MainInfo = styled.div``;
const Title = styled.div``;
const Decryption = styled.div``;
const CreatersInfo = styled.div``;
const Creator = styled.div``;
const CreaterName = styled.div``;
const Views = styled.div``;

const PodcastCard = () => {
    return (
        <Card>
            <Top>
                <Favorite>
                    <FavoriteIcon />
                </Favorite>
                <CardImage />
            </Top>
            <CardInformation>
                <MainInfo>
                    <Title></Title>
                    <Decryption></Decryption>
                    <CreatersInfo>
                        <Creator>
                            <Avatar></Avatar>
                            <CreaterName></CreaterName>
                        </Creator>
                    </CreatersInfo>
                </MainInfo>
            </CardInformation>
        </Card>
    )
}

export default PodcastCard