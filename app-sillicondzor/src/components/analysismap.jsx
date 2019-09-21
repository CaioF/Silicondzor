import React, { Component } from 'react';
import { VictoryTheme, VictoryChart, VictoryScatter, VictoryCursorContainer  } from 'victory';

export default class AnalysisMap extends Component {
  render() {
    return (
      <div className="container-sillicon-big">
        <div className="wrap-sillicon">
          <h3>Click Me</h3>
          <VictoryScatter
            style={{ data: { fill: "#c43a31" } }}
            size={9}
            labels={() => null}
            events={[{
              target: "data",
              eventHandlers: {
                onClick: () => {
                  return [
                    {
                      target: "data",
                      mutation: (props) => {
                        const fill = props.style && props.style.fill;
                        return fill === "black" ? null : { style: { fill: "black" } };
                      }
                    }, {
                      target: "labels",
                      mutation: (props) => {
                        return props.text === "clicked" ?
                          null : { text: "clicked" };
                      }
                    }
                  ];
                }
              }
            }]}
            data={[
    { x: 1, y: 1, label: "first", symbol: "star", opacity: 0.5, fill: "blue" },
    { x: 2, y: 2, label: "second", symbol: "circle", opacity: 0.8, fill: "red" },
    { x: 3, y: 3, label: "third", symbol: "square", fill: "gold" },
    { x: 4, y: 4, label: "fourth", symbol: "diamond", fill: "green" }
  ]}
          />
        </div>
      </div>
    );
  }
}
