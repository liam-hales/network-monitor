import { FunctionComponent, ReactElement } from 'react';
import { ArrowDown, ArrowUp, ArrowRightLeft, AudioLines } from 'lucide-react';
import { BaseProps } from '../../types';

/**
 * The `SummaryPanel` component props
 */
interface Props extends BaseProps {
  readonly download: number;
  readonly upload: number;
  readonly latency: number;
  readonly jitter: number;
}

/**
 * Used to render the network summary
 * panel for the overview page
 *
 * @param props The component props
 * @returns The `SummaryPanel` component
 */
const SummaryPanel: FunctionComponent<Props> = ({ className, download, upload, latency, jitter }): ReactElement<Props> => {
  return (
    <div className={`${className ?? ''} flex flex-row items-center gap-x-4`}>
      <div className="w-[25%] flex flex-col items-start bg-black rounded-lg border-solid border-[1px] border-neutral-800 gap-y-2 pt-3 pb-3 pl-4 pr-4">
        <div className="w-full flex flex-row items-center justify-between">
          <p className="font-mono text-white text-sm">
            Download
          </p>
          <ArrowDown
            className="text-white"
            size={16}
            strokeWidth={3}
          />
        </div>
        <div className="flex flex-row items-center gap-x-1">
          <p className="font-sans font-bold text-blue-400 text-4xl">
            {download}
          </p>
          <p className="font-mono text-white text-sm pt-3">
            mbps
          </p>
        </div>
      </div>
      <div className="w-[25%] flex flex-col items-start bg-black rounded-lg border-solid border-[1px] border-neutral-800 gap-y-2 pt-3 pb-3 pl-4 pr-4">
        <div className="w-full flex flex-row items-center justify-between">
          <p className="font-mono text-white text-sm">
            Upload
          </p>
          <ArrowUp
            className="text-white"
            size={16}
            strokeWidth={3}
          />
        </div>
        <div className="flex flex-row items-center gap-x-1">
          <p className="font-sans font-bold text-purple-400 text-4xl">
            {upload}
          </p>
          <p className="font-mono text-white text-sm pt-3">
            mbps
          </p>
        </div>
      </div>
      <div className="w-[25%] flex flex-col items-start bg-black rounded-lg border-solid border-[1px] border-neutral-800 gap-y-2 pt-3 pb-3 pl-4 pr-4">
        <div className="w-full flex flex-row items-center justify-between">
          <p className="font-mono text-white text-sm">
            Latency
          </p>
          <ArrowRightLeft
            className="text-white"
            size={16}
            strokeWidth={3}
          />
        </div>
        <div className="flex flex-row items-center gap-x-1">
          <p className="font-sans font-bold text-emerald-400 text-4xl">
            {latency}
          </p>
          <p className="font-mono text-white text-sm pt-3">
            ms
          </p>
        </div>
      </div>
      <div className="w-[25%] flex flex-col items-start bg-black rounded-lg border-solid border-[1px] border-neutral-800 gap-y-2 pt-3 pb-3 pl-4 pr-4">
        <div className="w-full flex flex-row items-center justify-between">
          <p className="font-mono text-white text-sm">
            Jitter
          </p>
          <AudioLines
            className="text-white"
            size={16}
            strokeWidth={3}
          />
        </div>
        <div className="flex flex-row items-center gap-x-1">
          <p className="font-sans font-bold text-orange-400 text-4xl">
            {jitter}
          </p>
          <p className="font-mono text-white text-sm pt-3">
            ms
          </p>
        </div>
      </div>
    </div>
  );
};

export default SummaryPanel;
