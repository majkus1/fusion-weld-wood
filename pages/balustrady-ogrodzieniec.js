import React, { useState } from 'react'
import Reviews from '@/components/reviews'
import Contact from '@/components/contact'
import Footer from '@/components/footer'
import Nav from '@/components/nav'
import Head from 'next/head'

const BalOgro = () => {
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
				<title>Fusion Weld Wood | Balustrady Ogrodzieniec</title>
				<meta
					name='description'
					content='Nowoczesne balustrady dla Ciebie. Dokładnie takie jakie zechcesz. Balustrady Ogrodzieniec'
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
					<h1 class='underpageh1'>Balustrady Ogrodzieniec</h1>
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
							Jeśli szukasz doskonałych balustrad, które połączą bezpieczeństwo, wytrzymałość i estetykę, jesteś we
							właściwym miejscu! W Ogrodzińcu oferujemy szeroki wybór balustrad, które doskonale wpasują się w każde
							wnętrze - od nowoczesnych loftów, przez eleganckie biura, aż po tradycyjne domy.
						</p>

						<p className='dscrb'>
							Nasze balustrady to połączenie wysokiej jakości materiałów i mistrzowskiego rzemiosła. W każdym produkcie,
							który tworzymy, kładziemy nacisk na detale, dbając o perfekcyjne wykończenie. Wybierając naszą ofertę,
							otrzymujesz produkt, który sprosta Twoim oczekiwaniom i będzie służył Ci przez wiele lat.
						</p>

						<p className='dscrb'>
							Uważamy, że balustrada to więcej niż praktyczny element infrastruktury. To ważny element aranżacji wnętrz,
							który dodaje przestrzeni charakteru i stylu. Dlatego oferujemy szeroką gamę opcji personalizacji - od
							wyboru materiału, przez kolor, aż po styl i wzór.
						</p>

						<p className='dscrb'>
							Zapraszamy do skorzystania z naszej oferty w Ogrodzińcu. Odkryj, jak nasze balustrady mogą przekształcić
							Twoją przestrzeń i zwiększyć jej bezpieczeństwo. Skontaktuj się z nami, a z przyjemnością odpowiemy na
							wszystkie Twoje pytania i pomożemy Ci wybrać idealną balustradę dla Twojego domu czy miejsca pracy.
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

export default BalOgro
