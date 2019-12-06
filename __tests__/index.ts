import { expect } from 'chai'
import Utils from '../src/ts/common/utils'

test('Utils test', () => {
    expect(1 + 2).to.equal(3)
    expect(Utils.htmlEscape('<img>')).to.equal('&lt;img&gt;')
    expect(1 + 2).to.equal(3)
})
