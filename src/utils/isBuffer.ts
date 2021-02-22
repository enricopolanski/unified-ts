export function isBuffer(obj: Object): obj is Buffer {
  return (
    obj != null &&
    obj.constructor != null && 
    typeof (obj.constructor as any).isBuffer === 'function' &&
    (obj.constructor as any).isBuffer(obj)
  )
}
