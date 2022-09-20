import { useState } from 'react';
import PropTypes from 'Prop-types';

export const CounterApp = ({ value }) => {
	const [count, setCount] = useState(value);

	const counter = () => {
		setCount(count + 1);
	};

	const counterMenos = () => {
		setCount(count - 1);
	};

	const reset = () => {
		setCount(value);
	};

	return (
		<>
			<h1>CounterApp </h1>
			<h2> {count} </h2>
			<button onClick={counter}>Contador +1</button>
			<button onClick={counterMenos}>Contador -1</button>
			<button aria-label="btn-reset" onClick={reset}>
				Reset
			</button>
		</>
	);
};

CounterApp.propTypes = {
	value: PropTypes.number.isRequired,
};

CounterApp.defaultProps = {
	value: '4444',
};
