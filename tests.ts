import * as jsdom from 'jsdom'

import { initJQuery } from './index'

describe('jquery-ts', () => {
	it('can modify the <body>', (done) => {
		getJQuery().then($ => {
			$(() => {
				$('body').html('<h1>Success!</h1>')
				expect($('body').children().first().text()).toBe('Success!')
				done()
			})
		})
	})
})

function getJQuery() {
	return new Promise<jQuery.IStatic>((resolve, reject) => {
		jsdom.env('<!DOCTYPE html>', (err, window) => {
			if (err) reject(err)
			else resolve(initJQuery(window))
		})
	})
}