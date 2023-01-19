<script lang="ts">
    import type { NFT } from "../domain/nft";
    import transformURLs from "../utils/transformURLs";
export let nft:NFT;

</script>
{#if (nft.imageURL)}
<h2> {nft.title}</h2> <br/>
{nft.description} <br>
<img src={transformURLs(nft.imageURL)} alt={nft.description}> <br>
{transformURLs(nft.imageURL)}
{/if}

<style>

    img {
        height: 150px;
        width: 150px;
    }
</style>