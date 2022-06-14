import styled from "@emotion/styled";
import React, {useContext} from "react";
import { Link } from "react-router-dom";
import { GlobalContext } from "../context/GlobalState";
import 'animate.css';
import Swal from "sweetalert2";

const AnimeCard = ({anime}) => {

    const CardContainer = styled.div`
      background-color: #3b2763;
      width: 14rem;
      height: 20rem;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      position: relative;
      border-radius: 20px;
      margin-right: 11px;
      margin-bottom: 10px;

      animation: fadeIn; 
      animation-duration: 800ms;

      @media (max-width: 768px) {
          margin-top: 20px;
      }
    `;
  
    const TextContainer = styled.div`
      width: 100%;
      height: 3rem;
      display: flex;
      justify-content: center;
      align-items: center;
      
    `;
  
    const Text = styled.h2`
      font-family: 'Nunito Sans', sans-serif;
      color: #fafafa;
      font-size: 0.8rem;
      opacity: 87%;
  
    `
  
    const ContentContainer = styled.div`
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      border-radius: 20px;
    `;
  
    const Image = styled.img`
      width: 100%;
      height: 17rem;
      opacity: 0.9;
      border-bottom-right-radius: 20px;
      border-bottom-left-radius: 20px;
    `;
  
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
      font-size: 0.9rem;
      border-radius: 1.10rem;
      border: 1px solid;
      border-color: #55417b;
      transition: 0.3s ease-in;
      &:hover {
        color: #f0abfc;
        background-color: #55417b;
        border: none;
        cursor: pointer;
      }
      &:disabled {
        color: #f0abfc;
        opacity: 38%;
        background-color: rgba(18,18,18, 0.3);
        color: #f0abfc;
        border: 1px solid;
        border-color: #f0abfc;
        cursor: default;
      }
    `;
  
    const NavLink = styled(Link)`
      width: 100%;
      height: 100%;
    `;
  
    const Toast = () => {
      Swal.fire({
        toast: true,
        color: '#f2f2f2',
        background: '#1d1d1d',
        position: 'top-end',
        showConfirmButton: false,
        timer: 1200,
        icon: 'success',
        iconColor: '#f0abfc',
        titleText: 'Success added to collections!'
      });
    }
  
      const { addAnimeToCollections, collections } = useContext(GlobalContext);
      
      let storedAnime = collections.find(o => o.id === anime.id);
  
      const collectionsDisabled = storedAnime ? true : false;
      
      
    return (
  
        <CardContainer>
          <NavLink to={`/detail/${anime.id}`}>
            <TextContainer>
              <Text>
                {anime.title.native}
              </Text>
            </TextContainer>
            <ContentContainer>
              <Image src={anime.coverImage.large} alt={anime.title.native} />
            </ContentContainer>
          </NavLink>
          <ButtonContainer>
            <Button 
            onClick={() => {
              addAnimeToCollections(anime);
              Toast();}}
            disabled={collectionsDisabled}>
              Add to Collection
            </Button>
          </ButtonContainer>
        </CardContainer>
    )
  }
  
  export default AnimeCard