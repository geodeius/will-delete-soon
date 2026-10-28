import React from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { DesignField } from '@/figma/fields';
const imgEllipse = "/figma/35-26753-b4550.png";
const imgMenuIcon = "/figma/35-26753-fa5fc.svg";
const imgMagnifyingGlass = "/figma/35-26753-c2a5b.svg";
const imgIcon = "/figma/35-26753-91117.svg";
const imgMenuIcon1 = "/figma/35-26753-a3d2e.svg";
export default function DesignNavbar({
  onAction = () => {},
  onValueChange = () => {},
  values = {}
} = {}) {
  return <div className="bg-[rgba(255,255,255,0.8)] border-[var(--border-primary,#e6e6e6)] border-b-[1.5px] border-solid content-stretch flex items-center justify-between px-[32px] py-[12px] relative size-full" data-node-id="35:26753" data-name="Navbar/Default">
      <div className="content-stretch flex gap-[16px] items-center relative shrink-0" data-node-id="35:26754">
        <Button className="h-auto shadow-none hover:bg-transparent relative shrink-0 size-[20px]" data-node-id="35:26755" data-name="Menu icon" type="button" variant="ghost" onClick={event => onAction("35:26755", "Close", event)} aria-label="Toggle navigation">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgMenuIcon} />
        </Button>
        <div className="content-stretch flex h-[38px] items-center justify-center relative shrink-0" data-node-id="35:26756" data-name="Breadcrumbs">
          <div className="content-stretch flex flex-col gap-[8px] items-center justify-center relative shrink-0" data-node-id="I35:26756;2058:13308" data-name="Container">
            <div className="content-stretch flex items-center relative shrink-0" data-node-id="I35:26756;2058:13311" data-name="Content + Separators">
              <div className="content-stretch flex gap-[4px] items-start relative shrink-0" data-node-id="I35:26756;2058:13312" data-name="Content">
                <div className="[word-break:break-word] flex flex-col font-hanken font-medium justify-center leading-[0] relative shrink-0 text-[color:var(--text-secondary,#434343)] text-[length:var(--font-size-m,16px)] whitespace-nowrap" data-node-id="I35:26756;2058:13314">
                  <p className="leading-[var(--font-line-height-m,19px)]">{values["Overview"] ?? "Overview"}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <DesignField nodeId="35:26757" className="content-stretch flex flex-col gap-[var(--ui-spacing-spacing-4,4px)] items-start justify-center p-[var(--ui-spacing-spacing-0,0px)] relative shrink-0 w-[204px]" value={values["35:26757"]} onValueChange={onValueChange} />
      <div className="flex flex-row items-center self-stretch" data-node-id="35:26770">
        <div className="content-stretch flex gap-[8px] h-full items-center justify-end relative shrink-0">
          <div className="[word-break:break-word] bg-[var(--color-purple-50,#f4f1ff)] border border-[var(--color-purple-200,#dacfff)] border-solid content-stretch flex flex-col font-hanken font-medium gap-px h-[40px] items-start justify-center leading-[0] overflow-clip px-[12px] py-[8px] relative rounded-[8px] shrink-0 w-[93px] whitespace-nowrap" data-node-id="35:26771" data-name="Notifications">
            <div className="flex flex-col justify-end relative shrink-0 text-[color:var(--text-secondary,#434343)] text-[length:var(--font-size-xs,10px)]" data-node-id="35:26772">
              <p className="leading-[var(--font-line-height-xs,12px)]">{values["Balance"] ?? "Balance"}</p>
            </div>
            <div className="flex flex-col justify-end relative shrink-0 text-[#242424] text-[length:var(--font-size-s,13px)]" data-node-id="35:26773">
              <p className="leading-[var(--font-size-l,18px)]">{values["GHS 0.00"] ?? "GHS 0.00"}</p>
            </div>
          </div>
          <Button className="h-auto shadow-none hover:bg-transparent bg-white border border-[var(--border-primary,#e6e6e6)] border-solid content-stretch flex gap-[8px] h-[40px] items-center overflow-clip px-[8px] py-[12px] relative rounded-[8px] shrink-0" data-node-id="35:26774" data-name="Notifications" type="button" variant="ghost" onClick={event => onAction("35:26774", "0", event)} aria-label="Notifications">
            <div className="relative shrink-0 size-[20px]" data-node-id="I35:26774;2049:5256" data-name="icon">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcon} />
            </div>
            <div className="bg-[#9e9e9e] relative rounded-[999px] shrink-0 size-[2px]" data-node-id="I35:26774;2049:5260" />
            <div className="[word-break:break-word] flex flex-col font-hanken font-normal justify-end leading-[0] relative shrink-0 text-[#242424] text-[length:var(--font-size-m,16px)] whitespace-nowrap" data-node-id="I35:26774;2049:5259">
              <p className="leading-[var(--font-line-height-m,19px)]">{values["0"] ?? "0"}</p>
            </div>
          </Button>
          <Button className="h-auto shadow-none hover:bg-transparent bg-white border border-[var(--border-primary,#e6e6e6)] border-solid content-stretch flex gap-[8px] h-[40px] items-center p-[8px] relative rounded-[8px] shrink-0" data-node-id="35:26775" type="button" variant="ghost" onClick={event => onAction("35:26775", "Janice Mills info@rancard.com", event)} aria-label="Account menu">
            <div className="content-stretch flex gap-[8px] h-[32px] items-center relative shrink-0" data-node-id="35:26776" data-name="User profile">
              <div className="relative shrink-0 size-[32px]" data-node-id="35:26777" data-name="Ellipse">
                <img alt="" className="absolute block inset-0 max-w-none size-full" height="32" src={imgEllipse} width="32" />
              </div>
              <div className="[word-break:break-word] content-stretch flex flex-col items-start leading-[0] relative shrink-0 text-[color:var(--text-primary,black)] whitespace-nowrap" data-node-id="35:26778" data-name="User info">
                <div className="flex flex-col font-hanken font-medium justify-end overflow-hidden relative shrink-0 text-[length:var(--font-size-s,13px)] text-ellipsis w-full" data-node-id="35:26779">
                  <p className="leading-[var(--font-size-l,18px)] overflow-hidden text-[13px] text-ellipsis">{values["Janice Mills"] ?? "Janice Mills"}</p>
                </div>
                <div className="flex flex-col font-inter font-normal justify-end not-italic overflow-hidden relative shrink-0 text-[12px] text-ellipsis w-full" data-node-id="35:26780">
                  <p className="leading-[1.45] overflow-hidden text-ellipsis">{values["info@rancard.com"] ?? "info@rancard.com"}</p>
                </div>
              </div>
            </div>
            <div className="relative shrink-0 size-[20px]" data-node-id="35:26781" data-name="Menu icon">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgMenuIcon1} />
            </div>
          </Button>
        </div>
      </div>
    </div>;
}
