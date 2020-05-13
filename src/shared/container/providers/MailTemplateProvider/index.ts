import { container } from 'tsyringe';

import IMailTemplateProvider from './models/IMailTemplateProvider';

import HandlebarsTemplateMailProvider from './implementations/HandlebarsMailTemplateProvider';

const providers = {
    handlebars: HandlebarsTemplateMailProvider,
};

container.registerSingleton<IMailTemplateProvider>(
    'MailTemplateProvider',
    providers.handlebars,
);
