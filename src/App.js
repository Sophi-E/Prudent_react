import React from 'react';
import './App.css';

function App() {
  return (
    <div className='App'>
      <nav class='nav'>
        <div class='nav__container container'>
          <div class='nav__left'>
            <a href='/'>
              <svg
                width='30'
                height='30'
                viewBox='0 0 30 30'
                fill='none'
                class='nav__logo'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path d='M0 0H30V30H0V0Z' fill='#F15C41' />
              </svg>

              <span class='nav__logo-name'>Prudent</span>
            </a>
          </div>
          <div class='nav__right'>
            <button class='nav__hamburger' aria-label='Menu'></button>
            <ul class='nav__nav-desktop'>
              <li class='nav__desktop-item'>
                <a href='#' class='nav__desktop-link'>
                  Features
                </a>
              </li>
              <li class='nav__desktop-item'>
                <a href='#' class='nav__desktop-link'>
                  Pricing
                </a>
              </li>
              <li class='nav__desktop-item'>
                <a
                  href='https://github.com/vickOnRails/Prudent'
                  target='_blank'
                  rel='noopener noreferrer'
                  class='btn btn-secondary nav__desktop-link'
                >
                  See Github
                </a>
              </li>
              <li class='nav__desktop-item'>
                <a href='#' class='btn nav__desktop-link'>
                  App Store
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div class='nav__mobile-nav'>
          <div class='nav__mobile-nav container'>
            <ul class='nav__mobile-links'>
              <li class='nav__mobiile-item'>
                <a href='#' class='nav__mobile-link'>
                  Home
                </a>
              </li>
              <li class='nav__mobiile-item'>
                <a href='#' class='nav__mobile-link'>
                  App Store
                </a>
              </li>
              <li class='nav__mobiile-item'>
                <a
                  href='https://github.com/vickOnRails/Prudent'
                  targe='_blank'
                  rel='noopener noreferrer'
                  class='nav__mobile-link'
                >
                  See Github
                </a>
              </li>
              <li class='nav__mobiile-item'>
                <a href='#' class='nav__mobile-link'>
                  Features
                </a>
              </li>
              <li class='nav__mobiile-item'>
                <a href='#' class='nav__mobile-link'>
                  Pricing
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <header class='header'>
        <div class='header__container container'>
          <div class='header__text'>
            <h1 class='header__heading-text'>
              Fast, Secure & Performant Conferencing For
              <span class='highlighted'>Families</span>
            </h1>
            <p class='header__text-text'>
              Prudent is a mobile app for connecting with loved ones and
              families in real time. Get it on your platform’s store.
            </p>

            <div class='btn-group'>
              <a href='' class='btn'>
                App Store
              </a>
              <a
                href='https://github.com/vickOnRails/Prudent'
                target='_blank'
                rel='noopener noreferrer'
                class='btn btn-secondary'
              >
                See Github
              </a>
            </div>
          </div>
          <div class='header__img'>
            <picture>
              <source
                media='(max-width: 560px)'
                srcset='./imgs/header-ui-mobile.png'
              />
              <img
                loading='lazy'
                src='./imgs/header-ui-desktop.png'
                alt='Mobile Image'
                class='img-screen-ui'
              />
            </picture>
          </div>
        </div>
      </header>
      <main>
        <section class='section speed grey-background'>
          <div class='section__container container' data-aos='fade-up'>
            <div class='section__text-content'>
              <h2 class='section__heading'>
                <small class='section__heading-small'>
                  WHY YOU SHOULD CARE
                </small>
                Lightening Fast Data Transfer
              </h2>
              <p class='section__text'>
                Our architecture is built using the most suitable technologies
                for fast, crystal clear, zero spinner video experiences.
              </p>
              <a href='#' class='section__link with-arrow'>
                Read about our Infrastructure
              </a>
            </div>
            <div class='section__img'>
              <picture>
                <source
                  media='(max-width : 560px)'
                  srcset='./imgs/speed-ui-mobile.png'
                />
                <img
                  loading='lazy'
                  src='./imgs/speed-ui-desktop.png'
                  alt='Mobile Image'
                />
              </picture>
            </div>
          </div>
        </section>

        <section class='section privacy'>
          <div class='section__container container' data-aos='fade-up'>
            <div class='section__text-content'>
              <h2 class='section__heading'>
                <small class='section__heading-small'>
                  WHY YOU SHOULD CARE
                </small>
                Privacy & Security embedded
              </h2>
              <p class='section__text'>
                Our company is at the centre of privacy and security ethics. No
                calls are recorded. All your data is encrypted meaning, we don't
                even know what you'll talk about.
              </p>
              <a href='#' class='section__link with-arrow'>
                Read about our Infrastructure
              </a>
            </div>
            <div class='section__img'>
              <picture>
                <source
                  media='(max-width : 560px)'
                  srcset='./imgs/privacy-ui-mobile.png'
                />
                <img
                  loading='lazy'
                  src='./imgs/privacy-ui-desktop.png'
                  alt='Mobile Image'
                  width='100%'
                />
              </picture>
            </div>
          </div>
        </section>
        <div class='container'>
          <hr />
        </div>

        <section class='section features'>
          <div class='section__container container'>
            <h2 class='section__heading text-centered'>Awesome Features</h2>

            <section class='features'>
              <article
                class='features__feature text-centered'
                data-aos='fade-up'
              >
                <div class='features__icon'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='24'
                    height='24'
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke='currentColor'
                    stroke-width='2'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    class='feather feather-video features__feather-video'
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
                <h3 class='features__feature-heading'>Call Recording</h3>
                <p class='features__feature-text'>
                  You can record & save sections of your calls for later. You
                  can record & save sections of your calls for later
                </p>
                <a href='#' class='features__cta with-arrow'>
                  Try it Here
                </a>
              </article>

              <article
                class='features__feature text-centered'
                data-aos='fade-up'
              >
                <div class='features__icon'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='24'
                    height='24'
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke='currentColor'
                    stroke-width='2'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    class='feather feather-video features__feather-video'
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
                <h3 class='features__feature-heading'>Multiple persons</h3>
                <p class='features__feature-text'>
                  Video call up to 5 persons at once. No performance
                  differences. Video call up to 5 persons at once.
                </p>
                <a href='#' class='features__cta with-arrow'>
                  Try it Here
                </a>
              </article>

              <article
                class='features__feature text-centered'
                data-aos='fade-up'
              >
                <div class='features__icon'>
                  <svg
                    width='24'
                    height='20'
                    viewBox='0 0 24 20'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                    class='features__feather-video'
                  >
                    <path
                      d='M17 18.0359V16.143C17 15.1389 16.5786 14.176 15.8284 13.466C15.0783 12.756 14.0609 12.3572 13 12.3572H5C3.93913 12.3572 2.92172 12.756 2.17157 13.466C1.42143 14.176 1 15.1389 1 16.143V18.0359'
                      stroke='#F15C41'
                      stroke-width='2'
                      stroke-linecap='round'
                      stroke-linejoin='round'
                    />
                    <path
                      d='M9 8.57153C11.2091 8.57153 13 6.87659 13 4.78577C13 2.69495 11.2091 1 9 1C6.79086 1 5 2.69495 5 4.78577C5 6.87659 6.79086 8.57153 9 8.57153Z'
                      stroke='#F15C41'
                      stroke-width='2'
                      stroke-linecap='round'
                      stroke-linejoin='round'
                    />
                    <path
                      d='M23 18.0359V16.1431C22.9993 15.3043 22.7044 14.4895 22.1614 13.8266C21.6184 13.1636 20.8581 12.6902 20 12.4805'
                      stroke='#F15C41'
                      stroke-width='2'
                      stroke-linecap='round'
                      stroke-linejoin='round'
                    />
                    <path
                      d='M16 1.12305C16.8604 1.33155 17.623 1.80515 18.1676 2.46919C18.7122 3.13322 19.0078 3.94992 19.0078 4.79053C19.0078 5.63113 18.7122 6.44783 18.1676 7.11187C17.623 7.7759 16.8604 8.2495 16 8.45801'
                      stroke='#F15C41'
                      stroke-width='2'
                      stroke-linecap='round'
                      stroke-linejoin='round'
                    />
                  </svg>
                </div>
                <h3 class='features__feature-heading'>Mentions</h3>
                <p class='features__feature-text'>
                  You can record & save sections of your calls for later. You
                  can record & save sections of your calls for later
                </p>
                <a href='#' class='features__cta with-arrow'>
                  Try it Here
                </a>
              </article>

              <article
                class='features__feature text-centered'
                data-aos='fade-up'
              >
                <div class='features__icon'>
                  <svg
                    width='22'
                    height='20'
                    viewBox='0 0 22 20'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                    class='features__feather-video'
                  >
                    <path
                      d='M21 9.51807H17L14 18.0361L8 1L5 9.51807H1'
                      stroke='#F15C41'
                      stroke-width='2'
                      stroke-linecap='round'
                      stroke-linejoin='round'
                    />
                  </svg>
                </div>
                <h3 class='features__feature-heading'>Mentions</h3>
                <p class='features__feature-text'>
                  You can record & save sections of your calls for later. You
                  can record & save sections of your calls for later
                </p>
                <a href='#' class='features__cta with-arrow'>
                  Try it Here
                </a>
              </article>

              <article
                class='features__feature text-centered'
                data-aos='fade-up'
              >
                <div class='features__icon'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='24'
                    height='24'
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke='currentColor'
                    stroke-width='2'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    class='feather feather-video features__feather-video'
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
                <h3 class='features__feature-heading'>Mentions</h3>
                <p class='features__feature-text'>
                  You can record & save sections of your calls for later. You
                  can record & save sections of your calls for later
                </p>
                <a href='#' class='features__cta with-arrow'>
                  Try it Here
                </a>
              </article>

              <article
                class='features__feature text-centered'
                data-aos='fade-up'
              >
                <div class='features__icon'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='24'
                    height='24'
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke='currentColor'
                    stroke-width='2'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    class='feather feather-video features__feather-video'
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
                <h3 class='features__feature-heading'>Mentions</h3>
                <p class='features__feature-text'>
                  You can record & save sections of your calls for later. You
                  can record & save sections of your calls for later
                </p>
                <a href='#' class='features__cta with-arrow'>
                  Try it Here
                </a>
              </article>
            </section>
          </div>
        </section>

        <section class='section cta prim-background'>
          <div class='patterns-left'></div>
          <div class='patterns-right'></div>
          <div class='cta__container container text-centered'>
            <h2 class='section__heading'>Don't Be Left Out</h2>
            <p>Join Hundreds of families stay together anywhere in the world</p>

            <div class='btn-group'>
              <a href='#' class='btn'>
                App Store
              </a>
              <a
                href='https://github.com/vickOnRails/Prudent'
                target='_blank'
                rel='noopener noreferrer'
                class='btn btn-secondary'
              >
                See Github
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer class='section footer'>
        <section class='footer__container container'>
          <article class='footer__links'>
            <p class='footer__links-heading'>Product</p>
            <ul class='footer__links-list'>
              <li class='footer__links-item'>
                <a href='#' class='footer__link'>
                  Product
                </a>
              </li>
              <li class='footer__links-item'>
                <a href='#' class='footer__link'>
                  Product
                </a>
              </li>
              <li class='footer__links-item'>
                <a href='#' class='footer__link'>
                  Product
                </a>
              </li>
              <li class='footer__links-item'>
                <a href='#' class='footer__link'>
                  Product
                </a>
              </li>
            </ul>
          </article>

          <article class='footer__links'>
            <p class='footer__links-heading'>Company</p>
            <ul class='footer__links-list'>
              <li class='footer__links-item'>
                <a href='#' class='footer__link'>
                  About Us
                </a>
              </li>
              <li class='footer__links-item'>
                <a href='#' class='footer__link'>
                  Careers
                </a>
              </li>
              <li class='footer__links-item'>
                <a href='#' class='footer__link'>
                  Write for us
                </a>
              </li>
              <li class='footer__links-item'>
                <a href='#' class='footer__link'>
                  Team
                </a>
              </li>
            </ul>
          </article>

          <article class='footer__links'>
            <p class='footer__links-heading'>Legal</p>
            <ul class='footer__links-list'>
              <li class='footer__links-item'>
                <a href='#' class='footer__link'>
                  Terms & Conditions
                </a>
              </li>
              <li class='footer__links-item'>
                <a href='#' class='footer__link'>
                  Privacy Policy
                </a>
              </li>
              <li class='footer__links-item'>
                <a href='#' class='footer__link'>
                  Legal Documents
                </a>
              </li>
              <li class='footer__links-item'>
                <a href='#' class='footer__link'>
                  Copyright
                </a>
              </li>
            </ul>
          </article>

          <article class='footer__links'>
            <p class='footer__links-heading'>Social</p>
            <ul class='footer__links-list'>
              <li class='footer__links-item'>
                <a href='#' class='footer__link'>
                  Facebook
                </a>
              </li>
              <li class='footer__links-item'>
                <a href='#' class='footer__link'>
                  Twitter
                </a>
              </li>
              <li class='footer__links-item'>
                <a href='#' class='footer__link'>
                  Instagram
                </a>
              </li>
              <li class='footer__links-item'>
                <a href='#' class='footer__link'>
                  Youtube
                </a>
              </li>
            </ul>
          </article>
        </section>
        <section class='container text-centered'>
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
}

export default App;
