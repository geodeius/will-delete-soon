import React from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { DesignField } from '@/figma/fields';
const imgX = "/figma/35-35278-5a593.svg";
const imgSealCheck = "/figma/35-35278-68ca8.svg";
const imgVector215 = "/figma/35-35278-13c2a.svg";
const imgExport = "/figma/35-35278-ae937.svg";
export default function DesignTransactionDetail({
  onAction = () => {},
  onValueChange = () => {},
  values = {}
} = {}) {
  return <div className="bg-white content-stretch flex flex-col items-start overflow-clip relative rounded-[8px] size-full" data-node-id="35:35278" data-name="b">
      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="35:35279">
        <div className="bg-white content-stretch flex flex-col items-center justify-center overflow-clip px-[24px] py-[16px] relative shrink-0 w-full" data-node-id="35:35280">
          <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-node-id="35:35281">
            <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[5px] items-start min-w-px relative" data-node-id="35:35282">
              <p className="font-hanken font-semibold leading-[var(--font-line-height-l,22px)] relative shrink-0 text-[#242424] text-[length:var(--font-size-l,18px)] whitespace-nowrap" data-node-id="35:35283">{values["Transaction details"] ?? "Transaction details"}</p>
              <p className="font-hanken font-normal leading-[var(--font-size-l,18px)] min-w-full relative shrink-0 text-[14px] text-[color:var(--text-secondary,#434343)] w-[min-content]" data-node-id="35:35284">{values["View the details of USSD meesage"] ?? "View the details of USSD meesage"}</p>
            </div>
            <Button className="h-auto shadow-none hover:bg-transparent bg-[#f5f5f5] content-stretch flex gap-[8px] items-center px-[8px] py-[6px] relative rounded-[8px] shrink-0" data-node-id="35:35285" type="button" variant="ghost" onClick={event => onAction("35:35285", "Close", event)} aria-label="Close details">
              <div className="relative shrink-0 size-[16px]" data-node-id="35:35286" data-name="X">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgX} />
              </div>
            </Button>
          </div>
        </div>
      </div>
      <div className="content-stretch flex items-start relative shrink-0 w-full" data-node-id="35:35291">
        <div className="content-stretch flex flex-[1_0_0] flex-col gap-[24px] items-start min-w-px relative" data-node-id="35:35305">
          <div className="content-stretch flex flex-col gap-[24px] items-start px-[24px] py-[16px] relative shrink-0 w-full" data-node-id="35:35326">
            <div className="content-stretch flex flex-col gap-[16px] items-center justify-center relative shrink-0 w-full" data-node-id="35:35330">
              <p className="[word-break:break-word] font-inter font-bold leading-[1.2] min-w-full not-italic overflow-hidden relative shrink-0 text-[36px] text-[color:var(--text-primary,black)] text-center text-ellipsis tracking-[-1.44px] w-[min-content] whitespace-nowrap" data-node-id="35:35331">{values["GH\u20B550.00"] ?? "GH\u20B550.00"}</p>
              <div className="bg-[var(--bg-success,#f9ffe5)] content-stretch flex gap-[8px] items-center pl-[8px] pr-[10px] py-[2px] relative rounded-[16px] shrink-0" data-node-id="35:35332" data-name="Badge">
                <div className="relative shrink-0 size-[12px]" data-node-id="I35:35332;2367:47557" data-name="SealCheck">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgSealCheck} />
                </div>
                <p className="[word-break:break-word] font-inter font-normal leading-[1.45] not-italic relative shrink-0 text-[14px] text-[color:var(--text-on-success,#3d580f)] text-center whitespace-nowrap" data-node-id="I35:35332;2367:47558">{values["Complete"] ?? "Complete"}</p>
              </div>
            </div>
            <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-node-id="35:35333">
              <div className="h-0 relative shrink-0 w-full" data-node-id="35:35334">
                <div className="absolute inset-[-0.5px_0]">
                  <img alt="" className="block max-w-none size-full" src={imgVector215} />
                </div>
              </div>
              <div className="[word-break:break-word] content-stretch flex gap-[8px] items-center justify-center leading-[1.45] not-italic relative shrink-0 w-full whitespace-nowrap" data-node-id="35:35335">
                <p className="flex-[1_0_0] font-inter font-normal min-w-px overflow-hidden relative text-[14px] text-[color:var(--text-secondary,#434343)] text-ellipsis" data-node-id="35:35336">{values["Transaction type"] ?? "Transaction type"}</p>
                <p className="flex-[1_0_0] font-inter font-medium min-w-px overflow-hidden relative text-[16px] text-[color:var(--text-primary,black)] text-ellipsis text-right" data-node-id="35:35337">{values["Collection"] ?? "Collection"}</p>
              </div>
              <div className="h-0 relative shrink-0 w-full" data-node-id="35:35338">
                <div className="absolute inset-[-0.5px_0]">
                  <img alt="" className="block max-w-none size-full" src={imgVector215} />
                </div>
              </div>
              <div className="[word-break:break-word] content-stretch flex gap-[8px] items-center justify-center leading-[1.45] not-italic relative shrink-0 w-full whitespace-nowrap" data-node-id="35:35339">
                <p className="flex-[1_0_0] font-inter font-normal min-w-px overflow-hidden relative text-[14px] text-[color:var(--text-secondary,#434343)] text-ellipsis" data-node-id="35:35340">{values["Customer / recipient phone number"] ?? "Customer / recipient phone number"}</p>
                <p className="flex-[1_0_0] font-inter font-medium min-w-px overflow-hidden relative text-[16px] text-[color:var(--text-primary,black)] text-ellipsis text-right" data-node-id="35:35341">{values["+233550192123"] ?? "+233550192123"}</p>
              </div>
              <div className="h-0 relative shrink-0 w-full" data-node-id="35:35342">
                <div className="absolute inset-[-0.5px_0]">
                  <img alt="" className="block max-w-none size-full" src={imgVector215} />
                </div>
              </div>
              <div className="[word-break:break-word] content-stretch flex gap-[8px] items-center justify-center leading-[1.45] not-italic relative shrink-0 w-full whitespace-nowrap" data-node-id="35:35343">
                <p className="flex-[1_0_0] font-inter font-normal min-w-px overflow-hidden relative text-[14px] text-[color:var(--text-secondary,#434343)] text-ellipsis" data-node-id="35:35344">{values["Transaction ID"] ?? "Transaction ID"}</p>
                <p className="flex-[1_0_0] font-inter font-medium min-w-px overflow-hidden relative text-[16px] text-[color:var(--text-primary,black)] text-ellipsis text-right" data-node-id="35:35345">{values["CS-212-121"] ?? "CS-212-121"}</p>
              </div>
              <div className="[word-break:break-word] content-stretch flex gap-[8px] items-center justify-center leading-[1.45] not-italic relative shrink-0 w-full whitespace-nowrap" data-node-id="35:35346">
                <p className="flex-[1_0_0] font-inter font-normal min-w-px overflow-hidden relative text-[14px] text-[color:var(--text-secondary,#434343)] text-ellipsis" data-node-id="35:35347">{values["Date and time created"] ?? "Date and time created"}</p>
                <p className="flex-[1_0_0] font-inter font-medium min-w-px overflow-hidden relative text-[16px] text-[color:var(--text-primary,black)] text-ellipsis text-right" data-node-id="35:35348">{values["17 Jan 2025 - 12:23 PM"] ?? "17 Jan 2025 - 12:23 PM"}</p>
              </div>
            </div>
          </div>
          <div className="border-[#f5f5f5] border-solid border-t content-stretch flex flex-col gap-[8px] items-center justify-center px-[16px] py-[12px] relative shrink-0 w-full" data-node-id="35:35429" data-name="Invite accepted actions">
            <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0 w-full" data-node-id="35:35430">
              <Button className="h-auto shadow-none hover:bg-transparent bg-[var(----epic-action-outline-bg-default,white)] border border-[var(----epic-action-outline-border-default,#d6d6d6)] border-solid content-stretch flex flex-[1_0_0] gap-[var(----epic-button-gap,4px)] items-center justify-center min-w-px px-[var(----epic-button-sm-padding-inline,12px)] py-[6px] relative rounded-[var(----epic-radius-button,8px)]" data-node-id="35:35433" data-name="Button" type="button" variant="ghost" onClick={event => onAction("35:35433", "Cancel", event)}>
                <div className="content-stretch flex gap-[var(----epic-button-link-padding,0px)] items-center px-[4px] relative shrink-0" data-node-id="I35:35433;76:3016" data-name="Text">
                  <p className="[word-break:break-word] font-inter font-medium leading-[1.45] not-italic relative shrink-0 text-[14px] text-[color:var(----epic-action-outline-fg-default,black)] whitespace-nowrap" data-node-id="I35:35433;76:3017">{values["Cancel"] ?? "Cancel"}</p>
                </div>
              </Button>
              <Button className="h-auto shadow-none hover:bg-transparent bg-[var(----epic-action-primary-bg-default,black)] content-stretch flex flex-[1_0_0] gap-[var(----epic-button-gap,4px)] items-center justify-center min-w-px px-[var(----epic-button-sm-padding-inline,12px)] py-[6px] relative rounded-[var(----epic-radius-button,8px)]" data-node-id="35:35434" data-name="Button" type="button" variant="ghost" onClick={event => onAction("35:35434", "Export report", event)}>
                <div className="relative shrink-0 size-[16px]" data-node-id="I35:35434;76:3005" data-name="arrow-left">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgExport} />
                </div>
                <div className="content-stretch flex gap-[var(----epic-button-link-padding,0px)] items-center px-[4px] relative shrink-0" data-node-id="I35:35434;76:3006" data-name="Text">
                  <p className="[word-break:break-word] font-inter font-medium leading-[1.45] not-italic relative shrink-0 text-[14px] text-[color:var(----epic-action-primary-fg-default,white)] whitespace-nowrap" data-node-id="I35:35434;76:3007">{values["Export report"] ?? "Export report"}</p>
                </div>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>;
}
