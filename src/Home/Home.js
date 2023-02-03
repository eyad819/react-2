import React from "react";
import Header from "./Header";
import "./Home.css";
import Navs from '../comp/Navs/Navs';

import prideimage from "./../images/pride.png";
import Everything from "./../images/2.png";
import explor1 from "./../images/01.jpg";
import explor2 from "./../images/02.jpg";
import explor3 from "./../images/03.jpg";
import explor4 from "./../images/1.jpg";
import explor5 from "./../images/2.jpg";
import { Carousel } from "react-bootstrap";
const Home = () => {
  return (
    <div>
      <Navs/>
      {/* <Headerr/> */}
      <Header />
      <section id="about" className="numbers">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <h2>1854+</h2>
              <h6>SAVINGS</h6>
            </div>
            <div className="col-md-3">
              <h2>3486+</h2>
              <h6>PHOTOS</h6>
            </div>
            <div className="col-md-3">
              <h2>7895+</h2>
              <h6>ROCKETS</h6>
            </div>
            <div className="col-md-3">
              <h2>5831+</h2>
              <h6>GLOBES</h6>
            </div>
          </div>
        </div>
      </section>
      <section className="pride">
        <div className="container">
          <div className="row">
            <div className="col-md-7">
              <img src={prideimage} title="prideimg" />
            </div>

            <div className="col-md-5 text">
              <h2>
                We pride ourselves on making real food from the best
                ingredients.
              </h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                et purus a odio finibus bibendum in sit amet leo. Mauris feugiat
                erat tellus.
              </p>
              <button>
                <a href="#">Learn More</a>
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="everything ">
        <div className="container">
          <div className="row center-content">
            <div className="col-md-5">
              <h3>
                We make everything by hand with the best possible ingredients.
              </h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                et purus a odio finibus bibendum in sit amet leo. Mauris feugiat
                erat tellus.Far far away, behind the word mountains, far from
                the countries Vokalia and Consonantia, there live the blind
                texts.
              </p>
              <ul className="list">
                <li>
                  <i class="fa fa-check"></i>
                  Etiam sed dolor ac diam volutpat.
                </li>
                <li>
                  <i class="fa fa-check"></i>
                  Erat volutpat aliquet imperdiet.
                </li>
                <li>
                  <i class="fa-solid fa-check"></i>
                  purus a odio finibus bibendum.
                </li>
              </ul>
              <button>
                <a href="#">Learn More</a>
              </button>
            </div>
            <div className="col-md-7">
              <img src={Everything} />
            </div>
          </div>
        </div>
      </section>
      <section  className="video ">
        <div className="container">
          <div className="row ">
            <div className="col-lg-12 col-md-12">
              <h1>
                When a man's stomach is full it makes no
                <br />
                difference whether he is rich or poor.
              </h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                ets purus a odio
                <br />
                finibus bibendum in sit amet leo. Mauris feugiat erat tellus.
              </p>
              <div>
                <a href="#">
                  {" "}
                  <i class="fa fa-play"></i> Watch Our Story
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="explore" className="explor">
        <div className="container">
          <div className="about">
            <h3>Explore Our Foods</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et
              purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat
              tellus. Far far away, behind the word mountains, far from the
              countries Vokalia and Consonantia, there live the blind texts.
              Separated they live in Bookmarksgrove.
            </p>
          </div>
          <div className="row">
            <div class="col-md-4">
              <div class=" card-product">
                <div class="img-wrap">
                  <img src={explor1} alt="img" />
                </div>
                <div class="info-wrap">
                  <h4 class="title">Rainbow Vegetable Sandwich</h4>
                  <p class="desc"> Time: 15 - 20 Minutes | Serves: 1 </p>
                  <div class="price-wrap h3">
                    <span class="price-new">$10.50</span>{" "}
                    <del class="price-old">$11.70</del>
                  </div>
                </div>
                <div class="bottom-wrap">
                  <a
                    href=""
                    class="btn btn-sm btn-primary float-right"
                    data-toggle="modal"
                    data-target="#modalContactForm"
                  >
                    Order Now
                  </a>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="prodect">
                <div>
                  <img src={explor2} />
                </div>
                <div class="info-wrap">
                  <h4 className="titel">Vegetarian Burger</h4>
                  <p>Time: 30 - 45 Minutes | Serves: 1</p>
                  <div class="price-wrap h3">
                    <span class="price-new">$10.50</span>{" "}
                    <del class="price-old">$11.70</del>
                  </div>
                </div>

                <div className="bottom-wrap">
                  <a
                    href=""
                    class="btn btn-sm btn-primary float-right"
                    data-toggle="modal"
                    data-target="#modalContactForm"
                  >
                    Order Now
                  </a>
                </div>
              </div>
            </div>

            <div class="col-md-4">
              <div class=" card-product">
                <div class="img-wrap">
                  <img src={explor3} alt="img" />
                </div>
                <div class="info-wrap">
                  <h4 class="title">Rainbow Vegetable Sandwich</h4>
                  <p class="desc"> Time: 15 - 20 Minutes | Serves: 1 </p>
                  <div class="price-wrap h3">
                    <span class="price-new">$10.50</span>{" "}
                    <del class="price-old">$11.70</del>
                  </div>
                </div>
                <div class="bottom-wrap">
                  <a
                    href=""
                    class="btn btn-sm btn-primary float-right"
                    data-toggle="modal"
                    data-target="#modalContactForm"
                  >
                    Order Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div class="space100"></div>
      {/* Testimonials */}
      <section id="reviews" className="slider">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12">
              <h3>Testimonials</h3>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12 col-md-12">
              <Carousel>
                <Carousel.Item>
                  
                    <img src={explor4} />
                  
                  <Carousel.Caption className="caption">
                    <p>
                      "Far far away, behind the word mountains, far from the
                      countries Vokalia and Consonantia, there live the blind
                      texts. "
                    </p>
                    <span class="author">Simab Dave - Web Designer</span>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img src={explor5} />

                  <Carousel.Caption className="caption">
                    <p>
                      "Far far away, behind the word mountains, far from the
                      countries Vokalia and Consonantia, there live the blind
                      texts. Separated they live far from the countries
                      Vokalia."
                    </p>
                    <span class="author">Johnthan Doe - UX Designer</span>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img src={explor4} />

                  <Carousel.Caption className="caption">
                    <p>
                      "Far far away, behind the word mountains, far from the
                      countries Vokalia and Consonantia, there live the blind
                      texts. Separated they live."
                    </p>
                    <span class="author">Simab Dave - Web Designer</span>
                  </Carousel.Caption>
                </Carousel.Item>
              </Carousel>
            </div>
          </div>
        </div>
      </section>
     <section>
       <div class="container" id="faq">
             <div class="about-inline text-center">
                 <h3>Frequently Asked Questions </h3>
             </div>
         </div>
    </section>
    <section>
    <div class="container">
            <div class="row">
                <div class="col-md-6 col-sm-6">
                    <div class="faq">
                        <h4> <span>~</span> Is Foodera Bread really baked fresh each day?</h4>
                        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language.</p>
                    </div>
                </div>

                <div class="col-md-6 col-sm-6">
                    <div class="faq">
                        <h4> <span>~</span> Do you bake breads containing animal fats or products?</h4>
                        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language.</p>
                    </div>
                </div>
                <div class="col-md-6 col-sm-6">
                    <div class="faq">
                        <h4> <span>~</span> Can I order your products online?</h4>
                        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language.</p>
                    </div>
                </div>
                <div class="col-md-6 col-sm-6">
                    <div class="faq">
                        <h4> <span>~</span> When are you opening a shop near me?</h4>
                        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language.</p>
                    </div>
                </div>
            </div>
            <div class="space100"></div>
        </div>
    </section>

    <section class="parallax-content2 parallax2 text-center" >
            <div class="overlay"></div>
            <div class="container">
                <div class="row">
                    <div class="col-md-8">
                        <h4>Baked fresh daily by bakers with passion.</h4>
                    </div>
                    <div class="row">
                        <div class="col-md-4">
                            <a href="#" class="btn btn-lg btn-primary pull-left">Learn More <i class="icon-arrow-right"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </section>




    <section class="text-center">
            <div class="cta-wrap subscribe-elt2 ">
                <div class="container">
                    <div class="col-md-12">
                        <h1>Hurry up! Subscribe our newsletter  and get<span> 25% Off</span></h1>
                        <p>Limited time offer for this month. No credit card required.</p>

                        <form class="intro-newsletter" action="#" id="invite" method="POST">
                            <div class="row">
                                <div class="col-md-8">
                                    <input class="e-mail" placeholder="Email Address here" name="email" id="eaddress" data-validate="validate(required, email)" type="email"/>
                                </div>
                                <div class="col-md-4">
                                    <button class="btn btn-primary btn-block" type="submit">Subscribe</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
        <div class="space80"></div>
        <footer class="footer2" id="footer2">
            <div class="container">
                <div class="row">
                    <div class="col-md-12 footerP text-center">
                        <a href="#">Register</a>
                        <a href="#">Forum</a>
                        <a href="#">Affiliate</a>
                        <a href="#">FAQ</a>
                    </div>
                    <div class="footer-social space30 text-center">
                    <i class="fa-brands fa-facebook"></i>
                    <i class="fa-brands fa-twitter"></i>
                    <i class="fa-brands fa-youtube"></i>
                    <i class="fa-brands fa-instagram"></i>
                    <i class="fa-brands fa-linkedin"></i>
                        
                    </div>
                </div>
            </div>
        </footer>
     </div>
    
  );
};

export default Home;
