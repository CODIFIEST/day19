<script lang="ts">
    import DisplayNfTs from "./components/DisplayNFTs.svelte";
    import Navbar from "./components/Navbar.svelte";
    import { account } from "./stores/account";
    import { nfts } from "./stores/nfts";


 </script>
<Navbar/>
{#if $account}

<DisplayNfTs />
{:else}
<!-- {:else} -->
Connect your wallet to view NFTs
{/if}
<style>

</style>