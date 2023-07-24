import React, { useState } from 'react'
import Reviews from '@/components/reviews'
import Contact from '@/components/contact'
import Footer from '@/components/footer'
import Nav from '@/components/nav'
import Head from 'next/head'

const BraOgro = () => {
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
				<title>Fusion Weld Wood | Bramy i ogrodzenia Ogrodzieniec</title>
				<meta
					name='description'
					content='Wytrzymałe bramy i ogrodzenia to nasza specjalność. Bramy i ogrodzenia Ogrodzieniec'
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
					<h1 class='underpageh1'>Bramy i ogrodzenia Ogrodzieniec</h1>
					<div class='wrappers'>
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
						<p className='dscrb'>
							Poszukujesz profesjonalnej firmy, która dostarczy Ci nie tylko solidne, ale również estetycznie wykonane
							bramy i ogrodzenia? Ogrodzieniec to miejsce, gdzie nasza oferta spełni wszystkie Twoje oczekiwania. Nasze
							produkty łączą w sobie trwałość, bezpieczeństwo oraz doskonałe wzornictwo.
						</p>

						<p className='dscrb'>
							W naszym asortymencie znajdują się bramy i ogrodzenia wykonywane z najwyższej jakości materiałów,
							zapewniających wytrzymałość na warunki atmosferyczne i długotrwałe użytkowanie. Oferujemy szeroki wybór
							wzorów i kolorów, dzięki czemu z łatwością dobierzesz idealne rozwiązanie dla swojej posesji.
						</p>

						<p className='dscrb'>
							Zdajemy sobie sprawę, że brama i ogrodzenie to nie tylko elementy zapewniające bezpieczeństwo, ale także
							ważna część estetyki domu. Dlatego nasze projekty realizujemy z dbałością o każdy szczegół, abyś mógł
							cieszyć się nie tylko funkcjonalnym, ale i pięknym wyglądem swojej posesji.
						</p>

						<p className='dscrb'>
							Zapraszamy do zapoznania się z naszą ofertą bram i ogrodzeń w Ogrodzińcu. Gwarantujemy profesjonalną
							obsługę, doradztwo oraz pomoc w wyborze idealnego produktu. Skontaktuj się z nami, a nasi specjaliści z
							chęcią odpowiedzą na wszystkie Twoje pytania i pomogą w realizacji Twojego projektu.
						</p>
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

export default BraOgro
