type Align = 'start' | 'end';
type Side = 'top' | 'right' | 'bottom' | 'left';
export type TheirPlacementType = `${Side}` | `${Side}-${Align}`;
type OurPlacementType = `${Side}` | `${Side} ${Align}`;

export const ourPlacementObject: {
  [key in TheirPlacementType]: OurPlacementType;
} = {
  top: 'top',
  right: 'right',
  bottom: 'bottom',
  left: 'left',
  'top-start': 'top start',
  'top-end': 'top end',
  'bottom-start': 'bottom start',
  'bottom-end': 'bottom end',
  'right-start': 'right start',
  'right-end': 'right end',
  'left-start': 'left start',
  'left-end': 'left end',
};
