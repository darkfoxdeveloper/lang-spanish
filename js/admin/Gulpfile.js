/*
 * This file is part of DaRkFoxDeveloper/FlarumES.
 * -----------------------------------------------------------------------
 * Copyright © 2015-2018 Toby Zerner and Flarum
 * Copyright © 2015-2018 Johann Rodríguez and Flarum en Español
 * -----------------------------------------------------------------------
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

var gulp = require('flarum-gulp');

gulp({
  modules: {
    'DaRkFoxDeveloper/FlarumES': 'src/**/*.js'
  }
});
