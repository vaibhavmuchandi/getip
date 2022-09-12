
# getip

> Get your public IP addresses. Uses [Ipify](https://www.ipify.org) service.

## Install
```
npm install @0xvaibhav/getip
```
## Usage
Import the functions `ipv4()` and `ipv6()` 
```js
import { ipv4, ipv6 } from "0xvaibhav/getip"
```
Getting the public IP addresses.
```js
    console.log(await ipv4())
    console.log(await ipv6())
```
OR
```js
    ipv4()
        .then(ipv4 => console.log(ipv4))
        .catch(e => console.log(e))
    ipv6()
        .then(ipv6 => console.log(ipv6))
        .catch(e => console.log(e))
```
## Contribute
Feel free to join in. All welcome. Open an [issue](https://github.com/vaibhavmuchandi/ipfs-messenger/issues)!