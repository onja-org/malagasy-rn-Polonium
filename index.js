import {AppRegistry} from 'react-native';

import {name as appName} from './app.json';
import Root from './Root';
import React from 'react';

const getRoot = () => <Root />;
AppRegistry.registerComponent(appName, () => getRoot);
