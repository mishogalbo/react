/**
 * @format
 */

import {AppRegistry,Platform} from 'react-native';
import {name as appName} from './app.json';
import {DrawerApp,TabsApp} from './config/router.js';

if(Platform.OS==='ios')
{
    AppRegistry.registerComponent(appName, () => TabsApp);
}
else
    AppRegistry.registerComponent(appName, () => DrawerApp);