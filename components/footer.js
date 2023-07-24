import React from 'react'
import Link from 'next/link'

const Footer = () => {
	return (
		<>
			<footer>
				<div className='other-links'>
					<Link href='/meble-ogrodzieniec'>Meble Ogrodzieniec</Link>
					<Link href='/schody-ogrodzieniec'>Schody Ogrodzieniec</Link>
					<Link href='/balustrady-ogrodzieniec'>Balustrady Ogrodzieniec</Link>
					<Link href='/bramy-i-ogrodzenia-ogrodzieniec'>Bramy i ogrodzenia Ogrodzieniec</Link>

					<Link href='/meble-zawiercie'>Meble Zawiercie</Link>
					<Link href='/schody-zawiercie'>Schody Zawiercie</Link>
					<Link href='/balustrady-zawiercie'>Balustrady Zawiercie</Link>
					<Link href='/bramy-i-ogrodzenia-zawiercie'>Bramy i ogrodzenia Zawiercie</Link>
				</div>
				<p>
					{' '}
					&copy; 2023 | FUSION WELD & WOOD
					<br></br>
					created by: majkus.dev
				</p>
			</footer>
		</>
	)
}

export default Footer
