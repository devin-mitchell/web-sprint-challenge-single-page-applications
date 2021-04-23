describe("pizza app", () => {
    beforeEach(() => {
        cy.visit("localhost:3002/pizza")
    })

    const nameInput = () => cy.get('input[name="name"]');
    const sizeInput = () => cy.get('select');
    const onionsInput = () => cy.get('input[name="onions"]');
    const olivesInput = () => cy.get('input[name="olives"]');
    const peppersInput = () => cy.get('input[name="peppers"]');
    const spinachInput = () => cy.get('input[name="spinach"]');
    const specialInput = () => cy.get('input[name="special"]')
    const submitButton = () => cy.get('button[id="order-button"]');    

    it("sanity test", () => {
        expect(1+1).to.equal(2);
        expect(1+1).to.not.equal(3);
    })

    it("adds text to the boxes", () => {
        nameInput()
            .should('have.value', '')
            .type('MY NAME')
            .should('have.value', 'MY NAME');
        specialInput()
            .should('have.value', '')
            .type('PLEASE HURRY I"M HUNGRY!')
            .should('have.value', 'PLEASE HURRY I"M HUNGRY!') 
    })
    
    it('is able to check multiple toppings', () => {
        onionsInput()
            .click()
            .should('be.checked');
        olivesInput()
            .click()
            .should('be.checked');
        peppersInput()
            .click()
            .should('be.checked');
        spinachInput()
            .click()
            .should('be.checked');
        onionsInput()
            .click()
            .should('not.be.checked');
        olivesInput()
            .click()
            .should('not.be.checked');
        peppersInput()
            .click()
            .should('not.be.checked');
        spinachInput()
            .click()
            .should('not.be.checked');    
    })

    it('can submit the form', () => {
        submitButton()
            .should('be.disabled');
        nameInput()
            .type('NAME')
            .should('have.value', 'NAME');
        sizeInput()
            .select('medium')
            .should('have.value', 'medium');
        onionsInput()
            .click()
            .should('be.checked');
        olivesInput()
            .click()
            .should('be.checked');
        peppersInput()
            .click()
            .should('be.checked');
        spinachInput()
            .click()
            .should('be.checked');
        specialInput()
            .type('I LOVE PIZZA')
            .should('have.value', 'I LOVE PIZZA');
        submitButton()
            .should('be.enabled')
            .click()
    })
})