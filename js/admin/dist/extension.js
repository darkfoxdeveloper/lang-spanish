/*
 * This file is part of DaRkFoxDeveloper/FlarumES.
 * -----------------------------------------------------------------------
 * Copyright © 2015-2019 Toby Zerner and Flarum
 * Copyright © 2015-2019 Johann Rodríguez and Flarum en Español
 * -----------------------------------------------------------------------
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

System.register('DaRkFoxDeveloper/FlarumES/components/SpanishSettingsModal', ['flarum/components/SettingsModal'], function (_export) {
  'use strict';

  var SettingsModal, SpanishSettingsModal;
  return {
    setters: [function (_flarumComponentsSettingsModal) {
      SettingsModal = _flarumComponentsSettingsModal['default'];
    }],
    execute: function () {
      SpanishSettingsModal = (function (_SettingsModal) {
        babelHelpers.inherits(SpanishSettingsModal, _SettingsModal);

        function SpanishSettingsModal() {
          babelHelpers.classCallCheck(this, SpanishSettingsModal);
          babelHelpers.get(Object.getPrototypeOf(SpanishSettingsModal.prototype), 'constructor', this).apply(this, arguments);
        }

        babelHelpers.createClass(SpanishSettingsModal, [{
          key: 'className',
          value: function className() {
            return 'SpanishSettingsModal Modal--small';
          }
        }, {
          key: 'title',
          value: function title() {
            return "Spanish";
          }
        }, {
          key: 'form',
          value: function form() {
            return [m(
              'div',
              { className: 'Form-group' },
              m(
                'fieldset',
                { 'class': 'BasicsPage-homePage' },
                m(
                  'legend',
                  null,
                  'Mode'
                ),
                m(
                  'label',
                  { 'class': 'checkbox' },
                  m('input', { type: 'radio', bidi: this.setting('flarumes-spanish.mode'), value: 'formal' }),
                  'Formal'
                ),
                m(
                  'label',
                  { 'class': 'checkbox' },
                  m('input', { type: 'radio', bidi: this.setting('flarumes-spanish.mode'), value: 'informal' }),
                  'Informal'
                )
              )
            )];
          }
        }]);
        return SpanishSettingsModal;
      })(SettingsModal);

      _export('default', SpanishSettingsModal);
    }
  };
});;
System.register('DaRkFoxDeveloper/FlarumES/main', ['flarum/extend', 'flarum/app', 'DaRkFoxDeveloper/FlarumES/components/SpanishSettingsModal'], function (_export) {
  // Copyright © 2015 Toby Zerner and Flarum
  // Copyright © 2015 Johann Rodríguez and Flarum en Español
  // ---
  // All rights reserved

  'use strict';

  var extend, app, SpanishSettingsModal;
  return {
    setters: [function (_flarumExtend) {
      extend = _flarumExtend.extend;
    }, function (_flarumApp) {
      app = _flarumApp['default'];
    }, function (_flarumesSpanishComponentsSpanishSettingsModal) {
      SpanishSettingsModal = _flarumesSpanishComponentsSpanishSettingsModal['default'];
    }],
    execute: function () {

      app.initializers.add('flarumes-spanish', function (app) {
        app.extensionSettings['flarumes-spanish'] = function () {
          return app.modal.show(new SpanishSettingsModal());
        };
      });
    }
  };
});
