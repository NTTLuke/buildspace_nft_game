//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract Greeter {
    address sender;
    uint256 depositTime;

    receive() external payable {
        sender = msg.sender;
        depositTime = block.timestamp;
    }

    function redeem() external {
        require(
            block.timestamp > depositTime + 5 seconds,
            "You can only redeem after 5 seconds"
        );
        require(msg.sender == sender, "not your money!");

        payable(msg.sender).transfer(address(this).balance);
    }
}
