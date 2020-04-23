import React, { useState, useEffect } from 'react';
import numeral from 'numeral';
import './Global.scss';

const Global = () => {
	const [globalData, setGlobalData] = useState({});

	useEffect(() => {
		fetch('https://coronavirus-19-api.herokuapp.com/all')
			.then((response) => response.json())
			.then((data) =>
				setGlobalData({
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
	});

	const formatNumber = (number) => numeral(number).format('0,0');

	return (
		<div className='Global'>
			<h2>Global Cases: {globalData.cases}</h2>
			<h3>Global Deaths: {globalData.deaths}</h3>
			<h3>Global Recovered: {globalData.recovered}</h3>
		</div>
	);
};

export default Global;
