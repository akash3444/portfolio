"use client"

import { useState } from "react"

type RangeSelectionOptions = {
  shiftKey?: boolean
}

export function useRangeSelection<Id extends string | number>(
  itemIds: readonly Id[]
) {
  const [selectedIds, setSelectedIds] = useState<Set<Id>>(() => new Set())
  const [selectionAnchor, setSelectionAnchor] = useState<Id | null>(null)
  const allSelected =
    itemIds.length > 0 && itemIds.every((id) => selectedIds.has(id))
  const someSelected = itemIds.some((id) => selectedIds.has(id)) && !allSelected

  function toggleItem(
    itemId: Id,
    selected: boolean,
    { shiftKey = false }: RangeSelectionOptions = {}
  ) {
    const anchorIndex =
      selectionAnchor === null ? -1 : itemIds.indexOf(selectionAnchor)
    const itemIndex = itemIds.indexOf(itemId)
    const hasRange = shiftKey && anchorIndex >= 0 && itemIndex >= 0

    setSelectedIds((current) => {
      const next = new Set(current)

      if (hasRange) {
        const start = Math.min(anchorIndex, itemIndex)
        const end = Math.max(anchorIndex, itemIndex)

        for (const id of itemIds.slice(start, end + 1)) {
          if (selected) {
            next.add(id)
          } else {
            next.delete(id)
          }
        }

        return next
      }

      if (selected) {
        next.add(itemId)
      } else {
        next.delete(itemId)
      }

      return next
    })

    if (!hasRange) {
      setSelectionAnchor(itemId)
    }
  }

  function resetAnchor() {
    setSelectionAnchor(null)
  }

  function toggleAll(selected: boolean) {
    setSelectedIds(selected ? new Set(itemIds) : new Set())
    resetAnchor()
  }

  function isSelected(itemId: Id) {
    return selectedIds.has(itemId)
  }

  return {
    selectedIds,
    allSelected,
    someSelected,
    isSelected,
    toggleItem,
    toggleAll,
    resetAnchor,
  }
}
