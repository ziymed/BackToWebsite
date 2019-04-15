import app from 'flarum/app';
import { extend } from 'flarum/extend';
import HeaderSecondary from 'flarum/components/HeaderSecondary';


extend(HeaderSecondary.prototype, 'items', function(items) {

	if (items) {

		const url = app.forum.attribute('backtoUrl') ? app.forum.attribute('backtoUrl') : "#";
		const label = app.forum.attribute('backtoLabel') ? app.forum.attribute('backtoLabel') : app.translator.trans('backtowebsite.forum.header.back_button');

		items.add('gobackto', <a class="Button Button--link" href={url}>{label}</a>, 19);
			
    }
    
});

