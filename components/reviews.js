import React, { useState } from 'react'

const reviews = [
	// tutaj przechowujemy informacje o recenzjach
	{
		image: 'img/oliwia.jpg',
		altText: 'twarz klientki oliwi która napisała opinie',
		text: 'Z całego serca polecam! Profesjonalna i rzetelna firma. Schody nie dość że świetnej jakości to jeszcze pełnią funkcję dekoracyjną. Jeśli ktoś ma wątpliwości, nie ma się nad czym zastanawiać. ☺️',
		name: 'Oliwia',
	},
	{
		image: 'img/gruca.jpg',
		altText: 'twarz klienta michała która napisała opinie',
		text: 'Polecam na 100%. Profesjonalne wykonanie barierek, ceny bardzo przyzwoite.',
		name: 'Michał',
	},
	{
		image: 'img/marta.jpg',
		altText: 'twarz klientki marty która napisała opinie',
		text: 'Polecam serdecznie firmę! Fachowa obsługa, profesjonalne podejście do klienta. Usługa na 5!',
		name: 'Marta',
	},
	{
		image: 'img/daniel.jpg',
		altText: 'twarz klienta daniela która napisała opinie',
		text: 'Fachowa robota! Panowie punktualni i profesjonalni. POLECAM!',
		name: 'Daniel',
	},
	{
		image: 'img/dagmara.jpg',
		altText: 'twarz klientki dagmary która napisała opinie',
		text: 'Polecam! Profesjonalna i rzetelna firma! Stały kontakt! a efekt? fantastyczny!',
		name: 'Dagmara',
	},
	{
		image: 'img/dominika.jpg',
		altText: 'twarz klientki dominiki która napisała opinie',
		text: 'Profesjonalizm, stały kontakt z klientem, barierki super zrobione i szybko zamontowane, bardzo polecam 🙂',
		name: 'Dominika',
	},
	// i tak dalej dla wszystkich recenzji
]

const ReviewBox = ({ image, altText, text, name }) => (
	<div className='reviews__box'>
		<div className='reviews__box-img'>
			<img src={image} alt={altText} />
		</div>
		<div className='reviews__box-info'>
			<div className='reviews__box-quote'>
				<i className='fas fa-quote-right'></i>
			</div>
			<p className='reviews__box-text'>{text}</p>
			<strong>{name}</strong>
		</div>
	</div>
)

// const Reviews = () => {
// 	return (
// 		<>
// 			<section className='section reviews' id='reviews'>
// 				<div className='py-4'>
// 					<h2>Opinie</h2>
// 					<div className='underline'></div>
// 					<div className='wrapper'>
// 						<div className='reviews__boxes'>

// 							</div>
// 						</div>
// 					</div>
// 			</section>
// 		</>
// 	)
// }

// export default Reviews

export default function Reviews() {
	const [visibleReviews, setVisibleReviews] = useState(1)

	const handleShowMore = () => {
		setVisibleReviews(reviews.length)
	}

	const handleShowLess = () => {
		setVisibleReviews(1)
	}

	return (
		<>
			<section className='section reviews' id='reviews'>
				<div className='py-4'>
					<h2>Opinie</h2>
					<div className='underline'></div>
					<div className='wrapper'>
						<div className='reviews__boxes'>
							{reviews.slice(0, visibleReviews).map((review, index) => (
								<ReviewBox key={index} {...review} />
							))}
							{visibleReviews < reviews.length ? (
								<div className='buttons-fam'>
									<button onClick={handleShowMore} className='buttons-reviews'>
										Pokaż więcej
									</button>
								</div>
							) : (
								<div className='buttons-fam'>
									<button onClick={handleShowLess} className='buttons-reviews'>
										Schowaj opinie
									</button>
								</div>
							)}
						</div>
					</div>
				</div>
			</section>
		</>
	)
}
