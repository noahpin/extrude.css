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

To extrude an element, add the class `extrude` to an element. Finally you need to add one of the following extrude type classes to the element:

| Class Name        |                    |                     |                      |
| ----------------- | ------------------ | ------------------- | -------------------- |
| `bounce`          | `flash`            | `pulse`             | `rubberBand`         |
| `shake`           | `headShake`        | `swing`             | `tada`               |
| `wobble`          | `jello`            | `bounceIn`          | `bounceInDown`       |
| `bounceInLeft`    | `bounceInRight`    | `bounceInUp`        | `bounceOut`          |
| `bounceOutDown`   | `bounceOutLeft`    | `bounceOutRight`    | `bounceOutUp`        |
| `fadeIn`          | `fadeInDown`       | `fadeInDownBig`     | `fadeInLeft`         |
| `fadeInLeftBig`   | `fadeInRight`      | `fadeInRightBig`    | `fadeInUp`           |
| `fadeInUpBig`     | `fadeOut`          | `fadeOutDown`       | `fadeOutDownBig`     |
| `fadeOutLeft`     | `fadeOutLeftBig`   | `fadeOutRight`      | `fadeOutRightBig`    |
| `fadeOutUp`       | `fadeOutUpBig`     | `flipInX`           | `flipInY`            |
| `flipOutX`        | `flipOutY`         | `lightSpeedIn`      | `lightSpeedOut`      |
| `rotateIn`        | `rotateInDownLeft` | `rotateInDownRight` | `rotateInUpLeft`     |
| `rotateInUpRight` | `rotateOut`        | `rotateOutDownLeft` | `rotateOutDownRight` |
| `rotateOutUpLeft` | `rotateOutUpRight` | `hinge`             | `jackInTheBox`       |
| `rollIn`          | `rollOut`          | `zoomIn`            | `zoomInDown`         |
| `zoomInLeft`      | `zoomInRight`      | `zoomInUp`          | `zoomOut`            |
| `zoomOutDown`     | `zoomOutLeft`      | `zoomOutRight`      | `zoomOutUp`          |
| `slideInDown`     | `slideInLeft`      | `slideInRight`      | `slideInUp`          |
| `slideOutDown`    | `slideOutLeft`     | `slideOutRight`     | `slideOutUp`         |
| `heartBeat`       |

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
