import { getUser, getUsuarioActivo } from '../../src/base-pruebas/05-funciones';

describe('Pruebas en 05-funciones', () => {
	test('getUser debe de retornar un objecto', () => {
		const user = {
			uid: 'ABC123',
			username: 'El_Papi1502',
		};
		const userTest = getUser();
		expect(userTest).toEqual(user);
	});

	test('getUsuarioActivo debe de retornar un objecto', () => {
		const name = 'skierhy';
		const userTest = getUsuarioActivo(name);
		// prueba                cual se va a comparar
		expect(userTest).toEqual({
			uid: 'ABC567',
			username: name,
		});
	});
});
