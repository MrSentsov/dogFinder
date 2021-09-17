const search = "input.top-bar_search__17SXF"
const breeds = "div[class=' breed-menu_buttons__3XY3j buttons_button__1xE_3 ']" 
// A selector that excludes the breed-menu_placeholder
const searchInput = "dog"
const results = []
const sortedResults = []

describe(
    "The user can search for a specific breed of dog",
    () => {
        before(() => {

            cy.visit(Cypress.env("url")) 
            // The environmental url variable can be changed in cypress.json

        })

        it(
            "Displays the breeds whose names include the search term",
            () => {
                

                cy.get(search).type(searchInput)
                cy.get(breeds).each(($el, index, $list) => {
                    // Iterating through each search result
                    const breed = $el.text()

                    expect(breed).to.contain(searchInput)
                    // Chai assertion to validate the search results
                    results.push(breed)
                    sortedResults.unshift(breed)
                })

            }
        )

        it(
            "Displays the breeds in alphabetical order",
            () => {
                cy.then(() => {
                    
                sortedResults.sort(function (a, b) {
                  return a.localeCompare(b); //using String.prototype.localCompare()
                })
                expect(results).to.eql(sortedResults)
            })
            }
        )

        it(
            "The user can select a breed’s button",
            () => {

            }
        )

    }
)
