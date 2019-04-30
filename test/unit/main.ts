import Main from '../../src/ts/main'
import { ConfigInterface } from '../../src'
jest.mock('../src/index')

describe('Main tests', () => {
    let main: Main
    let config: ConfigInterface

    beforeAll(() => {
        config = {
            container: document.createElement('div'),
            name: '123'
        }
        main = new Main(config)

        jest.useFakeTimers()
    })
    beforeEach(() => {
        jest.clearAllMocks()
    })
    test('Adding 1 + 1 equals 2', () => {
        expect(main.test(1, 1)).toBe(2)
    })
    // it('should set watching when calling the kwe constructor', () => {
    //     expect(kwe.test(1,2)).toBe(3)
    // })
})
