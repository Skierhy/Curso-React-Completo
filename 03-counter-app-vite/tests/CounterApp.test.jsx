import { fireEvent, render, screen } from '@testing-library/react';
import { CounterApp } from '../src/CounterApp';

describe('Prueba CounterApp', () => {
	const value = 100;

	test('debe de hacer match con el snapshot', () => {
		const { container } = render(<CounterApp value={1000} />);
		expect(container).toMatchSnapshot();
	});

	test('debe de mostrar el valor inicial de 100', () => {
		render(<CounterApp value={value} />);
		expect(screen.getByText(value)).toBeTruthy();
		expect(screen.getByRole('heading', { level: 2 }).innerHTML).toContain(
			'100'
		);
	});

	test('debe de incrementar con el botón +1', () => {
		render(<CounterApp value={value} />);
		// fireEvent es una función que nos permite simular eventos
		fireEvent.click(screen.getByRole('button', { name: 'Contador +1' }));
		expect(screen.getByText(101)).toBeTruthy();
		expect(screen.getByRole('heading', { level: 2 }).innerHTML).toContain(
			'101'
		);
	});
	test('debe de incrementar con el botón -1', () => {
		render(<CounterApp value={value} />);
		// fireEvent es una función que nos permite simular eventos
		fireEvent.click(screen.getByRole('button', { name: 'Contador -1' }));
		expect(screen.getByText(value - 1)).toBeTruthy();
		expect(screen.getByRole('heading', { level: 2 }).innerHTML).toContain(
			'99'
		);
	});

	test('debe de incrementar con el botón reset', () => {
		render(<CounterApp value={value} />);
		// fireEvent es una función que nos permite simular eventos
		fireEvent.click(screen.getByRole('button', { name: 'Contador -1' }));
		fireEvent.click(screen.getByText('Contador -1'));
		screen.debug();
		fireEvent.click(screen.getByRole('button', { name: 'btn-reset' }));
		expect(screen.getByText(value)).toBeTruthy();
		expect(screen.getByRole('heading', { level: 2 }).innerHTML).toContain(
			'100'
		);
	});
});
