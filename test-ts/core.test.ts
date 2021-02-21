import {frozenProcessor} from '../src/index'

it('should throw', () => {
  expect(() => frozenProcessor.use(Function.prototype)).toThrow(
    'Cannot invoke `use` on a frozen processor.\nCreate a new processor first, by invoking it: use `processor()` instead of `processor`.'
  )
})
