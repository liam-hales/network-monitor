'use client';

import { FunctionComponent, ReactElement } from 'react';
import { BaseProps, ChartAxis, ChartDataPoint, ChartLine } from '../../types';
import { ResponsiveContainer, AreaChart, CartesianGrid, Tooltip, XAxis, YAxis, Line } from 'recharts';
import { ChartTooltip } from '../';

/**
 * The `LineChart` component props
 */
interface Props extends BaseProps {
  readonly xAxis: ChartAxis;
  readonly lines: ChartLine[];
  readonly unit: string;
  readonly data: ChartDataPoint[];
}

/**
 * Used to render a line chart using the
 * `recharts` package under the hood
 *
 * @param props The component props
 * @returns The `LineChart` component
 */
const LineChart: FunctionComponent<Props> = ({ className, xAxis, lines, unit, data }): ReactElement<Props> => {
  return (
    <ResponsiveContainer className={className}>
      <AreaChart
        className="font-mono text-xs"
        data={data}
        responsive={true}
        margin={{
          top: 0,
          right: 0,
          bottom: -8,
          left: 0,
        }}
      >
        <CartesianGrid
          strokeDasharray="3 3"
          stroke="var(--color-neutral-600)"
          opacity={0.2}
        />
        <XAxis
          name={xAxis.name}
          dataKey={xAxis.key}
          tickFormatter={xAxis.formatter}
          tickMargin={6}
          interval="equidistantPreserveStart"
          type="category"
          stroke="var(--color-neutral-600)"
          axisLine={false}
          tickLine={false}
        />
        <YAxis
          tickMargin={6}
          type="number"
          width="auto"
          stroke="var(--color-neutral-600)"
          axisLine={false}
          tickLine={false}
        />
        <Tooltip content={({ label = '', payload }) => {
          return (
            <ChartTooltip
              title={`${label}`}
              titleFormatter={xAxis.formatter}
              unit={unit}
              dataPoints={[...payload]}
            />
          );
        }}
        />
        {
          lines.map((line) => {
            const { name, key, colour } = line;

            return (
              <Line
                key={`chart-line-${key}`}
                name={name}
                dataKey={key}
                type="monotone"
                activeDot={{
                  strokeWidth: 2,
                }}
                dot={{
                  strokeWidth: 0.2,
                }}
                fill={colour}
                stroke={colour}
                strokeWidth={2}
                strokeOpacity={1}
              />
            );
          })
        }
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default LineChart;
