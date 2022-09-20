import { getHeroeByIdAsync } from '../../src/base-pruebas/09-promesas';

describe('Prueba en 09-promesas', () => {
	test('getHeroeByIdAsync debe que retornar un héroe', (done) => {
		const id = 1;
		getHeroeByIdAsync(id).then((response) => {
			expect(response).toEqual({ id: 1, name: 'Batman', owner: 'DC' });
			done();
		});
	});

	test('getHeroeByIdAsync debe que marcar un error si heroe no existe', (done) => {
		const id = 44;
		getHeroeByIdAsync(id)
			.then((response) => {
				expect(response).toBeFalsy();
				done();
			})
			.catch((err) => {
				expect(err).toBe('No se pudo encontrar el héroe' + id);
				done();
			});
	});
});
