import React from 'react';
import {Button} from '@/components/ui/button';
import {Card} from '@/components/ui/card';
import {DesignField} from '@/figma/fields';
export default function DesignTransactionTabs({
  onAction = () => {},
  onValueChange = () => {},
  values = {}
} = {}) {
  return <div className="bg-[var(--color-neutral-100,#f5f5f5)] content-stretch flex gap-[8px] items-center justify-center p-[3px] relative rounded-[8px] size-full" data-node-id="35:28925">
      <div className="bg-[var(--color-neutral-50,white)] content-stretch flex flex-[1_0_0] flex-col gap-[3px] items-center min-w-px p-[3px] relative rounded-[5px]" data-node-id="35:28926" data-name="Tab">
        <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-node-id="I35:28926;405:32390">
          <p className="[word-break:break-word] font-inter font-medium leading-[1.45] not-italic relative shrink-0 text-[#242424] text-[length:var(--font-size-paragraph-md,16px)] whitespace-nowrap" data-node-id="I35:28926;405:32352">{values["All transactions"] ?? "All transactions"}</p>
        </div>
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col gap-[3px] items-center min-w-px relative" data-node-id="35:28927" data-name="Tab">
        <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-node-id="I35:28927;405:32820">
          <p className="[word-break:break-word] font-inter font-normal leading-[1.45] not-italic relative shrink-0 text-[color:var(--text-tertiary,#737678)] text-[length:var(--font-size-paragraph-md,16px)] whitespace-nowrap" data-node-id="I35:28927;405:32773">{values["Collections"] ?? "Collections"}</p>
        </div>
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col gap-[3px] items-center min-w-px relative" data-node-id="35:28928" data-name="Tab">
        <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-node-id="I35:28928;405:32820">
          <p className="[word-break:break-word] font-inter font-normal leading-[1.45] not-italic relative shrink-0 text-[color:var(--text-tertiary,#737678)] text-[length:var(--font-size-paragraph-md,16px)] whitespace-nowrap" data-node-id="I35:28928;405:32773">{values["Disbursements"] ?? "Disbursements"}</p>
        </div>
      </div>
    </div>;
}
