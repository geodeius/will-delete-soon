import React from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { DesignField } from '@/figma/fields';
const imgX = "/figma/35-43592-5a593.svg";
const imgSealCheck = "/figma/35-43592-68ca8.svg";
const imgVector215 = "/figma/35-43592-7dac1.svg";
const imgExport = "/figma/35-43592-ae937.svg";
export default function DesignSmsDetail({
  onAction = () => {},
  onValueChange = () => {},
  values = {}
} = {}) {
  return <div className="bg-[var(--bg-secondary,#f5f5f5)] content-stretch flex flex-col gap-[8px] items-start relative size-full" data-node-id="35:43592" data-name="b">
      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="35:43593">
        <div className="bg-white content-stretch flex flex-col items-center justify-center overflow-clip px-[24px] py-[16px] relative shrink-0 w-full" data-node-id="35:43594">
          <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-node-id="35:43595">
            <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[5px] items-start min-w-px relative" data-node-id="35:43596">
              <p className="font-hanken font-semibold leading-[var(--font-line-height-l,22px)] relative shrink-0 text-[#242424] text-[length:var(--font-size-l,18px)] whitespace-nowrap" data-node-id="35:43597">{values["Transaction details"] ?? "Transaction details"}</p>
              <p className="font-hanken font-normal leading-[var(--font-size-l,18px)] min-w-full relative shrink-0 text-[14px] text-[color:var(--text-secondary,#434343)] w-[min-content]" data-node-id="35:43598">{values["View the details of SMS top-up"] ?? "View the details of SMS top-up"}</p>
            </div>
            <Button className="h-auto shadow-none hover:bg-transparent bg-[#f5f5f5] content-stretch flex gap-[8px] items-center px-[8px] py-[6px] relative rounded-[8px] shrink-0" data-node-id="35:43599" type="button" variant="ghost" onClick={event => onAction("35:43599", "Close", event)} aria-label="Close details">
              <div className="relative shrink-0 size-[16px]" data-node-id="35:43600" data-name="X">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgX} />
              </div>
            </Button>
          </div>
        </div>
      </div>
      <div className="bg-[var(--bg-primary,white)] content-stretch flex flex-[1_0_0] items-start min-h-px relative w-full" data-node-id="35:43605">
        <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] h-full items-start min-w-px p-[16px] relative" data-node-id="35:43606">
          <div className="bg-[var(--color-neutral-50,white)] content-stretch flex flex-col gap-[16px] items-start p-[16px] relative rounded-[8px] shrink-0 w-full" data-node-id="35:43627">
            <div className="content-stretch flex flex-col gap-[16px] items-center justify-center relative shrink-0 w-full" data-node-id="35:43631">
              <p className="[word-break:break-word] font-inter font-normal leading-[1.45] min-w-full not-italic overflow-hidden relative shrink-0 text-[14px] text-[color:var(--text-secondary,#434343)] text-center text-ellipsis w-[min-content] whitespace-nowrap" data-node-id="35:43632">{values["Top-up amount"] ?? "Top-up amount"}</p>
              <p className="[word-break:break-word] font-inter font-bold leading-[1.2] min-w-full not-italic overflow-hidden relative shrink-0 text-[36px] text-[color:var(--text-primary,black)] text-center text-ellipsis tracking-[-1.44px] w-[min-content] whitespace-nowrap" data-node-id="35:43633">{values["GH\u20B5500.00"] ?? "GH\u20B5500.00"}</p>
              <div className="bg-[var(--bg-success,#f9ffe5)] content-stretch flex gap-[8px] items-center pl-[8px] pr-[10px] py-[2px] relative rounded-[16px] shrink-0" data-node-id="35:43634" data-name="Badge">
                <div className="relative shrink-0 size-[12px]" data-node-id="I35:43634;2367:47557" data-name="SealCheck">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgSealCheck} />
                </div>
                <p className="[word-break:break-word] font-inter font-normal leading-[1.45] not-italic relative shrink-0 text-[14px] text-[color:var(--text-on-success,#3d580f)] text-center whitespace-nowrap" data-node-id="I35:43634;2367:47558">{values["Complete"] ?? "Complete"}</p>
              </div>
            </div>
            <div className="h-0 relative shrink-0 w-full" data-node-id="35:43635">
              <div className="absolute inset-[-0.5px_0]">
                <img alt="" className="block max-w-none size-full" src={imgVector215} />
              </div>
            </div>
            <div className="[word-break:break-word] content-stretch flex gap-[8px] items-center leading-[1.45] not-italic relative shrink-0 w-full whitespace-nowrap" data-node-id="35:43636">
              <p className="flex-[1_0_0] font-inter font-normal min-w-px overflow-hidden relative text-[14px] text-[color:var(--text-secondary,#434343)] text-ellipsis" data-node-id="35:43637">{values["Reference number"] ?? "Reference number"}</p>
              <p className="flex-[1_0_0] font-inter font-medium min-w-px overflow-hidden relative text-[16px] text-[color:var(--text-primary,black)] text-ellipsis text-right" data-node-id="35:43638">{values["UOTP-123-124-124"] ?? "UOTP-123-124-124"}</p>
            </div>
            <div className="h-0 relative shrink-0 w-full" data-node-id="35:43639">
              <div className="absolute inset-[-0.5px_0]">
                <img alt="" className="block max-w-none size-full" src={imgVector215} />
              </div>
            </div>
            <div className="[word-break:break-word] content-stretch flex gap-[8px] items-center leading-[1.45] not-italic relative shrink-0 w-full whitespace-nowrap" data-node-id="35:43640">
              <p className="flex-[1_0_0] font-inter font-normal min-w-px overflow-hidden relative text-[14px] text-[color:var(--text-secondary,#434343)] text-ellipsis" data-node-id="35:43641">{values["Source account"] ?? "Source account"}</p>
              <p className="flex-[1_0_0] font-inter font-medium min-w-px overflow-hidden relative text-[16px] text-[color:var(--text-primary,black)] text-ellipsis text-right" data-node-id="35:43642">{values["GamePark wallet \xB7 \u2022\u2022 4208"] ?? "GamePark wallet \xB7 \u2022\u2022 4208"}</p>
            </div>
            <div className="h-0 relative shrink-0 w-full" data-node-id="35:43643">
              <div className="absolute inset-[-0.5px_0]">
                <img alt="" className="block max-w-none size-full" src={imgVector215} />
              </div>
            </div>
            <div className="[word-break:break-word] content-stretch flex gap-[8px] items-center leading-[1.45] not-italic relative shrink-0 w-full whitespace-nowrap" data-node-id="35:43644">
              <p className="flex-[1_0_0] font-inter font-normal min-w-px overflow-hidden relative text-[14px] text-[color:var(--text-secondary,#434343)] text-ellipsis" data-node-id="35:43645">{values["Date and time created"] ?? "Date and time created"}</p>
              <p className="flex-[1_0_0] font-inter font-medium min-w-px overflow-hidden relative text-[16px] text-[color:var(--text-primary,black)] text-ellipsis text-right" data-node-id="35:43646">{values["17 Jan 2025 - 12:23 PM"] ?? "17 Jan 2025 - 12:23 PM"}</p>
            </div>
          </div>
          <div className="bg-[var(--bg-neutral,#f5f5f5)] content-stretch flex flex-col gap-[16px] items-start p-[16px] relative rounded-[8px] shrink-0 w-full" data-node-id="35:43728">
            <p className="[word-break:break-word] font-inter font-medium leading-[1.45] min-w-full not-italic overflow-hidden relative shrink-0 text-[16px] text-[color:var(--text-primary,black)] text-ellipsis w-[min-content] whitespace-nowrap" data-node-id="35:43732">{values["Activity"] ?? "Activity"}</p>
            <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="35:43733">
              <div className="content-stretch flex gap-[16px] items-center mb-[-3px] relative shrink-0 w-full" data-node-id="35:43734" data-name="stepper">
                <div className="bg-[var(--bg-success-solid,#7ab600)] content-stretch flex flex-col items-center justify-center overflow-clip px-[12px] py-[7px] relative rounded-[999px] shrink-0" data-node-id="I35:43734;2198:10554" data-name="stepperNumber">
                  <p className="[word-break:break-word] font-inter font-bold leading-[1.2] relative shrink-0 text-[16px] text-center text-white w-full" data-node-id="I35:43734;2198:10554;2198:10544">{values["1"] ?? "1"}</p>
                </div>
                <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col items-start leading-[1.45] min-w-px not-italic relative" data-node-id="I35:43734;2198:10555">
                  <p className="font-inter font-medium relative shrink-0 text-[16px] text-[color:var(--text-text-primary,#0a0a0a)] w-full" data-node-id="I35:43734;2198:10557">{values["Low balance detected"] ?? "Low balance detected"}</p>
                  <p className="font-inter font-normal relative shrink-0 text-[14px] text-[color:var(--text-text-tertiary,#525252)] w-full" data-node-id="I35:43734;2198:10556">{values["17 Jan 2025 - 12:23 PM"] ?? "17 Jan 2025 - 12:23 PM"}</p>
                </div>
              </div>
              <div className="content-stretch flex items-center mb-[-3px] px-[16px] relative shrink-0" data-node-id="35:43735">
                <div className="bg-[var(--bg-success-solid,#7ab600)] h-[43px] relative rounded-[999px] shrink-0 w-[2px]" data-node-id="35:43736" data-name="stepperIndicator" />
              </div>
              <div className="content-stretch flex gap-[16px] items-center mb-[-3px] relative shrink-0 w-full" data-node-id="35:43737" data-name="stepper">
                <div className="bg-[var(--bg-success-solid,#7ab600)] content-stretch flex flex-col items-center justify-center overflow-clip px-[12px] py-[7px] relative rounded-[999px] shrink-0" data-node-id="I35:43737;2198:10554" data-name="stepperNumber">
                  <p className="[word-break:break-word] font-inter font-bold leading-[1.2] relative shrink-0 text-[16px] text-center text-white w-full" data-node-id="I35:43737;2198:10554;2198:10544">{values["2"] ?? "2"}</p>
                </div>
                <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col items-start leading-[1.45] min-w-px not-italic relative" data-node-id="I35:43737;2198:10555">
                  <p className="font-inter font-medium relative shrink-0 text-[16px] text-[color:var(--text-text-primary,#0a0a0a)] w-full" data-node-id="I35:43737;2198:10557">{values["Top-up initiated"] ?? "Top-up initiated"}</p>
                  <p className="font-inter font-normal relative shrink-0 text-[14px] text-[color:var(--text-text-tertiary,#525252)] w-full" data-node-id="I35:43737;2198:10556">{values["17 Jan 2025 - 12:24 PM"] ?? "17 Jan 2025 - 12:24 PM"}</p>
                </div>
              </div>
              <div className="content-stretch flex items-center mb-[-3px] px-[16px] relative shrink-0" data-node-id="35:43738">
                <div className="bg-[var(--bg-success-solid,#7ab600)] h-[43px] relative rounded-[999px] shrink-0 w-[2px]" data-node-id="35:43739" data-name="stepperIndicator" />
              </div>
              <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full" data-node-id="35:43741" data-name="stepper">
                <div className="bg-[var(--bg-success-solid,#7ab600)] content-stretch flex flex-col items-center justify-center overflow-clip px-[12px] py-[7px] relative rounded-[999px] shrink-0" data-node-id="I35:43741;2198:10554" data-name="stepperNumber">
                  <p className="[word-break:break-word] font-inter font-bold leading-[1.2] relative shrink-0 text-[16px] text-center text-white w-full" data-node-id="I35:43741;2198:10554;2198:10544">{values["3"] ?? "3"}</p>
                </div>
                <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col items-start leading-[1.45] min-w-px not-italic relative" data-node-id="I35:43741;2198:10555">
                  <p className="font-inter font-medium relative shrink-0 text-[16px] text-[color:var(--text-text-primary,#0a0a0a)] w-full" data-node-id="I35:43741;2198:10557">{values["Top-up confirmed"] ?? "Top-up confirmed"}</p>
                  <p className="font-inter font-normal relative shrink-0 text-[14px] text-[color:var(--text-text-tertiary,#525252)] w-full" data-node-id="I35:43741;2198:10556">{values["17 Jan 2025 - 1:40 PM"] ?? "17 Jan 2025 - 1:40 PM"}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[var(--bg-primary,white)] border-[#f5f5f5] border-solid border-t content-stretch flex flex-col gap-[8px] items-center justify-center px-[16px] py-[12px] relative shrink-0 w-full" data-node-id="35:43838" data-name="Invite accepted actions">
        <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0 w-full" data-node-id="35:43839">
          <Button className="h-auto shadow-none hover:bg-transparent bg-[var(----epic-action-outline-bg-default,white)] border border-[var(----epic-action-outline-border-default,#d6d6d6)] border-solid content-stretch flex flex-[1_0_0] gap-[var(----epic-button-gap,4px)] items-center justify-center min-w-px px-[var(----epic-button-md-padding-inline,12px)] py-[12px] relative rounded-[var(----epic-radius-button,8px)]" data-node-id="35:43842" data-name="Button" type="button" variant="ghost" onClick={event => onAction("35:43842", "Cancel", event)}>
            <div className="content-stretch flex gap-[var(----epic-button-link-padding,0px)] items-center px-[4px] relative shrink-0" data-node-id="I35:43842;76:2794" data-name="Text">
              <p className="[word-break:break-word] font-inter font-medium leading-[1.45] not-italic relative shrink-0 text-[14px] text-[color:var(----epic-action-outline-fg-default,black)] whitespace-nowrap" data-node-id="I35:43842;76:2795">{values["Cancel"] ?? "Cancel"}</p>
            </div>
          </Button>
          <Button className="h-auto shadow-none hover:bg-transparent bg-[var(----epic-action-primary-bg-default,black)] content-stretch flex flex-[1_0_0] gap-[var(----epic-button-gap,4px)] items-center justify-center min-w-px px-[var(----epic-button-md-padding-inline,12px)] py-[12px] relative rounded-[var(----epic-radius-button,8px)]" data-node-id="35:43843" data-name="Button" type="button" variant="ghost" onClick={event => onAction("35:43843", "Export report", event)}>
            <div className="relative shrink-0 size-[16px]" data-node-id="I35:43843;76:2783" data-name="arrow-left">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgExport} />
            </div>
            <div className="content-stretch flex gap-[var(----epic-button-link-padding,0px)] items-center px-[4px] relative shrink-0" data-node-id="I35:43843;76:2784" data-name="Text">
              <p className="[word-break:break-word] font-inter font-medium leading-[1.45] not-italic relative shrink-0 text-[14px] text-[color:var(----epic-action-primary-fg-default,white)] whitespace-nowrap" data-node-id="I35:43843;76:2785">{values["Export report"] ?? "Export report"}</p>
            </div>
          </Button>
        </div>
      </div>
    </div>;
}
