import { render, screen } from '@testing-library/react';
import { FirstApp } from '../src/FirstApp';

describe('Prueba en FirstApp', () => {
	const title = 'Hola soy el título';
	const subTitle = 'Hola soy el subtítulo';

	test('debe que hacer match con el snapshot', () => {
		const { container } = render(<FirstApp title={title} />);
		expect(container).toMatchSnapshot();
	});

	test('debe de mostrar el mensaje "Hola soy el título"', () => {
		render(<FirstApp title={title} />);
		expect(screen.getByText(title)).toBeTruthy();
		// expect(screen.getByText(title)).not.toBeTruthy();
	});

	test('debe de mostrar el titulo en un h1', () => {
		render(<FirstApp title={title} />);
		// getByRole es una forma de buscar elementos en el DOM
		expect(screen.getByRole('heading', { level: 1 }).innerHTML).toContain(
			title
		);
	});

	test('debe de mostrar el subtítulo enviado por props', () => {
		render(<FirstApp title={title} subTitle={subTitle} />);
		expect(screen.getAllByText(subTitle).length).toBe(2);
	});
});
