import React from 'react';
import './App.css';
import SelectField from './components/Formfields/SelectField';

function App() {
	return (
		<div className="wrapper">
			<header>
				<img src="logo-teoco.png" className="logo" />
			</header>
			<SelectField />
		</div>
	);
}

export default App;
