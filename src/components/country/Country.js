import React from 'react';

const Country = ({ countryData, styleName }) => {
	return (
		<section className={styleName}>
			<h2>Country: {countryData.country}</h2>
			<h3>Cases: {countryData.cases}</h3>
			<h3>Active cases: {countryData.active}</h3>
			<h3>Today Cases: {countryData.todayCases}</h3>
			<h3>Recovered: {countryData.recovered}</h3>
			<h3>Deaths: {countryData.deaths}</h3>
			<h3>Today deaths: {countryData.todayDeaths}</h3>
			<h3>Critical: {countryData.critical}</h3>

			<footer>
				<h2>Take care of yourself</h2>
				<a href='https://www.who.int/es'>
					Visit the oms oficial page for more information about
				</a>
			</footer>
		</section>
	);
};

export default Country;
