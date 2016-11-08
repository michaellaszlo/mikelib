var Demo = (function () {

  function load() {
    var wrapper = M.make('div', { id: 'wrapper', parent: document.body }),
        display = M.make('span', { className: 'display', parent: wrapper }),
        input;
    M.make('br', { parent: wrapper });
    input = M.make('input', { className: 'phrase', parent: wrapper });
    M.makeUnselectable(document.body);
  }

  return {
    load: load
  };
})();

onload = Demo.load;
