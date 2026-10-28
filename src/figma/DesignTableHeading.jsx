import React from 'react';
import {Button} from '@/components/ui/button';
import {Card} from '@/components/ui/card';
import {DesignField} from '@/figma/fields';
const imgMinus = "/figma/35-26975-9e21b.svg";
export default function DesignTableHeading({
  onAction = () => {},
  onValueChange = () => {},
  values = {}
} = {}) {
  return <div className="content-stretch flex items-center relative size-full" data-node-id="35:26975">
      <div className="content-stretch flex items-center justify-center px-[12px] py-[7px] relative shrink-0 w-[66px]" data-node-id="35:26976" data-name="Table header cell">
        <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-node-id="35:26977" data-name="Table header">
          <div className="bg-[#f7faff] border border-[var(--border-default,#d5d6d7)] border-solid overflow-clip relative rounded-[6px] shrink-0 size-[20px]" data-node-id="35:26978" data-name="_Checkbox base">
            <div className="absolute inset-[calc(15%-0.7px)]" data-node-id="35:26979" data-name="minus">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgMinus} />
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-[1_0_0] items-center min-w-px px-[12px] py-[8px] relative" data-node-id="35:26983" data-name="Table header cell">
        <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-node-id="35:26984" data-name="Table header">
          <p className="[word-break:break-word] font-hanken font-normal leading-[var(--font-size-l,18px)] relative shrink-0 text-[#242424] text-[14px] whitespace-nowrap" data-node-id="35:26985">{values["Transaction ID"] ?? "Transaction ID"}</p>
        </div>
      </div>
      <div className="content-stretch flex flex-[1_0_0] items-center min-w-px px-[12px] py-[8px] relative" data-node-id="35:26988" data-name="Table header cell">
        <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-node-id="35:26989" data-name="Table header">
          <p className="[word-break:break-word] font-hanken font-normal leading-[var(--font-size-l,18px)] relative shrink-0 text-[#242424] text-[14px] whitespace-nowrap" data-node-id="35:26990">{values["Customer phone number"] ?? "Customer phone number"}</p>
        </div>
      </div>
      <div className="content-stretch flex flex-[1_0_0] items-center min-w-px overflow-clip px-[12px] py-[8px] relative" data-node-id="35:27028" data-name="Table header cell">
        <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-node-id="35:27029" data-name="Table header">
          <p className="[word-break:break-word] font-hanken font-normal leading-[var(--font-size-l,18px)] relative shrink-0 text-[#242424] text-[14px] whitespace-nowrap" data-node-id="35:27030">{values["Amount"] ?? "Amount"}</p>
        </div>
      </div>
      <div className="content-stretch flex flex-[1_0_0] items-center min-w-px overflow-clip px-[12px] py-[8px] relative" data-node-id="35:27033" data-name="Table header cell">
        <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-node-id="35:27034" data-name="Table header">
          <p className="[word-break:break-word] font-hanken font-normal leading-[var(--font-size-l,18px)] relative shrink-0 text-[#242424] text-[14px] whitespace-nowrap" data-node-id="35:27035">{values["Status"] ?? "Status"}</p>
        </div>
      </div>
      <div className="content-stretch flex items-center px-[12px] py-[8px] relative shrink-0 w-[205px]" data-node-id="35:27038" data-name="Table header cell">
        <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-node-id="35:27039" data-name="Table header">
          <p className="[word-break:break-word] font-hanken font-normal leading-[var(--font-size-l,18px)] relative shrink-0 text-[#242424] text-[14px] whitespace-nowrap" data-node-id="35:27040">{values["Date and time"] ?? "Date and time"}</p>
        </div>
      </div>
      <div className="content-stretch flex flex-[1_0_0] items-center min-w-px px-[12px] py-[8px] relative" data-node-id="35:27043" data-name="Table header cell">
        <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-node-id="35:27044" data-name="Table header">
          <p className="[word-break:break-word] font-hanken font-normal leading-[var(--font-size-l,18px)] relative shrink-0 text-[#242424] text-[14px] whitespace-nowrap" data-node-id="35:27045">{values["Category"] ?? "Category"}</p>
        </div>
      </div>
      <div className="content-stretch flex h-[44px] items-center px-[24px] py-[8px] relative shrink-0 w-[77px]" data-node-id="35:27048" data-name="Table header cell" />
    </div>;
}
