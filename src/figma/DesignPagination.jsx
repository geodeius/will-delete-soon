import React from 'react';
import {Button} from '@/components/ui/button';
import {Card} from '@/components/ui/card';
import {DesignField} from '@/figma/fields';
export default function DesignPagination({
  onAction = () => {},
  onValueChange = () => {},
  values = {}
} = {}) {
  return <div className="content-stretch flex items-center justify-between px-[var(--padding-padding,24px)] py-[var(--ui-spacing-spacing-0,0px)] relative size-full" data-node-id="35:30598" data-name="Pagination">
      <p className="[word-break:break-word] font-inter font-normal leading-[1.45] not-italic relative shrink-0 text-[#1a1a1a] text-[14px] whitespace-nowrap" data-node-id="35:30599">{values["Showing 13 out of 100"] ?? "Showing 13 out of 100"}</p>
      <div className="bg-[var(--background-bg-secondary,#f7f7f7)] content-stretch flex gap-[8px] items-center overflow-clip p-[var(--ui-spacing-spacing-2,2px)] relative rounded-[var(--pagination,100000px)] shrink-0" data-node-id="35:30600" data-name="Pagination">
        <Button className="h-auto shadow-none hover:bg-transparent bg-[var(--background-bg-disabled,#f7f7f7)] border border-[var(--border-border-primary,#f0f0f0)] border-solid content-stretch flex gap-[var(--ui-spacing-spacing-4,4px)] h-[40px] items-center justify-center overflow-clip px-[var(--ui-spacing-spacing-12,12px)] py-[10px] relative rounded-[8px] shrink-0" data-node-id="I35:30600;1097:3077" data-name="Button" type="button" variant="ghost" onClick={event => onAction("I35:30600;1097:3077", "Prev", event)}>
          <div className="content-stretch flex gap-[var(--ui-spacing-spacing-0,0px)] items-center px-[var(--ui-spacing-spacing-4,4px)] py-[var(--ui-spacing-spacing-0,0px)] relative shrink-0" data-node-id="I35:30600;1097:3077;442:4415" data-name="Text">
            <p className="[word-break:break-word] font-inter font-medium leading-[1.429] not-italic relative shrink-0 text-[color:var(--text-text-disabled,#a3a3a3)] text-[length:var(--font-size-paragraph-sm,14px)] whitespace-nowrap" data-node-id="I35:30600;1097:3077;442:4416">{values["Prev"] ?? "Prev"}</p>
          </div>
        </Button>
        <div className="content-stretch flex gap-[var(--ui-spacing-spacing-0,0px)] items-center p-[var(--ui-spacing-spacing-0,0px)] relative shrink-0" data-node-id="I35:30600;1097:3182" data-name="Pages">
          <div className="bg-[var(--background-bg-primary,white)] border border-[var(--border-border-primary,#f0f0f0)] border-solid content-stretch flex flex-col gap-[var(--ui-spacing-spacing-2,2px)] h-[40px] items-center justify-center overflow-clip p-[var(--ui-spacing-spacing-2,2px)] relative rounded-[8px] shrink-0" data-node-id="I35:30600;1097:3052" data-name="_Pagination Unpublished">
            <p className="[word-break:break-word] font-inter font-normal leading-[1.429] not-italic relative shrink-0 text-[color:var(--text-text-primary,#0a0a0a)] text-[length:var(--font-size-paragraph-sm,14px)] text-center w-[36px]" data-node-id="I35:30600;1097:3052;1097:1306">{values["1"] ?? "1"}</p>
          </div>
          <div className="content-stretch flex flex-col gap-[var(--ui-spacing-spacing-2,2px)] items-center justify-center overflow-clip p-[var(--ui-spacing-spacing-2,2px)] relative rounded-[8px] shrink-0 size-[40px]" data-node-id="I35:30600;1097:3056" data-name="_Pagination Unpublished">
            <p className="[word-break:break-word] font-inter font-normal leading-[1.429] not-italic relative shrink-0 text-[color:var(--text-text-primary,#0a0a0a)] text-[length:var(--font-size-paragraph-sm,14px)] text-center w-[36px]" data-node-id="I35:30600;1097:3056;1097:1302">{values["2"] ?? "2"}</p>
          </div>
          <div className="content-stretch flex flex-col gap-[var(--ui-spacing-spacing-2,2px)] items-center justify-center overflow-clip p-[var(--ui-spacing-spacing-2,2px)] relative rounded-[8px] shrink-0 size-[40px]" data-node-id="I35:30600;1097:3058" data-name="_Pagination Unpublished">
            <p className="[word-break:break-word] font-inter font-normal leading-[1.429] not-italic relative shrink-0 text-[color:var(--text-text-primary,#0a0a0a)] text-[length:var(--font-size-paragraph-sm,14px)] text-center w-[36px]" data-node-id="I35:30600;1097:3058;1097:1302">{values["3"] ?? "3"}</p>
          </div>
          <div className="content-stretch flex flex-col gap-[var(--ui-spacing-spacing-2,2px)] items-center justify-center overflow-clip p-[var(--ui-spacing-spacing-2,2px)] relative rounded-[8px] shrink-0 size-[40px]" data-node-id="I35:30600;1097:3060" data-name="_Pagination Unpublished">
            <p className="[word-break:break-word] font-inter font-normal leading-[1.429] not-italic relative shrink-0 text-[color:var(--text-text-primary,#0a0a0a)] text-[length:var(--font-size-paragraph-sm,14px)] text-center w-[36px]" data-node-id="I35:30600;1097:3060;1097:1302">{values["4"] ?? "4"}</p>
          </div>
          <div className="content-stretch flex flex-col gap-[var(--ui-spacing-spacing-2,2px)] items-center justify-center overflow-clip p-[var(--ui-spacing-spacing-2,2px)] relative rounded-[8px] shrink-0 size-[40px]" data-node-id="I35:30600;1097:3062" data-name="_Pagination Unpublished">
            <p className="[word-break:break-word] font-inter font-normal leading-[1.429] not-italic relative shrink-0 text-[color:var(--text-text-primary,#0a0a0a)] text-[length:var(--font-size-paragraph-sm,14px)] text-center w-[36px]" data-node-id="I35:30600;1097:3062;1097:1302">{values["5"] ?? "5"}</p>
          </div>
        </div>
        <Button className="h-auto shadow-none hover:bg-transparent bg-[var(--background-bg-primary,white)] border border-[var(--border-border-primary,#f0f0f0)] border-solid content-stretch flex gap-[var(--ui-spacing-spacing-4,4px)] h-[40px] items-center justify-center overflow-clip px-[var(--ui-spacing-spacing-12,12px)] py-[10px] relative rounded-[8px] shrink-0" data-node-id="I35:30600;1097:3064" data-name="Button" type="button" variant="ghost" onClick={event => onAction("I35:30600;1097:3064", "Next", event)}>
          <div className="content-stretch flex gap-[var(--ui-spacing-spacing-0,0px)] items-center px-[var(--ui-spacing-spacing-4,4px)] py-[var(--ui-spacing-spacing-0,0px)] relative shrink-0" data-node-id="I35:30600;1097:3064;442:4390" data-name="Text">
            <p className="[word-break:break-word] font-inter font-medium leading-[1.429] not-italic relative shrink-0 text-[color:var(--text-text-primary,#0a0a0a)] text-[length:var(--font-size-paragraph-sm,14px)] whitespace-nowrap" data-node-id="I35:30600;1097:3064;442:4391">{values["Next"] ?? "Next"}</p>
          </div>
        </Button>
      </div>
    </div>;
}
