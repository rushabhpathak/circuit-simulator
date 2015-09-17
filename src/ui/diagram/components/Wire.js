import React from 'react';
import { Group } from 'react-art';

import { BaseData } from './models/AllModels.js';
import DrawingUtils from '../../utils/DrawingUtils.js';
import Line from '../../utils/Line.js';
import CurrentPath from '../CurrentPath.js';
import { get2PointBoundingBox } from '../boundingBox.js';

import { get2PointConnectorPositionsFor } from '../Utils.js';
import { GRID_SIZE } from '../Constants.js';
import { LINE_WIDTH } from '../../Constants.js';

const { PropTypes } = DrawingUtils;

const MIN_LENGTH = GRID_SIZE;

const BaseWireModel = BaseData.Wire;

export default class Wire extends React.Component {

  render() {
    const color = this.props.color || this.props.theme.COLORS.base;

    return (
      <Group>
        <Line
          color={color}
          points={this.props.connectors}
          width={LINE_WIDTH}
        />
        <CurrentPath
          connectors={this.props.connectors}
          current={this.props.currents[0]}
          theme={this.props.theme}
        />
      </Group>
    );
  }
}

Wire.propTypes = {
  id: React.PropTypes.string.isRequired,

  voltages: React.PropTypes.arrayOf(React.PropTypes.number),
  currents: React.PropTypes.arrayOf(React.PropTypes.number),
  connectors: React.PropTypes.arrayOf(PropTypes.Vector).isRequired,

  color: React.PropTypes.string,
  theme: React.PropTypes.object.isRequired
};

Wire.defaultProps = {
  voltages: [0, 0],
  currents: [0]
};

Wire.getConnectorPositions = get2PointConnectorPositionsFor(MIN_LENGTH);

Wire.typeID = BaseWireModel.typeID;

Wire.getBoundingBox = get2PointBoundingBox(LINE_WIDTH * 2);
