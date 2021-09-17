const breedResults = "div[class=' breed-menu_buttons__3XY3j buttons_button__1xE_3 ']"
const dogBreed = "african"

describe(
    "The user can select a breed’s button and view pictures of a selected dog breed",
    () => {
        before(() => {

            cy.visit(Cypress.env("url"))
            // The environmental url variable can be changed in cypress.json

        })

        it(
            "TC8 - The user can select a breed’s button",
            () => {
                cy.get(breedResults).contains(dogBreed)
                    .should("be.visible")
                    .click()
            }
        )

        it(
            "TC9 - The user can view pictures of a selected dog breed",
            () => {
                // Verifies that the same breed name displays
                cy.get(".breed-gallery_newBreedBanner__7_mum span").should(
                    "have.text",
                    dogBreed
                )
                cy.get(".breed-gallery_gallery__1IxcM").should("be.visible")
                // When the breed is selected, a grid with images is displayed below the buttons
                cy.get(".breed-gallery_loadMore__1WT8I").should("be.visible")
                    .and(
                        "have.text",
                        "Click to load more"
                    )
                    .click()
            }
        )
    }
)
