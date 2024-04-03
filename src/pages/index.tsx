import { Header } from 'components/Header'
import { Main } from 'components/Main'
import home from 'styles/home.module.scss'

import React from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

const HomePage = () => (
  <div className={home.container}>
    <Header />
    <Main />
  </div>
)

export default HomePage
