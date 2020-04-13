import React from 'react';
import './App.scss';
// Components
import Navigation from './components/Navigation/Navigation';
import Overview from './components/Overview/Overview';
import AboutUs from './components/AboutUs/AboutUs';

function App() {
	return (
		<div className="App">
			<Navigation />
			<Overview />
			<AboutUs />
		</div>
	);
}

export default App;
