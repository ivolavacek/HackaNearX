// SPDX-License-Identifier: MIT
pragma solidity ^0.8.18;

import {Script, console2} from "../lib/forge-std/src/Script.sol";
import {GIVTokens} from "../src/GIVTokens.sol";
import {Soulbound} from "../src/Soulbound.sol";

contract Local is Script {
    GIVTokens givTokens;
    Soulbound soulbound;
   
    function run() public {
        vm.startBroadcast(0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80);

        givTokens = new GIVTokens();
        console2.log("GIV address: ", address(givTokens));

        address initialOwner = msg.sender; 
        soulbound = new Soulbound(initialOwner);
         console2.log("Soulbound (721) address: ", address(soulbound));

        vm.stopBroadcast();
    }
}
