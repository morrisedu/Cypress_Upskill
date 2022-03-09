/// <reference type="cypress" />

describe("Checkbox testing", () => {
    it("Selecting & deselecting a checkbox", () => {
        cy.visit("http://practice.cybertekschool.com/checkboxes")

        cy.viewport("iphone-5")
        cy.wait(2000)

        cy.get("#box1").check().should("be.checked")

        cy.wait(2000)

        cy.get("[name='checkbox2']").click().should("not.be.checked")

    })
})