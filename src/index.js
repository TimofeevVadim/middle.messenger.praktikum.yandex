const app = document.getElementById('app')
const currentPath = window.location.pathname

const createPage = async () => {
    if (currentPath === '/chats') {
        return import('./pages/chat/chat.tmpl')
    } else if (currentPath === '/auth') {
        return import('./pages/auth/auth.tmpl')
    } else if (currentPath === '/login') {
        return import('./pages/login/login.tmpl')
    } else if (currentPath === '/user') {
        return import('./pages/user/user.tmpl')
    } else {
        return import('./pages/not-found/notFound.tmpl')
    }
}
createPage().then(res => {
    if (res) {
        app.innerHTML = res.createPage()
    }
})
