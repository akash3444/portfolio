import type { Metadata } from "next"

import {
  CustomerCheckbox,
  CustomerSelectionProvider,
  SelectableCustomerRow,
  SelectAllCustomersCheckbox,
} from "@/app/gallery/table/customer-selection"
import { ExpandableCustomerRow } from "@/app/gallery/table/expandable-customer-row"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { cn } from "@/lib/utils"

const customers = [
  {
    name: "Maya Chen",
    initials: "MC",
    avatar: "https://untitledui.com/images/avatars/olivia-rhye",
    company: "Northstar Labs",
    email: "maya@northstarlabs.co",
    plan: "Enterprise",
    status: "Active",
    spend: "$18,240",
    lastActive: "Today",
  },
  {
    name: "Jon Bell",
    initials: "JB",
    avatar: "https://untitledui.com/images/avatars/phoenix-baker",
    company: "Relay Studio",
    email: "jon@relay.studio",
    plan: "Pro",
    status: "Active",
    spend: "$8,960",
    lastActive: "Yesterday",
  },
  {
    name: "Amara Okafor",
    initials: "AO",
    avatar: "https://untitledui.com/images/avatars/lana-steiner",
    company: "Fieldnote",
    email: "amara@fieldnote.io",
    plan: "Enterprise",
    status: "Onboarding",
    spend: "$14,720",
    lastActive: "2 days ago",
  },
  {
    name: "Theo Martin",
    initials: "TM",
    avatar: "https://untitledui.com/images/avatars/demi-wilkinson",
    company: "Arc & Co.",
    email: "theo@arcandco.com",
    plan: "Pro",
    status: "Active",
    spend: "$6,480",
    lastActive: "3 days ago",
  },
  {
    name: "Sofia Reyes",
    initials: "SR",
    avatar: "https://untitledui.com/images/avatars/candice-wu",
    company: "Kindred Health",
    email: "sofia@kindred.health",
    plan: "Enterprise",
    status: "Active",
    spend: "$21,600",
    lastActive: "4 days ago",
  },
  {
    name: "Eli Turner",
    initials: "ET",
    avatar: "https://untitledui.com/images/avatars/natali-craig",
    company: "Pine Systems",
    email: "eli@pinesystems.dev",
    plan: "Starter",
    status: "Trial",
    spend: "$1,280",
    lastActive: "1 week ago",
  },
  {
    name: "Leila Haddad",
    initials: "LH",
    avatar: "https://untitledui.com/images/avatars/drew-cano",
    company: "Forma Works",
    email: "leila@formaworks.design",
    plan: "Pro",
    status: "Active",
    spend: "$7,840",
    lastActive: "1 week ago",
  },
  {
    name: "Noah Williams",
    initials: "NW",
    avatar: "https://untitledui.com/images/avatars/orlando-diggs",
    company: "Brightline",
    email: "noah@brightline.agency",
    plan: "Starter",
    status: "Inactive",
    spend: "$2,160",
    lastActive: "2 weeks ago",
  },
]

const customerIds = customers.map((customer) => customer.email)

export const metadata: Metadata = {
  title: "Customers | Akash Moradiya",
  description: "A sample customer account table.",
}

