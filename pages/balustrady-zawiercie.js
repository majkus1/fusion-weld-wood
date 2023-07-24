import React, { useState } from 'react'
import Reviews from '@/components/reviews'
import Contact from '@/components/contact'
import Footer from '@/components/footer'
import Nav from '@/components/nav'
import Head from 'next/head'

const BalZaw = () => {
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
				<title>Fusion Weld Wood | Balustrady Zawiercie</title>
				<meta
					name='description'
					content='Nowoczesne balustrady dla Ciebie. Dokładnie takie jakie zechcesz. Balustrady Zawiercie'
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
					<h1 class='underpageh1'>Balustrady Zawiercie</h1>
					<div class='wrappers'>
						<div class='gallery'>
							<div class='image' onClick={() => handleImageClick('/img/8.jpg')}>
								<span>
									<img src='/img/8.jpg' alt='zdjęcie realizacji zamówienia hokerów' />
								</span>
							</div>
							<div class='image' onClick={() => handleImageClick('/img/28.jpg')}>
								<span>
									<img src='/img/28.jpg' alt='zdjęcie realizacji' />
								</span>
							</div>
							<div class='image' onClick={() => handleImageClick('/img/42.jpg')}>
								<span>
									<img src='/img/42.jpg' alt='zdjęcie realizacji zamonotwanych barierek schodowych' />
								</span>
							</div>
							<div class='image' onClick={() => handleImageClick('/img/35.jpg')}>
								<span>
									<img src='/img/35.jpg' alt='zdjęcie realizacji narożnika stalowego do ogródka' />
								</span>
							</div>
							<div class='image' onClick={() => handleImageClick('/img/37.jpg')}>
								<span>
									<img src='/img/37.jpg' alt='zdjęcie realizacji' />
								</span>
							</div>
							<div class='image' onClick={() => handleImageClick('/img/40.jpg')}>
								<span>
									<img src='/img/40.jpg' alt='zdjęcie realizacji' />
								</span>
							</div>
							<div class='image' onClick={() => handleImageClick('/img/36.jpg')}>
								<span>
									<img src='/img/36.jpg' alt='zdjęcie realizacji' />
								</span>
							</div>
							<div class='image' onClick={() => handleImageClick('/img/39.jpg')}>
								<span>
									<img src='/img/39.jpg' alt='zdjęcie realizacji' />
								</span>
							</div>
							<div class='image' onClick={() => handleImageClick('/img/balustrada.jpg')}>
								<span>
									<img src='/img/balustrada.jpg' alt='zdjęcie realizacji' />
								</span>
							</div>
							<div class='image' onClick={() => handleImageClick('/img/balu2.jpg')}>
								<span>
									<img src='/img/balu2.jpg' alt='zdjęcie realizacji' />
								</span>
							</div>
							<div class='image' onClick={() => handleImageClick('/img/balu3.jpg')}>
								<span>
									<img src='/img/balu3.jpg' alt='zdjęcie realizacji' />
								</span>
							</div>
							<div class='image' onClick={() => handleImageClick('/img/balu4.jpg')}>
								<span>
									<img src='/img/balu4.jpg' alt='zdjęcie realizacji' />
								</span>
							</div>
							<div class='image' onClick={() => handleImageClick('/img/balu5.jpg')}>
								<span>
									<img src='/img/balu5.jpg' alt='zdjęcie realizacji' />
								</span>
							</div>
							<div class='image' onClick={() => handleImageClick('/img/33.jpg')}>
								<span>
									<img src='/img/33.jpg' alt='zdjęcie realizacji' />
								</span>
							</div>
							<div class='image' onClick={() => handleImageClick('/img/30.jpg')}>
								<span>
									<img src='/img/30.jpg' alt='zdjęcie realizacji' />
								</span>
							</div>
							<div class='image' onClick={() => handleImageClick('/img/5.jpg')}>
								<span>
									<img src='/img/5.jpg' alt='zdjęcie realizacji' />
								</span>
							</div>
							<div class='image' onClick={() => handleImageClick('/img/6.jpg')}>
								<span>
									<img src='/img/6.jpg' alt='zdjęcie realizacji' />
								</span>
							</div>
							<div class='image' onClick={() => handleImageClick('/img/3.jpg')}>
								<span>
									<img src='/img/3.jpg' alt='zdjęcie realizacji' />
								</span>
							</div>
							<div class='image' onClick={() => handleImageClick('/img/10.jpg')}>
								<span>
									<img src='/img/10.jpg' alt='zdjęcie realizacji' />
								</span>
							</div>
							<div class='image' onClick={() => handleImageClick('/img/16.jpg')}>
								<span>
									<img src='/img/16.jpg' alt='zdjęcie realizacji' />
								</span>
							</div>
							<div class='image' onClick={() => handleImageClick('/img/15.jpg')}>
								<span>
									<img src='/img/15.jpg' alt='zdjęcie realizacji' />
								</span>
							</div>
							<div class='image' onClick={() => handleImageClick('/img/22.jpg')}>
								<span>
									<img src='/img/22.jpg' alt='zdjęcie realizacji' />
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
							Jeżeli szukasz balustrad, które będą nie tylko praktyczne, ale także stanowić wyjątkowy element
							dekoracyjny Twojego domu lub biura w Zawierciu, jesteś we właściwym miejscu. Nasza oferta to balustrady o
							różnorodnych stylach i wykonaniu, dopasowane do Twoich potrzeb i oczekiwań.
						</p>

						<p className='dscrb'>
							Bezpieczeństwo, funkcjonalność i estetyka to kluczowe cechy naszych balustrad. Niezależnie od tego, czy
							szukasz balustrad do wnętrz, czy zewnętrznych, nasza gama produktów oferuje rozwiązania, które z pewnością
							spełnią Twoje wymagania. Balustrady, które oferujemy, charakteryzują się trwałością i łatwością utrzymania
							w czystości, co czyni je idealnym wyborem dla każdej przestrzeni.
						</p>

						<p className='dscrb'>
							Od lat służymy mieszkańcom Zawiercia, dostarczając im balustrady, które są nie tylko praktyczne, ale także
							estetycznie dopracowane. Nasz zespół specjalistów zawsze jest gotowy, aby doradzić Ci w wyborze
							najlepszego rozwiązania, dopasowanego do Twojego stylu i budżetu.
						</p>

						<p className='dscrb'>
							Skontaktuj się z nami, aby dowiedzieć się więcej o naszej ofercie balustrad w Zawierciu. Jesteśmy tutaj,
							aby pomóc Ci wybrać balustrady, które spełnią wszystkie Twoje oczekiwania i będą cieszyć oko przez wiele
							lat.
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

export default BalZaw
