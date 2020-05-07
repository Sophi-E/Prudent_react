import React, { useEffect } from 'react';
import './App.css';
import AOS from 'aos';
import headerDesktop from './imgs/header-ui-desktop.png';
import headerMobile from './imgs/header-ui-mobile.png';
import privacyDesktop from './imgs/privacy-ui-mobile.png';
import privacyMobile from './imgs/privacy-ui-mobile.png';
import speedDesktop from './imgs/speed-ui-mobile.png';
import speedMobile from './imgs/speed-ui-mobile.png';

const App = () => {
  const body = document.querySelector('body');

  useEffect(() => {
    AOS.init();
  }, []);

  const toggleMobileNav = () => {
    body.classList.toggle('mobile-nav-open');
  };
  const isModalOpen = () => {
    return body.classList.contains('mobile-nav-open') ? true : false;
  };
  const closeMobileMenu = (e) => {
    console.log(
      e.target.classList.contains('nav__mobile-item') ||
        e.target.classList.contains('nav__hamburger') ||
        e.target.classList.contains('nav__container')
    );
    if (
      isModalOpen() &&
      (e.target.classList.contains('nav__mobiile-item') ||
        e.target.classList.contains('nav__hamburger'))
    )
      return;

    body.classList.remove('mobile-nav-open');
  };

  window.addEventListener('click', closeMobileMenu);
  //hamburger.addEventListener('click', toggleMobileNav);
  console.log(window);
  return (
    <div className='App'>
      <nav className='nav'>
        <div className='nav__container container'>
          <div className='nav__left'>
            <a href='/'>
              <svg
                width='30'
                height='30'
                viewBox='0 0 30 30'
                fill='none'
                className='nav__logo'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path d='M0 0H30V30H0V0Z' fill='#F15C41' />
              </svg>

              <span className='nav__logo-name'>Prudent</span>
            </a>
          </div>
          <div className='nav__right'>
            <button
              className='nav__hamburger'
              aria-label='Menu'
              onClick={toggleMobileNav}
            ></button>
            <ul className='nav__nav-desktop'>
              <li className='nav__desktop-item'>
                <a href='#' className='nav__desktop-link'>
                  Features
                </a>
              </li>
              <li className='nav__desktop-item'>
                <a href='#' className='nav__desktop-link'>
                  Pricing
                </a>
              </li>
              <li className='nav__desktop-item'>
                <a
                  href='https://github.com/Sophi-E/Prudent_react'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='btn btn-secondary nav__desktop-link'
                >
                  See Github
                </a>
              </li>
              <li className='nav__desktop-item'>
                <a href='#' className='btn nav__desktop-link'>
                  App Store
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className='nav__mobile-nav'>
          <div className='nav__mobile-nav container'>
            <ul className='nav__mobile-links'>
              <li className='nav__mobiile-item'>
                <a href='#' className='nav__mobile-link'>
                  Home
                </a>
              </li>
              <li className='nav__mobiile-item'>
                <a href='#' className='nav__mobile-link'>
                  App Store
                </a>
              </li>
              <li className='nav__mobiile-item'>
                <a
                  href='https://github.com/Sophi-E/Prudent_react'
                  targe='_blank'
                  rel='noopener noreferrer'
                  className='nav__mobile-link'
                >
                  See Github
                </a>
              </li>
              <li className='nav__mobiile-item'>
                <a href='#' className='nav__mobile-link'>
                  Features
                </a>
              </li>
              <li className='nav__mobiile-item'>
                <a href='#' className='nav__mobile-link'>
                  Pricing
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <header className='header'>
        <div className='header__container container'>
          <div className='header__text'>
            <h1 className='header__heading-text'>
              Fast, Secure & Performant Conferencing For
              <span className='highlighted'>Families</span>
            </h1>
            <p className='header__text-text'>
              Prudent is a mobile app for connecting with loved ones and
              families in real time. Get it on your platform’s store.
            </p>

            <div className='btn-group'>
              <a href='' className='btn'>
                App Store
              </a>
              <a
                href='https://github.com/Sophi-E/Prudent_react'
                target='_blank'
                rel='noopener noreferrer'
                className='btn btn-secondary'
              >
                See Github
              </a>
            </div>
          </div>
          <div className='header__img'>
            <picture>
              <source media='(max-width: 560px)' srcSet={headerMobile} />
              <img
                loading='lazy'
                src={headerDesktop}
                alt='Mobile ui'
                className='img-screen-ui'
              />
            </picture>
          </div>
        </div>
      </header>
      <main>
        <section className='section speed grey-background'>
          <div className='section__container container' data-aos='fade-up'>
            <div className='section__text-content'>
              <h2 className='section__heading'>
                <small className='section__heading-small'>
                  WHY YOU SHOULD CARE
                </small>
                Lightening Fast Data Transfer
              </h2>
              <p className='section__text'>
                Our architecture is built using the most suitable technologies
                for fast, crystal clear, zero spinner video experiences.
              </p>
              <a href='#' className='section__link with-arrow'>
                Read about our Infrastructure
              </a>
            </div>
            <div className='section__img'>
              <picture>
                <source media='(max-width : 560px)' srcSet={speedMobile} />
                <img loading='lazy' src={speedDesktop} alt='Mobile ui' />
              </picture>
            </div>
          </div>
        </section>

        <section className='section privacy'>
          <div className='section__container container' data-aos='fade-up'>
            <div className='section__text-content'>
              <h2 className='section__heading'>
                <small className='section__heading-small'>
                  WHY YOU SHOULD CARE
                </small>
                Privacy & Security embedded
              </h2>
              <p className='section__text'>
                Our company is at the centre of privacy and security ethics. No
                calls are recorded. All your data is encrypted meaning, we don't
                even know what you'll talk about.
              </p>
              <a href='#' className='section__link with-arrow'>
                Read about our Infrastructure
              </a>
            </div>
            <div className='section__img'>
              <picture>
                <source media='(max-width : 560px)' srcSet={privacyMobile} />
                <img
                  loading='lazy'
                  src={privacyDesktop}
                  alt='Mobile ui'
                  width='100%'
                />
              </picture>
            </div>
          </div>
        </section>
        <div className='container'>
          <hr />
        </div>

        <section className='section features'>
          <div className='section__container container'>
            <h2 className='section__heading text-centered'>Awesome Features</h2>

            <section className='features'>
              <article
                className='features__feature text-centered'
                data-aos='fade-up'
              >
                <div className='features__icon'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='24'
                    height='24'
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke='currentColor'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    className='feather feather-video features__feather-video'
                  >
                    <polygon points='23 7 16 12 23 17 23 7'></polygon>
                    <rect
                      x='1'
                      y='5'
                      width='15'
                      height='14'
                      rx='2'
                      ry='2'
                    ></rect>
                  </svg>
                </div>
                <h3 className='features__feature-heading'>Call Recording</h3>
                <p className='features__feature-text'>
                  You can record & save sections of your calls for later. You
                  can record & save sections of your calls for later
                </p>
                <a href='#' className='features__cta with-arrow'>
                  Try it Here
                </a>
              </article>

              <article
                className='features__feature text-centered'
                data-aos='fade-up'
              >
                <div className='features__icon'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='24'
                    height='24'
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke='currentColor'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    className='feather feather-video features__feather-video'
                  >
                    <polygon points='23 7 16 12 23 17 23 7'></polygon>
                    <rect
                      x='1'
                      y='5'
                      width='15'
                      height='14'
                      rx='2'
                      ry='2'
                    ></rect>
                  </svg>
                </div>
                <h3 className='features__feature-heading'>Multiple persons</h3>
                <p className='features__feature-text'>
                  Video call up to 5 persons at once. No performance
                  differences. Video call up to 5 persons at once.
                </p>
                <a href='#' className='features__cta with-arrow'>
                  Try it Here
                </a>
              </article>

              <article
                className='features__feature text-centered'
                data-aos='fade-up'
              >
                <div className='features__icon'>
                  <svg
                    width='24'
                    height='20'
                    viewBox='0 0 24 20'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                    className='features__feather-video'
                  >
                    <path
                      d='M17 18.0359V16.143C17 15.1389 16.5786 14.176 15.8284 13.466C15.0783 12.756 14.0609 12.3572 13 12.3572H5C3.93913 12.3572 2.92172 12.756 2.17157 13.466C1.42143 14.176 1 15.1389 1 16.143V18.0359'
                      stroke='#F15C41'
                      strokeWidth='2'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                    <path
                      d='M9 8.57153C11.2091 8.57153 13 6.87659 13 4.78577C13 2.69495 11.2091 1 9 1C6.79086 1 5 2.69495 5 4.78577C5 6.87659 6.79086 8.57153 9 8.57153Z'
                      stroke='#F15C41'
                      strokeWidth='2'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                    <path
                      d='M23 18.0359V16.1431C22.9993 15.3043 22.7044 14.4895 22.1614 13.8266C21.6184 13.1636 20.8581 12.6902 20 12.4805'
                      stroke='#F15C41'
                      strokeWidth='2'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                    <path
                      d='M16 1.12305C16.8604 1.33155 17.623 1.80515 18.1676 2.46919C18.7122 3.13322 19.0078 3.94992 19.0078 4.79053C19.0078 5.63113 18.7122 6.44783 18.1676 7.11187C17.623 7.7759 16.8604 8.2495 16 8.45801'
                      stroke='#F15C41'
                      strokeWidth='2'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                  </svg>
                </div>
                <h3 className='features__feature-heading'>Mentions</h3>
                <p className='features__feature-text'>
                  You can record & save sections of your calls for later. You
                  can record & save sections of your calls for later
                </p>
                <a href='#' className='features__cta with-arrow'>
                  Try it Here
                </a>
              </article>

              <article
                className='features__feature text-centered'
                data-aos='fade-up'
              >
                <div className='features__icon'>
                  <svg
                    width='22'
                    height='20'
                    viewBox='0 0 22 20'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                    className='features__feather-video'
                  >
                    <path
                      d='M21 9.51807H17L14 18.0361L8 1L5 9.51807H1'
                      stroke='#F15C41'
                      strokeWidth='2'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                  </svg>
                </div>
                <h3 className='features__feature-heading'>Mentions</h3>
                <p className='features__feature-text'>
                  You can record & save sections of your calls for later. You
                  can record & save sections of your calls for later
                </p>
                <a href='#' className='features__cta with-arrow'>
                  Try it Here
                </a>
              </article>

              <article
                className='features__feature text-centered'
                data-aos='fade-up'
              >
                <div className='features__icon'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='24'
                    height='24'
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke='currentColor'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    className='feather feather-video features__feather-video'
                  >
                    <polygon points='23 7 16 12 23 17 23 7'></polygon>
                    <rect
                      x='1'
                      y='5'
                      width='15'
                      height='14'
                      rx='2'
                      ry='2'
                    ></rect>
                  </svg>
                </div>
                <h3 className='features__feature-heading'>Mentions</h3>
                <p className='features__feature-text'>
                  You can record & save sections of your calls for later. You
                  can record & save sections of your calls for later
                </p>
                <a href='#' className='features__cta with-arrow'>
                  Try it Here
                </a>
              </article>

              <article
                className='features__feature text-centered'
                data-aos='fade-up'
              >
                <div className='features__icon'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='24'
                    height='24'
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke='currentColor'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    className='feather feather-video features__feather-video'
                  >
                    <polygon points='23 7 16 12 23 17 23 7'></polygon>
                    <rect
                      x='1'
                      y='5'
                      width='15'
                      height='14'
                      rx='2'
                      ry='2'
                    ></rect>
                  </svg>
                </div>
                <h3 className='features__feature-heading'>Mentions</h3>
                <p className='features__feature-text'>
                  You can record & save sections of your calls for later. You
                  can record & save sections of your calls for later
                </p>
                <a href='#' className='features__cta with-arrow'>
                  Try it Here
                </a>
              </article>
            </section>
          </div>
        </section>

        <section className='section cta prim-background'>
          <div className='patterns-left'></div>
          <div className='patterns-right'></div>
          <div className='cta__container container text-centered'>
            <h2 className='section__heading'>Don't Be Left Out</h2>
            <p>Join Hundreds of families stay together anywhere in the world</p>

            <div className='btn-group'>
              <a href='#' className='btn'>
                App Store
              </a>
              <a
                href='https://github.com/Sophi-E/Prudent_react/'
                target='_blank'
                rel='noopener noreferrer'
                className='btn btn-secondary'
              >
                See Github
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className='section footer'>
        <section className='footer__container container'>
          <article className='footer__links'>
            <p className='footer__links-heading'>Product</p>
            <ul className='footer__links-list'>
              <li className='footer__links-item'>
                <a href='#' className='footer__link'>
                  Product
                </a>
              </li>
              <li className='footer__links-item'>
                <a href='#' className='footer__link'>
                  Product
                </a>
              </li>
              <li className='footer__links-item'>
                <a href='#' className='footer__link'>
                  Product
                </a>
              </li>
              <li className='footer__links-item'>
                <a href='#' className='footer__link'>
                  Product
                </a>
              </li>
            </ul>
          </article>

          <article className='footer__links'>
            <p className='footer__links-heading'>Company</p>
            <ul className='footer__links-list'>
              <li className='footer__links-item'>
                <a href='#' className='footer__link'>
                  About Us
                </a>
              </li>
              <li className='footer__links-item'>
                <a href='#' className='footer__link'>
                  Careers
                </a>
              </li>
              <li className='footer__links-item'>
                <a href='#' className='footer__link'>
                  Write for us
                </a>
              </li>
              <li className='footer__links-item'>
                <a href='#' className='footer__link'>
                  Team
                </a>
              </li>
            </ul>
          </article>

          <article className='footer__links'>
            <p className='footer__links-heading'>Legal</p>
            <ul className='footer__links-list'>
              <li className='footer__links-item'>
                <a href='#' className='footer__link'>
                  Terms & Conditions
                </a>
              </li>
              <li className='footer__links-item'>
                <a href='#' className='footer__link'>
                  Privacy Policy
                </a>
              </li>
              <li className='footer__links-item'>
                <a href='#' className='footer__link'>
                  Legal Documents
                </a>
              </li>
              <li className='footer__links-item'>
                <a href='#' className='footer__link'>
                  Copyright
                </a>
              </li>
            </ul>
          </article>

          <article className='footer__links'>
            <p className='footer__links-heading'>Social</p>
            <ul className='footer__links-list'>
              <li className='footer__links-item'>
                <a href='#' className='footer__link'>
                  Facebook
                </a>
              </li>
              <li className='footer__links-item'>
                <a href='#' className='footer__link'>
                  Twitter
                </a>
              </li>
              <li className='footer__links-item'>
                <a href='#' className='footer__link'>
                  Instagram
                </a>
              </li>
              <li className='footer__links-item'>
                <a href='#' className='footer__link'>
                  Youtube
                </a>
              </li>
            </ul>
          </article>
        </section>
        <section className='container text-centered'>
          <p>
            <small>
              Copyright &copy; 2020 . UI images
              <a href='https://www.figmafreebies.com/download/atro-mobile-ui-kit/'>
                Credits.
              </a>
            </small>
          </p>
        </section>
      </footer>
    </div>
  );
};

export default App;
