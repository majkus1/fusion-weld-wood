import React, { useState } from 'react'
import Reviews from '@/components/reviews'
import Contact from '@/components/contact'
import Footer from '@/components/footer'
import Nav from '@/components/nav'
import Head from 'next/head'

const BraZaw = () => {
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
				<title>Fusion Weld Wood | Bramy i ogrodzenia Zawiercie</title>
				<meta
					name='description'
					content='Wytrzymałe bramy i ogrodzenia to nasza specjalność. Bramy i ogrodzenia Zawiercie'
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
					<h1 class='underpageh1'>Bramy i ogrodzenia Zawiercie</h1>
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
							Poszukujesz solidnych i eleganckich bram oraz ogrodzeń w Zawierciu? Jesteś we właściwym miejscu! Nasza
							oferta to szeroka gama produktów, które łączą w sobie funkcjonalność, bezpieczeństwo i atrakcyjny wygląd.
						</p>

						<p className='dscrb'>
							Właściwie dobrana brama i ogrodzenie to nie tylko ochrona Twojego domu, ale także jego wizytówka. Nasze
							bramy i ogrodzenia, wykonane z najwyższej jakości materiałów, zapewniają doskonałe zabezpieczenie, a
							jednocześnie są estetycznym dopełnieniem nieruchomości.
						</p>

						<p className='dscrb'>
							Działamy na terenie Zawiercia, dostarczając naszym Klientom produkty dopasowane do ich indywidualnych
							potrzeb. Dzięki szerokiemu asortymentowi, jesteśmy w stanie zaoferować bramy i ogrodzenia, które idealnie
							wpasują się w każdy styl - od klasycznego po nowoczesny.
						</p>

						<p className='dscrb'>
							Nasze doświadczenie i zaangażowanie sprawiają, że jesteśmy w stanie sprostać najbardziej wymagającym
							zleceniom. Zapewniamy profesjonalną obsługę na każdym etapie realizacji - od doradztwa, poprzez wybór
							odpowiednich rozwiązań, aż po montaż.
						</p>

						<p className='dscrb'>
							Skontaktuj się z nami, aby dowiedzieć się więcej o ofercie bram i ogrodzeń w Zawierciu. Jesteśmy tutaj,
							aby pomóc Ci zabezpieczyć i upiększyć Twoją nieruchomość!
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

export default BraZaw
