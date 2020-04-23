import React, { useEffect, useState } from 'react';
import numeral from 'numeral';
import MapChart from '../../components/MapChart/MapChart';
import ReactTooltip from 'react-tooltip';
import Country from '../../components/country/Country';

import './MapCountries.scss';

const MapCountries = () => {
	const [content, setContent] = useState('');
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
			)
			.catch((error) => console.log(error));
	}, [countryData.country]);

	const formatNumber = (number) => numeral(number).format('0,0');

	const handleCountryInformation = async (country) => {
		if (country === countryData.country) {
			return false;
		} else if (country === 'South Korea') {
			country = 'S. Korea';
		}

		if (country === 'United States of America') {
			country = 'USA';
		}

		setCountryData((prevState) => ({
			...prevState,
			country,
		}));
	};

	return (
		<div className='MapInformation'>
			<div className='map'>
				<MapChart
					handleCountryInformation={handleCountryInformation}
					setTooltipContent={setContent}
				/>
				<ReactTooltip>{content}</ReactTooltip>
			</div>
			{countryData.country && (
				<Country styleName='country-data' countryData={countryData} />
			)}
		</div>
	);
};

export default MapCountries;
