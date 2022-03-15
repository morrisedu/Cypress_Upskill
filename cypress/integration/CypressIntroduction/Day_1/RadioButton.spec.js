/// <reference type="cypress"/>
import { URL } from "../../../support/authentication"
import {CNA} from "../../../support/CNA";

describe("Radio button tests", () => {
    it("Verify all radio buttons are checked", () => {
        cy.visit(URL)

        CNA.function1()
    })
})