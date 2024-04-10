interface Options<T> {
  categories : T
  upload : T
  favorite : T
  search : T
  generate : T
}

interface Icon {
  src: string;
  width: number;
  height: number;
  format: string;
}

export interface OptionsUserMeta extends Options<Icon>{}
export interface OptionsUserStr extends Options<string>{}
export type OptionsUserKeys = keyof OptionsUserStr;
