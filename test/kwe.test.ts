import { KWE, ConfigInterface } from '../src'
jest.mock('../src/index')

describe('KWE tests', () => {
    let kwe: KWE
    let config: ConfigInterface

    beforeAll(() => {
        config = {
            container: document.createElement('div'),
            name: '123'
        }
        kwe = new KWE(config)

        jest.useFakeTimers()
    })
    beforeEach(() => {
        jest.clearAllMocks()
    })
    // it('should set watching when calling the kwe constructor', () => {
    //     expect(kwe.test(1,2)).toBe(3)
    // })
})
