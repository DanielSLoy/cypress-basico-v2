/// <reference types="Cypress" />

describe('Central de Atendimento ao Cliente TAT', function() {

    beforeEach(function() {
        cy.visit('./src/index.html')
      })

    it('verifica o título da aplicação', function() {
        
          cy.title().should('be.equal', 'Central de Atendimento ao Cliente TAT')

    })

    it('Preenche os campos e clica em enviar', function() {
        const TextoLongo = 'Lorem ipsum dolor sit amet. Ut earum velit ab architecto dignissimos rem mollitia molestias! Eum ullam dignissimos quo tempore eaque sit alias accusamus et nobis odio vel quas molestiae? Ut excepturi tempora ut necessitatibus officia et labore aspernatur ut internos consectetur. </p><p>Qui natus voluptatibus nam tempore velit et aperiam adipisci et mollitia Quis. Vel cupiditate deserunt non expedita magnam At dicta dolorum eos reprehenderit veritatis quo iure quae et ipsa quos. </p><p>Sed quod sint sed dignissimos ratione sed harum cumque. Et tempora sint 33 repellendus iusto cum officia voluptatum aut deserunt quae est quaerat sint. Et numquam architecto et molestiae culpa et quaerat porro!'
        cy.get('input[name="firstName"]').type('Daniel')
        cy.get('input[name="lastName"]').type('loyola')
        cy.get('input[id="email"]').type("daniel.loyola@ska.com.br")
        cy.get('input[id="phone"]').type('48991645498')
        cy.get('input[id="phone-checkbox"]').click()
        cy.get('#open-text-area').type(TextoLongo, {delay:0})
        cy.contains('button', 'Enviar').click()
        cy.get('.success').should('be.visible')

    })

    it('Preenche os campos e clica em enviar', function() {
        cy.get('input[name="firstName"]').type('Daniel')
        cy.get('input[name="lastName"]').type('loyola')
        cy.get('input[id="email"]').type("daniel.loyola@ska,com")
        cy.get('input[id="phone"]').type('48991645498')
        cy.get('input[id="phone-checkbox"]').click()
        cy.get('#open-text-area').type('Teste')
        cy.contains('button', 'Enviar').click()

        cy.get('.error').should('be.visible')

    })


    it('Telefone vazio se não dogitar número', function() {

        cy.get('input[id="phone"]').
        type('abdefghi').
        should('have.value', '')


    })

    it('exibe mensagem de erro quando o telefone se torna obrigatório mas não é preenchido antes do envio do formulário', function() {

        cy.get('input[name="firstName"]').type('Daniel').should('have.value', 'Daniel')
        cy.get('input[name="lastName"]').type('loyola').should('have.value', 'loyola')
        cy.get('input[id="email"]').type("daniel.loyola@ska,com").should('have.value', 'daniel.loyola@ska,com')
        cy.get('input[id="phone-checkbox"]').click()
        //cy.get('input[id="phone"]').type('48991645498').should('have.value', '48991645498')
        cy.get('#open-text-area').type('Teste')
        cy.contains('button', 'Enviar').click()

        cy.get('.error').should('be.visible')

    })
    
    it('preenche e limpa os campos nome, sobrenome, email e telefone', function() {

        cy.get('input[name="firstName"]').type('Daniel').should('have.value', 'Daniel')
        cy.get('input[name="lastName"]').type('loyola').should('have.value', 'loyola')
        cy.get('input[id="email"]').type("daniel.loyola@ska,com").should('have.value', 'daniel.loyola@ska,com')
        cy.get('input[id="phone-checkbox"]').click()
        cy.get('input[id="phone"]').type('48991645498').should('have.value', '48991645498')

        cy.get('input[name="firstName"]').clear().should('have.value', '')
        cy.get('input[name="lastName"]').clear().should('have.value', '')
        cy.get('input[id="email"]').clear().should('have.value', '')
        cy.get('input[id="phone"]').clear().should('have.value', '')


    })

    it('exibe mensagem de erro ao submeter o formulário sem preencher os campos obrigatórios', function() {

        cy.contains('button', 'Enviar').click()
        cy.get('.error').should('be.visible')

    })

    it('envia o formuário com sucesso usando um comando customizado', function() {
        cy.fillMandatoryFieldsAndSubmit()

        cy.get('.success').should('be.visible')
    })

    it('Preenche os campos e clica em enviar', function() {
        const TextoLongo = 'Lorem ipsum dolor sit amet. Ut earum velit ab architecto dignissimos rem mollitia molestias! Eum ullam dignissimos quo tempore eaque sit alias accusamus et nobis odio vel quas molestiae? Ut excepturi tempora ut necessitatibus officia et labore aspernatur ut internos consectetur. </p><p>Qui natus voluptatibus nam tempore velit et aperiam adipisci et mollitia Quis. Vel cupiditate deserunt non expedita magnam At dicta dolorum eos reprehenderit veritatis quo iure quae et ipsa quos. </p><p>Sed quod sint sed dignissimos ratione sed harum cumque. Et tempora sint 33 repellendus iusto cum officia voluptatum aut deserunt quae est quaerat sint. Et numquam architecto et molestiae culpa et quaerat porro!'
        cy.get('input[name="firstName"]').type('Daniel')
        cy.get('input[name="lastName"]').type('loyola')
        cy.get('input[id="email"]').type("daniel.loyola@ska.com.br")
        cy.get('input[id="phone"]').type('48991645498')
        cy.get('input[id="phone-checkbox"]').click()
        cy.get('#open-text-area').type(TextoLongo, {delay:0})
        cy.contains('button', 'Enviar').click()
        cy.get('.success').should('be.visible')

    })

    it('seleciona um produto (YouTube) por seu texto', function() {
        const TextoLongo = 'Lorem ipsum dolor sit amet. Ut earum velit ab architecto dignissimos rem mollitia molestias! Eum ullam dignissimos quo tempore eaque sit alias accusamus et nobis odio vel quas molestiae? Ut excepturi tempora ut necessitatibus officia et labore aspernatur ut internos consectetur. </p><p>Qui natus voluptatibus nam tempore velit et aperiam adipisci et mollitia Quis. Vel cupiditate deserunt non expedita magnam At dicta dolorum eos reprehenderit veritatis quo iure quae et ipsa quos. </p><p>Sed quod sint sed dignissimos ratione sed harum cumque. Et tempora sint 33 repellendus iusto cum officia voluptatum aut deserunt quae est quaerat sint. Et numquam architecto et molestiae culpa et quaerat porro!'
        cy.get('input[name="firstName"]').type('Daniel')
        cy.get('input[name="lastName"]').type('loyola')
        cy.get('input[id="email"]').type("daniel.loyola@ska.com.br")
        cy.get('input[id="phone"]').type('48991645498')
        cy.get('input[id="phone-checkbox"]').click()

        cy.get('select').select('youtube').should('have.value', 'youtube')

        cy.get('#open-text-area').type(TextoLongo, {delay:0})
        cy.contains('button', 'Enviar').click()

        cy.get('.success').should('be.visible')
    })

    it('seleciona um produto (Mentoria) por seu valor (value)', function() {
        const TextoLongo = 'Lorem ipsum dolor sit amet. Ut earum velit ab architecto dignissimos rem mollitia molestias! Eum ullam dignissimos quo tempore eaque sit alias accusamus et nobis odio vel quas molestiae? Ut excepturi tempora ut necessitatibus officia et labore aspernatur ut internos consectetur. </p><p>Qui natus voluptatibus nam tempore velit et aperiam adipisci et mollitia Quis. Vel cupiditate deserunt non expedita magnam At dicta dolorum eos reprehenderit veritatis quo iure quae et ipsa quos. </p><p>Sed quod sint sed dignissimos ratione sed harum cumque. Et tempora sint 33 repellendus iusto cum officia voluptatum aut deserunt quae est quaerat sint. Et numquam architecto et molestiae culpa et quaerat porro!'
        cy.get('input[name="firstName"]').type('Daniel')
        cy.get('input[name="lastName"]').type('loyola')
        cy.get('input[id="email"]').type("daniel.loyola@ska.com.br")
        cy.get('input[id="phone"]').type('48991645498')
        cy.get('input[id="phone-checkbox"]').click()

        cy.get('select').select('Mentoria').should('have.value', 'mentoria')

        cy.get('#open-text-area').type(TextoLongo, {delay:0})
        cy.contains('button', 'Enviar').click()

        cy.get('.success').should('be.visible')
    })

    it('seleciona um produto (Blog) por seu índice', function() {
        const TextoLongo = 'Lorem ipsum dolor sit amet. Ut earum velit ab architecto dignissimos rem mollitia molestias! Eum ullam dignissimos quo tempore eaque sit alias accusamus et nobis odio vel quas molestiae? Ut excepturi tempora ut necessitatibus officia et labore aspernatur ut internos consectetur. </p><p>Qui natus voluptatibus nam tempore velit et aperiam adipisci et mollitia Quis. Vel cupiditate deserunt non expedita magnam At dicta dolorum eos reprehenderit veritatis quo iure quae et ipsa quos. </p><p>Sed quod sint sed dignissimos ratione sed harum cumque. Et tempora sint 33 repellendus iusto cum officia voluptatum aut deserunt quae est quaerat sint. Et numquam architecto et molestiae culpa et quaerat porro!'
        cy.get('input[name="firstName"]').type('Daniel')
        cy.get('input[name="lastName"]').type('loyola')
        cy.get('input[id="email"]').type("daniel.loyola@ska.com.br")
        cy.get('input[id="phone"]').type('48991645498')
        cy.get('input[id="phone-checkbox"]').check()

        cy.get('select').select(1).should('have.value', 'blog')

        cy.get('#open-text-area').type(TextoLongo, {delay:0})
        cy.contains('button', 'Enviar').click()

        cy.get('.success').should('be.visible')
    })

    it('marca o tipo de atendimento "Feedback"', function() {


        cy.get('input[type="radio"][value="feedback"]').check().should('have.value', 'feedback')


    })

    it('marca cada tipo de atendimento', function() {


        cy.get('input[type="radio"]')
        .should('have.length', 3)
        .each(function($radio){
            cy.wrap($radio).check()
            cy.wrap($radio).should('be.checked')
        })


    })

    it('marca o tipo de atendimento "Feedback"', function() {
        //1° Forma
        cy.get('input[type="checkbox"]')
        .should('have.length', 2)
        .each(function($checkbox){
            cy.wrap($checkbox).check()
        })

        cy.get('input[type="checkbox"]').uncheck()

        //2° Forma
        cy.get('input[type="checkbox"]')
        .check()
        .last()
        .uncheck()
        .should('not.be.checked')

    })

    it('seleciona um arquivo da pasta fixtures(Selecionando arquivo)', function() {

        cy.get('input[type="file"]')
        .should('not.have.value')
        .selectFile('cypress/fixtures/example.json')
        .should(function($input){
            //console.log($input)
            expect($input[0].files[0].name).to.equal('example.json')
        })
        

    })

    it('seleciona um arquivo simulando um drag-and-drop(Arrastando arquivo)', function() {

        cy.get('input[type="file"]')
        .should('not.have.value')
        .selectFile('cypress/fixtures/example.json', {action: 'drag-drop'})
        .should(function($input){
            //console.log($input)
            expect($input[0].files[0].name).to.equal('example.json')
        })
        

    })

    it.only('seleciona um arquivo utilizando uma fixture para a qual foi dada um alias)', function() {

        cy.fixture('example.json').as('sampleFile')

        cy.get('input[type="file"]')
        .should('not.have.value')
        .selectFile('@sampleFile', {action: 'drag-drop'})
        .should(function($input){
            //console.log($input)
            expect($input[0].files[0].name).to.equal('example.json')
        })
        

    })



  })
  