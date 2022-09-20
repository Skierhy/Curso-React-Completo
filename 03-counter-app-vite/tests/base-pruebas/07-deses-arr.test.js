import { retornaArreglo } from '../../src/base-pruebas/07-deses-arr';

describe('Prueba de 07-deses-arr', () => {
	test('retornaArreglo debe que string y un numero', () => {
		const [string, numero] = retornaArreglo();
		expect(string).toBe('ABC');
		expect(numero).toBe(123);

		expect(typeof string).toBe('string');
		expect(typeof numero).toBe('number');

		expect(string).toEqual(expect.any(String));
	});
});
