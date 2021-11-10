const caesarCipher = require('./caesarCipher')

test("basic cipher works", ()=>{
  expect(caesarCipher('abc')).toBe('bcd')
});

test("basic cipher works on longer words", ()=>{
  expect(caesarCipher('tomorrow')).toBe('upnpsspx')
})

test("basic cipher works on simple sentence", ()=>{
  expect(caesarCipher('i like hamburgers')).toBe('j mjlf ibncvshfst')
})

test("basic cipher works on a and z letters", ()=>{
  expect(caesarCipher('az za zzz aaa azaz')).toBe('ba ab aaa bbb baba')
})

test("basic cipher works on punctuations", ()=>{
  expect(caesarCipher('lol $%$#@# 7332rfv')).toBe('mpm $%$#@# 7332sgw')
})