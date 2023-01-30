// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract ImageToken is ERC721, ERC721URIStorage {
    using Counters for Counters.Counter;

    address private marketplaceAddress;
    Counters.Counter private _tokenIdCounter;
    mapping(string => bool) private _usedTokenURIs; // default is false

    constructor(address _marketplaceAddress) ERC721("ImageToken", "IMTK") {
        marketplaceAddress = _marketplaceAddress;
    }

    function safeMint(address to, string memory uri) public {
        require(_usedTokenURIs[uri] == false, "URI already exists");
        uint256 tokenId = _tokenIdCounter.current();
        _tokenIdCounter.increment();
        _safeMint(to, tokenId);
        _setTokenURI(tokenId, uri);
        _usedTokenURIs[uri] = true;
        setApprovalForAll(marketplaceAddress, true);
    }

    // The following functions are overrides required by Solidity.

    function _burn(uint256 tokenId) internal override(ERC721, ERC721URIStorage) {
        super._burn(tokenId);
    }

    function tokenURI(uint256 tokenId)
        public
        view
        override(ERC721, ERC721URIStorage)
        returns (string memory)
    {
        return super.tokenURI(tokenId);
    }

    function getCounterToken() public view returns(uint256) {
        uint256 numberToken = _tokenIdCounter.current();
        return numberToken;
    }
}