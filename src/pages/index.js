import React from "react"
import { Link } from "gatsby"
import { FaTwitter, FaFacebookF, FaInstagram } from "react-icons/fa"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Newsletter from "../components/newsletter"

const bgVideo = require("../dist/mp4/bg.mp4")

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />

    <div className="overlay"></div>
    <video
      playsInline="playsInline"
      autoPlay="autoPlay"
      muted="muted"
      loop="loop"
    >
      <source src={bgVideo} type="video/mp4"></source>
    </video>

    <div className="masthead">
      <div className="masthead-bg"></div>
      <div className="container h-100">
        <div className="row h-100">
          <div className="col-12 my-auto">
            <div className="masthead-content text-white py-5 py-md-0">
              <h1 className="mb-3">Coming Soon!</h1>
              <p className="mb-5">
                We're working hard to finish the development of this site. Our
                target launch date is
                <strong>January 2022</strong>! Sign up for updates using the
                form below!
              </p>
              <Newsletter />
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="social-icons">
      <ul className="list-unstyled text-center mb-0">
        <li className="list-unstyled-item">
          <a href="#">
            <FaTwitter />
          </a>
        </li>
        <li className="list-unstyled-item">
          <a href="#">
            <FaFacebookF />
          </a>
        </li>
        <li className="list-unstyled-item">
          <a href="#">
            <FaInstagram />
          </a>
        </li>
      </ul>
    </div>
  </Layout>
)

export default IndexPage
