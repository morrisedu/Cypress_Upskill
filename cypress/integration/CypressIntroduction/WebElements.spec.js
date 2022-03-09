/// <reference type="cypress" />
describe("Web Elements", () => {
    // By Tag Name
    cy.get("input")

    // By ID
    cy.get("#radio1")

    // By ClassName
    cy.get(".iCheck-helper")

    // By Class value
    cy.get("[class='iCheck-helper']")

    // By Attribute name
    cy.get("[type='radio']")

    // By attribute name & value
    cy.get("[name='abuse']")

    // By tagname & attribute with value
    cy.get("input [name='abuse']")

    // By two different attributes or more
    cy.get("[name='abuse'][class='iCheck-helper'][style='position: absolute; opacity: 0;']")

    cy.get("tbody tr td").eq(0).invoke("text", "Smith")
})