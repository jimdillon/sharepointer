/*
 Performs Cookie-signed requests to the backend.
 Think of this as a HTTP client for the rest of the library.
 httpOpts get passed from the object model for lists, list items etc, and feed into request.
 */

var _ = require('underscore'),
request = require('request'),
underscoreDeepExtend = require('underscore-deep-extend'),
constants = require('../../constants.js');

_.mixin({
  deepExtend: underscoreDeepExtend(_)
});

module.exports = function(client, httpOpts, waterfallCb){
  var requestOpts = _.deepExtend({}, httpOpts, client.baseHTTPOptions, constants.SP_ONLINE_SECURITY_OPTIONS, {
    headers: {
      //'Cookie': 'FedAuth=' + client.FedAuth + '; rtFa=' + client.rtFa,
      'Cookie': 'SearchSession=07a000f6%2D3bb8%2D4bfe%2D93ae%2D6fb9f99a6bc6; _InfoPath_CanaryValueAFJS5K7GTB6WEQN7LP3END2IFVTGGL3TNF2GK4ZPKRZGC2LONFXGOMRPKRSXG5CJKRBUCUSBOBYHE33WMFWHGL2XN5ZGWZTMN53XGL2JKQQEGQKSEBAXA4DSN53GC3BAK5XXE23GNRXXOL2BOBYHE33WMFWCAX3YGAYDEOC7HBPXQMBQGI4V6LTYONXCUSSPG4ZTGNJUMVMGORJRKJBE4NKFOBRHIRLHKB2TA23ZNZ4VKRTUOMYGK2SBGEZHKQ2RA=jxddeDV32Wb2W0x2MELOQ5OL+fCGDj53JQOtkczugOW5d8QsddAD+so8lruLmM0hNFHagaMCQNH3yPdnGpdBIA==|635826815818416146; RpsContextCookie _InfoPath_CanaryValueAFJS5K7GTB6WEQN7LP3END2IFVTGGL3TNF2GK4ZPKRZGC2LONFXGOMRPKRSXG5CJKRBUCUSBOBYHE33WMFWHGL2XN5ZGWZTMN53XGL2JKQQEGQKSEBAXA4DSN53GC3BAK5XXE23GNRXXOL2JKQQEGQKSEBAXA4DSN53GC3BAK5XXE23GNRXXOLTYONXCWVTIG5SUGQ2OJM4EIQJYM5MU2YL2GZIHOWC2GV3UGTKNKN4UCU2ZKF3XAU3TGJXWYMLZKE=TaV+sJRdyswHSfyM++XKd0XVNWqBBXJWgi1/8765XwGWuzLyg6U48fwxQcW04bPPJMsCw0IBrjhhc9AY4vZiFA==|635826885142393534; _InfoPath_Sentinel=1; WSS_FullScreenMode=false; rtFa=59XPOhQOPmmtD4yP1xq2Wa+H6IdV0mcf2T50gYNtTX+C5rqutwdxqI7whXJEnZx3Ep4vEon9LZOQXAilb/z+7x7l5xW',
      'Accept' : 'application/json; odata=verbose',
      'Content-Type' : 'application/json; odata=verbose'
    },
    json : httpOpts.json || true,
    timeout: constants.SP_ONLINE_TIMEOUT
  }, httpOpts);
  return request(requestOpts, waterfallCb);
};
