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
* `pause: Integer` Default `500` Choose if the function should pause on window resize. To prevent the browser to freeze.
* `ignoreMin: true/false` Default `true` Choose false if you want to prevent `data-n-equal-height-ignore-min=""` attribute.
* `ignoreMax: true/false` Default `true` Choose false if you want to prevent `data-n-equal-height-ignore-max=""` attribute..
* `data-n-equal-height-ignore-min=""` Is used to ignore equal heights on screen/devices width less then a specifik pixel. `Only Integer`
* `data-n-equal-height-ignore-max=""` Is used to ignore equal heights on screen/devices width more then a specifik pixel. `Only Integer`

###### Example
```sh
$(function(){
    $().nEqualHeight({
        type: 'max',
		outerHeight: true,
		resize: true,
		ignoreMin: true,
		ignoreMax: true
    });
});
```

## HTML Example
```sh
<div data-n-equal-height-rel="row1">This is a column in row 1</div> 
<div data-n-equal-height-rel="row1" data-n-equal-height-ignore-min="480" data-n-equal-height-ignore-max="992">This is another column in row 1. It will only change height if window width is more then 480 and less then 992 pixels</div> 
<div data-n-equal-height-rel="row2">This is a column in row 2</div> 

<div data-n-equal-height-rel="row1">This is a column in row 3 but should have the same height as columns in row 1</div>
```