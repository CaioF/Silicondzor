import React, { Component } from 'react';
import { VictoryTheme, VictoryChart, VictoryScatter, VictoryCursorContainer  } from 'victory';

export default class AnalysisMap extends Component {
  render() {
    return (
      <div className="container-sillicon-big">
        <div className="wrap-sillicon">
          <svg viewBox="0 0 450 350">
            <VictoryChart
              theme={VictoryTheme.material}
              domain={{ x: [0, 5], y: [0, 7] }}
            >
              <VictoryScatter
                containerComponent={
                  <VictoryCursorContainer
                    cursorDimension="x"
                    cursorLabel={({ datum }) => `${(datum.x, 2)}, ${(datum.y, 2)}`}
                  />
                }
                style={{ data: { fill: "#c43a31" } }}
                size={7}
                data={[
                  { x: 1, y: 2 },
                  { x: 2, y: 3 },
                  { x: 3, y: 5 },
                  { x: 4, y: 4 },
                  { x: 5, y: 7 }
                ]}
              />
            </VictoryChart>
          </svg>
        </div>
      </div>
    );
  }
}
