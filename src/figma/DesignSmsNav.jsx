import React from 'react';
import {Button} from '@/components/ui/button';
import {Card} from '@/components/ui/card';
import {DesignField} from '@/figma/fields';
const imgIcon = "/figma/35-30650-7af0a.svg";
const imgIcon1 = "/figma/35-30650-a3807.svg";
const imgIcon2 = "/figma/35-30650-44c40.svg";
const imgIcon3 = "/figma/35-30650-37f43.svg";
export default function DesignSmsNav({
  onAction = () => {},
  onValueChange = () => {},
  values = {}
} = {}) {
  return <div className="content-stretch flex flex-col gap-[8px] items-start relative rounded-[8px] size-full" data-node-id="35:30650">
      <div className="content-stretch flex flex-col gap-[8px] items-start relative rounded-[8px] shrink-0 w-full" data-node-id="35:30654">
        <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-node-id="35:30656" data-name="Navigation items">
          <Button className="h-auto shadow-none hover:bg-transparent content-stretch flex gap-[8px] h-[36px] items-center p-[8px] relative rounded-[8px] shrink-0 w-[216px]" data-node-id="35:30658" data-name="Navigation item" type="button" variant="ghost" onClick={event => onAction("35:30658", "Overview", event)}>
            <div className="relative shrink-0 size-[16px]" data-node-id="I35:30658;934:26955" data-name="icon">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcon} />
            </div>
            <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-hanken font-normal justify-end leading-[0] min-w-px overflow-hidden relative text-[#c4c4c4] text-[14px] text-ellipsis whitespace-nowrap" data-node-id="I35:30658;934:26956">
              <p className="leading-[var(--font-size-l,18px)] overflow-hidden text-ellipsis">{values["Overview"] ?? "Overview"}</p>
            </div>
          </Button>
          <Button className="h-auto shadow-none hover:bg-transparent content-stretch flex gap-[8px] h-[36px] items-center p-[8px] relative rounded-[8px] shrink-0 w-[216px]" data-node-id="35:30659" data-name="Navigation item" type="button" variant="ghost" onClick={event => onAction("35:30659", "Transactions", event)}>
            <div className="relative shrink-0 size-[16px]" data-node-id="I35:30659;934:26955" data-name="icon">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcon1} />
            </div>
            <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-hanken font-normal justify-end leading-[0] min-w-px overflow-hidden relative text-[#c4c4c4] text-[14px] text-ellipsis whitespace-nowrap" data-node-id="I35:30659;934:26956">
              <p className="leading-[var(--font-size-l,18px)] overflow-hidden text-ellipsis">{values["Transactions"] ?? "Transactions"}</p>
            </div>
          </Button>
          <Button className="h-auto shadow-none hover:bg-transparent content-stretch flex gap-[8px] h-[36px] items-center p-[8px] relative rounded-[8px] shrink-0 w-[216px]" data-node-id="35:30660" data-name="Navigation item" type="button" variant="ghost" onClick={event => onAction("35:30660", "SMS and Top-ups", event)}>
            <div className="relative shrink-0 size-[16px]" data-node-id="I35:30660;934:26955" data-name="icon">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcon2} />
            </div>
            <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-hanken font-normal justify-end leading-[0] min-w-px overflow-hidden relative text-[#c4c4c4] text-[14px] text-ellipsis whitespace-nowrap" data-node-id="I35:30660;934:26956">
              <p className="leading-[var(--font-size-l,18px)] overflow-hidden text-ellipsis">{values["SMS and Top-ups"] ?? "SMS and Top-ups"}</p>
            </div>
          </Button>
          <Button className="h-auto shadow-none hover:bg-transparent content-stretch flex gap-[8px] h-[36px] items-center p-[8px] relative rounded-[8px] shrink-0 w-[216px]" data-node-id="35:30661" data-name="Navigation item" type="button" variant="ghost" onClick={event => onAction("35:30661", "Settings", event)}>
            <div className="relative shrink-0 size-[16px]" data-node-id="I35:30661;934:26955" data-name="icon">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcon3} />
            </div>
            <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-hanken font-normal justify-end leading-[0] min-w-px overflow-hidden relative text-[#c4c4c4] text-[14px] text-ellipsis whitespace-nowrap" data-node-id="I35:30661;934:26956">
              <p className="leading-[var(--font-size-l,18px)] overflow-hidden text-ellipsis">{values["Settings"] ?? "Settings"}</p>
            </div>
          </Button>
        </div>
      </div>
    </div>;
}
