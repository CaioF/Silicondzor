import React, { Component } from 'react';
import { VictoryPie, VictoryLabel, VictoryTooltip  } from 'victory';

class CustomLabel extends Component {
  render() {
    return (
          <g>
            <VictoryLabel {...this.props}/>
            <VictoryTooltip
              {...this.props}
              x={200} y={250}
              orientation="top"
              pointerLength={0}
              cornerRadius={50}
              flyoutWidth={100}
              flyoutHeight={100}
              flyoutStyle={{ fill: "black" }}
            />
          </g>
    );
  }
}

CustomLabel.defaultEvents = VictoryTooltip.defaultEvents;


export default class GraphLabel extends React.Component {
  render() {
    return (
      <div className="container-sillicon">
        <div className="wrap-sillicon">
          <svg viewBox="0 0 450 350">
            <VictoryPie
              style={{ labels: { fill: "white" } }}
              innerRadius={100}
              labelRadius={120}
              standalone={false}
              labels={({ datum }) => `# ${datum.y}`}
              labelComponent={<CustomLabel />}
              data={[
                { x: 4, y: 3 },
                { x: 5, y: 1 }
              ]}
            />
          </svg>
        </div>
      </div>
    );
  }
}
