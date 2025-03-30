// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";
import "@openzeppelin/contracts/utils/math/SafeMath.sol";

contract GlobalEnergyProduction is ERC20, Ownable, ReentrancyGuard {
  using SafeMath for uint256;

  uint256 public constant TOTAL_SUPPLY = 1_500_000_000 * 10**12;
  // ... (resto do código)
}