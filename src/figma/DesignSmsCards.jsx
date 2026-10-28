import React from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { DesignField } from '@/figma/fields';
const imgArrowUpRight = "/figma/35-30910-9109d.svg";
const imgIconCheckCircle = "/figma/35-30910-42de2.svg";
const imgGearSix = "/figma/35-30910-614b9.svg";
const imgSealCheck = "/figma/35-30910-f2f7d.svg";
const imgVector215 = "/figma/35-30910-b5ffa.svg";
export default function DesignSmsCards({
  onAction = () => {},
  onValueChange = () => {},
  values = {}
} = {}) {
  return <div className="content-stretch flex gap-[8px] items-center relative size-full" data-node-id="35:30910">
      <div className="bg-[var(--bg-secondary,#f5f5f5)] border border-[var(--border-primary,#e6e6e6)] border-solid content-stretch flex flex-[1_0_0] items-center min-w-px overflow-clip p-[5px] relative rounded-[16px]" data-node-id="35:30911">
        <div className="bg-white border border-[var(--border-primary,#e6e6e6)] border-solid content-stretch flex flex-[1_0_0] items-start min-w-px overflow-clip px-[11px] py-[13px] relative rounded-[13px]" data-node-id="35:30912">
          <div className="content-stretch flex flex-[1_0_0] flex-col gap-[24px] items-start min-w-px relative" data-node-id="35:30913">
            <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-node-id="35:30914">
              <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-inter font-semibold justify-end leading-[0] min-w-px not-italic relative text-[color:var(--text-text-secondary,#404040)] text-[length:var(--font-size-paragraph-md,16px)]" data-node-id="35:30915">
                <p className="leading-[1.5]">{values["SMS balance"] ?? "SMS balance"}</p>
              </div>
              <div className="relative shrink-0 size-[18px]" data-node-id="35:30916" data-name="ArrowUpRight">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgArrowUpRight} />
              </div>
            </div>
            <div className="content-stretch flex flex-col gap-[12px] items-center relative shrink-0 w-full" data-node-id="35:30917">
              <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-node-id="35:30918">
                <p className="[word-break:break-word] font-inter font-semibold leading-[1.2] not-italic relative shrink-0 text-[#242424] text-[24px] tracking-[-0.48px] w-full" data-node-id="35:30919">{values["GH\u20B5500.00"] ?? "GH\u20B5500.00"}</p>
                <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-node-id="35:30920">
                  <div className="content-stretch flex gap-[3px] items-center relative shrink-0 w-full" data-node-id="35:30921">
                    <div className="bg-[var(--color-blue-100,#d5e8ff)] h-[7px] overflow-clip relative shrink-0 w-[93px]" data-node-id="35:30922">
                      <div className="absolute bg-[var(--color-blue-500,#2f62ff)] h-[7px] left-0 top-0 w-[93px]" data-node-id="35:30923" />
                    </div>
                    <div className="bg-[var(--color-blue-100,#d5e8ff)] flex-[1_0_0] h-[7px] min-w-px overflow-clip relative" data-node-id="35:30924">
                      <div className="absolute bg-[var(--color-blue-500,#2f62ff)] h-[7px] left-0 top-0 w-[93px]" data-node-id="35:30925" />
                    </div>
                  </div>
                  <div className="[word-break:break-word] content-stretch flex font-inter font-normal gap-[8px] items-center leading-[1.45] not-italic relative shrink-0 text-[#242424] text-[12px] whitespace-nowrap" data-node-id="35:30926">
                    <p className="relative shrink-0" data-node-id="35:30927">{values["Threshold:"] ?? "Threshold:"}</p>
                    <p className="relative shrink-0" data-node-id="35:30928">{values["GH\u20B5200"] ?? "GH\u20B5200"}</p>
                  </div>
                </div>
              </div>
              <div className="bg-[var(--bg-info,#e8f3ff)] content-stretch flex items-center relative rounded-[8px] shrink-0 w-full" data-node-id="35:30929" data-name="Alert">
                <div className="flex flex-[1_0_0] flex-row items-center self-stretch" data-node-id="I35:30929;2047:4876">
                  <div className="content-stretch flex flex-[1_0_0] gap-[8px] h-full items-center min-w-[320px] overflow-clip p-[8px] relative rounded-[8px]" data-name="Alert Container">
                    <div className="bg-[#e3effc] border border-[#c6ddf7] border-solid relative rounded-[8px] shrink-0 size-[32px]" data-node-id="I35:30929;2047:4877" data-name="Misc icon">
                      <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[16px] top-1/2" data-node-id="I35:30929;2047:4877;6011:145508" data-name="icon / 3d">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconCheckCircle} />
                      </div>
                    </div>
                    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-start justify-center min-w-px relative" data-node-id="I35:30929;2047:4878" data-name="Alert Content">
                      <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-node-id="I35:30929;2047:4879" data-name="Text section">
                        <p className="[word-break:break-word] font-hanken font-normal leading-[18px] relative shrink-0 text-[14px] text-[color:var(--color-blue-950,#0c1d75)] w-full" data-node-id="I35:30929;2047:4881">{values["Your SMS balance is healthy. We\u2019ll top it up automatically when needed"] ?? "Your SMS balance is healthy. We\u2019ll top it up automatically when needed"}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-[var(--bg-secondary,#f5f5f5)] content-stretch flex items-start overflow-clip px-[7px] py-[13px] relative rounded-[8px] shrink-0 w-full" data-node-id="35:30930">
                <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-start min-w-px relative" data-node-id="35:30931">
                  <div className="flex flex-col font-inter font-medium justify-end leading-[0] not-italic relative shrink-0 text-[14px] text-[color:var(--text-text-secondary,#404040)] w-full" data-node-id="35:30932">
                    <p className="leading-[1.45]">{values["Last top-up"] ?? "Last top-up"}</p>
                  </div>
                  <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 text-[color:var(--text-secondary,#434343)] w-full" data-node-id="35:30933">
                    <div className="content-stretch flex flex-col gap-[5px] items-start relative shrink-0 w-full" data-node-id="35:30934">
                      <p className="font-hanken font-normal leading-[var(--font-size-l,18px)] relative shrink-0 text-[14px] w-full" data-node-id="35:30935">{values["Amount"] ?? "Amount"}</p>
                      <p className="font-hanken font-semibold leading-[var(--font-line-height-m,19px)] relative shrink-0 text-[length:var(--font-size-m,16px)] w-full" data-node-id="35:30936">{values["GH\u20B5500.00"] ?? "GH\u20B5500.00"}</p>
                    </div>
                    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-node-id="35:30937">
                      <div className="content-stretch flex flex-[1_0_0] flex-col gap-[5px] items-start min-w-px relative" data-node-id="35:30938">
                        <p className="font-hanken font-normal leading-[var(--font-size-l,18px)] min-w-full relative shrink-0 text-[14px] w-[min-content]" data-node-id="35:30939">{values["Date"] ?? "Date"}</p>
                        <p className="font-hanken font-semibold leading-[var(--font-line-height-m,19px)] relative shrink-0 text-[length:var(--font-size-m,16px)] whitespace-nowrap" data-node-id="35:30940">{values["12th October, 2026"] ?? "12th October, 2026"}</p>
                      </div>
                      <div className="content-stretch flex flex-[1_0_0] flex-col gap-[5px] items-start min-w-px relative" data-node-id="35:30941">
                        <p className="font-hanken font-normal leading-[var(--font-size-l,18px)] min-w-full relative shrink-0 text-[14px] w-[min-content]" data-node-id="35:30942">{values["Time"] ?? "Time"}</p>
                        <p className="font-hanken font-semibold leading-[var(--font-line-height-m,19px)] relative shrink-0 text-[length:var(--font-size-m,16px)] whitespace-nowrap" data-node-id="35:30943">{values["10:20 AM"] ?? "10:20 AM"}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-[1_0_0] flex-row items-center self-stretch" data-node-id="35:30944">
        <Card className="gap-0 py-0 shadow-none bg-[var(--color-neutral-100,#f5f5f5)] border border-[#e0e0e0] border-solid content-stretch flex flex-[1_0_0] flex-col h-full items-start min-w-px overflow-clip p-[5px] relative rounded-[16px]" data-name="Card">
          <div className="bg-[var(--color-neutral-100,#f5f5f5)] border-[#f5f5f5] border-b border-solid content-stretch flex flex-col items-start overflow-clip px-[12px] py-[8px] relative shrink-0 w-full" data-node-id="35:30945">
            <div className="content-stretch flex gap-[8px] items-center py-[6px] relative shrink-0 w-full" data-node-id="35:30946">
              <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col items-start justify-center leading-[1.45] min-w-px not-italic relative text-[color:var(--text-primary,black)]" data-node-id="35:30947">
                <p className="font-inter font-medium relative shrink-0 text-[14px] w-full" data-node-id="35:30948">{values["Automatic replenishment"] ?? "Automatic replenishment"}</p>
                <p className="font-inter font-normal relative shrink-0 text-[12px] w-full" data-node-id="35:30949">{values["Total disbursements"] ?? "Total disbursements"}</p>
              </div>
              <Button className="relative shrink-0 size-[18px] h-[18px] w-[18px] p-0 bg-transparent shadow-none hover:bg-transparent" data-node-id="35:30950" data-name="GearSix" variant="ghost" onClick={event => onAction("35:30950", "SMS configuration", event)} aria-label="SMS configuration">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGearSix} />
              </Button>
            </div>
          </div>
          <div className="bg-white border border-[var(--border-primary,#e6e6e6)] border-solid content-stretch flex flex-[1_0_0] flex-col items-center justify-center min-h-px px-[11px] py-[8px] relative rounded-[13px] w-full" data-node-id="35:30951">
            <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-between min-h-px py-[8px] relative w-full" data-node-id="35:30952">
              <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-node-id="35:30953">
                <div className="bg-[var(--background-bg-success-solid,#10b981)] content-stretch flex gap-[var(--ui-spacing-spacing-12,12px)] items-center justify-center overflow-clip p-[8px] relative rounded-[var(--radius-md,8px)] shrink-0" data-node-id="35:30954" data-name="Alert (Notification) & Snackbar">
                  <div className="relative shrink-0 size-[20px]" data-node-id="I35:30954;2411:134061" data-name="alert-circle">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgSealCheck} />
                  </div>
                  <div className="content-stretch flex gap-[var(--ui-spacing-spacing-24,24px)] items-center justify-center p-[var(--ui-spacing-spacing-0,0px)] relative shrink-0" data-node-id="I35:30954;2411:134062" data-name="Message with action">
                    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-node-id="I35:30954;2411:134063" data-name="Section">
                      <div className="content-stretch flex gap-[var(--ui-spacing-spacing-4,4px)] items-center p-[var(--ui-spacing-spacing-0,0px)] relative shrink-0" data-node-id="I35:30954;2411:134064" data-name="Message">
                        <p className="[word-break:break-word] font-inter font-semibold leading-[1.429] not-italic relative shrink-0 text-[color:var(--text-text-white,white)] text-[length:var(--font-size-paragraph-sm,14px)] whitespace-nowrap" data-node-id="I35:30954;2411:134065">{values["SMS Balance healthy"] ?? "SMS Balance healthy"}</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-[var(--bg-info,#e8f3ff)] content-stretch flex items-center relative rounded-[8px] shrink-0 w-full" data-node-id="35:30955" data-name="Alert">
                  <div className="flex flex-[1_0_0] flex-row items-center self-stretch" data-node-id="I35:30955;2047:4956">
                    <div className="content-stretch flex flex-[1_0_0] gap-[8px] h-full items-start min-w-[320px] overflow-clip p-[8px] relative rounded-[8px]" data-name="Alert Container">
                      <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-start justify-center min-w-px relative" data-node-id="I35:30955;2047:4958" data-name="Alert Content">
                        <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-node-id="I35:30955;2047:4959" data-name="Text section">
                          <p className="[word-break:break-word] font-hanken font-normal leading-[18px] relative shrink-0 text-[14px] text-[color:var(--text-on-info,#102b9f)] w-full" data-node-id="I35:30955;2047:4961">{values["We\u2019ll top it up automatically when needed"] ?? "We\u2019ll top it up automatically when needed"}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-node-id="35:30956">
                <div className="h-0 relative shrink-0 w-full" data-node-id="35:30957">
                  <div className="absolute inset-[-0.5px_0]">
                    <img alt="" className="block max-w-none size-full" src={imgVector215} />
                  </div>
                </div>
                <div className="[word-break:break-word] content-stretch flex gap-[8px] items-center justify-center leading-[1.45] not-italic relative shrink-0 w-full whitespace-nowrap" data-node-id="35:30958">
                  <p className="flex-[1_0_0] font-inter font-normal min-w-px overflow-hidden relative text-[14px] text-[color:var(--text-secondary,#434343)] text-ellipsis" data-node-id="35:30959">{values["Replenishment threshold"] ?? "Replenishment threshold"}</p>
                  <p className="flex-[1_0_0] font-inter font-medium min-w-px overflow-hidden relative text-[16px] text-[color:var(--text-primary,black)] text-ellipsis text-right" data-node-id="35:30960">{values["Collection"] ?? "Collection"}</p>
                </div>
                <div className="h-0 relative shrink-0 w-full" data-node-id="35:30961">
                  <div className="absolute inset-[-0.5px_0]">
                    <img alt="" className="block max-w-none size-full" src={imgVector215} />
                  </div>
                </div>
                <div className="[word-break:break-word] content-stretch flex gap-[8px] items-center justify-center leading-[1.45] not-italic relative shrink-0 w-full whitespace-nowrap" data-node-id="35:30962">
                  <p className="flex-[1_0_0] font-inter font-normal min-w-px overflow-hidden relative text-[14px] text-[color:var(--text-secondary,#434343)] text-ellipsis" data-node-id="35:30963">{values["SMS top-up amount"] ?? "SMS top-up amount"}</p>
                  <p className="flex-[1_0_0] font-inter font-medium min-w-px overflow-hidden relative text-[16px] text-[color:var(--text-primary,black)] text-ellipsis text-right" data-node-id="35:30964">{values["GH\u20B5500.00"] ?? "GH\u20B5500.00"}</p>
                </div>
                <div className="h-0 relative shrink-0 w-full" data-node-id="35:30965">
                  <div className="absolute inset-[-0.5px_0]">
                    <img alt="" className="block max-w-none size-full" src={imgVector215} />
                  </div>
                </div>
                <div className="[word-break:break-word] content-stretch flex gap-[8px] items-center justify-center leading-[1.45] not-italic relative shrink-0 w-full whitespace-nowrap" data-node-id="35:30966">
                  <p className="flex-[1_0_0] font-inter font-normal min-w-px overflow-hidden relative text-[14px] text-[color:var(--text-secondary,#434343)] text-ellipsis" data-node-id="35:30967">{values["Source account"] ?? "Source account"}</p>
                  <p className="flex-[1_0_0] font-inter font-medium min-w-px overflow-hidden relative text-[16px] text-[color:var(--text-primary,black)] text-ellipsis text-right" data-node-id="35:30968">{values["GamePark wallet \xB7 \u2022\u2022 4208"] ?? "GamePark wallet \xB7 \u2022\u2022 4208"}</p>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>;
}
