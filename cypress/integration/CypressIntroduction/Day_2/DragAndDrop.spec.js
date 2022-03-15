describe("Drag & Drop Feature", () => {
    it("Drag & Drop using data transfer", () => {
        cy.visit("http://practice.cybertekschool.com/drag_and_drop")

        dragAndDrop()
    })
});

const dataTransfer = new DataTransfer(); // Name exactly as is.

function dragAndDrop() {
    cy.get("#column-a").should("be.visible").trigger("dragstart", { dataTransfer })
    cy.wait(500)

    cy.get("#column-b").should("be.visible").trigger("drop", { dataTransfer })
    cy.wait(500)

    cy.get("#column-b").should("be.visible").trigger("dragend")
}

