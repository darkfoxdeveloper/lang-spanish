/*
 * This file is part of DaRkFoxDeveloper/FlarumES.
 * -----------------------------------------------------------------------
 * Copyright © 2015-2019 Toby Zerner and Flarum
 * Copyright © 2015-2019 Johann Rodríguez and Flarum en Español
 * -----------------------------------------------------------------------
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import { extend } from 'flarum/extend';
import app from 'flarum/app';

import SpanishSettingsModal from 'DaRkFoxDeveloper/FlarumES/components/SpanishSettingsModal';

app.initializers.add('flarumes-spanish', app => {
  app.extensionSettings['flarumes-spanish'] = () => app.modal.show(new SpanishSettingsModal());
});
