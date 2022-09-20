// react es una librería de javascript
import React from 'react';
// para renderizar la aplicación
import ReactDOM from 'react-dom/client';
// importar el componente App
import { CounterApp } from './CounterApp';
// import { FirstApp } from './FirstApp';
// import { HelloWorldApp } from './HelloWorldApp';

// importar el css global
import './styles.css';

// renderizar la aplicación
ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		{/* <HelloWorldApp /> */}
		{/* <FirstApp title="Hello World" /> */}
		<CounterApp value={123} />
	</React.StrictMode>
);
