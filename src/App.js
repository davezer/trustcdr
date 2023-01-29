import React, {useState } from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Nav from './components/Nav';
// import Home from './components/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import Page from './Page';

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';

import { setContext } from '@apollo/client/link/context';

const httpLink = createHttpLink({
  uri: 'http://localhost:3001/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});


function App() {
  const [pages] =useState([
    { name: "Home" },
    { name: "About" }
  ]);;
  const [currentPage, setCurrentPage] = useState(pages[0]);
  return (
    <ApolloProvider client={client}>
      <Router>
        <>
        <div>
      <Header>
        <Nav
          pages={pages}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
        ></Nav>
      </Header>
      <main>
        <Page currentPage={currentPage}></Page>
      </main>
      <Footer />
    </div>
          
        </>
      </Router>
    </ApolloProvider>
  );
}

export default App;