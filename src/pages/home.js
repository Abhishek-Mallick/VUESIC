import React from 'react';
class Home extends React.Component{
    render(){
        return(
        <div>
                <>
                    <meta charSet="UTF-8" />
                    <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                    <title>Podcast</title>
                    <link rel="stylesheet" href="./assets/css/style.css" />
                    <link rel="preconnect" href="https://fonts.googleapis.com" />
                    <link
                        href="https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@400;500;700&display=swap"
                        rel="stylesheet"
                    />
                    <link
                        rel="stylesheet"
                        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
                    />
                    <header className="active" data-header="">
                        <div className="container">
                            <div className="overlay" data-overlay="" />
                            <a href="#" className="logo">
                                <h1 style={{ fontSize: 45, color: "aliceblue" }}>VUESIC</h1>
                            </a>
                            <button className="nav-toggle-btn" data-nav-toggle-btn="">
                                <ion-icon name="menu-outline" />
                            </button>
                            <nav className="navbar" data-navbar="">
                                <ul className="navbar-list">
                                    <li className="navbar-item">
                                        <a href="#hero" className="navbar-link">
                                            Home
                                        </a>
                                    </li>
                                    <li className="navbar-item">
                                        <a href="#podcast" className="navbar-link">
                                            Podcast
                                        </a>
                                    </li>
                                    <li className="navbar-item">
                                        <a href="#" className="navbar-link">
                                            Contact
                                        </a>
                                    </li>
                                    <li className="navbar-item">
                                        <a href="#" className="navbar-link">
                                            SignIn
                                        </a>
                                    </li>
                                </ul>
                                <div className="navbar-actions"></div>
                            </nav>
                        </div>
                    </header>
                    <main>
                        <article className="container">
                            <section className="hero" id="hero">
                                <div className="hero-content">
                                    <img
                                        src="./assets/images/hero-title.png"
                                        alt="Podcast"
                                        className="hero-title"
                                    />
                                    <p className="hero-text">
                                        Podcast websites are an essential platform for hosting and
                                        distributing audio content. They offer a centralized hub for
                                        listeners to discover, interact, and engage with podcasters. With
                                        features like show notes, episode descriptions, and archives of past
                                        episodes, podcast websites provide a wealth of resources for
                                        listeners to stay informed and entertained. From popular platforms
                                        like Apple Podcasts and Spotify to independent websites created by
                                        individual podcasters, these sites offer a diverse range of content
                                        to suit every interest. With a simple click, listeners can tune in
                                        to the latest episode and get hooked on the captivating world of
                                        podcasts.
                                    </p>
                                </div>
                                <div className="hero-banner" />
                            </section>
                            <section className="podcast" id="podcast">
                                <div className="elfsight-app-fc19e741-fbdc-43c1-9828-6b63e49662dd" />
                            </section>
                            <section className="newsletter">
                                <div className="newsletter-card">
                                    <div className="card-content">
                                        <h3 className="h3 card-title">
                                            Sign Up For Latest Updates. It’s Free!
                                        </h3>
                                        <p className="card-text">
                                            Join the Vuesic community today and enjoy endless hours of
                                            entertaining and informative content.
                                        </p>
                                    </div>
                                    <form action="" className="card-form" data-form="">
                                        <input
                                            type="email"
                                            name="email_address"
                                            placeholder="Your Email Address"
                                            required=""
                                            className="input-field"
                                            data-input=""
                                        />
                                        <button type="submit" className="btn btn-primary">
                                            Subscribe
                                        </button>
                                    </form>
                                </div>
                            </section>
                        </article>
                    </main>
                    <footer>
                        <div className="footer-top" id="footer-top">
                            <div className="container">
                                <div className="footer-brand">
                                    <a href="#" className="logo">
                                        <h1 style={{ fontSize: 45, color: "aliceblue" }}>VUESIC</h1>
                                    </a>
                                    <p className="footer-text">
                                        Vuesic is a podcast app that offers users a comprehensive listening
                                        experience. With Vuesic, you can discover new podcasts, stay up to
                                        date on the latest episodes, and never miss a beat. Our app is
                                        designed for podcast enthusiasts who want to take their listening
                                        experience to the next level. Join our community today and start
                                        exploring the world of audio content.
                                    </p>
                                </div>
                                <ul className="footer-list">
                                    <li>
                                        <p className="footer-link-title">Start A Conversation</p>
                                    </li>
                                    <li>
                                        <a href="mailto:hello@micro.com" className="footer-link">
                                            hello@micro.com
                                        </a>
                                    </li>
                                    <li>
                                        <a href="tel:+0123454678" className="footer-link">
                                            +01234 54678
                                        </a>
                                    </li>
                                    <li>
                                        <a href="tel:+15780346789" className="footer-link">
                                            +1 (578) 034-6789
                                        </a>
                                    </li>
                                </ul>
                                <div className="social-list-box">
                                    <p className="social-title">Follow Us On:</p>
                                    <ul className="social-list">
                                        <li>
                                            <a href="https://github.com/Abhishek-Mallick/VUESIC" className="social-link">
                                                <ion-icon name="logo-github" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="social-link">
                                                <ion-icon name="logo-linkedin" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="social-link">
                                                <ion-icon name="logo-facebook" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="social-link">
                                                <ion-icon name="logo-instagram" />
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </footer>
                </>
 
        </div>
        )
    }
}

export default Home;
