<reference type="cypress"/>

// visit
cy.visit("open url") // Opens URL
cy.visit("url", {timeout: 10000})

// Should is a promise
cy.url().should("include", "Text to search for")


// Finding elements
cy.get("#spoof-warning").click() // Replace locator with the actual CSS locator
cy.get(locator).should("be.visible") // Check if locator is visible
cy.get(locator).should("be.exist")

// Negative element location
cy.get(locator).should("not.be.visible")
cy.get(locator).should("not.be.exist")

cy.get("h1").should("have.length", 3)
cy.get("h1").should("have.text", "This text should be in the h1")
cy.get("h1").should("have.value", "Cypress")

// Parent to child
cy.get(locator).first()
cy.get(locator).last()
cy.get(locator).eq(1).click()

// Navigation
cy.go("back")
cy.get("tbody tr").nextAll.click({multiple: true})
cy.get(locator).prev.click()
cy.get(locator).prevAll.click()

// Hover handling
cy.get(locator).trigger("mouseover").click()
cy.get(locator).trigger("mouseup").click()

// Text box input
cy.get("#username").clear().type("username")