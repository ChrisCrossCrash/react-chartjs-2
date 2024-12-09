import {
  Chart as ChartJS,
  LineController,
  BarController,
  RadarController,
  DoughnutController,
  PolarAreaController,
  BubbleController,
  PieController,
  ScatterController,
} from 'chart.js'
import type { ChartType, ChartComponentLike } from 'chart.js'

import type { ChartProps } from './types.js'
import { Chart } from './chart.js'

function createTypedChart<T extends ChartType>(
  type: T,
  registerables: ChartComponentLike,
) {
  ChartJS.register(registerables)

  return (props: ChartProps) => {
    // TODO: Configure ESLint to ignore unused variables named `_`.
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { type: _, ...rest } = props
    return <Chart type={type} {...rest} />
  }
}

export const Line = /* #__PURE__ */ createTypedChart('line', LineController)

export const Bar = /* #__PURE__ */ createTypedChart('bar', BarController)

export const Radar = /* #__PURE__ */ createTypedChart('radar', RadarController)

export const Doughnut = /* #__PURE__ */ createTypedChart(
  'doughnut',
  DoughnutController,
)

export const PolarArea = /* #__PURE__ */ createTypedChart(
  'polarArea',
  PolarAreaController,
)

export const Bubble = /* #__PURE__ */ createTypedChart(
  'bubble',
  BubbleController,
)

export const Pie = /* #__PURE__ */ createTypedChart('pie', PieController)

export const Scatter = /* #__PURE__ */ createTypedChart(
  'scatter',
  ScatterController,
)
