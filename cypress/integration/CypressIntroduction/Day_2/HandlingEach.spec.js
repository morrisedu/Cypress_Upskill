let data = require("../../../fixtures/Staging.json")

describe("Handling each function", () => {
    before(function () {
        cy.visit("https://opensource-demo.orangehrmlive.com/")

        // Username input
        cy.get("[name='txtUsername']").clear().type("Admin")

        // Password input
        cy.get("#txtPassword").clear().type("admin123")

        // Submit
        cy.get("[class='button']").click()

    })

    it("Testing each text", () => {
        cy.get(".quickLinkText").each((element, index) => {
            cy.log("Element: ", element.text())
            const text = element.text()

            expect(text).to.contain(data.quick_launch[index])
        })
    })
})