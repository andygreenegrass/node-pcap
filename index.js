
var util           = require('util');
var decode         = require('./decode').decode;
var tcp_tracker    = require('./lib/tcpTracker');
var DNSCache       = require('./lib/dnsCache');
var binding        = require('./build/Release/pcap_binding');
var LiveSession    = require('./lib/liveSession');
var OfflineSession = require('./lib/offlineSession');

module.exports = {
    Session: LiveSession,
    OfflineSession: OfflineSession,
    decode: decode,
    TCPTracker: tcp_tracker.TCPTracker,
    TCPSession: tcp_tracker.TCPSession,
    DNSCache: DNSCache,
    libVersion: binding.lib_version(),

    // Deprecated
    // -------------------------------------------------------------------------
    lib_version: util.deprecate(function() {
        return binding.lib_version();
    }, 'lib_version: Use libVersion instead'),
    createSession: util.deprecate(function(device, filter, bufferSize, monitor) {
        var options = {
            filter: filter,
            bufferSize: bufferSize,
            isMontor: monitor
        };
        return new LiveSession(device, options);
    }, 'createSession: Create Session object instead'),
    createOfflineSession: util.deprecate(function(path, filter) {
        var options = {
            filter: filter
        };
        return new OfflineSession(path, options);
    }, 'createSession: Create OfflineSession object instead')
};
