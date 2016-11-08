var M = (function () {
  'use strict';

  function make(tag, options) {
    var keys, i,
        element = document.createElement(tag);
    if (options === undefined) {
      return element;
    }
    if ('parent' in options) {
      options.parent.appendChild(element);
      delete options.parent;
    }
    keys = Object.keys(options);
    for (i = keys.length - 1; i >= 0; --i) {
      element[keys[i]] = options[keys[i]];
    }
    return element;
  }

  function classContains(element, item) {
    var className = element.className;
    if (className === '' || className === null || className === undefined) {
      return false;
    }
    var items = className.split(/\s+/);
    for (var i = items.length-1; i >= 0; --i) {
      if (items[i] === item) {
        return true;
      }
    }
    return false;
  }

  function classAdd(element, item) {
    if (classContains(element, item)) {
      return;
    }
    var className = element.className;
    if (className === '' || className === null || className === undefined) {
      element.className = item;
    } else {
      element.className = className + ' ' + item;
    }
  }

  function classRemove(element, item) {
    if (!classContains(element, item)) {
      return;
    }
    var items = element.className.split(/\s+/),
        newItems = [];
    for (var i = items.length-1; i >= 0; --i) {
      if (items[i] !== item) {
        newItems.push(items[i]);
      }
    }
    element.className = newItems.join(' ');
  }

  function makeUnselectable(element) {
    // Based on Evan Hahn's advice:
    //   http://evanhahn.com/how-to-disable-copy-paste-on-your-website/
    // Relies on the existence of this CSS rule:
    //   .unselectable {
    //     -webkit-user-select: none;
    //     -khtml-user-drag: none;
    //     -khtml-user-select: none;
    //     -moz-user-select: none;
    //     -moz-user-select: -moz-none;
    //     -ms-user-select: none;
    //     user-select: none;
    //   }
    classAdd(element, 'unselectable');
    element.ondragstart = element.onselectstart = function (event) {
      event.preventDefault();
    };
  }

  function getOffset(element, ancestor) {
    var left = 0,
        top = 0,
        originalElement = element;
    while (element != ancestor) {
      if (element === null) {
        console.log(originalElement);
        console.log(ancestor);
      }
      left += element.offsetLeft;
      top += element.offsetTop;
      element = element.parentNode;
    }
    return { left: left, top: top };
  }

  function getMousePosition(event) {
    event = event || window.event;
    if (event.pageX) {
      return { x: event.pageX, y: event.pageY };
    }
    return {
      x: event.clientX + document.body.scrollLeft +
          document.documentElement.scrollLeft,
      y: event.clientY + document.body.scrollTop +
          document.documentElement.scrollTop
    };
  }

  return {
    make: make,
    classContains: classContains,
    classAdd: classAdd,
    classRemove: classRemove,
    makeUnselectable: makeUnselectable,
    getOffset: getOffset,
    getMousePosition: getMousePosition
  };

})();
