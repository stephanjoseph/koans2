import test from 'ava'
const __ = undefined

/**
 * Assertions
 */

test('What will satisfy the truthy assertion?', t => {
  t.truthy(__)
})

test('What is a falsey value?', t => {
  t.falsy(__)
})

test('What is true?', t => {
  t.true(__)
})

test('What is false?', t => {
  t.false(__)
})

test('What will satisfy the equality assertion?', t => {
  t.is(__, 1 + 1)
})

test('What will satisfy the inequality assertion?', t => {
  t.not(__, 1 + 1)
})

/**
 * Operators
 */

test('What is addition?', t => {
  t.is(28 + __, 42)
})

test('What is assignment addition?', t => {
  let result = 34
  result += 23 // Equivalent to `result = result + n`; but more concise.

  t.is(__, result)
})

test('What is subtraction?', t => {
  t.is(30 - __, 21)
})

test('What is assignment subtraction?', t => {
  let result = 5
  result -= 2

  t.is(__, result)
})

// Assignment operators are available for multiplication and division as well.
// Let's do one more, the modulo (%) operator, used for showing division remainder.

test('What is modulus?', t => {
  const x = 5
  let result = 10
  result %= x // Same as `result = result % x`.

  t.is(__, result, 'What is the value of result?')
})

/**
 * Equality
 */

test('What is equality without type coercion?', t => {
  const numberLiteral = 3

  t.true(__ === numberLiteral)
})

test('What is equality with type coercion?', t => {
  const quotedNumber = '3'

  // eslint-disable-next-line eqeqeq
  t.true(quotedNumber == __)
})

/**
 * Truthyness
 *   https://developer.mozilla.org/en-US/docs/Glossary/Truthy
 */

test('What is the truthyness of positive numbers?', t => {
  const oneIsTruthy = !!1

  t.is(__, oneIsTruthy)
})

test('What is the truthyness of negative numbers?', t => {
  const negativeOneIsTruthy = !!-1

  t.is(__, negativeOneIsTruthy)
})

test('What is the truthyness of zero?', t => {
  const zeroIsTruthy = !!0

  t.is(__, zeroIsTruthy)
})

test('What is the truthyness of null?', t => {
  const nullIsTruthy = !!null

  t.is(__, nullIsTruthy)
})

test('What is the truthyness of undefined?', t => {
  const undefinedIsTruthy = !!undefined

  t.is(__, undefinedIsTruthy)
})

/**
 * Assignment
 */

test('Assigning a value to a local variable.', t => {
  let one
  one = 1 // eslint-disable-line prefer-const

  t.is(__, one)
})

/**
 * Numbers
 */

test('Are itegers and floats the same type?', t => {
  const typeOfInteger = typeof 6
  const typeOfFloat = typeof 3.14159

  t.is(__, typeOfInteger === typeOfFloat)
})

test('What is the javascript numeric type?', t => {
  const typeOfInteger = typeof 42

  t.is(__, typeOfInteger)
})

test('What is a integer number equivalent to 1.0?', t => {
  t.is(__, 1.0)
})

test('What is NaN?', t => {
  const resultOfFailedOperations = 42 / 'wat'

  t.is(__, isNaN(resultOfFailedOperations))
})

test('is NaN the same as NaN??!?', t => {
  const resultOfFailedOperations = 42 / 'wat'

  // eslint-disable-next-line use-isnan,eqeqeq
  t.is(__, resultOfFailedOperations == NaN, '')
})

/**
 * Strings
 */

test('Are similar strings with different delimiters equal?', t => {
  // eslint-disable-next-line quotes
  const doubleQuotedString = "apple"
  const singleQuotedString = 'apple'

  t.is(__, doubleQuotedString === singleQuotedString)
})

test('What is string concatenation?', t => {
  const fruit = 'apple'
  const dish = 'pie'

  t.is(__, fruit + ' ' + dish)
})

test('What are character escape sequences?', t => {
  const stringWithAnEscapedCharacter = '\u0041pple'

  t.is(__, stringWithAnEscapedCharacter, '')
})

test('How do you find the length of a string?', t => {
  const fruit = 'apple'

  t.is(__, fruit.length)
})

test('What is slicing a string?', t => {
  const fruit = 'apple pie'

  t.is(__, fruit.slice(0, 5))
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

  t.is(__, isPositive)
})

