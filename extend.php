<?php

/**
 *  This file is part of ziymed/back-to-website.
 *
 *  Copyright (c) 2018 .
 *
 *
 *  For the full copyright and license information, please view the LICENSE.md
 *  file that was distributed with this source code.
 */

namespace Ziyad\BackToWebsite;

use Flarum\Extend;
use Ziymed\BackToWebsite\Listener;
use Illuminate\Contracts\Events\Dispatcher;

return [
    (new Extend\Frontend('forum'))
        ->js(__DIR__.'/js/dist/forum.js'),
    (new Extend\Frontend('admin'))
        ->js(__DIR__.'/js/dist/admin.js'),
    new Extend\Locales(__DIR__ . '/locale'),

    function (Dispatcher $events) {
        $events->subscribe(Listener\AddBackToWebsiteApi::class);
    },
];
