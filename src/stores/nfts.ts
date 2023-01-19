import { writable } from "svelte/store";
import type {NFT} from "../domain/nft";
export const nfts = writable<NFT[]>();
