import React from 'react'
import Header from './Header'
import MiddlePartHome from './MiddlePartHome'

const HomePage = ({roboto,roboto2}) => {
  return (
    <>
        <Header roboto={roboto}/>
        <MiddlePartHome roboto={roboto} roboto2={roboto2}/>
    </>
  )
}

export default HomePage