import loginError from './loginError.js'

export default function login() {
    const user = document.querySelector('#userLogin')
    const password = document.querySelector('#userPassword')
    const btnContinue = document.querySelector('#btnLogin button')
    const loginPage = document.querySelector('#loginMain')
    const loginImages = document.querySelector('#imagesLogin')
    const homePage = document.querySelector('#homeMain')

    btnContinue.addEventListener('click', () => {
        if(user.value === "admin" && password.value === "admin"){
            loginPage.style.display = 'none'
            loginImages.style.display = 'none'
            homePage.style.display = 'flex'
        }else{
            loginError()
        }
    })
    
}