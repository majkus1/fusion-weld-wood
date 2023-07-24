import React, { useState } from 'react'
import Reviews from '@/components/reviews'
import Contact from '@/components/contact'
import Footer from '@/components/footer'
import Nav from '@/components/nav'
import Head from 'next/head'

const MebleLoftowe = () => {
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
				<title>Fusion Weld Wood | Meble loftowe</title>
				<meta
					name='description'
					content='Meble w stylu loftowym i industrialnym. Ogrodzieniec, Zawiercie, Dąbrowa Górnicza'
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
					<h1 class='underpageh1'>Meble loftowe</h1>
					<div class='wrappers'>
						<p class='dscrb'>
							Oto nasze realizacje mebli w stylu loftowym, które łączą funkcjonalność i elegancki design. <br></br>Meble
							loftowe są synonimem nowoczesnego i stylowego wystroju, który jest idealny do nowoczesnych i przestronnych
							wnętrz.
						</p>
						<p class='dscrb'>
							{' '}
							Nasze meble są wykonane z wysokiej jakości materiałów, aby zagwarantować trwałość i wygodę użytkowania.{' '}
						</p>
						<div class='gallery'>
							<div class='image' onClick={() => handleImageClick('/img/1.jpg')}>
								<span>
									<img src='/img/1.jpg' alt='zdjęcie realizacji zamówienia hokerów' />
								</span>
							</div>
							<div class='image' onClick={() => handleImageClick('/img/34.jpg')}>
								<span>
									<img src='/img/34.jpg' alt='zdjęcie realizacji' />
								</span>
							</div>
							<div class='image' onClick={() => handleImageClick('/img/4.jpg')}>
								<span>
									<img src='/img/4.jpg' alt='zdjęcie realizacji zamonotwanych barierek schodowych' />
								</span>
							</div>
							<div class='image' onClick={() => handleImageClick('/img/9.jpg')}>
								<span>
									<img src='/img/9.jpg' alt='zdjęcie realizacji narożnika stalowego do ogródka' />
								</span>
							</div>
							<div class='image' onClick={() => handleImageClick('/img/2.jpg')}>
								<span>
									<img src='/img/2.jpg' alt='zdjęcie realizacji' />
								</span>
							</div>
							<div class='image' onClick={() => handleImageClick('/img/13.jpg')}>
								<span>
									<img src='/img/13.jpg' alt='zdjęcie realizacji' />
								</span>
							</div>
							<div class='image' onClick={() => handleImageClick('/img/loftmeb.jpg')}>
								<span>
									<img src='/img/loftmeb.jpg' alt='zdjęcie realizacji' />
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
					{/* <div class='preview-box'>
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
					<div class='shadow'></div> */}
				</div>
			</section>

			<Reviews />

			<Contact />

			<Footer />
		</>
	)
}

export default MebleLoftowe
