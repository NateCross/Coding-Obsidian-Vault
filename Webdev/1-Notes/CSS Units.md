# [Units of Measurement](https://www.w3schools.com/cssref/css_units.asp)
### Absolute Lengths
| Units | Description | Conversion          |
| ----- | ----------- | ------------------- |
| cm    | centimeters |                     |
| mm    | millimeters |                     |
| in    | inches      | 1in = 96px = 2.54cm |
| px[^Note]    | pixels      | 1px = 1/96th of 1in |
| pt    | points      | 1pt = 1/72 of 1in   |
| pc    | picas       | 1pc = 12pt          | 

### Relative Lengths
| Unit | Description                                                                   |
| ---- | ----------------------------------------------------------------------------- |
| em   | Relative to the font-size of element (2em means 2 times size of current font) |
| ex   | Relative to the x-height of current font (rarely used)                        |
| ch   | Relative to the width of the "0" (zero)                                       |
| rem  | Relative to font-size of the root element                                     |
| vw   | Relative to 1% of the width of the viewport                                   |
| vh   | Relative to 1% of the height of the viewport                                  |
| vmin | Relative to 1% of the viewport's smaller dimension                            |
| vmax | Relative to 1% of the viewport's larger dimension                             |
| %    | Relative to the parent element                                                                              |
Note: ==em== and ==rem== are practical in creating scalable layout;
#
[^Note]: Relative to viewing device. For low-dpi, it literally means 1 dot. But for printers and other high resolution screens, 1px is multiple pixels.