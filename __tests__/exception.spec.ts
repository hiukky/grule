import { Exception } from '../lib/exception'

describe('Exception', () => {
  it('should return an Foo Exeption error', () => {
    expect(new Exception('Foo', 'Foo error')).toBeInstanceOf(Exception)
  })
})
