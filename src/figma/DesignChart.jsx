import React from 'react';
import {Button} from '@/components/ui/button';
import {Card} from '@/components/ui/card';
import {DesignField} from '@/figma/fields';
const imgBorder = "/figma/35-26795-c4e29.svg";
const imgBorder1 = "/figma/35-26795-e4a3b.svg";
const imgLine = "/figma/35-26795-9345f.svg";
const imgLine1 = "/figma/35-26795-7ca11.svg";
const imgLine7 = "/figma/35-26795-f39f1.svg";
export default function DesignChart({
  onAction = () => {},
  onValueChange = () => {},
  values = {}
} = {}) {
  return <div className="content-stretch flex flex-col items-start relative size-full" data-node-id="35:26795">
      <div className="bg-[var(--bg-secondary,#f5f5f5)] border border-[var(--border-primary,#e6e6e6)] border-solid content-stretch flex flex-col gap-[8px] h-[404px] items-start p-[3px] relative rounded-[16px] shrink-0 w-full" data-node-id="35:26810">
        <div className="bg-[var(--background-bg-primary,white)] border-[0.5px] border-[var(--border-secondary,#d6d6d6)] border-solid content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-[320px] overflow-clip relative rounded-[13px] w-full" data-node-id="35:26811" data-name="Charts">
          <div className="bg-[var(--bg-primary,white)] border-[var(--border-border-primary,#f0f0f0)] border-b border-solid content-center flex flex-wrap gap-y-[12px] items-center justify-between overflow-clip px-[var(--padding-padding,24px)] py-[var(--ui-spacing-spacing-16,16px)] relative shrink-0 w-full" data-node-id="35:26812" data-name="Charts Header">
            <div className="content-stretch flex gap-[var(--ui-spacing-spacing-8,8px)] items-center min-w-[144px] p-[var(--ui-spacing-spacing-0,0px)] relative shrink-0" data-node-id="35:26813" data-name="Row">
              <div className="[word-break:break-word] flex flex-col font-inter font-semibold justify-end leading-[0] not-italic relative shrink-0 text-[color:var(--text-text-secondary,#404040)] text-[length:var(--font-size-paragraph-md,16px)] whitespace-nowrap" data-node-id="35:26814">
                <p className="leading-[1.5]">{values["Transaction activity"] ?? "Transaction activity"}</p>
              </div>
            </div>
            <div className="content-stretch flex gap-[16px] items-center justify-end opacity-0 relative shrink-0" data-node-id="35:26815">
              <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-node-id="35:26816">
                <div className="bg-[#007acc] relative rounded-[999px] shrink-0 size-[8px]" data-node-id="35:26817" />
                <div className="[word-break:break-word] flex flex-col font-hanken font-normal justify-end leading-[0] relative shrink-0 text-[length:var(--font-size-m,16px)] text-black whitespace-nowrap" data-node-id="35:26818">
                  <p className="leading-[var(--font-line-height-m,19px)]">{values["Inflows"] ?? "Inflows"}</p>
                </div>
              </div>
              <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-node-id="35:26819">
                <div className="bg-[#f5222d] relative rounded-[999px] shrink-0 size-[8px]" data-node-id="35:26820" />
                <div className="[word-break:break-word] flex flex-col font-hanken font-normal justify-end leading-[0] relative shrink-0 text-[length:var(--font-size-m,16px)] text-black whitespace-nowrap" data-node-id="35:26821">
                  <p className="leading-[var(--font-line-height-m,19px)]">{values["Outflows"] ?? "Outflows"}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="content-stretch flex flex-[1_0_0] flex-col gap-[var(--ui-spacing-spacing-20,20px)] items-start min-h-px overflow-clip p-[var(--padding-padding,24px)] relative w-full" data-node-id="35:26826" data-name="Chart Content">
            <div className="content-stretch flex flex-[1_0_0] flex-col gap-[var(--ui-spacing-spacing-8,8px)] items-center min-h-px p-[var(--ui-spacing-spacing-0,0px)] relative w-full" data-node-id="35:26827" data-name="Details">
              <div className="content-stretch flex flex-[1_0_0] gap-[var(--ui-spacing-spacing-12,12px)] items-start justify-end min-h-px overflow-clip pl-[var(--ui-spacing-spacing-0,0px)] pr-[var(--ui-spacing-spacing-8,8px)] py-[var(--ui-spacing-spacing-0,0px)] relative w-full" data-node-id="35:26828" data-name="Chart Area">
                <div className="[word-break:break-word] content-stretch flex flex-col font-hanken font-normal h-full items-start justify-between leading-[var(--font-size-l,18px)] p-[var(--ui-spacing-spacing-0,0px)] relative shrink-0 text-[#242424] text-[14px] text-right w-[32px]" data-node-id="35:26829" data-name="Rate">
                  <p className="relative shrink-0 w-full" data-node-id="35:26830">{values["80k"] ?? "80k"}</p>
                  <p className="relative shrink-0 w-full" data-node-id="35:26831">{values["60k"] ?? "60k"}</p>
                  <p className="relative shrink-0 w-full" data-node-id="35:26832">{values["40k"] ?? "40k"}</p>
                  <p className="relative shrink-0 w-full" data-node-id="35:26833">{values["20k"] ?? "20k"}</p>
                  <p className="relative shrink-0 w-full" data-node-id="35:26834">{values["0"] ?? "0"}</p>
                </div>
                <div className="content-stretch flex flex-[1_0_0] gap-[var(--ui-spacing-spacing-12,12px)] h-full items-end min-w-px p-[var(--ui-spacing-spacing-0,0px)] relative" data-node-id="35:26835" data-name="Chart with Grid">
                  <div className="absolute content-stretch flex gap-[var(--ui-spacing-spacing-12,12px)] inset-0 items-end p-[var(--ui-spacing-spacing-0,0px)]" data-node-id="35:26836" data-name="_Grid">
                    <div className="absolute content-stretch flex flex-col inset-[0_0_0_1px] items-start justify-between p-[var(--ui-spacing-spacing-0,0px)]" data-node-id="35:26837" data-name="X - Lines">
                      <div className="h-[14px] relative shrink-0 w-full" data-node-id="35:26838" data-name="Border">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgBorder} />
                      </div>
                      <div className="h-[14px] relative shrink-0 w-full" data-node-id="35:26840" data-name="Border">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgBorder} />
                      </div>
                      <div className="h-[14px] relative shrink-0 w-full" data-node-id="35:26842" data-name="Border">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgBorder} />
                      </div>
                      <div className="h-[14px] relative shrink-0 w-full" data-node-id="35:26844" data-name="Border">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgBorder} />
                      </div>
                      <div className="h-px relative shrink-0 w-full" data-node-id="35:26846" data-name="Border">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgBorder1} />
                      </div>
                    </div>
                  </div>
                  <div className="content-stretch flex flex-[1_0_0] gap-[var(--ui-spacing-spacing-12,12px)] h-full items-end min-w-px p-[var(--ui-spacing-spacing-0,0px)] relative" data-node-id="35:26861" data-name="_Line Chart">
                    <div className="flex-[1_0_0] h-full min-w-px relative" data-node-id="35:26862" data-name="_Lines Chart">
                      <div className="absolute inset-[11.27%_0_23%_0]" data-node-id="35:26864" data-name="Line">
                        <div className="absolute inset-[-0.66%_-0.16%]">
                          <img alt="" className="block max-w-none size-full" src={imgLine} />
                        </div>
                      </div>
                      <div className="absolute inset-[23.6%_-0.29%_24.86%_1.34%]" data-node-id="35:26865" data-name="Line">
                        <div className="absolute inset-[-0.63%_-0.16%_-0.85%_-0.16%]">
                          <img alt="" className="block max-w-none size-full" src={imgLine1} />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute content-stretch flex flex-col gap-[var(--ui-spacing-spacing-0,0px)] inset-[15.52%_32%_0_49%] items-center p-[var(--ui-spacing-spacing-0,0px)]" data-node-id="35:26867" data-name="Legend">
                    <div className="bg-[var(--background-bg-alt,#0a0a0a)] content-stretch flex gap-[var(--ui-spacing-spacing-0,0px)] items-start overflow-clip px-[var(--ui-spacing-spacing-8,8px)] py-[var(--ui-spacing-spacing-6,6px)] relative rounded-[var(--radius-sm,6px)] shrink-0" data-node-id="I35:26867;37:3197" data-name="Bar graph">
                      <div className="content-stretch flex flex-col gap-[var(--ui-spacing-spacing-4,4px)] items-start justify-center p-[var(--ui-spacing-spacing-0,0px)] relative shrink-0" data-node-id="I35:26867;37:3198" data-name="Legends">
                        <div className="content-stretch flex gap-[var(--ui-spacing-spacing-6,6px)] items-center p-[var(--ui-spacing-spacing-0,0px)] relative shrink-0" data-node-id="I35:26867;37:3199" data-name="Details">
                          <div className="[word-break:break-word] flex flex-col font-inter font-medium justify-end leading-[0] not-italic relative shrink-0 text-[10px] text-[color:var(--text-text-white,white)] whitespace-nowrap" data-node-id="I35:26867;37:3200">
                            <p className="leading-[1.2] mb-0">{values["Collections: 400,000"] ?? "Collections: 400,000"}</p>
                            <p className="leading-[1.2] mb-0">{values["Disbursements: 30,000"] ?? "Disbursements: 30,000"}</p>
                            <p className="leading-[1.2]">{values["Transacations: 10"] ?? "Transacations: 10"}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="content-stretch flex flex-[1_0_0] gap-[var(--ui-spacing-spacing-0,0px)] items-start justify-center min-h-px overflow-clip p-[var(--ui-spacing-spacing-0,0px)] relative w-full" data-node-id="I35:26867;37:3195" data-name="Bar">
                      <div className="flex h-full items-center justify-center relative shrink-0 w-0" data-node-id="I35:26867;37:3201" style={{
                      containerType: "size"
                    }}>
                        <div className="flex-none rotate-90 w-[100cqh]">
                          <div className="h-0 relative w-full">
                            <div className="absolute inset-[-1.6px_0_0_0]">
                              <img alt="" className="block max-w-none size-full" src={imgLine7} />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="content-stretch flex items-end justify-center overflow-clip pl-[var(--ui-spacing-spacing-0,0px)] pr-[var(--ui-spacing-spacing-8,8px)] py-[var(--ui-spacing-spacing-0,0px)] relative shrink-0 w-full" data-node-id="35:26868" data-name="Chart Area">
                <div className="content-stretch flex flex-[1_0_0] items-center justify-center min-w-px relative" data-node-id="35:26869" data-name="bar row">
                  <div className="content-stretch flex flex-[1_0_0] gap-[var(--ui-spacing-spacing-12,12px)] items-center min-w-px p-[var(--ui-spacing-spacing-0,0px)] relative" data-node-id="35:26870" data-name="Dates">
                    <div className="h-[18px] relative rounded-bl-[var(--radius-xxs,2px)] rounded-br-[var(--radius-xxs,2px)] rounded-tl-[var(--radius-xs,4px)] rounded-tr-[var(--radius-xs,4px)] shrink-0 w-[32px]" data-node-id="35:26871" data-name="Bar" />
                    <div className="content-stretch flex flex-[1_0_0] items-center justify-between min-w-px p-[var(--ui-spacing-spacing-0,0px)] relative" data-node-id="35:26872" data-name="Date">
                      <div className="content-stretch flex flex-[1_0_0] flex-col gap-[var(--ui-spacing-spacing-0,0px)] items-center min-w-px p-[var(--ui-spacing-spacing-0,0px)] relative rounded-bl-[var(--radius-xxs,2px)] rounded-br-[var(--radius-xxs,2px)] rounded-tl-[var(--radius-xs,4px)] rounded-tr-[var(--radius-xs,4px)]" data-node-id="35:26881" data-name="Bar">
                        <p className="[word-break:break-word] font-hanken font-normal leading-[var(--font-size-l,18px)] relative shrink-0 text-[#242424] text-[14px] text-center whitespace-nowrap" data-node-id="35:26882">{values["May"] ?? "May"}</p>
                      </div>
                      <div className="content-stretch flex flex-[1_0_0] flex-col gap-[var(--ui-spacing-spacing-0,0px)] items-center min-w-px p-[var(--ui-spacing-spacing-0,0px)] relative rounded-bl-[var(--radius-xxs,2px)] rounded-br-[var(--radius-xxs,2px)] rounded-tl-[var(--radius-xs,4px)] rounded-tr-[var(--radius-xs,4px)]" data-node-id="35:26883" data-name="Bar">
                        <p className="[word-break:break-word] font-hanken font-normal leading-[var(--font-size-l,18px)] relative shrink-0 text-[#242424] text-[14px] text-center whitespace-nowrap" data-node-id="35:26884">{values["June"] ?? "June"}</p>
                      </div>
                      <div className="content-stretch flex flex-[1_0_0] flex-col gap-[var(--ui-spacing-spacing-0,0px)] items-center min-w-px p-[var(--ui-spacing-spacing-0,0px)] relative rounded-bl-[var(--radius-xxs,2px)] rounded-br-[var(--radius-xxs,2px)] rounded-tl-[var(--radius-xs,4px)] rounded-tr-[var(--radius-xs,4px)]" data-node-id="35:26885" data-name="Bar">
                        <p className="[word-break:break-word] font-hanken font-normal leading-[var(--font-size-l,18px)] relative shrink-0 text-[#242424] text-[14px] text-center whitespace-nowrap" data-node-id="35:26886">{values["July"] ?? "July"}</p>
                      </div>
                      <div className="content-stretch flex flex-[1_0_0] flex-col gap-[var(--ui-spacing-spacing-0,0px)] items-center min-w-px p-[var(--ui-spacing-spacing-0,0px)] relative rounded-bl-[var(--radius-xxs,2px)] rounded-br-[var(--radius-xxs,2px)] rounded-tl-[var(--radius-xs,4px)] rounded-tr-[var(--radius-xs,4px)]" data-node-id="35:26887" data-name="Bar">
                        <p className="[word-break:break-word] font-hanken font-normal leading-[var(--font-size-l,18px)] relative shrink-0 text-[#242424] text-[14px] text-center whitespace-nowrap" data-node-id="35:26888">{values["August"] ?? "August"}</p>
                      </div>
                      <div className="content-stretch flex flex-[1_0_0] flex-col gap-[var(--ui-spacing-spacing-0,0px)] items-center min-w-px p-[var(--ui-spacing-spacing-0,0px)] relative rounded-bl-[var(--radius-xxs,2px)] rounded-br-[var(--radius-xxs,2px)] rounded-tl-[var(--radius-xs,4px)] rounded-tr-[var(--radius-xs,4px)]" data-node-id="35:26889" data-name="Bar">
                        <p className="[word-break:break-word] font-hanken font-normal leading-[var(--font-size-l,18px)] relative shrink-0 text-[#242424] text-[14px] text-center whitespace-nowrap" data-node-id="35:26890">{values["September"] ?? "September"}</p>
                      </div>
                      <div className="content-stretch flex flex-[1_0_0] flex-col gap-[var(--ui-spacing-spacing-0,0px)] items-center min-w-px p-[var(--ui-spacing-spacing-0,0px)] relative rounded-bl-[var(--radius-xxs,2px)] rounded-br-[var(--radius-xxs,2px)] rounded-tl-[var(--radius-xs,4px)] rounded-tr-[var(--radius-xs,4px)]" data-node-id="35:26891" data-name="Bar">
                        <p className="[word-break:break-word] font-hanken font-normal leading-[var(--font-size-l,18px)] relative shrink-0 text-[#242424] text-[14px] text-center whitespace-nowrap" data-node-id="35:26892">{values["October"] ?? "October"}</p>
                      </div>
                      <div className="content-stretch flex flex-[1_0_0] flex-col gap-[var(--ui-spacing-spacing-0,0px)] items-center min-w-px p-[var(--ui-spacing-spacing-0,0px)] relative rounded-bl-[var(--radius-xxs,2px)] rounded-br-[var(--radius-xxs,2px)] rounded-tl-[var(--radius-xs,4px)] rounded-tr-[var(--radius-xs,4px)]" data-node-id="35:26893" data-name="Bar">
                        <p className="[word-break:break-word] font-hanken font-normal leading-[var(--font-size-l,18px)] relative shrink-0 text-[#242424] text-[14px] text-center whitespace-nowrap" data-node-id="35:26894">{values["November"] ?? "November"}</p>
                      </div>
                      <div className="content-stretch flex flex-[1_0_0] flex-col gap-[var(--ui-spacing-spacing-0,0px)] items-center min-w-px p-[var(--ui-spacing-spacing-0,0px)] relative rounded-bl-[var(--radius-xxs,2px)] rounded-br-[var(--radius-xxs,2px)] rounded-tl-[var(--radius-xs,4px)] rounded-tr-[var(--radius-xs,4px)]" data-node-id="35:26895" data-name="Bar">
                        <p className="[word-break:break-word] font-hanken font-normal leading-[var(--font-size-l,18px)] relative shrink-0 text-[#242424] text-[14px] text-center whitespace-nowrap" data-node-id="35:26896">{values["December"] ?? "December"}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="content-stretch flex gap-[8px] items-center justify-center overflow-clip px-[8px] py-[5px] relative shrink-0 w-full" data-node-id="35:26910" data-name="Charts Header">
          <div className="content-stretch flex gap-[16px] items-center justify-end relative shrink-0" data-node-id="35:26911">
            <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-node-id="35:26912">
              <div className="bg-[#007acc] relative rounded-[2px] shrink-0 size-[9px]" data-node-id="35:26913" />
              <div className="[word-break:break-word] flex flex-col font-hanken font-normal justify-end leading-[0] relative shrink-0 text-[length:var(--font-size-m,16px)] text-black whitespace-nowrap" data-node-id="35:26914">
                <p className="leading-[var(--font-line-height-m,19px)]">{values["Collections"] ?? "Collections"}</p>
              </div>
            </div>
            <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-node-id="35:26918">
              <div className="bg-[#f5222d] relative rounded-[2px] shrink-0 size-[9px]" data-node-id="35:26919" />
              <div className="[word-break:break-word] flex flex-col font-hanken font-normal justify-end leading-[0] relative shrink-0 text-[length:var(--font-size-m,16px)] text-black whitespace-nowrap" data-node-id="35:26920">
                <p className="leading-[var(--font-line-height-m,19px)]">{values["Disbursement"] ?? "Disbursement"}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>;
}
