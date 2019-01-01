import app from 'flarum/app';
import { extend } from 'flarum/extend';
import HeaderSecondary from 'flarum/components/HeaderSecondary';
import LinkButton from 'flarum/components/LinkButton';

extend(HeaderSecondary.prototype, 'items', function(items) {

	if (items) {

		items.add('Go Back to Website',
		  LinkButton.component({
		    children: app.translator.trans('back_to_website.forum.header.back_button'),
		    className: 'Button Button--link',
		    href: app.forum.attribute('baseUrl')
		  }), 0
		);
    }
    
});

