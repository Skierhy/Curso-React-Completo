import { render } from '@testing-library/react';
import { FirstApp } from '../src/FirstApp';

describe('Prueba en FirstApp', () => {
	// test('Debe de hacer match con el snapshot', () => {
	// 	const title = 'Hola soy el título';
	// 	const { container } = render(<FirstApp title={title} />);
	// 	expect(container).toMatchSnapshot();
	// });

	test('debe que mostrar el titulo en un h1', () => {
		const title = 'Hola soy el título';
		const { container, getByText, getByTestId } = render(
			<FirstApp title={title} />
		);
		const h1 = container.querySelector('h1');
		// // debe que ser exactamente igual
		// expect(h1.innerHTML).toBe(title);
		// // que tenga el valor este
		// expect(h1.innerHTML).toContain(title);
		expect(getByTestId('test-title').innerHTML).toBe(title);
		expect(getByTestId('test-title').innerHTML).toContain(title);
	});

	test('debe de mostrar el subtítulo enviando por props', () => {
		const title = 'Hola soy el título';
		const subTitle = 'Hola soy el subtítulo';
		const { getAllByText } = render(
			<FirstApp title={title} subTitle={subTitle} />
		);
		expect(getAllByText(subTitle).length).toBe(2);
	});
});
