import loginPage from '../support/pages/Login'
import MapPage from '../support/pages/Map'

describe('Login', () => {
  it('deve logar com sucesso', () => {
    const user = {
      instagram: '@jeff',
      password: '123456',
      name: 'Jeff'
    }
   loginPage.go()
   loginPage.form(user)
   loginPage.submit() 
   MapPage.loggedUser(user.name)
  })

  it('nao deve logar com a senha invalida', () => {
    const user = {
      instagram: '@jeff',
      password: '@123456'
    }
    loginPage.go()
    loginPage.form(user)
    loginPage.submit() 
    loginPage.modal.haveText('Credenciais inválidas, tente novamente!')
  })
  it('nao deve logar com o instagram inexistente', () => {
    const user = {
      instagram: '@papitorocks',
      password: '123456'
    }

    loginPage.go()
    loginPage.form(user)
    loginPage.submit() 

    loginPage.modal.haveText('Credenciais inválidas, tente novamente!')
  })

  it('instagram deve ser obrigatório', () => {
    const user = {
      password: '123456'
    }
   loginPage.go()
   loginPage.form(user)
   loginPage.submit() 
   loginPage.modal.haveText('Por favor, informe o seu código do Instagram!')
  })

  it('senha deve ser obrigatória', () => {
    const user = {
      instagram: '@jeff'
    }
    loginPage.go()
    loginPage.form(user)
    loginPage.submit() 
    loginPage.modal.haveText('Por favor, informe a sua senha secreta!')
  })

  it('todos os campos são obrigatórios', () => {
    loginPage.go()

    loginPage.submit() 
    loginPage.modal.haveText('Por favor, informe suas credenciais!')
  })

})
