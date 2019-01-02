import SettingsModal from 'flarum/components/SettingsModal';

export default class BackToWebsiteSettingsModal extends SettingsModal {
  className() {
    return 'BackToWebsiteSettingsModal Modal--small';
  }

  title() {
    return app.translator.trans('backtowebsite.admin.settings.title');
  }

  form() {
    return [
      <div className="Form-group">
        <label>{app.translator.trans('backtowebsite.admin.settings.backto_url_label')}</label>
        <input className="FormControl" bidi={this.setting('ziymed-backtowebsite.backto_url')}/>
      </div>
    ];
  }
}
