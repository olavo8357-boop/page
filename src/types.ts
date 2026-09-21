export type TimeRange = '7d' | '30d' | '12m';

export interface MetricCardData {
  label: string;
  value: string;
  subtext: string;
  positive?: boolean;
}

export interface StatusItemData {
  label: string;
  count: number;
  color: string;
}
