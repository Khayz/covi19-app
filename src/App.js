import React from 'react';
import { NavLink, BrowserRouter, Route, Redirect } from 'react-router-dom';
import { FaMap, FaFontAwesomeFlag } from 'react-icons/fa';
import { GiWorld } from 'react-icons/gi';

import './App.scss';

import WorldCountrys from './containers/MapCountries/MapCountries';
import Countries from './containers/Countries/Countries';
import Footer from './components/Footer/Footer';
import Global from './containers/Global/Global';

function App() {
	return (
		<BrowserRouter>
			<div>
				<nav className='navbar'>
					<ul>
						<li>
							<NavLink to='/map'>
								{' '}
								<FaMap /> Map
							</NavLink>
						</li>
						<li>
							<NavLink to='/global'>
								{' '}
								<GiWorld /> Global
							</NavLink>
						</li>
						<li>
							<NavLink to='/countries'>
								{' '}
								<FaFontAwesomeFlag /> Countries
							</NavLink>
						</li>
					</ul>
				</nav>
				<Route exact path='/' render={() => <Redirect to='/map' />} />
				<Route path='/map' component={WorldCountrys} />
				<Route path='/countries' component={Countries} />
				<Route path='/global' component={Global} />
				<Footer />
			</div>
		</BrowserRouter>
	);
}

export default App;
