import { getImagen } from '../../src/base-pruebas/11-async-await';

describe('Prueba en 11-async-await', () => {
	test('getImagen debe que retorna una url', async () => {
		const url = await getImagen();
		expect(typeof url).toBe('string');
	});

	test('getImagen debe que retorna un error', async () => {
		const url = await getImagen();
		// expect(url).toBe('No se encontró la imagen!!');
	});
});
