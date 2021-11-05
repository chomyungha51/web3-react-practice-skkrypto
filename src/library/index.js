import { Web3Provider } from "@ethersproject/providers";

function getLibrary(provider) {
    const library = new Web3Provider(provider);
    return library;
}

export default getLibrary;