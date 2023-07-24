import React, { useEffect, useState } from 'react'
import Link from 'next/link'

const Nav = () => {
	const [scrollPosition, setScrollPosition] = useState(0)
	const [navOpen, setNavOpen] = useState(false)
	const [dropdownOpen, setDropdownOpen] = useState(false)

	const handleNavToggle = () => setNavOpen(!navOpen)
	const handleDropdownToggle = () => setDropdownOpen(!dropdownOpen)
	const handleCloseNav = () => setNavOpen(false)

	const handleScroll = () => {
		const position = window.pageYOffset
		setScrollPosition(position)
	}

	useEffect(() => {
		window.addEventListener('scroll', handleScroll, { passive: true })

		return () => {
			window.removeEventListener('scroll', handleScroll)
		}
	}, [])

	return (
		<>
			<nav>
				<div className={`navmobile-list ${scrollPosition > 20 ? 'shrink' : ''}`}>
					<div className='navmobitem'>
						<Link href='/'>
							<img src='img/logofww.jpg' alt='logo firmy fusion weld wood na urządzenia mobilne' className='logo' />
							<p>FUSION WELD & WOOD</p>
						</Link>
					</div>

					<div className='nav'>
						<button className='burger' onClick={handleNavToggle}>
							{navOpen ? 'X' : '☰'}
						</button>
						{navOpen && (
							<div className={`navMenu ${navOpen ? 'slideIn' : 'slideOut'}`}>
								<div className='navItem' onClick={handleDropdownToggle}>
									Oferta i realizacje
									{dropdownOpen && (
										<div className='dropdown'>
											<Link href='/meble-loftowe' onClick={handleCloseNav}>
												Meble loftowe
											</Link>
											<Link href='/schody' onClick={handleCloseNav}>
												Schody
											</Link>
											<Link href='/balustrady' onClick={handleCloseNav}>
												Balustrady
											</Link>
											<Link href='/bramy-i-ogrodzenia' onClick={handleCloseNav}>
												Bramy i ogrodzenia
											</Link>
										</div>
									)}
								</div>
								<Link href='#reviews' className='navItem' onClick={handleCloseNav}>
									Opinie
								</Link>
								<Link href='#contact' className='navItem' onClick={handleCloseNav}>
									Kontakt
								</Link>
								<div className='logoinnav'>
									<img src='/img/logonav.jpg' />
								</div>
							</div>
						)}
					</div>
				</div>
			</nav>

			<nav>
				<ul className={`navdesktop-list ${scrollPosition > 20 ? 'shrink' : ''}`}>
					<li className='nav-item'>
						<Link href='/'>
							<img src='img/logofww.jpg' alt='logo firmy fusion weld wood na urządzenia desktopowe' className='logo' />
							<p>FUSION WELD & WOOD</p>
						</Link>
					</li>

					<Link href='/#realization' className='nav-itemlink'>
						OFERTA I REALIZACJE
					</Link>

					<Link href='#reviews' className='nav-itemlink'>
						OPINIE
					</Link>

					<Link href='#contact' className='nav-itemlink'>
						KONTAKT
					</Link>
				</ul>
			</nav>
		</>
	)
}

export default Nav
