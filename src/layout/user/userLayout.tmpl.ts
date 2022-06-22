import * as Handlebars from 'handlebars';
import tmpl from './userLayout.hbs';

import backIcon from '../../components/icons/back-icon/backIcon.tmpl';
import imageIcon from '../../components/icons/image-icon/imageIcon.tmpl';
import appLinkIcon from '../../components/common/app-link-icon/appLinkIcon.tmpl';

const components = {
  backLinkIcon: appLinkIcon,
  avatarIcon: imageIcon(),
};

const methods = {
  registerPartials: (backLink) => {
    Handlebars.registerPartial('backLinkIcon', components.backLinkIcon({ icon: backIcon(), to: backLink }));
    Handlebars.registerPartial('avatarIcon', components.avatarIcon);
  },
};

const userLayout = ({ form, buttons, backLink = '/chats' }) => {
  methods.registerPartials(backLink);

  return tmpl({
    form,
    buttons,
  });
};
export default userLayout;
