import { ethers } from 'ethers';

export function checksumAddresses(addresses: string[]) {
  return addresses.map((a) => ethers.utils.getAddress(a));
}

export function checksumAddressesMap<T>(addresses: Record<string, T>) {
  return Object.fromEntries(
    Object.entries(addresses).map((entry) => [
      ethers.utils.getAddress(entry[0]),
      entry[1],
    ]),
  );
}
