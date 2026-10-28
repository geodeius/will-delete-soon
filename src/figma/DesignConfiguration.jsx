import React from 'react';
import {Button} from '@/components/ui/button';
import {Card} from '@/components/ui/card';
import {DesignField} from '@/figma/fields';
const imgVector6921 = "/figma/35-33291-38fab.svg";
export default function DesignConfiguration({
  onAction = () => {},
  onValueChange = () => {},
  values = {}
} = {}) {
  return <div className="border border-[#f5f5f5] border-solid content-stretch flex flex-col gap-[8px] items-start relative rounded-[24px] size-full" data-node-id="35:33291">
      <div className="[word-break:break-word] flex flex-col font-inter font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-[color:var(--text-tertiary,#767676)] uppercase w-full" data-node-id="35:33292">
        <p className="leading-[1.45]">{values["Replenishment configuration"] ?? "Replenishment configuration"}</p>
      </div>
      <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-node-id="35:33293">
        <div className="content-stretch flex flex-col h-[100px] items-start py-[8px] relative rounded-[8px] shrink-0 w-[971px]" data-node-id="35:33294">
          <DesignField nodeId="35:33295" className="content-stretch flex flex-col gap-[var(--ui-spacing-spacing-4,4px)] items-start justify-center p-[var(--ui-spacing-spacing-0,0px)] relative shrink-0 w-[455px]" value={values["35:33295"]} onValueChange={onValueChange} />
        </div>
        <div className="h-0 relative shrink-0 w-full" data-node-id="35:33296">
          <div className="absolute inset-[-0.5px_0]">
            <img alt="" className="block max-w-none size-full" src={imgVector6921} />
          </div>
        </div>
        <div className="content-stretch flex flex-col h-[100px] items-start py-[8px] relative rounded-[8px] shrink-0 w-[971px]" data-node-id="35:33297">
          <DesignField nodeId="35:33298" className="content-stretch flex flex-col gap-[var(--ui-spacing-spacing-4,4px)] items-start justify-center p-[var(--ui-spacing-spacing-0,0px)] relative shrink-0 w-[455px]" value={values["35:33298"]} onValueChange={onValueChange} />
        </div>
        <div className="h-0 relative shrink-0 w-full" data-node-id="35:33299">
          <div className="absolute inset-[-0.5px_0]">
            <img alt="" className="block max-w-none size-full" src={imgVector6921} />
          </div>
        </div>
        <div className="content-stretch flex flex-col h-[100px] items-start py-[8px] relative rounded-[8px] shrink-0 w-[971px]" data-node-id="35:33300">
          <DesignField nodeId="35:33301" className="content-stretch flex flex-col gap-[var(--ui-spacing-spacing-4,4px)] items-start justify-center p-[var(--ui-spacing-spacing-0,0px)] relative shrink-0 w-[455px]" value={values["35:33301"]} onValueChange={onValueChange} />
        </div>
        <div className="content-stretch flex gap-[16px] items-start relative shrink-0" data-node-id="38:44145">
          <Button className="h-auto shadow-none hover:bg-transparent bg-[var(----epic-action-secondary-bg-default,#f5f5f5)] content-stretch flex gap-[var(----epic-button-gap,4px)] items-center justify-center px-[var(----epic-button-md-padding-inline,12px)] py-[var(----epic-button-md-padding-block,10px)] relative rounded-[var(----epic-radius-button,8px)] shrink-0" data-node-id="38:44125" data-name="Button" type="button" variant="ghost" onClick={event => onAction("38:44125", "Update name", event)}>
            <div className="content-stretch flex gap-[var(----epic-button-link-padding,0px)] items-center px-[4px] relative shrink-0" data-node-id="I38:44125;76:2789" data-name="Text">
              <p className="[word-break:break-word] font-inter font-medium leading-[1.45] not-italic relative shrink-0 text-[14px] text-[color:var(----epic-action-secondary-fg-default,black)] whitespace-nowrap" data-node-id="I38:44125;76:2790">{values["Update name"] ?? "Update name"}</p>
            </div>
          </Button>
          <Button className="h-auto shadow-none hover:bg-transparent bg-[var(----epic-action-primary-bg-default,black)] content-stretch flex gap-[var(----epic-button-gap,4px)] items-center justify-center px-[var(----epic-button-md-padding-inline,12px)] py-[var(----epic-button-md-padding-block,10px)] relative rounded-[var(----epic-radius-button,8px)] shrink-0" data-node-id="38:44139" data-name="Button" type="button" variant="ghost" onClick={event => onAction("38:44139", "Save changes", event)}>
            <div className="content-stretch flex gap-[var(----epic-button-link-padding,0px)] items-center px-[4px] relative shrink-0" data-node-id="I38:44139;76:2784" data-name="Text">
              <p className="[word-break:break-word] font-inter font-medium leading-[1.45] not-italic relative shrink-0 text-[14px] text-[color:var(----epic-action-primary-fg-default,white)] whitespace-nowrap" data-node-id="I38:44139;76:2785">{values["Save changes"] ?? "Save changes"}</p>
            </div>
          </Button>
        </div>
      </div>
    </div>;
}