export default function CustomersPage() {
  return (
    <CustomerSelectionProvider customerIds={customerIds}>
      <main
        className={cn(
          "mx-auto flex min-h-svh w-full flex-col py-16 sm:py-24",
          "space-y-10 *:px-6 *:not-data-[slot=separator]:mx-auto *:not-data-[slot=separator]:w-full *:not-data-[slot=separator]:max-w-5xl *:sm:px-8"
        )}
      >
        <div>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-10">
                  <SelectAllCustomersCheckbox />
                </TableHead>
                <TableHead>Customer</TableHead>
                <TableHead>Company</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Plan</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Last active</TableHead>
                <TableHead className="text-right">Lifetime spend</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {customers.map((customer) => (
                <SelectableCustomerRow
                  key={customer.email}
                  customerId={customer.email}
                >
                  <TableCell>
                    <CustomerCheckbox
                      customerId={customer.email}
                      customerName={customer.name}
                    />
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
                  <TableCell className="text-muted-foreground">
                    {customer.email}
                  </TableCell>
                  <TableCell>{customer.plan}</TableCell>
                  <TableCell>{customer.status}</TableCell>
                  <TableCell className="text-muted-foreground">
                    {customer.lastActive}
                  </TableCell>
                  <TableCell className="text-right">{customer.spend}</TableCell>
                </SelectableCustomerRow>
              ))}
            </TableBody>
          </Table>
        </div>

        <div data-slot="separator" className="border-t border-dashed" />

        <div className="[&>div]:rounded-xl [&>div]:border">
          <Table>
            <TableHeader className="bg-muted/50">
              <TableRow>
                <TableHead className="w-10">
                  <SelectAllCustomersCheckbox />
                </TableHead>
                <TableHead>Customer</TableHead>
                <TableHead>Company</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Plan</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Last active</TableHead>
                <TableHead className="text-right">Lifetime spend</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {customers.map((customer) => (
                <SelectableCustomerRow
                  key={customer.email}
                  customerId={customer.email}
                >
                  <TableCell>
                    <CustomerCheckbox
                      customerId={customer.email}
                      customerName={customer.name}
                    />
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
                  <TableCell className="text-muted-foreground">
                    {customer.email}
                  </TableCell>
                  <TableCell>{customer.plan}</TableCell>
                  <TableCell>{customer.status}</TableCell>
                  <TableCell className="text-muted-foreground">
                    {customer.lastActive}
                  </TableCell>
                  <TableCell className="text-right">{customer.spend}</TableCell>
                </SelectableCustomerRow>
              ))}
            </TableBody>
          </Table>
        </div>

        <div data-slot="separator" className="border-t border-dashed" />

        <div>
          <Table className="border-separate border-spacing-y-1">
            <TableHeader>
              <TableRow className="*:first:rounded-s-lg *:last:rounded-e-lg">
                <TableHead className="w-10">
                  <SelectAllCustomersCheckbox />
                </TableHead>
                <TableHead>Customer</TableHead>
                <TableHead>Company</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Plan</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Last active</TableHead>
                <TableHead className="text-right">Lifetime spend</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {customers.map((customer) => (
                <SelectableCustomerRow
                  key={customer.email}
                  customerId={customer.email}
                  className="rounded-lg border-b-0 *:first:rounded-s-lg *:last:rounded-e-lg"
                >
                  <TableCell>
                    <CustomerCheckbox
                      customerId={customer.email}
                      customerName={customer.name}
                    />
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
                  <TableCell className="text-muted-foreground">
                    {customer.email}
                  </TableCell>
                  <TableCell>{customer.plan}</TableCell>
                  <TableCell>{customer.status}</TableCell>
                  <TableCell className="text-muted-foreground">
                    {customer.lastActive}
                  </TableCell>
                  <TableCell className="text-right">{customer.spend}</TableCell>
                </SelectableCustomerRow>
              ))}
            </TableBody>
          </Table>
        </div>

        <div data-slot="separator" className="border-t border-dashed" />

        <div>
          <Table className="border-separate border-spacing-y-1">
            <TableHeader>
              <TableRow className="*:first:rounded-s-lg *:last:rounded-e-lg">
                <TableHead className="w-10">
                  <SelectAllCustomersCheckbox />
                </TableHead>
                <TableHead>Customer</TableHead>
                <TableHead>Company</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Plan</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Last active</TableHead>
                <TableHead className="text-right">Lifetime spend</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {customers.map((customer) => (
                <SelectableCustomerRow
                  key={customer.email}
                  customerId={customer.email}
                  className="rounded-lg border-b-0 bg-muted/50 ring ring-muted/60 ring-inset *:first:rounded-s-lg *:last:rounded-e-lg"
                >
                  <TableCell>
                    <CustomerCheckbox
                      customerId={customer.email}
                      customerName={customer.name}
                    />
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
                  <TableCell className="text-muted-foreground">
                    {customer.email}
                  </TableCell>
                  <TableCell>{customer.plan}</TableCell>
                  <TableCell>{customer.status}</TableCell>
                  <TableCell className="text-muted-foreground">
                    {customer.lastActive}
                  </TableCell>
                  <TableCell className="text-right">{customer.spend}</TableCell>
                </SelectableCustomerRow>
              ))}
            </TableBody>
          </Table>
        </div>

        <div data-slot="separator" className="border-t border-dashed" />

        <div className="*:rounded-xl *:border *:border-border/30 *:bg-muted *:px-1">
          <Table className="border-separate border-spacing-y-1">
            <TableHeader>
              <TableRow className="*:first:rounded-s-lg *:last:rounded-e-lg">
                <TableHead className="w-10">
                  <SelectAllCustomersCheckbox />
                </TableHead>
                <TableHead>Customer</TableHead>
                <TableHead>Company</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Plan</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Last active</TableHead>
                <TableHead className="text-right">Lifetime spend</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {customers.map((customer) => (
                <SelectableCustomerRow
                  key={customer.email}
                  customerId={customer.email}
                  className={cn(
                    "group rounded-xs border-b-0 bg-background text-foreground first:rounded-t-lg last:rounded-b-lg",
                    "*:first:rounded-s-xs first:*:first:rounded-tl-lg *:last:rounded-e-xs last:*:last:rounded-br-lg first:*:last:rounded-tr-lg last:*:first:rounded-bl-lg",
                    "data-[state=selected]:bg-foreground/50 data-[state=selected]:text-background"
                  )}
                >
                  <TableCell>
                    <CustomerCheckbox
                      customerId={customer.email}
                      customerName={customer.name}
                    />
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
                  <TableCell className="text-muted-foreground group-data-[state=selected]:text-background/70">
                    {customer.email}
                  </TableCell>
                  <TableCell>{customer.plan}</TableCell>
                  <TableCell>{customer.status}</TableCell>
                  <TableCell className="text-muted-foreground group-data-[state=selected]:text-background/70">
                    {customer.lastActive}
                  </TableCell>
                  <TableCell className="text-right">{customer.spend}</TableCell>
                </SelectableCustomerRow>
              ))}
            </TableBody>
          </Table>
        </div>

        <div data-slot="separator" className="border-t border-dashed" />

        <div className="[&>div]:rounded-xl [&>div]:border">
          <Table>
            <TableHeader className="bg-muted/50">
              <TableRow>
                <TableHead className="w-10">
                  <SelectAllCustomersCheckbox />
                </TableHead>
                <TableHead className="w-10">
                  <span className="sr-only">Expand row</span>
                </TableHead>
                <TableHead>Customer</TableHead>
                <TableHead>Company</TableHead>
                <TableHead>Plan</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Last active</TableHead>
                <TableHead className="text-right">Lifetime spend</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {customers.map((customer) => (
                <ExpandableCustomerRow
                  key={customer.email}
                  customer={customer}
                />
              ))}
            </TableBody>
          </Table>
        </div>
      </main>
    </CustomerSelectionProvider>
  )
}
