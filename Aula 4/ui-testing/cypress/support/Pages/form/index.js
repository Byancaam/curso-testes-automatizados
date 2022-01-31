const el = require("./elements").ELEMENTS;

class form {
  acessarForm() {
    cy.visit("http://localhost:3000/");
  }

  preencherForm() {
    cy.get(el.skillName).type("Skill Name");
    cy.get(el.developer).type("Developers");
    cy.get(el.technologies).type("Technologies");
    cy.get(el.roles).type("Roles");
  }
  submitForm() {
    cy.get(el.submitButton).click();
  }
}

export default new form();
