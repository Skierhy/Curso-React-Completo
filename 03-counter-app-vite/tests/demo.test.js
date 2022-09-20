describe('Pruebas en <DemoComponent />', () => {
	test('Esta prueba no debe que fallar', () => {
		// 1. Inicialización
		const mensaje = 'Hola Mundo';

		// 2. estimulo
		const mensaje2 = mensaje.trim();

		// 3. observar el comportamiento... esperado
		expect(mensaje2).toBe(mensaje);
	});
});
