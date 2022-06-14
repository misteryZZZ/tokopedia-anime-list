import React, {useContext} from 'react';
import styled from '@emotion/styled';
import { GlobalContext } from '../context/GlobalState';
import { Link } from 'react-router-dom';
import 'animate.css';
import Swal from 'sweetalert2'

const CollectionsCard = ({anime}) => {

    const CardContainer = styled.div`
        background-color: rgba(242, 242, 242, 0.05);
        width: 14rem;
        height: 20rem;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        position: relative;
        border-radius: 20px; 

        animation: fadeIn;
        animation-duration: 800ms;
    `

    const TextContainer =styled.div`
        width: 100%;
        height: 3rem;
        display: flex;
        justify-content: center;
        align-items: center;
    `

    const Text = styled.h2 `
        font-family: 'Nunito Sans', sans-serif;
        color: #fafafa;
        font-size: 0.8rem;
        opacity: 87%:
    `

    const ContentContainer = styled.div`
        width: 100%;
        height; 100;
        display: flex;
        justify-content: center;
    `

    const Image = styled.img`
        width: 100%;
        height: 17rem;
        opacity: 0.9;
        border-bottom-left-radius: 20px;
        border-bottom-right-radius: 20px;
    `

    const ButtonContainer = styled.div`
        width: 80%;
        height: 2rem;
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        bottom: 1rem;

    `

    const Button = styled.button`
    background-color: rgba(18,18,18, 0.3);
    width: 100%;
    height: 100%;
    font-family: 'Nunito Sans', sans-serif;
    color: #f0abfc;
    font-size: 0.8rem;
    border-radius: 0.15rem;
    border: 1px solid;
    border-color: #55417b;
    border-radius: 20px;
    padding-right: 10px;
    padding-left:10px;
    transition: 0.3s;
    &:hover {
        color: #f0abfc;
        background-color: #55417b;
      border: none;
      cursor: pointer;
    }
    `

    const NavLink = styled(Link)`
        width: 100%;
        height: 100%;
    `

    const Toast = () => {
        Swal.fire({
            toast: true,
            color: '#f2f2f2',
            background:'#1d1d1d',
            position: 'top-end',
            showConfirmButton: false,
            timer: 1200,
            icon: 'success',
            iconColor: 'rgb(191, 25, 69)',
            titleText: 'Anime is no longer your collections :('
        })
    }

    const { deleteAnimeFromCollections } = useContext(GlobalContext)

  return (
    <CardContainer>
        <NavLink to={`/detail/${anime.id}`}>
            <TextContainer>
                <Text>
                    {anime.title.native}
                </Text>
            </TextContainer>
            <ContentContainer>
                <Image src={anime.coverImage.large} />
            </ContentContainer>
        </NavLink>
        <ButtonContainer>
            <Button onClick={() => {
                deleteAnimeFromCollections(anime.id);
                Toast();
            }}>
                Delete from collections
            </Button>
        </ButtonContainer>
    </CardContainer>
  )
}

export default CollectionsCard