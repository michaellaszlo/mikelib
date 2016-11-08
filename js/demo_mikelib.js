var Demo = (function () {
  var wrapper,
      display,
      input,
      colorNames = [ 'peach', 'lemon', 'sky', 'mint' ];

  function colorizeInput() {
    var i, ch,
        colorIndex = 0,
        text = input.value;
    display.innerHTML = '';
    for (i = 0; i < text.length; ++i) {
      ch = text.charAt(i);
      if (ch === ' ') {
        ch = '&nbsp;';
      } else {
        ++colorIndex;
        if (colorIndex == colorNames.length) {
          colorIndex = 0;
        }
      }
      M.make('span', {
        parent: display,
        innerHTML: ch,
        className: colorNames[colorIndex]
      });
    }
  }

  function load() {
    // Add elements to the page.
    wrapper = M.make('div', { id: 'wrapper', parent: document.body }),
    display = M.make('span', { className: 'display', parent: wrapper }),
    M.make('br', { parent: wrapper });
    input = M.make('input', { className: 'phrase', parent: wrapper });

    // Make the body unselectable.
    M.makeUnselectable(document.body);

    // Add event handlers to the input field.
    [ 'change', 'keydown', 'keyup' ].forEach(function (eventName) {
      input.addEventListener(eventName, colorizeInput);
    });
    input.value = 'The quick brown fox jumps ';
    colorizeInput();
    input.setSelectionRange(input.value.length, input.value.length);
    input.focus();
  }

  return {
    load: load
  };
})();

onload = Demo.load;
