import React, { useState } from 'react'
import Reviews from '@/components/reviews'
import Contact from '@/components/contact'
import Footer from '@/components/footer'
import Nav from '@/components/nav'
import Head from 'next/head'

const StairsZaw = () => {
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
				<title>Fusion Weld Wood | Schody Zawiercie</title>
				<meta
					name='description'
					content='Nowoczesne schody drewniane na konstrukcji stalowej i nie tylko. Schody Zawiercie.'
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
					<h1 class='underpageh1'>Schody Zawiercie</h1>
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
							Poszukujesz idealnych schodów dla swojego domu lub miejsca pracy w Zawierciu? Z nami odnajdziesz schody,
							które będą łączyć w sobie funkcjonalność, bezpieczeństwo i elegancję. Nasza oferta to wysokiej jakości
							schody stalowe i schody drewniane na konstrukcji stalowej, które pasują do każdej przestrzeni i stylu
							wnętrza.
						</p>

						<p className='dscrb'>
							Nasze schody są projektowane z myślą o Twoich potrzebach, bez względu na to, czy szukasz schodów
							klasycznych, czy też nowoczesnych. Wysoka jakość naszych produktów gwarantuje ich długowieczność i
							bezpieczeństwo, a staranne wykonanie zapewnia niepowtarzalny wygląd, który przyciąga wzrok.
						</p>

						<p className='dscrb'>
							Przez lata zdobyliśmy zaufanie wielu klientów w Zawierciu, dostarczając im schody, które spełniły ich
							oczekiwania zarówno pod względem estetyki, jak i trwałości. Nasza doświadczona ekipa montażowa gwarantuje
							profesjonalne i szybkie wykonanie usługi, zgodne z Twoimi wymaganiami i oczekiwaniami.
						</p>

						<p className='dscrb'>
							Zapraszamy do zapoznania się z naszą ofertą schodów dostępnych w Zawierciu. Skontaktuj się z nami, aby
							dowiedzieć się więcej lub umówić się na bezpłatną konsultację. Czekamy, aby pomóc Ci stworzyć schody
							marzeń.
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

export default StairsZaw
