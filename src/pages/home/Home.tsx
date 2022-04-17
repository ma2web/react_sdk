import React from 'react';
import MainLayout from 'layout/MainLayout/MainLayout';
import { useStyles } from './Home.styles';
import Header from './header/Header';
import Solutions from './solutions/Solutions';

const Home = () => {
  const classes = useStyles();
  return (
    <MainLayout>
      <main className={classes.root}>
        <Header />
        <div className={classes.curved} />
        <Solutions />
      </main>
    </MainLayout>
  );
};

export default Home;
