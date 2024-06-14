describe('Pruebas', () => {
  it('Debería visitar la página principal', () => {
    cy.visit('http://localhost:3000') 
    cy.contains('Listas de bebidas')
  })

  it('Debería visitar crear bebidas', () => {
    cy.visit('http://localhost:3000/crear-bebida') 
    cy.contains('Crear Producto')
  })
})

