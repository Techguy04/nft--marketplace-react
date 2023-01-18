/** @format */

import "./App.css";
function App() {
	return (
		<div class="App">
			<div class="navitems">
				<div class="navlogo">
					<h2>WARCEL</h2>
				</div>
				<div className="navtext">
					<a href="/" class="active">
						Marketplace
					</a>
					<a href="/">Creators</a>
				</div>
				<div className="navbtn">
					<button>
						Login
						<span className="material-symbols-outlined">
							account_balance_wallet
						</span>
					</button>
				</div>
				<div className="burger">
					<span className="material-symbols-outlined"> menu </span>
				</div>
			</div>
			<section>
				<div className="headeritems">
					<div className="headerlft">
						<h1>
							Extraordinary <span>NFT</span> you'll love
						</h1>
						<p>
							we believe you have a unique taste, discover the endless
							possibilities of the NFT world
						</p>
						<div className="lftbtn">
							<button>Connect your wallet</button>
						</div>
					</div>
					<div className="headerrght">
						<img src="/assests/images/degen.jpeg" alt="" />
					</div>
				</div>
			</section>
			<section>
				<h1 className="crdhead">All Worlds</h1>
				<div className="carditems">
					<div className="card">
						<img
							src="/assests/images/7705310.jpg"
							alt="monkey wearing glasses"
						/>
						<div className="carddesc">
							<h3>Bored ape</h3>
							<p>3,323 Listings</p>
						</div>
						<div className="price">
							<p>Median Price</p>
							<p>
								<span>$</span> 4.00
							</p>
						</div>
						<button>Connect Your Wallet</button>
					</div>
					<div className="card">
						<img
							src="/assests/images/ape-wide.avif"
							alt="monkey wearing glasses"
						/>
						<div className="carddesc">
							<h3>Azuki ape</h3>
							<p>4,623 Listings</p>
						</div>
						<div className="price">
							<p>Median Price</p>
							<p>
								<span>$</span> 30.00
							</p>
						</div>
						<button>Connect Your Wallet</button>
					</div>
					<div className="card">
						<img
							src="/assests/images/bayc2.webp"
							alt="monkey wearing glasses"
						/>
						<div className="carddesc">
							<h3>Crown ape</h3>
							<p>3,683 Listings</p>
						</div>
						<div className="price">
							<p>Median Price</p>
							<p>
								<span>$</span> 10.00
							</p>
						</div>
						<button>Connect Your Wallet</button>
					</div>
					<div className="card">
						<img
							src="/assests/images/7705310.jpg"
							alt="monkey wearing glasses"
						/>
						<div className="carddesc">
							<h3>Arturo ape</h3>
							<p>2,323 Listings</p>
						</div>
						<div className="price">
							<p>Median Price</p>
							<p>
								<span>$</span> 9.00
							</p>
						</div>
						<button>Connect Your Wallet</button>
					</div>
					<div className="card">
						<img
							src="/assests/images/7705317.jpg"
							alt="monkey wearing glasses"
						/>
						<div className="carddesc">
							<h3>Dreamy ape</h3>
							<p>3,783 Listings</p>
						</div>
						<div className="price">
							<p>Median Price</p>
							<p>
								<span>$</span> 3.00
							</p>
						</div>
						<button>Connect Your Wallet</button>
					</div>
					<div className="card">
						<img src="/assests/images/hdr.jpg" alt="monkey wearing glasses" />
						<div className="carddesc">
							<h3>Rockin ape</h3>
							<p>3,872 Listings</p>
						</div>
						<div className="price">
							<p>Median Price</p>
							<p>
								<span>$</span> 4.00
							</p>
						</div>
						<button>Connect Your Wallet</button>
					</div>
					<div className="card">
						<img src="/assests/images/suit.jpg" alt="monkey wearing glasses" />
						<div className="carddesc">
							<h3>Reflected ape</h3>
							<p>3,759 Listings</p>
						</div>
						<div className="price">
							<p>Median Price</p>
							<p>
								<span>$</span> 5.00
							</p>
						</div>
						<button>Connect Your Wallet</button>
					</div>
					<div className="card">
						<img
							src="/assests/images/anger_gorilla.jpg"
							alt="monkey wearing glasses"
						/>
						<div className="carddesc">
							<h3>Angry ape</h3>
							<p>9,776 Listings</p>
						</div>
						<div className="price">
							<p>Median Price</p>
							<p>
								<span>$</span> 20.00
							</p>
						</div>
						<button>Connect Your Wallet</button>
					</div>
				</div>
			</section>

			<section>
				<div className="exploreitems">
					<div className="explore">
						<h1>
							Choose your First <span>nFT</span>
						</h1>
						<div className="explorebtns">
							<button>Explore</button>
							<button>Buy</button>
						</div>
					</div>
				</div>
			</section>

			<footer className="footer">
				<div className="container grid grid--footer">
					<div className="logo-col">
						<a href="/" className="footer-logo">
							{" "}
							WARCEL{" "}
						</a>

						<ul className="social-links">
							<li>
								<a className="footer-link" href="/">
									<i className="fa-brands fa-square-facebook"></i>
								</a>
							</li>
							<li>
								<a className="footer-link" href="/">
									<i className="fa-brands fa-twitter"></i>
								</a>
							</li>
							<li>
								<a className="footer-link" href="/">
									<i className="fa-brands fa-square-instagram"></i>
								</a>
							</li>
						</ul>

						<p className="copyright">
							Copyright &copy; <span className="year">2027</span> by fooda, Inc.
							All rights reserved.
						</p>
					</div>

					<div className="address-col">
						<p className="footer-heading">Contact us</p>
						<address className="contacts">
							<p className="address">
								623 Harrison St., 2nd Floor, San Francisco, CA 94107
							</p>
							<p>
								<a className="footer-link" href="tel:415-201-6370">
									415-201-6370
								</a>
								<br />
							</p>
							<p> Investors </p>
						</address>
					</div>

					<nav className="nav-col">
						<p className="footer-heading">Products</p>
						<ul className="footer-nav">
							<li>
								<a className="footer-link" href="/">
									Marketplace
								</a>
							</li>
							<li>
								<a className="footer-link" href="/">
									Creatorverse
								</a>
							</li>
							<li>
								<a className="footer-link" href="/">
									Learn
								</a>
							</li>
						</ul>
					</nav>

					<nav className="nav-col">
						<p className="footer-heading">Company</p>
						<ul className="footer-nav">
							<li>
								<a className="footer-link" href="/">
									About WARCEL
								</a>
							</li>
							<li>
								<a className="footer-link" href="/">
									For Business
								</a>
							</li>
							<li>
								<a className="footer-link" href="/">
									FAQ
								</a>
							</li>
							<li>
								<a className="footer-link" href="/">
									Careers
								</a>
							</li>
							<li>
								<a className="footer-link" href="/">
									Brand Kit
								</a>
							</li>
						</ul>
					</nav>

					<nav className="nav-col">
						<p className="footer-heading">Resources</p>
						<ul className="footer-nav">
							<li>
								<a className="footer-link" href="/">
									Help center
								</a>
							</li>
							<li>
								<a className="footer-link" href="/">
									Privacy & terms
								</a>
							</li>
						</ul>
					</nav>
				</div>
			</footer>
		</div>
	);
}

export default App;
