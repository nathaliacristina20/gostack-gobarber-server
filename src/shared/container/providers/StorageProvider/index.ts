import { container } from 'tsyringe';

import IStorageProvider from './models/IStorageProvider';

import DiskStorageProvider from './implementations/DiskStorageProvider';

const providers = {
    diskStorage: DiskStorageProvider,
};

container.registerSingleton<IStorageProvider>(
    'DiskStorageProvider',
    providers.diskStorage,
);
