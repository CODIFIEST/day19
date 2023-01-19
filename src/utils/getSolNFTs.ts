import { NFTType, type NFT } from "../domain/nft";
// not currently supported by solanaJS
 import axios from "axios";

 async function getSolNFTs(address: string): Promise<NFT[]> {
    const config = {
        headers: {
            "Content-Type": "application/json",
        },
    };
    const data = {
        jsonrpc: "2.0",
        id: 1,
        method: "qn_fetchNFTs",
        params: {
            wallet: "DcTmx4VLcf5euAB17nynax7g55xuB3XKBDyz1pudMcjW",
            omitFields: ["provenance", "traits"],
            page: 1,
            perPage: 10,
        },
    };
    const quiknodeNFTs = await axios.post("https://nameless-falling-market.solana-devnet.discover.quiknode.pro/1251a9caf84a2d2c0b0b318b1b6ddcd57f326d80/", data, config)
    console.log("solana wallet data")
    console.log (quiknodeNFTs.data)
    const domainNFTs:NFT[] =[];
    quiknodeNFTs.data.result.assets.forEach(nft =>{
        const eachNFT:NFT ={
            title: nft.name,
            description:nft.description,
            imageURL: nft.imageURL,
            nftType: NFTType.Solana
        }
        domainNFTs.push(eachNFT)
   
    })
    // axios
    //     .post("https://nameless-falling-market.solana-devnet.discover.quiknode.pro/1251a9caf84a2d2c0b0b318b1b6ddcd57f326d80/", data, config)
    //     .then(function (response) {
    //         // handle success
    //         // console.log("solana wallet data")
    //         // console.log(response.data);
          
    //     })
    //     .catch((err) => {
    //         // handle error
    //         console.log(err);
          
    //     });
    console.log(domainNFTs)
        return domainNFTs;
};


export default getSolNFTs