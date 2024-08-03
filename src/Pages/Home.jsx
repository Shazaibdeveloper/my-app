import React from 'react'
import Header from "../Components/Header";
import Faq from '../Components/Faq';
import Card from '../Components/Card';

const Home = () => {
    let content = {
          name: "Shahzaib",
           email: "shahzaibmuhammad627@gmail.com",
    }
  return (
    <>
    <Header content={content} />
    <Faq/>
    <Card/>
    </>
  )
}

export default Home