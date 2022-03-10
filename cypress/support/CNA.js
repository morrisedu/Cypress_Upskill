export class functions {
    function1() {
        cy.get("[type='radio']").then(radio_buttons => {
            // Check the first radio button only
            /*
            cy.wrap(radioButtons).first()
                .check()
                .should("be.checked")
             */

            // Check all radio buttons loop
            for (let i = 0; i <= radio_buttons.length - 1; i++) {
                cy.wrap(radio_buttons).eq(i)
                    .check({force:true})
                    .should("be.visible")
                cy.wait(500)
                console.log(i);
            }
        })
    }
}

export const CNA = new functions();