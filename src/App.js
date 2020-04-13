import React from 'react';
import './App.scss';
// Components
import Navigation from './components/Navigation/Navigation';
import Overview from './components/Overview/Overview';
import AboutUs from './components/AboutUs/AboutUs';
import Transmission from './components/Transmission/Transmission';
import Symptoms from './components/Symptoms/Symptoms';
import Footer from './components/Footer.js/Footer';

function App() {
	return (
		<div className="App">
			<Navigation />
			<Overview />
			<AboutUs />
			<Transmission />
			<Symptoms />
			<Footer />
		</div>
	);
}

export default App;
