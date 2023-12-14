import React from 'react'
import './Brand.css'
import {google, slack, atlassian, shopify, dropbox} from './imports'


const Brand = () => {
  return (
    <div className="gpt3__brand section__padding">
        <div className="">
          <img src={google} alt="google" />
        </div>
        <div className="">
          <img src={slack} alt="slack" />
        </div>
        <div className="">
          <img src={atlassian} alt="atlassian" />
        </div>
        <div className="">
          <img src={shopify} alt="shopify" />
        </div>
        <div className="">
          <img src={dropbox} alt="dropbox" />
        </div>
    </div>
  )
}

export default Brand