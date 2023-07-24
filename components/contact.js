import React, { useState } from 'react'

const Contact = () => {
	const [email, setEmail] = useState('')
	const [phone, setPhone] = useState('')
	const [message, setMessage] = useState('')
	const [errors, setErrors] = useState({ email: '', phone: '' })
	const [statusMessage, setStatusMessage] = useState('')

	const handleSubmit = async event => {
		event.preventDefault()
	
		const validateEmail = email => {
			const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
			return emailRegex.test(email)
		}
	
		const validatePhone = phone => {
			const phoneRegex = /^[0-9\b]+$/
			return phoneRegex.test(phone) && phone.length === 9
		}
	
		const validateMessage = message => {
			return message.length >= 10
		}
	
		// walidacja tutaj...
		let errors = { email: '', phone: '', message: '' }
	
		if (!validateEmail(email)) {
			errors.email = 'Niepoprawny format e-mail'
		}
	
		if (!validatePhone(phone)) {
			errors.phone = 'Niepoprawny format numeru telefonu'
		}
	
		if (!validateMessage(message)) {
			errors.message = 'Wiadomość musi mieć co najmniej 10 znaków'
		}
	
		setErrors(errors)
	
		if (errors.email === '' && errors.phone === '' && errors.message === '') {
			try {
				let url =
					window.location.hostname === 'www.fusionweldwood.pl'
						? 'https://www.fusionweldwood.pl/api/send'
						: 'https://fusionweldwood.pl/api/send';
	
				const response = await fetch(url, {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
					},
					body: JSON.stringify({ email, phone, message }),
				})
	
				if (!response.ok) {
					throw new Error('Błąd sieci!')
				}
	
				const data = await response.json() // teraz `data` to obiekt JSON
	
				setStatusMessage(data.message) // Ustawienie komunikatu o sukcesie
	
				// tutaj możesz zrobić coś z odpowiedzią...
			} catch (error) {
				console.error('Błąd:', error)
				setStatusMessage('Wystąpił błąd podczas wysyłania wiadomości') // Ustawienie komunikatu o błędzie
			}
		}
	}

	const messageStyle = {
		color: statusMessage === 'Wiadomość wysłana pomyślnie' ? 'greenyellow' : '#ed2e2e'
	  };

	return (
		<>
			<section className='section contacts' id='contact'>
				<h2>kontakt</h2>
				<div className='underline'></div>

				<div className='sectioncontacts'>
					<div className='phones'>
						<div className='tele'>
							<img src='/img/telephone.png' alt='znaczek słuchawki od telefonu' />
							<a href='tel:692798993'>692 798 993</a>
							<br></br>
							<img src='/img/telephone.png' alt='znaczek słuchawki od telefonu' style={{ marginTop: 10 }} />
							<a href='tel:603796839'>603 796 839</a>
						</div>
						<a href='https://www.facebook.com/fusionweldwood' className='sm' target='_blank'>
							<img src='/img/Facebook.png' alt='ikonka facebooka' /> Facebook
						</a>
					</div>

					<div className='flex'>
						<form className='contact' name='myform' onSubmit={handleSubmit}>
							<p>Formularz kontaktowy:</p>
							<div className='contact__form-box'>
								<input
									type='email'
									name='Email'
									id='mail'
									placeholder='Twój e-mail'
									value={email}
									onChange={e => setEmail(e.target.value)}
								/>
							</div>
							<div className='errori'>{errors.email && <span>{errors.email}</span>}</div>
							{/* {errors.email && <span style={{color: 'orange'}}>{errors.email}</span>} */}
							<div className='contact__form-box'>
								<input
									type='number'
									name='Number'
									id='number'
									placeholder='Twój nr telefonu'
									value={phone}
									onChange={e => setPhone(e.target.value)}
								/>
							</div>
							<div className='errori'>{errors.phone && <span>{errors.phone}</span>}</div>
							<div className='contact__form-box'>
								<textarea
									name='Message'
									id='msg'
									cols='30'
									rows='10'
									placeholder='Twoja wiadomość'
									value={message}
									onChange={e => setMessage(e.target.value)}></textarea>
								{/* <div id='error'></div> */}
								{/* {errors.message && <span>{errors.message}</span>} */}
							</div>
							<div className='errori'>{errors.message && <span>{errors.message}</span>}</div>
							<div className='status-message' style={messageStyle}>
								{statusMessage} {/* Wyświetlanie komunikatu statusu */}
							</div>
							<div className='flexbtn'>
								<button type='submit' name='Login' value='submit' className='border'>
									Wyślij
								</button>
							</div>
						</form>
					</div>
				</div>
				<iframe
					src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2540.215120459124!2d19.544946717443846!3d50.45571870000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471719af40f7b093%3A0xeeff28f399dc4685!2sFusion%20Weld%20%26%20Wood%20Artur%20Kijas!5e0!3m2!1spl!2spl!4v1649758959408!5m2!1spl!2spl'
					allowfullscreen=''
					loading='lazy'
					referrerpolicy='no-referrer-when-downgrade'></iframe>
			</section>
		</>
	)
}

export default Contact
