const app = document.getElementById('app')

const createPage = async () => {
    console.log('saf')
    const currentPath = window.location.pathname

    if (currentPath === '/chats') {
        return import('./pages/chat/chat.tmpl')
    } else if (currentPath === '/auth') {
        return import('./pages/auth/auth.tmpl')
    } else if (currentPath === '/login') {
        return import('./pages/login/login.tmpl')
    } else if (currentPath === '/user') {
        return import('./pages/user/user.tmpl')
    } else if (currentPath === '/edit') {
        return import('./pages/change-data/changeData.tmpl')
    } else if (currentPath === '/change-pass') {
        return import('./pages/change-pass/changePass.tmpl')
    } else {
        return import('./pages/not-found/notFound.tmpl')
    }
}
createPage().then(res => {
    if (res) {
        console.log(res, 'res')
        app.innerHTML = res.createPage()
        res.init()
    }
})
