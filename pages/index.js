import React from 'react'
import Reviews from '@/components/reviews'
import Contact from '@/components/contact'
import Footer from '@/components/footer'
import Nav from '@/components/nav'
import Link from 'next/link'
import Head from 'next/head'

const Home = () => {
	return (
		<>
			<Head>
				<title>Fusion Weld Wood | Meble, schody, bramy, balustrady</title>
				<meta
					name='description'
					content='Meble, ogrodzenia, bramy, schody i balustrady w nowoczesnym stylu. Realizujemy zamówienia indywidualne oraz usługi spawalnicze. Ogrodzieniec, Zawiercie, Dąbrowa Górnicza'
				/>
			</Head>
			<header id='home'>
				<Nav />
				<div className='hero-img'>
					<div className='hero-shadow'></div>
					<div className='hero-text'>
						<h1 data-aos='zoom-in-down' data-aos-duration='3000'>
							witajcie w <span className='blue-text'>Fusion weld & wood</span>
						</h1>
						<p data-aos='zoom-in-down' data-aos-duration='2000'>
							W miejscu, gdzie najważniejszy jest klient
						</p>
						<a href='#realization' className='btn btn-outline-light' data-aos='zoom-in-down' data-aos-duration='1000'>
							Sprawdź realizacje
						</a>
						<div className='down'>
							<a href='#offer'>
								<i className='fas fa-chevron-down bounce-top'></i>
							</a>
						</div>
					</div>
					<a href='https://www.facebook.com/fusionweldwood' target='_blank' className='social'>
						<img src='/img/Facebook.png' alt='ikonka facebooka' className='fbsm' />
					</a>
				</div>
			</header>

			<div className='telcontact'>
				<a href='tel:+48603796839'>
					<img src='img/telephone.png' alt='znaczek słuchawki od telefonu' />
				</a>
			</div>

			<section className='realization' id='realization'>
				<div>
					<h2>Oferta i realizacje</h2>
					<div className='underline'></div>
					<div className='wrappers'>
						<div className='galeries'>
							<Link href='/meble-loftowe' className='stairs'>
								<p>Meble loftowe</p>
								<img src='/img/loft.jpg' alt='' />
							</Link>
						</div>
						<div className='galeries'>
							<Link href='/schody' className='stairs'>
								<p>Schody</p>
								<img src='/img/stairs.jpg' alt='' />
							</Link>
						</div>
						<div className='galeries'>
							<Link href='/balustrady' className='stairs'>
								<p>Balustrady</p>
								<img src='/img/railings.jpg' alt='' />
							</Link>
						</div>
						<div className='galeries'>
							<Link href='/bramy-i-ogrodzenia' className='stairs'>
								<p>Bramy i ogrodzenia</p>
								<img src='/img/bramy.jpg' alt='' />
							</Link>
						</div>
					</div>
				</div>
				<div className='preview-box'>
					<div className='details'>
						<div className='title'>
							Image <p className='current-img'></p> of <p className='total-img'></p>
						</div>
						<span className='icon fas fa-times'></span>
					</div>
					<div className='image-box'>
						<div className='slide prev'>
							<i className='fas fa-angle-left'></i>
						</div>
						<div className='slide next'>
							<i className='fas fa-angle-right'></i>
						</div>
					</div>
				</div>
				<div className='shadow'></div>
			</section>

			<Reviews />

			<Contact />

			<Footer />
		</>
	)
}

export default Home
