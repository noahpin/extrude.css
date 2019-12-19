# extrude.css
a simple extrusion css library

## Installation

Download the files in the `extrude` folder in the repo and put them in your project

## Usage

To use extrude.css in your website, simply drop the stylesheet into your document's `<head>`, and add the class `extrude` to an element, along with the extrusion class.

```html
<head>
  <link rel="stylesheet" href="extrude.min.css">
</head>
```



### Extrusion

To extrude an element, add the class `extrude` to an element. Finally you need to add one of the extrude type classes which can be found on the demo site : (https://dazon.xyz/extrude.css/)
Full example:

```html
<h1 class="extrude extrude-small-br-b-h">Example</h1>
```

[Check out all the extrusion types here!](https://dazon.xyz/extrude.css/)

## Changing Colors & speed

### Color

Changing the color of your extrusion is as simple as adding
```html
  <style>
      :root {
          --extrude-color: #02feaa;
      }
  </style>
```
to the head of your document. you can change the extrude color here as you wish.

### Speed
Changing the speed of your extrusion is as simple as adding
```html
  <style>
      .extrude {
          transition: transform 0.4s, box-shadow 0.4s, text-shadow 0.4s;
      }
  </style>
```
to the head of your document. you can change the extrude speed here as you wish. to keep the look of the preset speed, set all three speeds to the same speed. 

## License

Extrude.css is licensed under the MIT license. (https://opensource.org/licenses/MIT)
