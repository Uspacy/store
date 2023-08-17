import React from 'react';
import { Provider } from 'react-redux';

import { setupStore } from '.';

const store = setupStore();

export const StorePovider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
	return <Provider store={store}>{children}</Provider>;
};
