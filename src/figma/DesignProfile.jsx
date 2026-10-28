import React from 'react';
import {Button} from '@/components/ui/button';
import {Card} from '@/components/ui/card';
import {DesignField} from '@/figma/fields';
const imgVector6921 = "/figma/35-32918-38fab.svg";
export default function DesignProfile({
  onAction = () => {},
  onValueChange = () => {},
  values = {}
} = {}) {
  return <div className="border border-[#f5f5f5] border-solid content-stretch flex flex-col gap-[8px] items-start relative rounded-[24px] size-full" data-node-id="35:32918">
      <div className="[word-break:break-word] flex flex-col font-inter font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-[color:var(--text-tertiary,#767676)] uppercase w-full" data-node-id="35:32919">
        <p className="leading-[1.45]">{values["Profile"] ?? "Profile"}</p>
      </div>
      <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-node-id="35:32920">
        <div className="content-stretch flex gap-[40px] items-center relative shrink-0 w-full" data-node-id="35:32921">
          <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-w-px not-italic py-[8px] relative rounded-[8px]" data-node-id="35:32922">
            <div className="flex flex-col font-inter font-medium justify-center leading-[0] relative shrink-0 text-[14px] text-[color:var(--text-secondary,#434343)] w-full" data-node-id="35:32923">
              <p className="leading-[1.45]">{values["Email address"] ?? "Email address"}</p>
            </div>
            <p className="font-inter font-semibold leading-[1.45] relative shrink-0 text-[16px] text-[color:var(--text-primary,black)] w-full" data-node-id="35:32924">{values["janice.mills@gamepark.com"] ?? "janice.mills@gamepark.com"}</p>
          </div>
          <Button className="h-auto shadow-none hover:bg-transparent bg-[var(----epic-action-outline-bg-default,white)] border border-[var(----epic-action-outline-border-default,#d6d6d6)] border-solid content-stretch flex gap-[var(----epic-button-gap,4px)] items-center justify-center px-[var(----epic-button-md-padding-inline,12px)] py-[var(----epic-button-md-padding-block,10px)] relative rounded-[var(----epic-radius-button,8px)] shrink-0" data-node-id="35:32925" data-name="Button" type="button" variant="ghost" onClick={event => onAction("35:32925", "Update email", event)}>
            <div className="content-stretch flex gap-[var(----epic-button-link-padding,0px)] items-center px-[4px] relative shrink-0" data-node-id="I35:32925;76:2794" data-name="Text">
              <p className="[word-break:break-word] font-inter font-medium leading-[1.45] not-italic relative shrink-0 text-[14px] text-[color:var(----epic-action-outline-fg-default,black)] whitespace-nowrap" data-node-id="I35:32925;76:2795">{values["Update email"] ?? "Update email"}</p>
            </div>
          </Button>
        </div>
        <div className="h-0 relative shrink-0 w-full" data-node-id="35:32926">
          <div className="absolute inset-[-0.5px_0]">
            <img alt="" className="block max-w-none size-full" src={imgVector6921} />
          </div>
        </div>
        <div className="content-stretch flex gap-[40px] items-center relative shrink-0 w-full" data-node-id="35:32927">
          <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-w-px not-italic py-[8px] relative rounded-[8px]" data-node-id="35:32928">
            <div className="flex flex-col font-inter font-medium justify-center leading-[0] relative shrink-0 text-[14px] text-[color:var(--text-secondary,#434343)] w-full" data-node-id="35:32929">
              <p className="leading-[1.45]">{values["Name"] ?? "Name"}</p>
            </div>
            <p className="font-inter font-semibold leading-[1.45] relative shrink-0 text-[16px] text-[color:var(--text-primary,black)] w-full" data-node-id="35:32930">{values["Kwame Nkrumah"] ?? "Kwame Nkrumah"}</p>
          </div>
          <Button className="h-auto shadow-none hover:bg-transparent bg-[var(----epic-action-outline-bg-default,white)] border border-[var(----epic-action-outline-border-default,#d6d6d6)] border-solid content-stretch flex gap-[var(----epic-button-gap,4px)] items-center justify-center px-[var(----epic-button-md-padding-inline,12px)] py-[var(----epic-button-md-padding-block,10px)] relative rounded-[var(----epic-radius-button,8px)] shrink-0" data-node-id="35:32931" data-name="Button" type="button" variant="ghost" onClick={event => onAction("35:32931", "Update name", event)}>
            <div className="content-stretch flex gap-[var(----epic-button-link-padding,0px)] items-center px-[4px] relative shrink-0" data-node-id="I35:32931;76:2794" data-name="Text">
              <p className="[word-break:break-word] font-inter font-medium leading-[1.45] not-italic relative shrink-0 text-[14px] text-[color:var(----epic-action-outline-fg-default,black)] whitespace-nowrap" data-node-id="I35:32931;76:2795">{values["Update name"] ?? "Update name"}</p>
            </div>
          </Button>
        </div>
        <div className="h-0 relative shrink-0 w-full" data-node-id="35:32932">
          <div className="absolute inset-[-0.5px_0]">
            <img alt="" className="block max-w-none size-full" src={imgVector6921} />
          </div>
        </div>
        <div className="content-stretch flex gap-[40px] items-center relative shrink-0 w-full" data-node-id="35:32933">
          <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-w-px not-italic py-[8px] relative rounded-[8px]" data-node-id="35:32934">
            <div className="flex flex-col font-inter font-medium justify-center leading-[0] relative shrink-0 text-[14px] text-[color:var(--text-secondary,#434343)] w-full" data-node-id="35:32935">
              <p className="leading-[1.45]">{values["Role"] ?? "Role"}</p>
            </div>
            <p className="font-inter font-semibold leading-[1.45] relative shrink-0 text-[16px] text-[color:var(--text-primary,black)] w-full" data-node-id="35:32936">{values["Manager"] ?? "Manager"}</p>
          </div>
          <Button className="h-auto shadow-none hover:bg-transparent bg-[var(----epic-action-outline-bg-default,white)] border border-[var(----epic-action-outline-border-default,#d6d6d6)] border-solid content-stretch flex gap-[var(----epic-button-gap,4px)] items-center justify-center px-[var(----epic-button-md-padding-inline,12px)] py-[var(----epic-button-md-padding-block,10px)] relative rounded-[var(----epic-radius-button,8px)] shrink-0" data-node-id="35:32937" data-name="Button" type="button" variant="ghost" onClick={event => onAction("35:32937", "Update name", event)}>
            <div className="content-stretch flex gap-[var(----epic-button-link-padding,0px)] items-center px-[4px] relative shrink-0" data-node-id="I35:32937;76:2794" data-name="Text">
              <p className="[word-break:break-word] font-inter font-medium leading-[1.45] not-italic relative shrink-0 text-[14px] text-[color:var(----epic-action-outline-fg-default,black)] whitespace-nowrap" data-node-id="I35:32937;76:2795">{values["Update name"] ?? "Update name"}</p>
            </div>
          </Button>
        </div>
        <div className="h-0 relative shrink-0 w-full" data-node-id="35:32938">
          <div className="absolute inset-[-0.5px_0]">
            <img alt="" className="block max-w-none size-full" src={imgVector6921} />
          </div>
        </div>
        <div className="content-stretch flex gap-[40px] items-center relative shrink-0 w-full" data-node-id="35:32939">
          <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-w-px not-italic py-[8px] relative rounded-[8px]" data-node-id="35:32940">
            <div className="flex flex-col font-inter font-medium justify-center leading-[0] relative shrink-0 text-[14px] text-[color:var(--text-secondary,#434343)] w-full" data-node-id="35:32941">
              <p className="leading-[1.45]">{values["Manage email notification preferences"] ?? "Manage email notification preferences"}</p>
            </div>
            <p className="font-inter font-semibold leading-[1.45] relative shrink-0 text-[16px] text-[color:var(--text-primary,black)] w-full" data-node-id="35:32942">{values["Notifications"] ?? "Notifications"}</p>
          </div>
          <Button className="h-auto shadow-none hover:bg-transparent bg-[var(----epic-action-outline-bg-default,white)] border border-[var(----epic-action-outline-border-default,#d6d6d6)] border-solid content-stretch flex gap-[var(----epic-button-gap,4px)] items-center justify-center px-[var(----epic-button-md-padding-inline,12px)] py-[var(----epic-button-md-padding-block,10px)] relative rounded-[var(----epic-radius-button,8px)] shrink-0" data-node-id="35:32943" data-name="Button" type="button" variant="ghost" onClick={event => onAction("35:32943", "Update name", event)}>
            <div className="content-stretch flex gap-[var(----epic-button-link-padding,0px)] items-center px-[4px] relative shrink-0" data-node-id="I35:32943;76:2794" data-name="Text">
              <p className="[word-break:break-word] font-inter font-medium leading-[1.45] not-italic relative shrink-0 text-[14px] text-[color:var(----epic-action-outline-fg-default,black)] whitespace-nowrap" data-node-id="I35:32943;76:2795">{values["Update name"] ?? "Update name"}</p>
            </div>
          </Button>
        </div>
      </div>
    </div>;
}
