import React, { useState } from 'react'
import Reviews from '@/components/reviews'
import Contact from '@/components/contact'
import Footer from '@/components/footer'
import Nav from '@/components/nav'
import Head from 'next/head'

const Schody = () => {
	const [selectedImage, setSelectedImage] = useState(null)

	const handleImageClick = src => {
		setSelectedImage(src)
	}

	const handleCloseClick = () => {
		setSelectedImage(null)
	}

	return (
		<>
			<Head>
				<title>Fusion Weld Wood | Schody</title>
				<meta
					name='description'
					content='Nowoczesne schody drewniane na konstrukcji stalowej i nie tylko. Ogrodzieniec, Zawiercie, Dąbrowa Górnicza'
				/>
			</Head>
			<header id='home'>
				<Nav />
			</header>

			<a href='https://www.facebook.com/fusionweldwood' target='_blank' class='social2'>
				<img src='/img/Facebook.png' alt='ikonka facebooka' class='fbsm2' />
			</a>

			<div class='telcontact'>
				<a href='tel:+48603796839'>
					<img src='img/telephone.png' alt='znaczek słuchawki od telefonu' />
				</a>
			</div>

			<section class='realization' id='realization' style={{ paddingTop: '125px' }}>
				<div>
					<h1 class='underpageh1'>Schody</h1>
					<div class='wrappers'>
						<p class='dscrb'>
							Marzysz o stylowych i trwałych schodach, które połączą funkcjonalność z elegancją? Oto nasze schody
							drewniane na konstrukcji stalowej! Połączenie solidnej stalowej ramy z naturalnym drewnem daje
							niepowtarzalny efekt wizualny i zapewnia maksymalną wytrzymałość
						</p>
						<p class='dscrb'>
							Nasze schody są dostosowywane do indywidualnych potrzeb i wymagań klienta, a szeroki wybór drewnianych
							elementów dekoracyjnych pozwala na stworzenie unikalnego i spójnego designu w Twoim domu.
						</p>
						<div class='gallery'>
							<div class='image' onClick={() => handleImageClick('/img/s1.jpg')}>
								<span>
									<img src='/img/s1.jpg' alt='zdjęcie realizacji zamówienia hokerów' />
								</span>
							</div>
							<div class='image' onClick={() => handleImageClick('/img/s2.jpg')}>
								<span>
									<img src='/img/s2.jpg' alt='zdjęcie realizacji' />
								</span>
							</div>
							<div class='image' onClick={() => handleImageClick('/img/s3.jpg')}>
								<span>
									<img src='/img/s3.jpg' alt='zdjęcie realizacji zamonotwanych barierek schodowych' />
								</span>
							</div>
							<div class='image' onClick={() => handleImageClick('/img/s4.jpg')}>
								<span>
									<img src='/img/s4.jpg' alt='zdjęcie realizacji narożnika stalowego do ogródka' />
								</span>
							</div>
							<div class='image' onClick={() => handleImageClick('/img/s5.jpg')}>
								<span>
									<img src='/img/s5.jpg' alt='zdjęcie realizacji' />
								</span>
							</div>
							<div class='image' onClick={() => handleImageClick('/img/s6.jpg')}>
								<span>
									<img src='/img/s6.jpg' alt='zdjęcie realizacji' />
								</span>
							</div>
							<div class='image' onClick={() => handleImageClick('/img/s7.jpg')}>
								<span>
									<img src='/img/s7.jpg' alt='zdjęcie realizacji' />
								</span>
							</div>
							<div class='image' onClick={() => handleImageClick('/img/11.jpg')}>
								<span>
									<img src='/img/11.jpg' alt='zdjęcie realizacji' />
								</span>
							</div>
						</div>
						{selectedImage && (
							<div className='modal' onClick={handleCloseClick}>
								<button className='close' onClick={handleCloseClick}>
									X
								</button>
								<img src={selectedImage} alt='powiększony obraz' />
							</div>
						)}
					</div>
					<div class='preview-box'>
						<div class='details'>
							<div class='title'>
								Image <p class='current-img'></p> of <p class='total-img'></p>
							</div>
							<span class='icon fas fa-times'></span>
						</div>
						<div class='image-box'>
							<div class='slide prev'>
								<i class='fas fa-angle-left'></i>
							</div>
							<div class='slide next'>
								<i class='fas fa-angle-right'></i>
							</div>
							<img src='' alt='przybliżone zdjęcie realizacji' />
						</div>
					</div>
					<div class='shadow'></div>
				</div>
			</section>

			<Reviews />

			<Contact />

			<Footer />
		</>
	)
}

export default Schody
