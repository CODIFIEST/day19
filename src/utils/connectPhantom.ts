import getSolNFTs from "./getSolNFTs";

async function connectPhantom (){
    const phantom = await (window as any).phantom.solana.connect();
    console.log(phantom)
    const SOLNFTs = await getSolNFTs(phantom.address)
    console.log("Sol NFTs")
    console.log(SOLNFTs)
}
export default connectPhantom;