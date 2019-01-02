import { extend } from 'flarum/extend';
import app from 'flarum/app';

import BackToWebsiteSettingsModal from './components/BackToWebsiteSettingsModal';

app.initializers.add('ziymed-backtowebsite', () => {
  app.extensionSettings['ziymed-backtowebsite'] = () => app.modal.show(new BackToWebsiteSettingsModal());
});

// Expose compat API
import flagsCompat from './compat';
import { compat } from '@flarum/core/admin';

Object.assign(compat, flagsCompat);
