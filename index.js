/**
 * @format
 */

import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import RootNav from '~/navigators/RootNav';

AppRegistry.registerComponent(appName, () => RootNav);
