import test from 'ava'
const __ = undefined

/**
 * Assertions
 */

test('What will satisfy the truthy assertion?', t => {
  t.truthy(1)
})

test('What is a falsey value?', t => {
  t.falsy(0)
})

test('What is true?', t => {
  t.true(true)
})

test('What is false?', t => {
  t.false(false)
})

test('What will satisfy the equality assertion?', t => {
  t.is(2, 1 + 1)
})

test('What will satisfy the inequality assertion?', t => {
  t.not(3, 1 + 1)
})

/**
 * Operators
 */

test('What is addition?', t => {
  t.is(28 + 14, 42)
})

test('What is assignment addition?', t => {
  let result = 34
  result += 23 // Equivalent to `result = result + n`; but more concise.

  t.is(57, result)
})

test('What is subtraction?', t => {
  t.is(30 - 9, 21)
})

test('What is assignment subtraction?', t => {
  let result = 5
  result -= 2

  t.is(3, result)
})

// Assignment operators are available for multiplication and division as well.
// Let's do one more, the modulo (%) operator, used for showing division remainder.

test('What is modulus?', t => {
  const x = 5
  let result = 10
  result %= x // Same as `result = result % x`.

  t.is(0, result, 'What is the value of result?')
})

/**
 * Equality
 */

test('What is equality without type coercion?', t => {
  const numberLiteral = 3

  t.true(numberLiteral === 3)
})

test('What is equality with type coercion?', t => {
  const quotedNumber = '3'

  // eslint-disable-next-line eqeqeq
  t.true(quotedNumber == 3)
})

/**
 * Truthyness
 *   https://developer.mozilla.org/en-US/docs/Glossary/Truthy
 */

test('What is the truthyness of positive numbers?', t => {
  const oneIsTruthy = !!1

  t.is(true, oneIsTruthy)
})

test('What is the truthyness of negative numbers?', t => {
  const negativeOneIsTruthy = !!-1

  t.is(true, negativeOneIsTruthy)
})

test('What is the truthyness of zero?', t => {
  const zeroIsTruthy = !!0

  t.is(false, zeroIsTruthy)
})

test('What is the truthyness of null?', t => {
  const nullIsTruthy = !!null

  t.is(false, nullIsTruthy)
})

test('What is the truthyness of undefined?', t => {
  const undefinedIsTruthy = !!undefined

  t.is(false, undefinedIsTruthy)
})

/**
 * Assignment
 */

test('Assigning a value to a local variable.', t => {
  let one
  one = 1 // eslint-disable-line prefer-const

  t.is(1, one)
})

/**
 * Numbers
 */

test('Are itegers and floats the same type?', t => {
  const typeOfInteger = typeof 6
  const typeOfFloat = typeof 3.14159

  t.is(true, typeOfInteger === typeOfFloat)
})

test('What is the javascript numeric type?', t => {
  const typeOfInteger = typeof 42

  t.is('number', typeOfInteger)
})

test('What is a integer number equivalent to 1.0?', t => {
  t.is(1, 1.0)
})

test('What is NaN?', t => {
  const resultOfFailedOperations = 42 / 'wat'

  t.is(true, isNaN(resultOfFailedOperations))
})

test('is NaN the same as NaN??!?', t => {
  const resultOfFailedOperations = 42 / 'wat'

  // eslint-disable-next-line use-isnan,eqeqeq
  t.is(false, resultOfFailedOperations == NaN, '')
})

/**
 * Strings
 */

test('Are similar strings with different delimiters equal?', t => {
  // eslint-disable-next-line quotes
  const doubleQuotedString = "apple"
  const singleQuotedString = 'apple'

  t.is(true, doubleQuotedString === singleQuotedString)
})

test('What is string concatenation?', t => {
  const fruit = 'apple'
  const dish = 'pie'

  t.is('apple pie', fruit + ' ' + dish)
})

test('What are character escape sequences?', t => {
  const stringWithAnEscapedCharacter = '\u0041pple'

  t.is('Apple', stringWithAnEscapedCharacter, '')
})

test('How do you find the length of a string?', t => {
  const fruit = 'apple'

  t.is(5, fruit.length)
})

test('What is slicing a string?', t => {
  const fruit = 'apple pie'

  t.is('apple', fruit.slice(0, 5))
})

/**
 * Control Structures
 */

test('What is an if statement?', t => {
  const two = 2
  let isPositive = false
  if (two > 0) {
    isPositive = true
  }

  t.is(true, isPositive)
})

