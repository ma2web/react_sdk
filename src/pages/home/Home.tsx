import React from 'react';
import MainLayout from 'layout/MainLayout/MainLayout';
import { useStyles } from './Home.styles';
import Header from './header/Header';
import Solutions from './solutions/Solutions';
import About from './about/About';

const Home = () => {
  const classes = useStyles();
  return (
    <MainLayout>
      <main className={classes.root}>
        <Header />
        <div className={classes.curved} />
        <Solutions />
        <About />
      </main>
    </MainLayout>
  );
};

export default Home;
