// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import {Test, console} from "forge-std/Test.sol";
import {Soulbound} from "../src/Soulbound.sol";

contract SoulboundTest is Test {
    Soulbound soulbound;
    address owner = address(1);
    address user = address(2);

    function setUp() public {
        soulbound = new Soulbound(owner);
    }

    function testSafeMint() public {
        vm.startPrank(owner);
        string memory uri = "https://example.com/token/1";
        soulbound.safeMint(user, uri);
        vm.stopPrank();

        assertEq(soulbound.balanceOf(user), 1, "Balance should be 1 after minting");
        assertEq(soulbound.ownerOf(0), user, "User should own the minted token");
        assertEq(soulbound.tokenURI(0), uri, "Token URI should match the provided URI");
    }

    function testLockingAfterMint() public {
        vm.startPrank(owner);
        string memory uri = "https://example.com/token/1";
        soulbound.safeMint(user, uri);
        vm.stopPrank();

        bool isLocked = soulbound.locked(0);
        assertTrue(isLocked, "Token should be locked after minting");
    }

    function testTransferNotAllowed() public {
        vm.startPrank(owner);
        string memory uri = "https://example.com/token/1";
        soulbound.safeMint(user, uri);
        vm.stopPrank();

        vm.expectRevert("Transfer not allowed");
        soulbound.safeTransferFrom(user, owner, 0);
    }
}