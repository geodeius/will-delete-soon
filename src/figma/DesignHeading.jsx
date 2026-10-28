import React from 'react';
import {Button} from '@/components/ui/button';
import {Card} from '@/components/ui/card';
import {DesignField} from '@/figma/fields';
const imgCalendarDots = "/figma/35-26783-bfb7f.svg";
const imgCaretDown = "/figma/35-26783-beee2.svg";
export default function DesignHeading({
  onAction = () => {},
  onValueChange = () => {},
  values = {}
} = {}) {
  return <div className="content-stretch flex gap-[40px] items-end relative size-full" data-node-id="35:26783">
      <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start leading-[0] min-w-px relative" data-node-id="35:26784">
        <div className="flex flex-col font-hanken font-semibold justify-end relative shrink-0 text-[length:var(--font-size-1xl,25px)] text-black w-full" data-node-id="35:26785">
          <p className="leading-[var(--font-line-height-1xl,30px)]">{values["Hello Kwame"] ?? "Hello Kwame"}</p>
        </div>
        <div className="flex flex-col font-hanken font-normal justify-end relative shrink-0 text-[color:var(--text-secondary,#434343)] text-[length:var(--font-size-m,16px)] w-full" data-node-id="35:26786">
          <p className="leading-[var(--font-line-height-m,19px)]">{values["Your operations, at a glance. A clear view of your transactions and SMS activity."] ?? "Your operations, at a glance. A clear view of your transactions and SMS activity."}</p>
        </div>
      </div>
      <Button className="h-auto shadow-none hover:bg-transparent bg-[var(----epic-action-outline-bg-default,white)] border border-[var(----epic-action-outline-border-default,#d6d6d6)] border-solid content-stretch flex gap-[var(----epic-button-gap,4px)] items-center justify-center px-[var(----epic-button-md-padding-inline,12px)] py-[var(----epic-button-md-padding-block,10px)] relative rounded-[var(----epic-radius-button,8px)] shrink-0" data-node-id="35:26787" data-name="Button" type="button" variant="ghost" onClick={event => onAction("35:26787", "Select date", event)}>
        <div className="relative shrink-0 size-[16px]" data-node-id="I35:26787;76:2793" data-name="arrow-left">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgCalendarDots} />
        </div>
        <div className="content-stretch flex gap-[var(----epic-button-link-padding,0px)] items-center px-[4px] relative shrink-0" data-node-id="I35:26787;76:2794" data-name="Text">
          <p className="[word-break:break-word] font-inter font-medium leading-[1.45] not-italic relative shrink-0 text-[14px] text-[color:var(----epic-action-outline-fg-default,black)] whitespace-nowrap" data-node-id="I35:26787;76:2795">{values["Select date"] ?? "Select date"}</p>
        </div>
        <div className="relative shrink-0 size-[16px]" data-node-id="I35:26787;76:2796" data-name="arrow-right">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgCaretDown} />
        </div>
      </Button>
    </div>;
}
