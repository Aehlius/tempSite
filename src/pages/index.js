import React from "react"
import { Link } from "gatsby"
import "../components/styles/index.css"
import Footer from "../components/footer"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Sidebar from "../components/sidebar"
import Skills from "../pages/skills"
import Social from "../components/socialLinks"
import {
  TiStarOutline as Fav ,
  FaCanadianMapleLeaf as Can,
} from 'react-icons/fa';

const IndexPage = () => (
  <div>
  <div className="landingPage">
  <SEO title="Iskender Akhmedov" />
  <div className="my-image" style={{width:170}}>
  <Image />
  </div>
  <br/>
  <h4>
          <br /> <br />  <br /> Site Under Construction
          </h4>
          <br />  <br /> <br /> <br /> <br />
          <br /> <br /> <br /> <br /><h4>In the meantime, find me here</h4> 
  </div>
  <Social />
  </div>
)

export default IndexPage
