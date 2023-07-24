import React, { useState } from 'react'
import Reviews from '@/components/reviews'
import Contact from '@/components/contact'
import Footer from '@/components/footer'
import Nav from '@/components/nav'
import Head from 'next/head'

const StairsOgro = () => {
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
				<title>Fusion Weld Wood | Schody Ogrodzieniec</title>
				<meta
					name='description'
					content='Nowoczesne schody drewniane na konstrukcji stalowej i nie tylko. Schody Ogrodzieniec.'
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
					<h1 class='underpageh1'>Schody Ogrodzieniec</h1>
					<div class='wrappers'>
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
						<p className='dscrb'>
							Szukasz niepowtarzalnych, trwałych i estetycznych rozwiązań dla swojego domu czy miejsca pracy? Schody
							stalowe lub na konstrukcji stalowej to idealne połączenie funkcjonalności, wytrzymałości i stylu. Z
							przyjemnością przedstawiamy naszą ofertę w Ogrodzińcu!
						</p>

						<p className='dscrb'>
							Nasze schody stalowe i drewniane na konstrukcji stalowej to gwarancja jakości i elegancji. Łączymy
							nowoczesne technologie z tradycyjnym rzemiosłem, by dostarczyć Ci produkt, który zachwyca designem i
							spełnia najwyższe standardy bezpieczeństwa.
						</p>

						<p className='dscrb'>
							Stawiamy na indywidualne podejście do każdego klienta. Bez względu na to, czy szukasz schodów do swojego
							loftu, biura czy domu, jesteśmy w stanie stworzyć rozwiązanie idealnie dopasowane do Twoich potrzeb i
							oczekiwań. Nasze schody to nie tylko funkcjonalny element wnętrza, to przede wszystkim wyjątkowe dzieło
							sztuki.
						</p>

						<p className='dscrb'>
							Zapraszamy do skorzystania z naszej oferty w Ogrodzińcu. Odkryj, jak schody stalowe lub na konstrukcji
							stalowej mogą odmienić Twoją przestrzeń i dodać jej wyjątkowego charakteru. Skontaktuj się z nami, a z
							przyjemnością odpowiemy na wszystkie Twoje pytania i pomożemy Ci stworzyć schody marzeń.
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

export default StairsOgro
