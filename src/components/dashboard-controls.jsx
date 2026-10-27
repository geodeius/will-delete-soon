import { Badge } from '@/components/ui/badge';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetDescription, SheetClose } from '@/components/ui/sheet';
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { X } from 'lucide-react';
import { cn } from '@/lib/utils';

// Product-specific compositions of the official shadcn/ui components.
export function StatusBadge({tone='neutral', className, ...props}) {
 return <Badge variant="secondary" className={cn(`badge-${tone}`,className)} {...props}/>;
}
export function DetailSheet({open,onOpenChange,title,description,children}) {
 return <Sheet open={open} onOpenChange={onOpenChange}>
  <SheetContent className="detail-sheet" showCloseButton={false}>
   <SheetHeader className="p-0"><SheetTitle>{title}</SheetTitle><SheetDescription>{description}</SheetDescription></SheetHeader>
   <SheetClose asChild><Button variant="ghost" size="icon-sm" className="absolute top-5 right-5" aria-label="Close details"><X/></Button></SheetClose>
   {children}
  </SheetContent>
 </Sheet>;
}
export function FilterSelect({label,value,onValueChange,options}) {
 return <Select value={value} onValueChange={onValueChange}>
  <SelectTrigger aria-label={label}><SelectValue/></SelectTrigger>
  <SelectContent position="popper" align="start">{options.map(option=>{const item=typeof option==='string'?{value:option,label:option}:option;return <SelectItem key={item.value} value={item.value}>{item.label}</SelectItem>})}</SelectContent>
 </Select>;
}
