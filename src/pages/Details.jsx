 import React from 'react';
 import styled from '@emotion/styled';
 import DetailsCard from '../components/DetailsCard';
 
 const Details = () => {

    const Wrapper = styled.div`
        width: 100%;
        height: fit-content;
        display: flex;
        justify-content: center;
        margin-top: 3rem;
        min-height: 40rem;
    `

    const WrapperContainer = styled.div`
        width: 100%;
        height: fit-content;
        display: flex;
        flex-direction: column;
        justify-content: center;

        @media only screen and (min-width: 768px){
            width: 80%;
        }
    `;

    const TextContainer = styled.div`
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 5rem;
    `;

    const Text = styled.div`
        font-family: 'Nunito Sans', sans-serif;
        text-align: center;
        color: #f2f2f2;
        font-size: 2rem;
        opacity: 0.9;
        font-weight: 300;
    `

    const ContentContainer = styled.div`
        width: 100%;
        height: fit-content;
        display: flex;
        justify-content: center;
        margin-top: 3rem;
    `

   return (
     <Wrapper>
         <WrapperContainer>
            <TextContainer>
                <Text>
                    Anime Details Information
                </Text>
            </TextContainer>
            <ContentContainer>
                <DetailsCard/>
            </ContentContainer>
         </WrapperContainer>
     </Wrapper>
   )
 }
 
 export default Details