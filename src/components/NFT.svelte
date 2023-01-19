<script lang="ts">
    import type { NFT } from "../domain/nft";
    import transformURLs from "../utils/transformURLs";
export let nft:NFT;

</script>
{#if (nft.imageURL)}
<div class ="the-NFT">
<h2> {nft.title}</h2> <br/>
{nft.description} <br>
<img src={transformURLs(nft.imageURL)} alt={nft.description}> <br>
{transformURLs(nft.imageURL)}
</div>
{/if}

<style>

    img {
        height: 150px;
        width: 150px;
    }
.the-NFT {
    margin:0 auto;
}
</style>