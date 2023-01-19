<script lang="ts">
    import { ethers } from "ethers";
    import type { NFT } from "../../domain/nft";
    import { account } from "../../stores/account";
    import { nfts } from "../../stores/nfts";
    // import nfts from "../../stores/nfts";
    import getNFTsFromAddress from "../../utils/getNFTsFromAddress";
    // import DisplayNfTs from "../DisplayNFTs.svelte";
    // import * as solanaWeb3 from "@solana/web3.js";

    // console.log(solanaWeb3);

    type EthWindow = {
        ethereum: any; //### TODO- get rid of the any type
    };
    async function connect() {
        const provider = new ethers.providers.Web3Provider(
            (window as any as EthWindow).ethereum
        );

        const accounts = await provider.send("eth_requestAccounts", []);
        const walletAccount = accounts[0];
        account.set(walletAccount);
        console.log(provider);
        console.log(accounts);
        console.log($account);
        // account.set("0x02e725b7e99091bd4ccbf15228384e160ecdf78f");
        const theNFTs: NFT[] = await getNFTsFromAddress($account);
        // console.log($account);
        console.log(theNFTs);
        nfts.set(theNFTs);
        // console.log("$nfts")
        //  console.log($nfts)
    }
</script>

<button
    on:click={async () => {
        await connect();
    }}>Connect Your Wallet</button
>


<style>
</style>
