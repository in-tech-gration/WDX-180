---
title: Primitive
---

# Primitive

In [JavaScript](https://developer.mozilla.org/en-US/docs/Glossary/JavaScript){:target="_blank"}, a **primitive** (primitive value, primitive data type) is data that is not an [object](https://developer.mozilla.org/en-US/docs/Glossary/Object){:target="_blank"} and has no [methods](https://developer.mozilla.org/en-US/docs/Glossary/Method){:target="_blank"} or [properties](https://developer.mozilla.org/en-US/docs/Glossary/Property/JavaScript){:target="_blank"}. There are 7 primitive data types:

- [string](https://developer.mozilla.org/en-US/docs/Glossary/String){:target="_blank"}
- [number](https://developer.mozilla.org/en-US/docs/Glossary/Number){:target="_blank"}
- [bigint](https://developer.mozilla.org/en-US/docs/Glossary/Bigint){:target="_blank"}
- [boolean](https://developer.mozilla.org/en-US/docs/Glossary/Boolean){:target="_blank"}
- [undefined](https://developer.mozilla.org/en-US/docs/Glossary/Undefined){:target="_blank"}
- [symbol](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol){:target="_blank"}
- [null](https://developer.mozilla.org/en-US/docs/Glossary/Null){:target="_blank"}

Most of the time, a primitive value is represented directly at the lowest level of the language implementation.

All primitives are _immutable_; that is, they cannot be altered. It is important not to confuse a primitive itself with a variable assigned a primitive value. The variable may be reassigned to a new value, but the existing value can not be changed in the ways that objects, arrays, and functions can be altered. The language does not offer utilities to mutate primitive values.

Primitives have no methods but still behave as if they do. When properties are accessed on primitives, JavaScript _auto-boxes_ the value into a wrapper object and accesses the property on that object instead. For example, `"foo".includes("f")` implicitly creates a [`String`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String){:target="_blank"} wrapper object and calls `String.prototype.includes()` on that object. This auto-boxing behavior is not observable in JavaScript code but is a good mental model of various behaviors — for example, why "mutating" primitives does not work (because `str.foo = 1` is not assigning to the property `foo` of `str` itself, but to an ephemeral wrapper object).

## See also

- [JavaScript data types](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures){:target="_blank"}
- [Primitive data type](https://en.wikipedia.org/wiki/Primitive_data_type){:target="_blank"} (Wikipedia)

### Sources and Attributions

- [MDN: Primitive](https://developer.mozilla.org/en-US/docs/Glossary/Primitive){:target="_blank"} [(Permalink)](https://github.com/mdn/content/blob/cbe37032c94ef804f24e6e37624102fa31e861c7/files/en-us/glossary/primitive/index.md){:target="_blank"}