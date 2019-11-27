/**
 * Copyright (C) 2019 Yudha Tama Aditiyara
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const assert = require('assert');
const Middleware = require('../../');

describe('Middleware#handle', () => {
  it('must be work called with (#context, #done)', () => {
    let middleware = new Middleware([
      (context, next) => {
        assert.strictEqual(context, 'context');
        assert.strictEqual(next(), 'bar');
        return 'foo';
      },
      (context, done) => {
        assert.strictEqual(context, 'context');
        assert.strictEqual(done(), 'done');
        return 'bar';
      }
    ]);
    assert.strictEqual(middleware.handle('context', () => 'done'), 'foo');
  });
});