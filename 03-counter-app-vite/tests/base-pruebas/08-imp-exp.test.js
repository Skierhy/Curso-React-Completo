import {
	getHeroeById,
	getHeroesByOwner,
} from '../../src/base-pruebas/08-imp-exp';

import heroes from '../../src/base-pruebas/data/heroes';

describe('Prueba en 08-imp-exp', () => {
	test('getHeroeById debe que retornar un héroe por ID', () => {
		const id = 2;
		const test = getHeroeById(id);
		expect(test).toEqual({ id: 2, name: 'Spiderman', owner: 'Marvel' });
	});

	test('getHeroeById debe que retornar undefined si no existe el id', () => {
		const id = 4444;
		const test = getHeroeById(id);
		console.log(test);
		expect(test).toBeFalsy();
	});

	test('getHeroesByOwner debe que tener un length ===3', () => {
		const test = getHeroesByOwner('DC');

		expect(test.length).toEqual(3);
		for (const tests of test) {
			expect(tests.owner).toEqual('DC');
		}
	});

	test('getHeroesByOwner debe que tener un length ===2', () => {
		const test = getHeroesByOwner('Marvel');

		expect(test.length).toEqual(2);
		expect(test).toEqual(
			heroes.filter((heroe) => heroe.owner === 'Marvel')
		);
	});
});
