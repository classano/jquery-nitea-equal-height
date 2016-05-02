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

