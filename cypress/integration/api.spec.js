import Ajv from "ajv";
const ajv = new Ajv({ allErrors: true, verbose: true }); //instanciando

describe("Contrato de API com Cypresss", () => {
    it("Faz a requisição para API", () => {
        cy.request("GET", "https://jsonplaceholder.typicode.com/users").then((response) => {
            cy.fixture("jsonSchema").then((jsonSchema) => {
                const validate = ajv.compile(jsonSchema);
                const valid = validate(response.body);
                if (!valid)
                    cy.log(validate.errors).then(() => {
                        throw new Error("Falha do Contrato, ver log acima");
                    })
            })
        })
    })
})