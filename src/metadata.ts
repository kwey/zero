export interface IData {
    name: string
    version: string
    // hash: string
    // branch: string
    lastModefied: string
}
// @ts-ignore  for webpack global
export const metadata: IData = _METADATA_
