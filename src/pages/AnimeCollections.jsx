import React, {useContext, useEffect, useState} from 'react';
import { GlobalContext } from '../context/GlobalState';
import CollectionsCard from '../components/CollectionsCard';
import styled from '@emotion/styled';

const AnimeCollections = () => {
    const Wrapper = styled.div`
        height: fit-content;
        min-height: 50rem;
        width: 100%;
       
        display: flex;
        justify-content: center;
        padding-bottom: 3rem;
    `;

    const WrapperContainer = styled.div`
        width: 80%;
        height: fit-content;
        display: flex;
        flex-direction: column;
        justify-content: center;
    `

    const ContentContainer = styled.div`
        width: 100%;
        height: fit-content;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 1rem;
        margin-top: 3rem;
    `

    const TextContainer = styled.div`
        width: 100%;
        height: 5rem;
        margin-top: 3rem;
        display: flex;
        justify-content: center;
        aign-items: center;
    `

    const Text = styled.h2`
    font-family:'Nunito Sans', sans-serif;
    text-align: center;
    color: #F2F2F2;
    font-size: 2rem;
    opacity: 0.9;
    font-weight: 300;
  `;

  const {collections} = useContext(GlobalContext)

  return (
    <Wrapper>
        <WrapperContainer>
            <TextContainer>
                <Text>
                    Your Collections
                </Text>
            </TextContainer>
            <ContentContainer>
                {collections && collections.map(anime => {
                    return (
                        <CollectionsCard key={anime.id} anime={anime} />
                    )
                })}
            </ContentContainer>
        </WrapperContainer>
    </Wrapper>
  )
}

export default AnimeCollections