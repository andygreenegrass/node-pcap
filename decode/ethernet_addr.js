var util = require("../lib/util");

//Also known as MAC address
function EthernetAddr(raw_packet, offset) {
	this.addr = new Array(6);
	this.addr[0] = raw_packet[offset];
	this.addr[1] = raw_packet[offset + 1];
	this.addr[2] = raw_packet[offset + 2];
	this.addr[3] = raw_packet[offset + 3];
	this.addr[4] = raw_packet[offset + 4];
	this.addr[5] = raw_packet[offset + 5];
	
	// The least significant bit of the most significant byte is used to tell if address in unicast or multicast/broadcast
	this.unicast = !(this.addr[0] & 0x01);  // The bit will be 1 on multicast/broadcast address, and 0 on unicast ones.
}

EthernetAddr.prototype.toString = function toString() {
	return util.int8_to_hex[this.addr[0]] + ":" +
		util.int8_to_hex[this.addr[1]] + ":" +
		util.int8_to_hex[this.addr[2]] + ":" +
		util.int8_to_hex[this.addr[3]] + ":" +
		util.int8_to_hex[this.addr[4]] + ":" +
		util.int8_to_hex[this.addr[5]];
};

module.exports = EthernetAddr;