test('What is a for loop?', t => {
  let counter = 10
  for (let i = 1; i <= 3; i++) {
    counter = counter + i
  }

  t.is(16, counter)
})

test('What is a ternary operator?', t => {
  const two = 2
  let fruit = two > 0 ? 'apple' : 'orange'
  t.is('apple', fruit)

  fruit = two < 0 ? 'apple' : 'orange'
  t.is('orange', fruit)
})

test('What is a switch statement?', t => {
  let result = 0
  switch (2) {
    case 1:
      result = 1
      break
    case 1 + 1:
      result = 2
      break
  }

  t.is(2, result)
})

test('What is the default case of a switch statement?', t => {
  let hobbit = 'Pippin'
  switch ('m') {
    case 'f':
      hobbit = 'Frodo'
      break
    case 's':
      hobbit = 'Samwise'
      break
    default:
      hobbit = 'Merry'
      break
  }

  t.is('Merry', hobbit)
})

test('What is "null coalescing?"', t => {
  const result = null || 'something'

  t.is('something', result)
})

/**
 * Arrays
 */

test('What is indexing an array literal', t => {
  const things = ['cellar door', 42, true]

  t.is('cellar door', things[0])
  t.is(42, things[1])
  t.is(true, things[2])
})

test('What is the type of an array?', t => {
  const typeOfArray = typeof []

  t.is('object', typeOfArray)
})

test('What is the length of of an array?', t => {
  t.is(3, ['a', 'b', 'c'].length)
})

test('What are stack methods on arrays?', t => {
  const stack = []
  stack.push('first')
  stack.push('second')

  t.is('second', stack.pop())
  t.is('first', stack.pop())
})

test('What are queue methods on arrays?', t => {
  const queue = []
  queue.push('first')
  queue.push('second')
  queue.unshift('third')

  t.is('third', queue.shift())
  t.is('first', queue.shift())
})

/**
 * Objects
 */

test('What is the type of an object?', t => {
  const typeOfEmptyObject = typeof {}

  t.is('object', typeOfEmptyObject)
})

test('What is object literal notation?', t => {
  const person = {
    name: 'Amory Blaine',
    age: 102
  }

  t.is('Amory Blaine', person.name)
  t.is(102, person.age)
})

test('Dynamically adding properties to an object.', t => {
  const person = {}
  person.name = 'Amory Blaine'
  person.age = 102
  t.is('Amory Blaine', person.name)
  t.is(102, person.age)
})

test('Accessing object properties with strings.', t => {
  const person = { name: 'Amory Blaine', age: 102 }

  t.is(person['name'], 'Amory Blaine')
  t.is(person['age'], 102)
})

/**
 * Regular Expressions
 */

test('Does the string provided contain "select"?', (t) => {
  const containsSelect = /select/.test('  select * from users ')
  t.is(true, containsSelect)
})

test('What is the value of pie?', (t) => {
  let pie = 'apple pie'.replace('apple', 'strawberry')
  t.is('strawberry pie', pie)

  pie = 'what if 6 turned out to be 9?'.replace(/\d/g, function (number) { // the second parameter can be a string or a function
    const map = {'6': 'six', '9': 'nine'}
    return map[number]
  })
  t.is('what if six turned out to be nine?', pie)
})

/**
 * Enumerating
 */

test('Use filter to return array items that meet a criteria', (t) => {
  const numbers = [1, 2, 3]
  const odd = numbers.filter((x) => {
    return x % 2 !== 0
  })

  t.is(3, numbers.length)
  t.deepEqual([1], odd)
  t.is(1, 3, odd.length)
})

test('Use map to transform each element', (t) => {
  const numbers = [1, 2, 3]
  const numbersPlus1 = numbers.map((x) => {
    return x + 1
  })

  t.deepEqual(__, numbersPlus1)
  t.deepEqual(__, numbers)
})

test('Use reduce to update the same result on each iteration', (t) => {
  const numbers = [1, 2, 3]
  const sum = numbers.reduce((memo, x) => {
    return memo + x
  }, 0)

  t.is(__, sum)
  t.deepEqual(__, numbers)
})

test('Use some and every to determine if a function applied to any or all items is true', (t) => {
  const onlyEven = [2, 4, 6]
  const mixedBag = [2, 4, 5, 6]
  const isEven = x => x % 2 === 0

  t.is(__, onlyEven.every(isEven))
  t.is(__, mixedBag.some(isEven))
})
