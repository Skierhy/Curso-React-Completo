import { usContext } from '../../src/base-pruebas/06-deses-obj';

describe('Pruebas 06-deses-obj.test', () => {
	test('usContext debe que retorna un objeto también contiene otro objeto', () => {
		const clave = 'sk';
		const edad = 23;

		const test = usContext({
			clave,
			nombre: 'test',
			edad,
			rango: 'Capitán',
		});

		expect(test).toEqual({
			nombreClave: clave,
			anios: edad,
			latlng: {
				lat: 14.1232,
				lng: -12.3232,
			},
		});
	});
});
