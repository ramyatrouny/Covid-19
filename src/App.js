import React from 'react';
import './App.scss';
// Components
import Navigation from './components/Navigation/Navigation';
import Overview from './components/Overview/Overview';
import AboutUs from './components/AboutUs/AboutUs';
import Transmission from './components/Transmission/Transmission';
import Symptoms from './components/Symptoms/Symptoms';
import Footer from './components/Footer.js/Footer';
import { useRef } from 'react';

function App() {
	const overview = useRef(null);
	const aboutUs = useRef(null);
	const transmission = useRef(null);
	const symptoms = useRef(null);

	return (
		<div className="App">
			<Navigation overview={overview} aboutUs={aboutUs} transmission={transmission} symptoms={symptoms} />
			<Overview setRef={overview} />
			<AboutUs setRef={aboutUs}/>
			<Transmission setRef={transmission}/>
			<Symptoms setRef={symptoms} />
			<Footer />
		</div>
	);
}

export default App;
