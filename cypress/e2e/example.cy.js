describe('Pruebas', () => {
  it('Debería visitar la página principal', () => {
    cy.visit('http://localhost:3000');
    cy.contains('Listas de bebidas');
  });

  it('Debería visitar crear bebidas y llenar el formulario', () => {
    cy.visit('http://localhost:3000/crear-bebida');
    cy.contains('Crear Producto');


    const nombreProducto = 'Whisky';
    const precioProducto = '5000';
    const cantidadProducto = '2';

    cy.get('input[name="nombre"]').type(nombreProducto);
    cy.get('input[name="precio"]').type(precioProducto);
    cy.get('select[name="cantidad"]').select(cantidadProducto);


    cy.get('input[type="file"]').selectFile('Whisky.png')


    cy.get('form').submit();


    cy.url().should('eq', 'http://localhost:3000/');
  });
});
