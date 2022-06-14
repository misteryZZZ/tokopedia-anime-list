import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from "./pages/Home";
import Header from "./components/Header";
import { GlobalProvider } from './context/GlobalState';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import Details from './pages/Details';
import AnimeCollections from './pages/AnimeCollections';
import Footer from './components/Footer';

const App = () => {

  const client = new ApolloClient({
    cache: new InMemoryCache(),
    uri: "https://graphql.anilist.co/"
  })
  return (
    <GlobalProvider>
    <ApolloProvider client={client}>
      <Router>
        <Header />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/detail/:id' element={<Details/>} />
            <Route path='/anime-collections' element={<AnimeCollections />} />
          </Routes>
          <Footer/>
      </Router>
    </ApolloProvider>
  </GlobalProvider>
  )
}

export default App