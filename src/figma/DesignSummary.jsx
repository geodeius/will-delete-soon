import React from 'react';
import {Button} from '@/components/ui/button';
import {Card} from '@/components/ui/card';
import {DesignField} from '@/figma/fields';
const imgInfo = "/figma/35-26789-43737.svg";
const imgTrendUp = "/figma/35-26789-d6c5a.svg";
export default function DesignSummary({
  onAction = () => {},
  onValueChange = () => {},
  values = {}
} = {}) {
  return <div className="content-stretch flex gap-[8px] items-center relative size-full" data-node-id="35:26789">
      <Card className="gap-0 py-0 shadow-none bg-[var(--color-neutral-100,#f5f5f5)] border border-[#e0e0e0] border-solid content-stretch flex flex-[1_0_0] flex-col h-full items-start min-w-px overflow-clip p-[3px] relative rounded-[8px]" data-node-id="35:26790" data-name="Card">
        <div className="bg-[var(--color-neutral-100,#f5f5f5)] border-[#f5f5f5] border-b border-solid content-stretch flex flex-col items-start overflow-clip px-[12px] py-[8px] relative shrink-0 w-full" data-node-id="I35:26790;2380:59523">
          <div className="content-stretch flex gap-[8px] h-[18px] items-center relative shrink-0 w-full" data-node-id="I35:26790;2380:59524">
            <p className="[word-break:break-word] flex-[1_0_0] font-inter font-medium leading-[1.45] min-w-px not-italic relative text-[14px] text-[color:var(--text-primary,black)]" data-node-id="I35:26790;2380:59525">{values["Total transactions"] ?? "Total transactions"}</p>
            <div className="relative shrink-0 size-[18px]" data-node-id="I35:26790;2380:59526" data-name="Info">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgInfo} />
            </div>
          </div>
        </div>
        <div className="bg-white border border-[var(--border-primary,#e6e6e6)] border-solid content-stretch flex flex-[1_0_0] flex-col items-center justify-center min-h-px px-[11px] py-[8px] relative rounded-[5px] w-full" data-node-id="I35:26790;2380:59527">
          <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-h-px relative w-full" data-node-id="I35:26790;2380:59528">
            <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] h-full items-start min-w-px py-[5px] relative" data-node-id="I35:26790;2380:59529">
              <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-h-px relative w-full" data-node-id="I35:26790;2380:59530">
                <div className="content-stretch flex flex-col items-start justify-center relative shrink-0" data-node-id="I35:26790;2380:59531">
                  <p className="[word-break:break-word] font-inter font-semibold leading-[1.2] not-italic relative shrink-0 text-[#242424] text-[24px] tracking-[-0.48px] w-full" data-node-id="I35:26790;2380:59532">{values["40"] ?? "40"}</p>
                </div>
                <div className="content-stretch flex flex-col items-start justify-center py-[2px] relative shrink-0" data-node-id="I35:26790;2380:59533">
                  <p className="[word-break:break-word] font-inter font-medium leading-[1.45] not-italic relative shrink-0 text-[#666] text-[14px] w-full" data-node-id="I35:26790;2380:59534">{values["\u200B"] ?? "\u200B"}</p>
                </div>
              </div>
              <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-node-id="I35:26790;2380:59535" data-name="trend">
                <div className="bg-[var(--bg-success,#f9ffe5)] content-stretch flex gap-[2px] items-center px-[4px] py-[2px] relative rounded-[999px] shrink-0" data-node-id="I35:26790;2380:59535;66:765">
                  <div className="relative shrink-0 size-[15px]" data-node-id="I35:26790;2380:59535;66:760" data-name="TrendDown">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgTrendUp} />
                  </div>
                  <p className="[word-break:break-word] font-hanken font-medium leading-[normal] relative shrink-0 text-[12px] text-[color:var(--text-success,#598506)] whitespace-nowrap" data-node-id="I35:26790;2380:59535;66:764">{values["3%"] ?? "3%"}</p>
                </div>
                <p className="[word-break:break-word] font-hanken font-normal leading-[normal] relative shrink-0 text-[12px] text-[color:var(--text-secondary,#434343)] whitespace-nowrap" data-node-id="I35:26790;2380:59535;66:781">{values["vs last month"] ?? "vs last month"}</p>
              </div>
            </div>
          </div>
        </div>
      </Card>
      <Card className="gap-0 py-0 shadow-none bg-[var(--color-neutral-100,#f5f5f5)] border border-[#e0e0e0] border-solid content-stretch flex flex-[1_0_0] flex-col h-full items-start min-w-px overflow-clip p-[3px] relative rounded-[8px]" data-node-id="35:26791" data-name="Card">
        <div className="bg-[var(--color-neutral-100,#f5f5f5)] border-[#f5f5f5] border-b border-solid content-stretch flex flex-col items-start overflow-clip px-[12px] py-[8px] relative shrink-0 w-full" data-node-id="I35:26791;2380:59523">
          <div className="content-stretch flex gap-[8px] h-[18px] items-center relative shrink-0 w-full" data-node-id="I35:26791;2380:59524">
            <p className="[word-break:break-word] flex-[1_0_0] font-inter font-medium leading-[1.45] min-w-px not-italic relative text-[14px] text-[color:var(--text-primary,black)]" data-node-id="I35:26791;2380:59525">{values["Total collections"] ?? "Total collections"}</p>
            <div className="relative shrink-0 size-[18px]" data-node-id="I35:26791;2380:59526" data-name="Info">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgInfo} />
            </div>
          </div>
        </div>
        <div className="bg-white border border-[var(--border-primary,#e6e6e6)] border-solid content-stretch flex flex-[1_0_0] flex-col items-center justify-center min-h-px px-[11px] py-[8px] relative rounded-[5px] w-full" data-node-id="I35:26791;2380:59527">
          <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-h-px relative w-full" data-node-id="I35:26791;2380:59528">
            <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] h-full items-start min-w-px py-[5px] relative" data-node-id="I35:26791;2380:59529">
              <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-h-px relative w-full" data-node-id="I35:26791;2380:59530">
                <div className="content-stretch flex flex-col items-start justify-center relative shrink-0" data-node-id="I35:26791;2380:59531">
                  <p className="[word-break:break-word] font-inter font-semibold leading-[1.2] not-italic relative shrink-0 text-[#242424] text-[24px] tracking-[-0.48px] w-full" data-node-id="I35:26791;2380:59532">{values["GH\u20B52,950.00"] ?? "GH\u20B52,950.00"}</p>
                </div>
                <div className="content-stretch flex flex-col items-start justify-center py-[2px] relative shrink-0" data-node-id="I35:26791;2380:59533">
                  <p className="[word-break:break-word] font-inter font-medium leading-[1.45] not-italic relative shrink-0 text-[#666] text-[14px] w-full" data-node-id="I35:26791;2380:59534">{values["\u200B"] ?? "\u200B"}</p>
                </div>
              </div>
              <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-node-id="I35:26791;2380:59535" data-name="trend">
                <div className="bg-[var(--bg-success,#f9ffe5)] content-stretch flex gap-[2px] items-center px-[4px] py-[2px] relative rounded-[999px] shrink-0" data-node-id="I35:26791;2380:59535;66:765">
                  <div className="relative shrink-0 size-[15px]" data-node-id="I35:26791;2380:59535;66:760" data-name="TrendDown">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgTrendUp} />
                  </div>
                  <p className="[word-break:break-word] font-hanken font-medium leading-[normal] relative shrink-0 text-[12px] text-[color:var(--text-success,#598506)] whitespace-nowrap" data-node-id="I35:26791;2380:59535;66:764">{values["3%"] ?? "3%"}</p>
                </div>
                <p className="[word-break:break-word] font-hanken font-normal leading-[normal] relative shrink-0 text-[12px] text-[color:var(--text-secondary,#434343)] whitespace-nowrap" data-node-id="I35:26791;2380:59535;66:781">{values["vs last month"] ?? "vs last month"}</p>
              </div>
            </div>
          </div>
        </div>
      </Card>
      <Card className="gap-0 py-0 shadow-none bg-[var(--color-neutral-100,#f5f5f5)] border border-[#e0e0e0] border-solid content-stretch flex flex-[1_0_0] flex-col h-full items-start min-w-px overflow-clip p-[3px] relative rounded-[8px]" data-node-id="35:26792" data-name="Card">
        <div className="bg-[var(--color-neutral-100,#f5f5f5)] border-[#f5f5f5] border-b border-solid content-stretch flex flex-col items-start overflow-clip px-[12px] py-[8px] relative shrink-0 w-full" data-node-id="I35:26792;2380:59523">
          <div className="content-stretch flex gap-[8px] h-[18px] items-center relative shrink-0 w-full" data-node-id="I35:26792;2380:59524">
            <p className="[word-break:break-word] flex-[1_0_0] font-inter font-medium leading-[1.45] min-w-px not-italic relative text-[14px] text-[color:var(--text-primary,black)]" data-node-id="I35:26792;2380:59525">{values["Total disbursements"] ?? "Total disbursements"}</p>
            <div className="relative shrink-0 size-[18px]" data-node-id="I35:26792;2380:59526" data-name="Info">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgInfo} />
            </div>
          </div>
        </div>
        <div className="bg-white border border-[var(--border-primary,#e6e6e6)] border-solid content-stretch flex flex-[1_0_0] flex-col items-center justify-center min-h-px px-[11px] py-[8px] relative rounded-[5px] w-full" data-node-id="I35:26792;2380:59527">
          <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-h-px relative w-full" data-node-id="I35:26792;2380:59528">
            <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] h-full items-start min-w-px py-[5px] relative" data-node-id="I35:26792;2380:59529">
              <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-h-px relative w-full" data-node-id="I35:26792;2380:59530">
                <div className="content-stretch flex flex-col items-start justify-center relative shrink-0" data-node-id="I35:26792;2380:59531">
                  <p className="[word-break:break-word] font-inter font-semibold leading-[1.2] not-italic relative shrink-0 text-[#242424] text-[24px] tracking-[-0.48px] w-full" data-node-id="I35:26792;2380:59532">{values["GH\u20B55,150.00"] ?? "GH\u20B55,150.00"}</p>
                </div>
                <div className="content-stretch flex flex-col items-start justify-center py-[2px] relative shrink-0" data-node-id="I35:26792;2380:59533">
                  <p className="[word-break:break-word] font-inter font-medium leading-[1.45] not-italic relative shrink-0 text-[#666] text-[14px] w-full" data-node-id="I35:26792;2380:59534">{values["\u200B"] ?? "\u200B"}</p>
                </div>
              </div>
              <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-node-id="I35:26792;2380:59535" data-name="trend">
                <div className="bg-[var(--bg-error,#fff0f0)] content-stretch flex gap-[2px] items-center px-[4px] py-[2px] relative rounded-[999px] shrink-0" data-node-id="I35:26792;2380:59535;66:765">
                  <p className="[word-break:break-word] font-hanken font-medium leading-[normal] relative shrink-0 text-[12px] text-[color:var(--text-error,#d70000)] whitespace-nowrap" data-node-id="I35:26792;2380:59535;66:764">{values["4%"] ?? "4%"}</p>
                </div>
                <p className="[word-break:break-word] font-hanken font-normal leading-[normal] relative shrink-0 text-[12px] text-[color:var(--text-secondary,#434343)] whitespace-nowrap" data-node-id="I35:26792;2380:59535;66:781">{values["of total"] ?? "of total"}</p>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </div>;
}
