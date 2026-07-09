exports.loginpage_internet_herokuapp = class loginpage_internet_herokuapp {

    constructor(page) {
        this.page = page
        this.username_textbox = page.getByRole('textbox', { name: 'Username' })
        this.password_textbox = page.getByRole('textbox', { name: 'Password' })
        this.login_button = page.getByRole('button', { name: ' Login' })
        this.logout_botton = page.getByRole('link', { name: 'Logout' })
    }

    async goto_url() {
        await this.page.goto('https://the-internet.herokuapp.com/login')
    }
    async login(username1, password1) {
        await this.username_textbox.fill(username1)
        await this.password_textbox.fill(password1)
        await this.login_button.click()
    }

    async logout() {
        await this.logout_botton.click()
    }
}