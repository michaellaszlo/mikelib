# mikelib

This repository contains the latest version of
[mikelib.js](https://github.com/michaellaszlo/mikelib/blob/master/js/mikelib.js),
a tiny library that I use for basic DOM manipulation and event handling.

It includes a demo page that looks like this:

![Demo page for mikelib.js](https://github.com/michaellaszlo/mikelib/blob/master/screenshot.png)

The page demonstrates the usage of `M.make` and `M.makeUnselectable`.

The `M` module offers these functions:

- `make(tag, options)`: Create a new DOM element with arbitrary attributes.
- `classContains(element, name)`: Check an element's className for a name.
- `classAdd(element, name)`: Modify an element's className by adding a name.
- `classRemove(element, name)`: Modify an element's className by removing a name.
- `makeUnselectable(element)`: Make an element unselectable by the user.
- `getOffset(element, ancestor)`: Compute an element's left and top offset relative to an ancestor.
- `getMousePosition(event)`: Get event coordinates relative to the page's top left corner.


