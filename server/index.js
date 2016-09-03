const sh = require('kool-shell');
const plotter = require('./libs/plotter');


plotter
  .connect('/dev/tty.wchusbserial1410', 115200, true)
  .catch((err) => {
    sh.error(err);
    exit(1);
  });

// plotter.svg('./svg/hello.svg', 1);
plotter.line(0, 0, plotter.WIDTH / 2, plotter.HEIGHT / 2);
plotter.end(() => plotter.disconnect());