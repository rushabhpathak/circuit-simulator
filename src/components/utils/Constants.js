const CONSTANTS = {
  GRID_SIZE: 20,

  LINE_WIDTH: 2,

  BOUNDING_BOX_PADDING: 2,

  RESISTOR: {
    WIDTH: 12,
    LENGTH: 40
  },

  CURRENT_SOURCE: {
    RADIUS: 18
  }
};

CONSTANTS.CURRENT = {
  DOT_DISTANCE: CONSTANTS.GRID_SIZE, // this makes the current flow nicely at the joins
  RADIUS: 4
};

export default CONSTANTS;