test('What is a for loop?', t => {
  let counter = 10
  for (let i = 1; i <= 3; i++) {
    counter = counter + i
  }

  t.is(__, counter)
})

test('What is a ternary operator?', t => {
  const two = 2
  let fruit = two > 0 ? 'apple' : 'orange'
  t.is(__, fruit)

  fruit = two < 0 ? 'apple' : 'orange'
  t.is(__, fruit)
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

  t.is(__, result)
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

  t.is(__, hobbit)
})

test('What is "null coalescing?"', t => {
  const result = null || 'something'

  t.is(__, result)
})

/**
 * Arrays
 */

test('What is indexing an array literal', t => {
  const things = ['cellar door', 42, true]

  t.is(__, things[0])
  t.is(__, things[1])
  t.is(__, things[2])
})

test('What is the type of an array?', t => {
  const typeOfArray = typeof []

  t.is(__, typeOfArray)
})

test('What is the length of of an array?', t => {
  t.is(__, ['a', 'b', 'c'].length)
})

test('What is slicing an array', t => {
  const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
  const workingWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']

  t.deepEqual(daysOfWeek.slice(__, __), workingWeek)
})

test('What are stack methods on arrays?', t => {
  const stack = []
  stack.push('first')
  stack.push('second')

  t.is(__, stack.pop())
  t.is(__, stack.pop())
})

test('What are queue methods on arrays?', t => {
  const queue = []
  queue.push('first')
  queue.push('second')
  queue.unshift('third')

  t.is(__, queue.shift())
  t.is(__, queue.shift())
})

/**
 * Objects
 */

test('What is the type of an object?', t => {
  const typeOfEmptyObject = typeof {}

  t.is(__, typeOfEmptyObject)
})

test('What is object literal notation?', t => {
  const person = {
    name: 'Amory Blaine',
    age: 102
  }

  t.is(__, person.name)
  t.is(__, person.age)
})

test('Dynamically adding properties to an object.', t => {
  const person = {}
  person.__ = 'Amory Blaine'
  person.__ = 102
  t.is('Amory Blaine', person.name)
  t.is(102, person.age)
})

test('Accessing object properties with strings.', t => {
  const person = { name: 'Amory Blaine', age: 102 }

  t.is(person['__'], 'Amory Blaine')
  t.is(person['__'], 102)
})

/**
 * Regular Expressions
 */

test('What is executing a regular expression', (t) => {
  const numberFinder = /(\d).*(\d)/
  const results = numberFinder.exec('what if 6 turned out to be 9?')
  t.is(results, [__, __, __])
})

test('Does the string provided contain "select"?', (t) => {
  const containsSelect = /select/.test('  select * from users ')
  t.is(__, containsSelect)
})

test('What is the value of matches?', (t) => {
  const matches = 'what if 6 turned out to be 9?'.match(/(\d)/g)
  t.true(matches.equalTo([__, __]), '')
})

test('What is the value of pie?', (t) => {
  let pie = 'apple pie'.replace('apple', 'strawberry')
  t.is(__, pie)

  pie = 'what if 6 turned out to be 9?'.replace(/\d/g, function (number) { // the second parameter can be a string or a function
    const map = {'6': 'six', '9': 'nine'}
    return map[number]
  })
  t.is(__, pie)
})

/**
 * Enumerating
 */

test('Use filter to return array items that meet a criteria', (t) => {
  const numbers = [1, 2, 3]
  const odd = numbers.filter((x) => {
    return x % 2 !== 0
  })

  t.is(__, numbers.length)
  t.is(__, odd)
  t.is(__, odd.length)
})

test('Use map to transform each element', (t) => {
  const numbers = [1, 2, 3]
  const numbersPlus1 = numbers.map((x) => {
    return x + 1
  })

  t.is(__, numbersPlus1)
  t.is(__, numbers)
})

test('Use reduce to update the same result on each iteration', (t) => {
  const numbers = [1, 2, 3]
  const sum = numbers.reduce((memo, x) => {
    return memo + x
  }, 0)

  t.is(__, sum)
  t.is(__, numbers)
})

test('Use reduce to update the same result on each iteration', (t) => {
  const onlyEven = [2, 4, 6]
  const mixedBag = [2, 4, 5, 6]
  const isEven = (x) => { return x % 2 === 0 }

  t.is(__, onlyEven.any(isEven))
  t.is(__, mixedBag.any(isEven))
})
