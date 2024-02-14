import CMS from 'decap-cms-app';
import { pl } from 'decap-cms-locales';
import columnComponent from './columnComponent';
import containerComponent from './containerComponent';
import hrComponent from './hrComponent';

CMS.registerLocale('pl', pl);

CMS.registerEditorComponent(columnComponent);
CMS.registerEditorComponent(containerComponent);
CMS.registerEditorComponent(hrComponent);