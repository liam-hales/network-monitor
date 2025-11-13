import { FunctionComponent, ReactElement } from 'react';
import { BaseProps, ChartTooltipDataPoint } from '../../types';

/**
 * The `ChartTooltip` component props
 */
interface Props extends BaseProps {
  readonly title: string;
  readonly titleFormatter?: (value: string) => string;
  readonly unit: string;
  readonly dataPoints: ChartTooltipDataPoint[];
}

/**
 * Used to render the chart tooltip which shows
 * when hovering over chart data points
 *
 * @param props The component props
 * @returns The `ChartTooltip` component
 */
const ChartTooltip: FunctionComponent<Props> = ({ title, titleFormatter, unit, dataPoints }): ReactElement<Props> => {
  return (
    <div className="min-w-44 flex flex-col items-start bg-neutral-800 rounded-lg border-solid border-[1px] border-neutral-700 gap-y-3 pt-2 pb-2 pl-4 pr-4">
      <p className="font-mono text-white text-base">
        {
          (titleFormatter != null)
            ? titleFormatter(title)
            : title
        }
      </p>
      <div className="w-full flex flex-col items-start gap-y-1">
        {
          dataPoints.map((point) => {
            const { name, value, color, dataKey } = point;
            const colour = color.replace(/^var\(--color-(.*)\)$/, '$1');

            return (
              <div
                key={`chat-tooltip-data-${dataKey}`}
                className="w-full flex flex-row items-center justify-between"
              >
                <p className="font-mono text-xs text-neutral-300">
                  {name}
                </p>
                <div className="flex flex-row items-center gap-x-1">
                  <p className={`font-mono text-sm text-${colour}`}>
                    {value}
                  </p>
                  <p className="font-mono text-xs text-neutral-500">
                    {unit}
                  </p>
                </div>
              </div>
            );
          })
        }
      </div>
    </div>
  );
};

export default ChartTooltip;
