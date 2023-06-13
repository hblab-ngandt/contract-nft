// SPDX-License-Identifier: MIT

pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract GRToken is ERC721 {
    using Counters for Counters.Counter;

    struct Token {
        string name;
        string description;
        string imageUrl;
    }

    Counters.Counter private _tokenIdCounter;
    mapping(uint256 => Token) private _tokens;

    constructor() ERC721("GRToken", "GRTK") {}

    function mint(string memory name, string memory description, string memory imageUrl, address market) public returns (uint256) {
        _tokenIdCounter.increment();
        uint256 tokenId = _tokenIdCounter.current();
        _mint(msg.sender, tokenId);
        _tokens[tokenId] = Token(name, description,imageUrl);
        setApprovalForAll(market, true);
        return tokenId;
    }
}