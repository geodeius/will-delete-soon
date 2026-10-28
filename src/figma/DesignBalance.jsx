import React from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { DesignField } from '@/figma/fields';
const imgArrowUpRight = "/figma/35-26922-a6846.svg";
const imgIconCheckCircle = "/figma/35-26922-42de2.svg";
export default function DesignBalance({
  onAction = () => {},
  onValueChange = () => {},
  values = {}
} = {}) {
  return <div className="bg-[var(--bg-secondary,#f5f5f5)] border border-[var(--border-primary,#e6e6e6)] border-solid overflow-clip relative rounded-[16px] size-full" data-node-id="35:26922">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-[var(--bg-primary,white)] h-[394px] left-1/2 overflow-clip rounded-[13px] top-1/2 w-[363px]" data-node-id="35:26923">
        <div className="absolute content-stretch flex flex-col gap-[24px] h-[367px] items-start left-[12px] top-[16px] w-[342px]" data-node-id="35:26924">
          <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-node-id="35:26925">
            <div className="[word-break:break-word] flex flex-col font-inter font-semibold justify-end leading-[0] not-italic relative shrink-0 text-[color:var(--text-text-secondary,#404040)] text-[length:var(--font-size-paragraph-md,16px)] w-[316px]" data-node-id="35:26926">
              <p className="leading-[1.5]">{values["SMS balance"] ?? "SMS balance"}</p>
            </div>
            <Button className="relative shrink-0 size-[18px] h-[18px] w-[18px] p-0 bg-transparent shadow-none hover:bg-transparent" data-node-id="35:26927" data-name="ArrowUpRight" variant="ghost" onClick={event => onAction("35:26927", "SMS balance details", event)} aria-label="SMS balance details">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgArrowUpRight} />
            </Button>
          </div>
          <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-center min-h-px relative w-full" data-node-id="35:26928">
            <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-node-id="35:26929">
              <p className="[word-break:break-word] font-inter font-semibold leading-[1.2] not-italic relative shrink-0 text-[#242424] text-[24px] tracking-[-0.48px] w-full" data-node-id="35:26930">{values["GH\u20B5500.00"] ?? "GH\u20B5500.00"}</p>
              <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-node-id="35:26931">
                <div className="content-stretch flex gap-[3px] items-center relative shrink-0 w-full" data-node-id="35:26932">
                  <div className="bg-[var(--color-blue-100,#d5e8ff)] h-[7px] overflow-clip relative shrink-0 w-[93px]" data-node-id="35:26933">
                    <div className="absolute bg-[var(--color-blue-500,#2f62ff)] h-[7px] left-0 top-0 w-[59px]" data-node-id="35:26934" />
                  </div>
                  <div className="bg-[var(--color-blue-100,#d5e8ff)] flex-[1_0_0] h-[7px] min-w-px overflow-clip relative" data-node-id="35:26935">
                    <div className="absolute bg-[var(--color-blue-500,#2f62ff)] h-[7px] left-0 opacity-0 top-0 w-[93px]" data-node-id="35:26936" />
                  </div>
                </div>
                <div className="[word-break:break-word] content-stretch flex font-inter font-normal gap-[8px] items-center leading-[1.45] not-italic relative shrink-0 text-[#242424] text-[12px] whitespace-nowrap" data-node-id="35:26937">
                  <p className="relative shrink-0" data-node-id="35:26938">{values["Threshold:"] ?? "Threshold:"}</p>
                  <p className="relative shrink-0" data-node-id="35:26939">{values["GH\u20B5400"] ?? "GH\u20B5400"}</p>
                </div>
              </div>
            </div>
            <div className="bg-[var(--bg-info,#e8f3ff)] content-stretch flex items-start relative rounded-[8px] shrink-0 w-full" data-node-id="35:26940" data-name="Alert">
              <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-start min-w-[320px] overflow-clip p-[8px] relative rounded-[8px] self-stretch" data-node-id="I35:26940;2047:4876" data-name="Alert Container">
                <div className="bg-[#e3effc] border border-[#c6ddf7] border-solid relative rounded-[8px] shrink-0 size-[32px]" data-node-id="I35:26940;2047:4877" data-name="Misc icon">
                  <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[16px] top-1/2" data-node-id="I35:26940;2047:4877;6011:145508" data-name="icon / 3d">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconCheckCircle} />
                  </div>
                </div>
                <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-start justify-center min-w-px relative" data-node-id="I35:26940;2047:4878" data-name="Alert Content">
                  <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-node-id="I35:26940;2047:4879" data-name="Text section">
                    <p className="[word-break:break-word] font-hanken font-normal leading-[18px] relative shrink-0 text-[14px] text-[color:var(--color-blue-950,#0c1d75)] w-full" data-node-id="I35:26940;2047:4881">{values["Your SMS balance is healthy. We\u2019ll top it up automatically when needed"] ?? "Your SMS balance is healthy. We\u2019ll top it up automatically when needed"}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-[var(--bg-secondary,#f5f5f5)] content-stretch flex flex-[1_0_0] items-start min-h-px overflow-clip px-[7px] py-[13px] relative rounded-[8px] w-full" data-node-id="35:26941">
              <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col h-full items-start justify-between min-w-px relative" data-node-id="35:26942">
                <div className="flex flex-col font-inter font-medium justify-end leading-[0] not-italic relative shrink-0 text-[14px] text-[color:var(--text-text-secondary,#404040)] w-full" data-node-id="35:26943">
                  <p className="leading-[1.45]">{values["Last top-up"] ?? "Last top-up"}</p>
                </div>
                <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 text-[color:var(--text-secondary,#434343)] w-full" data-node-id="35:26944">
                  <div className="content-stretch flex flex-col gap-[5px] items-start relative shrink-0 w-full" data-node-id="35:26945">
                    <p className="font-hanken font-normal leading-[var(--font-size-l,18px)] relative shrink-0 text-[14px] w-full" data-node-id="35:26946">{values["Amount"] ?? "Amount"}</p>
                    <p className="font-hanken font-semibold leading-[var(--font-line-height-m,19px)] relative shrink-0 text-[length:var(--font-size-m,16px)] w-full" data-node-id="35:26947">{values["GH\u20B5500.00"] ?? "GH\u20B5500.00"}</p>
                  </div>
                  <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-node-id="35:26948">
                    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[5px] items-start min-w-px relative" data-node-id="35:26949">
                      <p className="font-hanken font-normal leading-[var(--font-size-l,18px)] min-w-full relative shrink-0 text-[14px] w-[min-content]" data-node-id="35:26950">{values["Date"] ?? "Date"}</p>
                      <p className="font-hanken font-semibold leading-[var(--font-line-height-m,19px)] relative shrink-0 text-[length:var(--font-size-m,16px)] whitespace-nowrap" data-node-id="35:26951">{values["12th October, 2026"] ?? "12th October, 2026"}</p>
                    </div>
                    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[5px] items-start min-w-px relative" data-node-id="35:26952">
                      <p className="font-hanken font-normal leading-[var(--font-size-l,18px)] min-w-full relative shrink-0 text-[14px] w-[min-content]" data-node-id="35:26953">{values["Time"] ?? "Time"}</p>
                      <p className="font-hanken font-semibold leading-[var(--font-line-height-m,19px)] relative shrink-0 text-[length:var(--font-size-m,16px)] whitespace-nowrap" data-node-id="35:26954">{values["10:20 AM"] ?? "10:20 AM"}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>;
}
