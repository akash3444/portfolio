"use client"

import { useId, useState } from "react"
import { ChevronRightIcon } from "lucide-react"

import {
  CustomerCheckbox,
  SelectableCustomerRow,
} from "@/app/gallery/table/customer-selection"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { TableCell, TableRow } from "@/components/ui/table"
import { cn } from "@/lib/utils"

type Customer = {
  name: string
  initials: string
  avatar: string
  company: string
  email: string
  plan: string
  status: string
  spend: string
  lastActive: string
}

export function ExpandableCustomerRow({ customer }: { customer: Customer }) {
  const [expanded, setExpanded] = useState(false)
  const detailsId = useId()

  return (
    <>
      <SelectableCustomerRow customerId={customer.email}>
        <TableCell>
          <CustomerCheckbox
            customerId={customer.email}
            customerName={customer.name}
          />
        </TableCell>
        <TableCell>
          <Button
            variant="ghost"
            size="icon-sm"
            onClick={() => setExpanded((value) => !value)}
            aria-expanded={expanded}
            aria-controls={detailsId}
            aria-label={`${expanded ? "Collapse" : "Expand"} ${customer.name}`}
          >
            <ChevronRightIcon
              className={cn("transition-transform", expanded && "rotate-90")}
            />
          </Button>
        </TableCell>
        <TableCell>
          <div className="flex items-center gap-2.5">
            <Avatar size="sm">
              <AvatarImage src={customer.avatar} alt="" />
              <AvatarFallback>{customer.initials}</AvatarFallback>
            </Avatar>
            <span className="font-medium">{customer.name}</span>
          </div>
        </TableCell>
        <TableCell>{customer.company}</TableCell>
        <TableCell>{customer.plan}</TableCell>
        <TableCell>{customer.status}</TableCell>
        <TableCell className="text-muted-foreground">
          {customer.lastActive}
        </TableCell>
        <TableCell className="text-right">{customer.spend}</TableCell>
      </SelectableCustomerRow>
      {expanded ? (
        <TableRow id={detailsId} className="bg-muted/30 hover:bg-muted/30">
          <TableCell colSpan={2} />
          <TableCell className="py-4 align-top">
            <div className="flex flex-col gap-1">
              <span className="text-xs text-muted-foreground">Email</span>
              <span className="font-medium">{customer.email}</span>
            </div>
          </TableCell>
          <TableCell className="py-4 align-top">
            <div className="flex flex-col gap-1">
              <span className="text-xs text-muted-foreground">Company</span>
              <span className="font-medium">{customer.company}</span>
            </div>
          </TableCell>
          <TableCell className="py-4 align-top">
            <div className="flex flex-col gap-1">
              <span className="text-xs text-muted-foreground">Plan</span>
              <span className="font-medium">{customer.plan}</span>
            </div>
          </TableCell>
          <TableCell className="py-4 align-top">
            <div className="flex flex-col gap-1">
              <span className="text-xs text-muted-foreground">
                Account status
              </span>
              <span className="font-medium">{customer.status}</span>
            </div>
          </TableCell>
          <TableCell />
          <TableCell className="py-4 text-right align-top">
            <div className="flex flex-col gap-1">
              <span className="text-xs text-muted-foreground">
                Lifetime spend
              </span>
              <span className="font-medium">{customer.spend}</span>
            </div>
          </TableCell>
        </TableRow>
      ) : null}
    </>
  )
}
