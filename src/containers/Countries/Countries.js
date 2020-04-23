import React, { useState, useEffect } from 'react';
import numeral from 'numeral';
import { v1 } from 'uuid';

import './Countries.scss';

import Country from '../../components/country/Country';

const Countries = () => {
	const [countries, setCountries] = useState([]);
	const [countryData, setCountryData] = useState({
		country: 'Mexico',
		cases: '',
		todayCases: '',
		active: '',
		recovered: '',
		todayDeaths: '',
		deaths: '',
		critical: '',
	});

	useEffect(() => {
		fetch('https://coronavirus-19-api.herokuapp.com/countries')
			.then((response) => response.json())
			.then((data) =>
				setCountries(
					data
						.map(({ country }) => country)
						.filter((country) => country !== 'Total:' && country)
				)
			);
	}, []);

	useEffect(() => {
		fetch(
			`https://coronavirus-19-api.herokuapp.com/countries/${countryData.country}`
		)
			.then((response) => response.json())
			.then((data) =>
				setCountryData({
					...data,
					cases: formatNumber(data.cases),
					todayCases: formatNumber(data.todayCases),
					active: formatNumber(data.active),
					recovered: formatNumber(data.recovered),
					todayDeaths: formatNumber(data.todayDeaths),
					deaths: formatNumber(data.deaths),
					critical: formatNumber(data.critical),
				})
			);
	}, [countryData.country]);

	const formatNumber = (number) => numeral(number).format('0,0');

	const handleCountry = (event) => {
		event.persist();
		setCountryData((prevState) => ({
			...prevState,
			country: event.target.value,
		}));
	};

	return (
		<div className='countries'>
			<h1>Countries</h1>
			<div className='select'>
				<select value={countryData.country} onChange={handleCountry}>
					{countries.map((country) => (
						<option key={v1()} value={country}>
							{country}
						</option>
					))}
				</select>
			</div>
			{countryData.country && (
				<Country styleName='country-style' countryData={countryData} />
			)}
		</div>
	);
};

export default Countries;
