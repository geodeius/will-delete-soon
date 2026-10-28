import React from 'react';
import {Button} from '@/components/ui/button';
import {Card} from '@/components/ui/card';
import {DesignField} from '@/figma/fields';
const imgMagnifyingGlass = "/figma/35-28938-c2a5b.svg";
const imgCaretDown = "/figma/35-28938-f14bc.svg";
const imgCalendarDots = "/figma/35-28938-42d07.svg";
export default function DesignFilters({
  onAction = () => {},
  onValueChange = () => {},
  values = {}
} = {}) {
  return <div className="content-stretch flex gap-[8px] items-start relative size-full" data-node-id="35:28938">
      <DesignField nodeId="35:28939" className="content-stretch flex flex-col gap-[var(--ui-spacing-spacing-4,4px)] h-[40px] items-start justify-center p-[var(--ui-spacing-spacing-0,0px)] relative shrink-0 w-[271px]" value={values["35:28939"]} onValueChange={onValueChange} />
      <Button className="h-auto shadow-none hover:bg-transparent bg-white border-[0.5px] border-[var(--border-secondary,#d6d6d6)] border-solid content-stretch flex h-[40px] items-center justify-center overflow-clip p-[8px] relative rounded-[8px] shrink-0" data-node-id="35:28940" data-name="Button" type="button" variant="ghost" onClick={event => onAction("35:28940", "All statuses", event)}>
        <div className="content-stretch flex items-center justify-center px-[8px] relative shrink-0" data-node-id="I35:28940;2045:1420">
          <p className="[word-break:break-word] font-hanken font-medium leading-[var(--font-line-height-m,19px)] relative shrink-0 text-[#242424] text-[length:var(--font-size-m,16px)] text-center whitespace-nowrap" data-node-id="I35:28940;2045:1421">{values["All statuses"] ?? "All statuses"}</p>
        </div>
        <div className="relative shrink-0 size-[16px]" data-node-id="I35:28940;2045:1422" data-name="CaretRight">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgCaretDown} />
        </div>
      </Button>
      <Button className="h-auto shadow-none hover:bg-transparent bg-white border-[0.5px] border-[var(--border-secondary,#d6d6d6)] border-solid content-stretch flex h-[40px] items-center justify-center overflow-clip p-[8px] relative rounded-[8px] shrink-0" data-node-id="35:28941" data-name="Button" type="button" variant="ghost" onClick={event => onAction("35:28941", "Select date", event)}>
        <div className="relative shrink-0 size-[16px]" data-node-id="I35:28941;2045:1419" data-name="CaretLeft">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgCalendarDots} />
        </div>
        <div className="content-stretch flex items-center justify-center px-[8px] relative shrink-0" data-node-id="I35:28941;2045:1420">
          <p className="[word-break:break-word] font-hanken font-medium leading-[var(--font-line-height-m,19px)] relative shrink-0 text-[#242424] text-[length:var(--font-size-m,16px)] text-center whitespace-nowrap" data-node-id="I35:28941;2045:1421">{values["Select date"] ?? "Select date"}</p>
        </div>
        <div className="relative shrink-0 size-[16px]" data-node-id="I35:28941;2045:1422" data-name="CaretRight">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgCaretDown} />
        </div>
      </Button>
    </div>;
}
