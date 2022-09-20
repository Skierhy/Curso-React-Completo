import { PropTypes } from 'prop-types';

// const nombreApp = 'Hola SkierhyXD';
// const obj = {
// 	nombre: 'SkierhyXD',
// 	edad: 23,
// };

// const nombre = () => {
// 	return 'Soy una función flecha';
// };
export const FirstApp = ({ title, subTitle, name }) => {
	return (
		<>
			{/* <h1>Hola {title}</h1>
			<p>Mi primera aplicación</p>
			<h2>{nombreApp}</h2>
			<h3>{nombre()}</h3>
			<code>{JSON.stringify(obj)}</code>
			<br />
			<h3>{title}</h3>
			<h3>{numero}</h3> */}
			<h1 data-testid="test-title">{title}</h1>
			<p>{subTitle}</p>
			<p>{subTitle}</p>
			<p>{name}</p>
		</>
	);
};

FirstApp.propTypes = {
	title: PropTypes.string.isRequired,
	subTitle: PropTypes.string,
};

FirstApp.defaultProps = {
	name: 'Skierhy',
	subTitle: 'No hay subtítulo',
	// title: 'No hay título',
};
