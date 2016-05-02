# jQuery Nitea equal height
A jquery function to set elements with equal heights

## Installation
```sh
$ bower install --save jquery-nitea-equal-height
```
## Example
```sh
$(function(){
    $().nEqualHeight();
});
```
## Options
* `type: 'max/min'` Default `max` Choose if you want the highest or the lowest value.
* `outerHeight: true/false` Default `true` Choose if you want the outerheight or not. See Jquery outerHeight() for more info. 
* `resize: true/false` Default `true` Choose if the function should be run on window resize.

###### Example
```sh
$(function(){
    $().nEqualHeight({
        type: 'max',
		outerHeight: true,
		resize: true
    });
});
```

## HTML Example
```sh
<div data-n-equal-height-rel="row1">This is a column in row 1</div> 
<div data-n-equal-height-rel="row1">This is another column in row 1</div> 
<div data-n-equal-height-rel="row2">This is a column in row 2</div> 

<div data-n-equal-height-rel="row1">This is a column in row 3 but should have the same height as columns in row 1</div>
```