# ♻️ Sass Directions [![Build status](https://travis-ci.org/nicolasmn/sass-directions.svg?branch=master)](https://travis-ci.org/nicolasmn/sass-directions) [![Greenkeeper badge](https://badges.greenkeeper.io/nicolasmn/sass-directions.svg)](https://greenkeeper.io/)
=======

Toolset that helps dealing with direction shorthand lists.

_Real world example:_
```scss
@import "sass-directions/directions";

$padding: 10px 20px;
$border-width: 1px;

.box {
    padding: directions-compute($padding, -$border-width);
    border: $border-width solid;
}
```

## Installation

**Using NPM**  
`npm install sass-directions`

**Using yarn**  
`yarn add sass-directions`

**Without packet manager**  
You can always just copy-paste [`_directions.scss`](/_directions.scss) into your project and import it.

## Functions

### `directions-assert`

Map values in clock-wise positions like CSS does it. Quoting from MDN:
- **One** single value applies to all **four sides**.
- **Two** values apply first to **top and bottom**, the second one to **left and right**.
- **Three** values apply first to **top**, second to **left and right** and third to **bottom**.
- **Four** values apply to **top, right, bottom and left** in that order (clockwise).

_Example:_  
```scss
$map: directions-assert(10px 20px);
// => ( top: 10px, bottom: 10px, right: 20px, left: 20px )
```


### `directions-apply`

Convert a map of `<direction>: <value>` pairs to shorthand list.  
The examples below produce the same output.

_Example:_  
```scss
$list: directions-apply($top: 10px, $right: 20px, $bottom: 10px, $left: 20px);
$list: directions-apply((top: 10px, right: 20px, bottom: 10px, left: 20px)...);
// => 10px 20px
```


### `directions-compute`

Use simple math (addition and substraction) to manipulate direction values.

_Examples:_
```scss
$map: directions-compute(10px 20px, 5px);
// => 15px 25px

$map: directions-compute(10px 20px, null -5px);
// => 10px 15px

$map: directions-compute(10px 20px, null null -5px);
// => 10px 20px 15px
```


## Testing

[Mocha](https://github.com/mochajs/mocha) and [True](https://github.com/oddbird/true) are used for unit testing. Simply run `npm test` to test output of the functions.
