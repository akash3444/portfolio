"use client"

import { createContext, useContext } from "react"

import { Checkbox } from "@/components/ui/checkbox"
import { TableRow } from "@/components/ui/table"
import { useRangeSelection } from "@/hooks/use-range-selection"

type CustomerSelectionContextValue = {
  selectedCustomers: Set<string>
  allSelected: boolean
  someSelected: boolean
  setCustomerSelected: (
    customerId: string,
    selected: boolean,
    selectRange: boolean
  ) => void
  setAllSelected: (selected: boolean) => void
}

const CustomerSelectionContext =
  createContext<CustomerSelectionContextValue | null>(null)

function useCustomerSelection() {
  const context = useContext(CustomerSelectionContext)

  if (!context) {
    throw new Error(
      "Customer selection controls must be inside CustomerSelectionProvider"
    )
  }

  return context
}

export function CustomerSelectionProvider({
  customerIds,
  children,
}: {
  customerIds: string[]
  children: React.ReactNode
}) {
  const {
    selectedIds: selectedCustomers,
    allSelected,
    someSelected,
    toggleItem,
    toggleAll,
  } = useRangeSelection(customerIds)

  function setCustomerSelected(
    customerId: string,
    selected: boolean,
    selectRange: boolean
  ) {
    toggleItem(customerId, selected, { shiftKey: selectRange })
  }

  function setAllSelected(selected: boolean) {
    toggleAll(selected)
  }

  return (
    <CustomerSelectionContext.Provider
      value={{
        selectedCustomers,
        allSelected,
        someSelected,
        setCustomerSelected,
        setAllSelected,
      }}
    >
      {children}
    </CustomerSelectionContext.Provider>
  )
}

export function SelectAllCustomersCheckbox() {
  const { allSelected, someSelected, setAllSelected } = useCustomerSelection()

  return (
    <Checkbox
      checked={allSelected}
      indeterminate={someSelected}
      onCheckedChange={setAllSelected}
      aria-label="Select all customers"
    />
  )
}

export function CustomerCheckbox({
  customerId,
  customerName,
}: {
  customerId: string
  customerName: string
}) {
  const { selectedCustomers, setCustomerSelected } = useCustomerSelection()

  return (
    <Checkbox
      checked={selectedCustomers.has(customerId)}
      // Prevent Shift+click from highlighting table text during range selection.
      onMouseDown={(event) => {
        if (event.shiftKey) {
          event.preventDefault()
        }
      }}
      onCheckedChange={(selected, eventDetails) =>
        setCustomerSelected(
          customerId,
          selected,
          eventDetails.event instanceof MouseEvent &&
            eventDetails.event.shiftKey
        )
      }
      aria-label={`Select ${customerName}`}
    />
  )
}

export function SelectableCustomerRow({
  customerId,
  ...props
}: { customerId: string } & React.ComponentProps<typeof TableRow>) {
  const { selectedCustomers } = useCustomerSelection()

  return (
    <TableRow
      {...props}
      data-state={selectedCustomers.has(customerId) ? "selected" : undefined}
    />
  )
}
