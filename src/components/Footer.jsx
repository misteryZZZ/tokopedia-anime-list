import styled from '@emotion/styled'
import React from 'react'

const Footer = () => {

  const Wrapper = styled.div`
    width: 100%;
    height: 5rem;
    margin-top: 3rem;
    background-color: rgba(242, 242, 242, 0.05);
    display: flex;
    justify-content: center;
    align-items: center;
  `

  const Text = styled.h2`
    font-size: 1rem;
    font-family: 'Nunito Sans', sans-serif;
    font-weight: 300;
    color: #f2f2f2;
    text-align: center;
    font-size: 1rem;

    @media only screen and (min-width: 768px) {
      font-size: 1.25rem;
    }
  `
  const Span = styled.span`
    color: #f0abfc;
    margin-right: 0.5rem;
    font-size: 1rem;
  `
  return (
    <Wrapper>
      <Text>
        <Span>
          Hendriawan Yudhistira
        </Span>
         | All Right Reserved 2022
      </Text>
    </Wrapper>
  )
}

export default Footer