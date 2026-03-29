export type RizzuiUiPreset = 'modern' | 'minimal' | 'bold' | 'soft';

export interface RizzuiConfigFile {
  version: 1;
  globalsPath: string;
  darkMode: boolean;
  uiPreset: RizzuiUiPreset;
}
