describe("File upload", () => {
    it("PNG File upload", ()=> {
        cy.visit("http://practice.cybertekschool.com/upload")

        cy.get("#file-upload").should("be.visible").attachFile("ha.png")
        cy.get("[class='button']").click()

        cy.get("#uploaded-files").invoke("text", "ha.png").should("be.visible")
    })
})