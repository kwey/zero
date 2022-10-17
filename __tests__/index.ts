import { expect } from 'chai'
import { htmlEscape } from '../src/ts/common/utils'

test('Utils test', () => {
	expect(1 + 2).to.equal(3)
	expect(htmlEscape('<img>')).to.equal('&lt;img&gt;')
	expect(1 + 2).to.equal(3)
})
