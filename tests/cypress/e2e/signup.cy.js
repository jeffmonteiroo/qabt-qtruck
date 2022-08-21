import signupPage from '../support/pages/Signup'

describe('Signup', ()=> {

    it('deve cadastrar um novo usuário',()=>{
    //Dado que eu tenho a becca milano
        const user = {
            name: 'Becca Milano',
            instagram: '@becca_milano',
            password: 'pwd123'
        }
    // E que esse usuário não existe no banco
    
    //cy.deleteMany({instagram: user.instagram}, {collection: 'users'}).then(res => { 
    //        cy.log(res)
    //    })

    //Quando faço o cadastro do mesmo

    cy.apiResetUser(user.instagram)

    signupPage.go()
    signupPage.form(user)
    signupPage.submit()

    // Então devo visualizar a mensa de sucesso
    signupPage.modal.haveText('Agora você pode recomendar e/ou avaliar Food trucks.')

    })


    it.only('não deve cadastrar com o instagram duplicado', () =>{

        const user = {
            name: 'Érick Jacquin',
            instagram: '@jacquin',
            password: 'pwd123'
        }

        cy.apiCreateUser(user) // Api para criar a massa
        // Cadastrando novamente com os mesmos dados
        signupPage.go()
        signupPage.form(user)
        signupPage.submit()
    
        // Então devo visualizar a mensa de sucesso
        signupPage.modal.haveText('Instagram já cadastrado!')
    
        })

    })


