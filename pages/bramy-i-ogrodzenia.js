import React, { useState } from 'react'
import Reviews from '@/components/reviews'
import Contact from '@/components/contact'
import Footer from '@/components/footer'
import Nav from '@/components/nav'
import Head from 'next/head'

const BramyOgrodzenia = () => {
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
				<title>Fusion Weld Wood | Bramy i ogrodzenia</title>
				<meta
					name='description'
					content='Wytrzymałe bramy i ogrodzenia to nasza specjalność. Ogrodzieniec, Zawiercie, Dąbrowa Górnicza'
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
					<h1 class='underpageh1'>Bramy i ogrodzenia</h1>
					<div class='wrappers'>
						<p class='dscrb'>
							Poszukujesz solidnego i eleganckiego ogrodzenia swojej posesji? Nasze produkty są wytrzymałe, bezpieczne i
							trwałe, a jednocześnie prezentują się stylowo i dodają właścicielom poczucia prywatności i bezpieczeństwa.
						</p>
						<p class='dscrb'>
							Dostępne są w różnych kształtach, rozmiarach a także z możliwością personalizacji i dostosowania do
							indywidualnych potrzeb i wymagań klienta.{' '}
						</p>
						<div class='gallery'>
							<div class='image' onClick={() => handleImageClick('/img/29.jpg')}>
								<span>
									<img src='/img/29.jpg' alt='zdjęcie realizacji zamówienia hokerów' />
								</span>
							</div>
							<div class='image' onClick={() => handleImageClick('/img/31.jpg')}>
								<span>
									<img src='/img/31.jpg' alt='zdjęcie realizacji' />
								</span>
							</div>
							<div class='image' onClick={() => handleImageClick('/img/32.jpg')}>
								<span>
									<img src='/img/32.jpg' alt='zdjęcie realizacji zamonotwanych barierek schodowych' />
								</span>
							</div>
							<div class='image' onClick={() => handleImageClick('/img/41.jpg')}>
								<span>
									<img src='/img/41.jpg' alt='zdjęcie realizacji narożnika stalowego do ogródka' />
								</span>
							</div>
							<div class='image' onClick={() => handleImageClick('/img/19.jpg')}>
								<span>
									<img src='/img/19.jpg' alt='zdjęcie realizacji' />
								</span>
							</div>
							<div class='image' onClick={() => handleImageClick('/img/17.jpg')}>
								<span>
									<img src='/img/17.jpg' alt='zdjęcie realizacji' />
								</span>
							</div>
							<div class='image' onClick={() => handleImageClick('/img/20.jpg')}>
								<span>
									<img src='/img/20.jpg' alt='zdjęcie realizacji' />
								</span>
							</div>
							<div class='image' onClick={() => handleImageClick('/img/12.jpg')}>
								<span>
									<img src='/img/12.jpg' alt='zdjęcie realizacji' />
								</span>
							</div>
							<div class='image' onClick={() => handleImageClick('/img/b1.jpg')}>
								<span>
									<img src='/img/b1.jpg' alt='zdjęcie realizacji' />
								</span>
							</div>
							<div class='image' onClick={() => handleImageClick('/img/b2.jpg')}>
								<span>
									<img src='/img/b2.jpg' alt='zdjęcie realizacji' />
								</span>
							</div>
							<div class='image' onClick={() => handleImageClick('/img/b3.jpg')}>
								<span>
									<img src='/img/b3.jpg' alt='zdjęcie realizacji' />
								</span>
							</div>
							<div class='image' onClick={() => handleImageClick('/img/b4.jpg')}>
								<span>
									<img src='/img/b4.jpg' alt='zdjęcie realizacji' />
								</span>
							</div>
							<div class='image' onClick={() => handleImageClick('/img/b5.jpg')}>
								<span>
									<img src='/img/b5.jpg' alt='zdjęcie realizacji' />
								</span>
							</div>
							<div class='image' onClick={() => handleImageClick('/img/b6.jpg')}>
								<span>
									<img src='/img/b6.jpg' alt='zdjęcie realizacji' />
								</span>
							</div>
							<div class='image' onClick={() => handleImageClick('/img/b7.jpg')}>
								<span>
									<img src='/img/b7.jpg' alt='zdjęcie realizacji' />
								</span>
							</div>
							<div class='image' onClick={() => handleImageClick('/img/b8.jpg')}>
								<span>
									<img src='/img/b8.jpg' alt='zdjęcie realizacji' />
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

export default BramyOgrodzenia
