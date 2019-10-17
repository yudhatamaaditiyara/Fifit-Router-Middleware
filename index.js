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
'use strict';

const middleware = require('fifit-util-middleware');

/**
 */
class Middleware
{
	/**
	 * @param {Array|void} callbacks
	 */
	constructor(callbacks){
		this._stack = [];
		this.handle = middleware(this._stack);
		if (callbacks != null) {
			this.uses(callbacks);
		}
	}

	/**
	 * @param {function} callback
	 * @returns {boolean}
	 */
	has(callback){
		return -1 < this._stack.indexOf(callback);
	}

	/**
	 * @param {function} callback
	 * @returns {Middleware}
	 */
	use(callback){
		if (typeof callback != 'function') {
			throw new Error('The callback must be typeof function');
		}
		this._stack.push(callback);
		return this;
	}

	/**
	 * @param {Array} callbacks
	 * @returns {Middleware}
	 */
	uses(callbacks){
		callbacks.forEach(callback => this.use(callback));
		return this;
	}
}

/**
 * @+
 */
module.exports = Middleware;