import React from 'react';
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';
import _ from 'lodash';

function average(data) {
  return _.round(_.sum(data)/data.length);
}

export default (props) => {
  return (
    <div>
      <Sparklines width={180} height={120} data={props.data}>
        <SparklinesLine color={props.color}></SparklinesLine>
        <SparklinesReferenceLine type="avg" />
      </Sparklines>
      <div><span className="avg">Средна стойност: </span>{average(props.data)} {props.units}</div>
    </div>
  )
}