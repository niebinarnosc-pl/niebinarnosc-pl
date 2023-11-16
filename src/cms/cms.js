import CMS from 'netlify-cms-app';
import { pl } from 'netlify-cms-locales';
import columnComponent from './columnComponent';
import containerComponent from './containerComponent';

CMS.registerLocale('pl', pl);

CMS.registerEditorComponent(columnComponent);
CMS.registerEditorComponent(containerComponent);