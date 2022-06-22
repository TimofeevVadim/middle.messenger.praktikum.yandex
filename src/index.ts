// const app = document.getElementById('app');
//
// const createPage = async () => {
//   const currentPath: string = window.location.pathname;
//   if (currentPath === '/chats') {
//     // @ts-ignore
//     return import('./pages/chat/chat.tmpl');
//   } if (currentPath === '/auth') {
//     // @ts-ignore
//     return import('./pages/auth/auth.tmpl');
//   } if (currentPath === '/login' || currentPath === '/') {
//     // @ts-ignore
//     return import('./pages/login/login.tmpl');
//   } if (currentPath === '/user') {
//     // @ts-ignore
//     return import('./pages/user/user.tmpl');
//   } if (currentPath === '/edit') {
//     // @ts-ignore
//     return import('./pages/change-data/changeData.tmpl');
//   } if (currentPath === '/change-pass') {
//     // @ts-ignore
//     return import('./pages/change-pass/changePass.tmpl');
//   }
//   // @ts-ignore
//   return import('./pages/not-found/notFound.tmpl');
// };
//
// createPage().then((res) => {
//   if (res) {
//     app.innerHTML = res.createPage();
//     res.init();
//   }
// }).catch();

// import { AppButton } from './components/common/app-button/appButton.tmpl';
import LoginPage from './pages/login/login.tmpl';
import renderDOM from './utils/renderDOM';

document.addEventListener('DOMContentLoaded', () => {
  const loginPage = new LoginPage();

  renderDOM('#app', loginPage);
  // setTimeout(() => {
  //   button.setProps({ buttonText: 'hey' });
  // }, 1000);
});
