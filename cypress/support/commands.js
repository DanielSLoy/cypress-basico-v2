Cypress.Commands.add('fillMandatoryFieldsAndSubmit', function(){
    
        cy.get('input[name="firstName"]').type('Daniel')
        cy.get('input[name="lastName"]').type('loyola')
        cy.get('input[id="email"]').type("daniel.loyola@ska.com")
        cy.get('input[id="phone"]').type('48991645498')
        cy.get('input[id="phone-checkbox"]').click()
        cy.get('#open-text-area').type('Teste')
        cy.get('.button').click()
    
})