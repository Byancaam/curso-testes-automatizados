import form from '../support/Pages/form/index'

describe('App Developers Skilss', () => {

    beforeEach(() => {
        form.acessarForm();
    });

    it('Must have 4 fields to fill', ()=>{
        cy.contains('Developers App').should('be.visible')
        cy.get("#skillName").should('be.visible')
        cy.get("#developer").should('be.visible')
        cy.get("#technologies").should('be.visible')
        cy.get("#roles").should('be.visible')
    })
    it('Skill name field must be filled to submit', ()=>{
        form.preencherForm();
        cy.get("#skillName").clear()

        cy.get('#submitButton').should('be.disabled')
    })
    it('Developer field must be filled to submit', ()=>{
        form.preencherForm();
        cy.get("#developer").clear()

        cy.get('#submitButton').should('be.disabled')
    })
    it('Technologies field must be filled to submit', ()=>{
        form.preencherForm();
        cy.get("#technologies").clear()

        cy.get('#submitButton').should('be.disabled')
    })
    it('Role field must be filled to submit', ()=>{
        form.preencherForm();
        cy.get("#roles").clear()

        cy.get('#submitButton').should('be.disabled')
    })
    it('Must be possible to send form', ()=>{
        form.preencherForm();
        form.submitForm();

        cy.get('#skillList').should('be.visible')
    })

});