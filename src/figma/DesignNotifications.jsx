import React from 'react';
import {Button} from '@/components/ui/button';
import {Card} from '@/components/ui/card';
import {DesignField} from '@/figma/fields';
const imgVector6921 = "/figma/35-32944-38fab.svg";
export default function DesignNotifications({
  onAction = () => {},
  onValueChange = () => {},
  values = {}
} = {}) {
  return <div className="border border-[#f5f5f5] border-solid content-stretch flex flex-col gap-[8px] items-start relative rounded-[24px] size-full" data-node-id="35:32944">
      <div className="[word-break:break-word] flex flex-col font-inter font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-[color:var(--text-tertiary,#767676)] uppercase w-full" data-node-id="35:32945">
        <p className="leading-[1.45]">{values["NOTIFICATIONS"] ?? "NOTIFICATIONS"}</p>
      </div>
      <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-node-id="35:32946">
        <div className="content-stretch flex gap-[40px] items-center relative shrink-0 w-full" data-node-id="35:32947">
          <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-w-px not-italic py-[8px] relative rounded-[8px]" data-node-id="35:32948">
            <div className="flex flex-col font-inter font-medium justify-center leading-[0] relative shrink-0 text-[14px] text-[color:var(--text-secondary,#434343)] w-full" data-node-id="35:32949">
              <p className="leading-[1.45]">{values["Email address"] ?? "Email address"}</p>
            </div>
            <p className="font-inter font-semibold leading-[1.45] relative shrink-0 text-[16px] text-[color:var(--text-primary,black)] w-full" data-node-id="35:32950">{values["janice.mills@gamepark.com"] ?? "janice.mills@gamepark.com"}</p>
          </div>
          <Button className="h-auto shadow-none hover:bg-transparent bg-[var(----epic-action-outline-bg-default,white)] border border-[var(----epic-action-outline-border-default,#d6d6d6)] border-solid content-stretch flex gap-[var(----epic-button-gap,4px)] items-center justify-center px-[var(----epic-button-md-padding-inline,12px)] py-[var(----epic-button-md-padding-block,10px)] relative rounded-[var(----epic-radius-button,8px)] shrink-0" data-node-id="35:32951" data-name="Button" type="button" variant="ghost" onClick={event => onAction("35:32951", "Update email", event)}>
            <div className="content-stretch flex gap-[var(----epic-button-link-padding,0px)] items-center px-[4px] relative shrink-0" data-node-id="I35:32951;76:2794" data-name="Text">
              <p className="[word-break:break-word] font-inter font-medium leading-[1.45] not-italic relative shrink-0 text-[14px] text-[color:var(----epic-action-outline-fg-default,black)] whitespace-nowrap" data-node-id="I35:32951;76:2795">{values["Update email"] ?? "Update email"}</p>
            </div>
          </Button>
        </div>
        <div className="h-0 relative shrink-0 w-full" data-node-id="35:32952">
          <div className="absolute inset-[-0.5px_0]">
            <img alt="" className="block max-w-none size-full" src={imgVector6921} />
          </div>
        </div>
        <div className="content-stretch flex gap-[40px] items-center relative shrink-0 w-full" data-node-id="35:32953">
          <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-w-px not-italic py-[8px] relative rounded-[8px]" data-node-id="35:32954">
            <div className="flex flex-col font-inter font-medium justify-center leading-[0] relative shrink-0 text-[14px] text-[color:var(--text-secondary,#434343)] w-full" data-node-id="35:32955">
              <p className="leading-[1.45]">{values["Name"] ?? "Name"}</p>
            </div>
            <p className="font-inter font-semibold leading-[1.45] relative shrink-0 text-[16px] text-[color:var(--text-primary,black)] w-full" data-node-id="35:32956">{values["Kwame Nkrumah"] ?? "Kwame Nkrumah"}</p>
          </div>
          <Button className="h-auto shadow-none hover:bg-transparent bg-[var(----epic-action-outline-bg-default,white)] border border-[var(----epic-action-outline-border-default,#d6d6d6)] border-solid content-stretch flex gap-[var(----epic-button-gap,4px)] items-center justify-center px-[var(----epic-button-md-padding-inline,12px)] py-[var(----epic-button-md-padding-block,10px)] relative rounded-[var(----epic-radius-button,8px)] shrink-0" data-node-id="35:32957" data-name="Button" type="button" variant="ghost" onClick={event => onAction("35:32957", "Update name", event)}>
            <div className="content-stretch flex gap-[var(----epic-button-link-padding,0px)] items-center px-[4px] relative shrink-0" data-node-id="I35:32957;76:2794" data-name="Text">
              <p className="[word-break:break-word] font-inter font-medium leading-[1.45] not-italic relative shrink-0 text-[14px] text-[color:var(----epic-action-outline-fg-default,black)] whitespace-nowrap" data-node-id="I35:32957;76:2795">{values["Update name"] ?? "Update name"}</p>
            </div>
          </Button>
        </div>
        <div className="h-0 relative shrink-0 w-full" data-node-id="35:32958">
          <div className="absolute inset-[-0.5px_0]">
            <img alt="" className="block max-w-none size-full" src={imgVector6921} />
          </div>
        </div>
        <div className="content-stretch flex gap-[40px] items-center relative shrink-0 w-full" data-node-id="35:32959">
          <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-w-px not-italic py-[8px] relative rounded-[8px]" data-node-id="35:32960">
            <div className="flex flex-col font-inter font-medium justify-center leading-[0] relative shrink-0 text-[14px] text-[color:var(--text-secondary,#434343)] w-full" data-node-id="35:32961">
              <p className="leading-[1.45]">{values["Role"] ?? "Role"}</p>
            </div>
            <p className="font-inter font-semibold leading-[1.45] relative shrink-0 text-[16px] text-[color:var(--text-primary,black)] w-full" data-node-id="35:32962">{values["Manager"] ?? "Manager"}</p>
          </div>
          <Button className="h-auto shadow-none hover:bg-transparent bg-[var(----epic-action-outline-bg-default,white)] border border-[var(----epic-action-outline-border-default,#d6d6d6)] border-solid content-stretch flex gap-[var(----epic-button-gap,4px)] items-center justify-center px-[var(----epic-button-md-padding-inline,12px)] py-[var(----epic-button-md-padding-block,10px)] relative rounded-[var(----epic-radius-button,8px)] shrink-0" data-node-id="35:32963" data-name="Button" type="button" variant="ghost" onClick={event => onAction("35:32963", "Update name", event)}>
            <div className="content-stretch flex gap-[var(----epic-button-link-padding,0px)] items-center px-[4px] relative shrink-0" data-node-id="I35:32963;76:2794" data-name="Text">
              <p className="[word-break:break-word] font-inter font-medium leading-[1.45] not-italic relative shrink-0 text-[14px] text-[color:var(----epic-action-outline-fg-default,black)] whitespace-nowrap" data-node-id="I35:32963;76:2795">{values["Update name"] ?? "Update name"}</p>
            </div>
          </Button>
        </div>
      </div>
    </div>;
}
