
export interface DataInterface {
    name: string;
    version: string;
    hash: string;
    branch: string;
    lastModefied: string;
}
// @ts-ignore  for webpack global
export const metadata: DataInterface = _METADATA_;
