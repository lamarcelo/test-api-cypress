import Ajv from 'ajv';

describe('Automação - Black API`s', () => {
  const ajv = new Ajv(); // Inicializa o AJV
  let schema; // Carregue ou defina o schema da API
  var Token;

  it('Geração do token de acesso', () => {
    cy.request({
      method: 'POST',
      url: 'https://fakestoreapi.com/auth/login',
      body: {
        username: 'mor_2314',
        password: '83r5^_'
      },
      headers: {
        'Content-Type': 'application/json'
      }
    }).then((response) => {
      expect(response.body.token).to.exist
      Token = response.body.token
    })
  })

  it('Listando os usuários cadastrados', () => {
    cy.request({
      method: 'GET',
      url: 'https://fakestoreapi.com/users',
      headers: {
        'Authorization': Token
      }
    }).then((response) => cy.log(response))
  })
})