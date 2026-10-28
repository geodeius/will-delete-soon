import React from 'react';
import {Button} from '@/components/ui/button';
import {Card} from '@/components/ui/card';
import {DesignField} from '@/figma/fields';
const imgIcon = "/figma/35-26529-7af0a.svg";
const imgIcon1 = "/figma/35-26529-a3807.svg";
const imgIcon2 = "/figma/35-26529-7f6d9.svg";
export default function DesignNav({
  onAction = () => {},
  onValueChange = () => {},
  values = {}
} = {}) {
  return <div className="content-stretch flex flex-col gap-[8px] items-start relative rounded-[8px] size-full" data-node-id="35:26529">
      <div className="content-stretch flex flex-col gap-[8px] items-start relative rounded-[8px] shrink-0 w-full" data-node-id="35:26533">
        <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-node-id="35:26535" data-name="Navigation items">
          <Button className="h-auto shadow-none hover:bg-transparent content-stretch flex gap-[8px] h-[36px] items-center p-[8px] relative rounded-[8px] shrink-0 w-[216px]" data-node-id="35:26537" data-name="Navigation item" type="button" variant="ghost" onClick={event => onAction("35:26537", "Overview", event)}>
            <div className="relative shrink-0 size-[16px]" data-node-id="I35:26537;934:26955" data-name="icon">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcon} />
            </div>
            <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-hanken font-normal justify-end leading-[0] min-w-px overflow-hidden relative text-[#c4c4c4] text-[14px] text-ellipsis whitespace-nowrap" data-node-id="I35:26537;934:26956">
              <p className="leading-[var(--font-size-l,18px)] overflow-hidden text-ellipsis">{values["Overview"] ?? "Overview"}</p>
            </div>
          </Button>
          <Button className="h-auto shadow-none hover:bg-transparent content-stretch flex gap-[8px] h-[36px] items-center p-[8px] relative rounded-[8px] shrink-0 w-[216px]" data-node-id="35:26538" data-name="Navigation item" type="button" variant="ghost" onClick={event => onAction("35:26538", "Transactions", event)}>
            <div className="relative shrink-0 size-[16px]" data-node-id="I35:26538;934:26955" data-name="icon">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcon1} />
            </div>
            <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-hanken font-normal justify-end leading-[0] min-w-px overflow-hidden relative text-[#c4c4c4] text-[14px] text-ellipsis whitespace-nowrap" data-node-id="I35:26538;934:26956">
              <p className="leading-[var(--font-size-l,18px)] overflow-hidden text-ellipsis">{values["Transactions"] ?? "Transactions"}</p>
            </div>
          </Button>
          <Button className="h-auto shadow-none hover:bg-transparent content-stretch flex gap-[8px] h-[36px] items-center p-[8px] relative rounded-[8px] shrink-0 w-[216px]" data-node-id="35:26539" data-name="Navigation item" type="button" variant="ghost" onClick={event => onAction("35:26539", "SMS and Top-ups", event)}>
            <div className="relative shrink-0 size-[16px]" data-node-id="I35:26539;934:26955" data-name="icon">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcon2} />
            </div>
            <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-hanken font-normal justify-end leading-[0] min-w-px overflow-hidden relative text-[#c4c4c4] text-[14px] text-ellipsis whitespace-nowrap" data-node-id="I35:26539;934:26956">
              <p className="leading-[var(--font-size-l,18px)] overflow-hidden text-ellipsis">{values["SMS and Top-ups"] ?? "SMS and Top-ups"}</p>
            </div>
          </Button>
          <Button className="h-auto shadow-none hover:bg-transparent content-stretch flex gap-[8px] h-[36px] items-center p-[8px] relative rounded-[8px] shrink-0 w-[216px]" data-node-id="35:26540" data-name="Navigation item" type="button" variant="ghost" onClick={event => onAction("35:26540", "Settings", event)}>
            <div className="relative shrink-0 size-[16px]" data-node-id="I35:26540;934:26955" data-name="icon">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcon2} />
            </div>
            <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-hanken font-normal justify-end leading-[0] min-w-px overflow-hidden relative text-[#c4c4c4] text-[14px] text-ellipsis whitespace-nowrap" data-node-id="I35:26540;934:26956">
              <p className="leading-[var(--font-size-l,18px)] overflow-hidden text-ellipsis">{values["Settings"] ?? "Settings"}</p>
            </div>
          </Button>
        </div>
      </div>
    </div>;
}
