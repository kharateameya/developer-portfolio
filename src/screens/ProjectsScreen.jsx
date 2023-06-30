import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import project1 from "../Images/p1-1.PNG"
import EcommerceRegister from "../Images/E-commerce-Register.PNG"
import EcommerceSignin from "../Images/E-commerce-Signin.PNG"
import project2 from "../Images/p1-2.PNG"
import project3 from "../Images/p1-3.PNG"
import ShippingAddress from "../Images/p1-4.PNG"
import Payment from "../Images/p1-5.PNG"
import AdminDashboard0 from "../Images/Admin-Dashboard0.PNG"
import AdminDashboard1 from "../Images/Admin-Dashboard1.PNG"
import AdminProducts from "../Images/Admin-Products.PNG"
import AdminNewProduct from "../Images/Admin-NewProduct.PNG"
import AdminOrders from "../Images/Admin-Orders.PNG"
import PlaceOrder from "../Images/p1-6.PNG"
import Order from "../Images/OrderHistory.PNG"
import Signup from "../Images/Signup.PNG"
import NetflixLogin from "../Images/NetflixLogin.PNG"
import NetflixMovies from "../Images/NetflixMovies.PNG"
import NetflixHome0 from "../Images/NetflixHome0.PNG"
import NetflixHome1 from "../Images/NetflixHome1.PNG"
import NetflixMyList from "../Images/NetflixMyList.PNG"
import NetflixTvshows from "../Images/NetflixTvshows.PNG"
import ScreenerLogin from "../Images/ScreenerLogin.PNG"
import ScreenerGraph from "../Images/ScreenerGraph.PNG"
import ScreenerHome from "../Images/ScreenerHome.PNG"
import ScreenereMail from "../Images/ScreenereMail.PNG"
import Portfolio from "../Images/Portfolio.gif"
import Git from "../Images/GitHub-gif.gif"



const ProjectsScreen = () => {
  return (
    <>
    <div id='project' className='wrapper pb'>
      <div className='pb-min'>
      <h1 className='project-h'>PORTFOLIO <img style={{width:"55px", marginBottom:"15px"}} src={Portfolio} alt="" />
      </h1>
      </div>
      <Carousel className='arrow project-carousel' data-bs-theme="dark">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={EcommerceSignin}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={EcommerceRegister}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={project1}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={project2}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={project3}
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={ShippingAddress}
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Payment}
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={PlaceOrder}
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Order}
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={AdminDashboard0}
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={AdminDashboard1}
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={AdminOrders}
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={AdminNewProduct}
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={AdminProducts}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>

    <div className="text">
    <h3>E-commerce</h3>
    <p className='project-info'>E-commerce is a fully functional website using react in frontend and node and mongodb in backend. Website is fully responsive with a scalabel backend, handeling authentication authorization using JSON web token and express middleware with a Paypal intigration for online payments and also have a admin dashboard for seller where a seller can see the sales charts, manage products and handle orders, using online cloud service to upload product images on cloudinary.</p>
    <a style={{textDecoration:"none", fontWeight:"lighter" ,color:"black"}} href="https://github.com/kharateameya/E-commerce">
      
      <p style={{float:"right", marginTop:"15px"}}> 
    <img style={{width:"40px", paddingRight: "5px", cursor:"pointer"}} src={Git} alt="GitHub-logo"/>
    code
      </p>
    </a>
    </div>
    </div>



    <div className='wrapper pb'>
      <Carousel className='arrow project-carousel' data-bs-theme="light">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Signup}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={NetflixLogin}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={NetflixHome0}
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={NetflixHome1}
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={NetflixMovies}
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={NetflixTvshows}
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={NetflixMyList}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>

    <div className="text">
    <h3>Netflix Clone</h3>
    <p className='project-info'>This amazing netflix clone developed using React, styled-components for styling, firebase for user authentication, nodejs, express, mongodb for backend. Movies are fetch through TMDB api. User can filter the movies, tv shows according to their intrest and user can add and movies to their my list page which store that movies or tv shows to watch later using Mongodb. The app also have picture in picture mode for video player.</p>
    <a style={{textDecoration:"none", fontWeight:"lighter" ,color:"black"}} href="https://github.com/kharateameya/netflix-clone">
      
      <p style={{float:"right", marginTop:"15px"}}> 
    <img style={{width:"40px", paddingRight: "5px", cursor:"pointer"}} src={Git} alt="GitHub-logo"/>
    code
      </p>
    </a>
    </div>
    </div>


    <div className='wrapper pb'>
      <Carousel className='arrow project-carousel' data-bs-theme="dark">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={ScreenerLogin}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={ScreenerHome}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={ScreenerGraph}
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={ScreenereMail}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>

    <div className="text">
    <h3>Stock Screener</h3>
    <p className='project-info'>Stock Screener is a app where user can see how was the stocks are performing and by search user can add and remove stocks from watchlist, user can able to see open, high, low, close, change in percentage, last price, current price. And also user can analyze a particular stock on the basis of graph which represents data at any timeframe. This data was fetching through an API called Finhub.io. If user wants to share how was the particular stock was performing today to their friend or boss then user can send a mail. By using nodejs and nodemailer and a host service ethereal email which is a fake SMTP service provider. And firebase for user authentication</p>
    <a style={{textDecoration:"none", fontWeight:"lighter" ,color:"black"}} href="https://github.com/kharateameya/Stock-Screener">
      
      <p style={{float:"right", marginTop:"15px"}}> 
    <img style={{width:"40px", paddingRight: "5px", cursor:"pointer"}} src={Git} alt="GitHub-logo"/>
    code
      </p>
    </a>
    </div>
    </div>
    </>
  )
}

export default ProjectsScreen