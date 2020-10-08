import { atom } from 'recoil';

export const boardAtom = atom({
  key: "boardAtom",
  default: [
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
  ]
})

export const modalIsOpenAtom = atom({
  key: "modalIsOpenAtom",
  default: false
})

export const selectedNumberAtom = atom({
  key: "modalFormAtom",
  default: 0
})

export const selectedCellAtom = atom({
  key: "selectedCellAtom",
  default: {
    i: 0,
    j: 0
  }
})