import { Side, PagePosition, CellValue, Row } from '../store/types';

export type ElementInfo = {
  side: Side;
  top: number;
  left: number;
} & ScrollData;
export type OverflowType = -1 | 0 | 1;
export type EventInfo = PagePosition & {
  shiftKey: boolean;
};
export type ViewInfo = PagePosition & ScrollData;
export type UpdateType = 'UPDATE_COLUMN' | 'UPDATE_CELL' | 'UPDATE_ROW';

export interface ScrollData {
  scrollLeft: number;
  scrollTop: number;
}

export interface OverflowInfo {
  x: OverflowType;
  y: OverflowType;
}

export interface BodySize {
  bodyWidth: number;
  bodyHeight: number;
}

export interface ContainerPosition {
  x: number;
  y: number;
}

export interface Options {
  prevValue?: CellValue;
  value?: CellValue;
  appended?: boolean;
}

export interface OriginData {
  rows: Row[];
  targetIndexes: number[];
}