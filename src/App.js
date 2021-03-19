import React, { useEffect } from "react";
import "./App.css";
import axios from "axios";
import CircularProgress from "@material-ui/core/CircularProgress";
import Dashboard from "./Dashboard/Component/Dashboard";

function App() {
  useEffect(() => {
    getData();
  }, []);

  const [receivedData, setReceivedData] = React.useState({});
  const [loading, setLoading] = React.useState(false);

  var data = [];
  const getData = () => {
    setLoading(true);
    axios.get("http://localhost:5000/generate-js-tag/4").then((response) => {
      console.log("data", response.data);
      setLoading(false);
      data = response.data;
      setReceivedData(response.data);
    });
  };

  var id = receivedData.id;
  var websiteUrl = receivedData.websiteUrl;
  var adUnitName = receivedData.adUnitName;
  var paramsName1 = receivedData.paramsName1;
  const paramsValue1 = receivedData.paramsValue1;
  var paramsName2 = receivedData.paramsName2;
  const paramsValue2 = receivedData.paramsValue2;
  var adUnitNumber = receivedData.adUnitNumber;
  var height = receivedData.height;
  var height1 = receivedData.height1;
  var height2 = receivedData.height2;
  var width = receivedData.width;
  var width1 = receivedData.width2;
  var width2 = receivedData.width2;
  var both = receivedData.both;
  var both1 = receivedData.both1;
  var both2 = receivedData.both2;
  var bidderName1 = "Apple";
  var bidderName2 = "Samsung";

  return (
    <>
      {loading ? (
        <CircularProgress />
      ) : (
        <>
          <div
            style={{ padding: "5rem", marginLeft: 200, width: 100 }}
            className="App"
            dangerouslySetInnerHTML={{
              __html:
                "<code><span><</span>script async src = '//www.googletagservices.com/tag/js/gpt.js'> <span><</span>/script<span>></span> <br/>" +
                "<span><</span>script  async src = '//phpstack-361553-1427736.cloudwaysapps.com/prebid/prebid.js'> <span><</span>/script<span>></span> <br/>" +
                "<span><</span>script " +
                "var googletag = googletag || {};" +
                "googletag.cmd = googletag.cmd || [];" +
                "var pbjs = pbjs || {};" +
                "pbjs.que = pbjs.que || [];" +
                "var PREBID_TIMEOUT = 3000;" +
                "var date = new Date().getTime();" +
                "var div_1_sizes = [" +
                "[" +
                height +
                "," +
                width +
                "]," +
                "[" +
                height1 +
                "," +
                width1 +
                "], " +
                "]; " +
                "var div_2_sizes = [ " +
                "[" +
                height2 +
                "," +
                width2 +
                "], " +
                "function initAdserver() { " +
                "if (pbjs.initAdserverSet) return; " +
                "googletag.cmd.push(function () { " +
                "pbjs.que.push(function () { " +
                "pbjs.setTargetingForGPTAsync(); " +
                "googletag.pubads().refresh(); " +
                "}); " +
                "}); " +
                "pbjs.initAdserverSet = true; " +
                "}" +
                // Load GPT when timeout is reached.
                "setTimeout(initAdserver, PREBID_TIMEOUT); " +
                "pbjs.que.push(function () { " +
                "pbjs.setConfig({ " +
                "debug: true, " +
                "bidderTimeout: 5000 " +
                "}); <" +
                "var allSlotsBidWon = function allSlotsBidWon() {" +
                "console.log('allSlotsBidWon called');" +
                "};" +
                "pbjs.onEvent('bidWon', allSlotsBidWon);var PREBID_TIMEOUT = 1000;" +
                "var FAILSAFE_TIMEOUT = 3000;var adUnits = [{ " +
                " code: '111'," +
                "mediaTypes: { banner: { sizes: div_1_sizes } }, bids: [" +
                "{" +
                "bidder: '" +
                bidderName1 +
                "'," +
                "params: { " +
                paramsName1 +
                " : '" +
                paramsValue1 +
                "'," +
                "}" +
                "},{" +
                "bidder: '" +
                bidderName2 +
                "'," +
                "params: { " +
                paramsName2 +
                " : '" +
                paramsValue2 +
                "'," +
                "}" +
                "},{" +
                // "bidder: 'luponmedia'," +
                // " params: { <b+
                // "keyId : '888'," +
                // "siteId : '999' <b+
                // "}" +
                // "},{" +
                // "bidder: 'test'," +
                // " params: { <b+
                // "test : '000'" +
                // "}" +
                // "},{" +
                // "bidder: 'gumgum'," +
                // "params: { <b+
                // "id : '123'," +
                // "field : '234'" +
                // "}" +
                // "}" +
                // "] },{" +
                // "code: '111'," +
                "mediaTypes: { banner: { sizes: div_2_sizes } }, bids: [" +
                "{" +
                "bidder: 'adkernel'," +
                "params: { " +
                "host : '333'," +
                "zoneId : '444'" +
                "}" +
                "},{" +
                "bidder: 'project-limelight'," +
                "params: {" +
                "adUnitType : '555'," +
                "adUnitId : '666'," +
                "host : '777' " +
                "}" +
                "},{" +
                "bidder: 'luponmedia'," +
                "params: { " +
                "keyId : '888'," +
                "siteId : '999'" +
                "}" +
                "},{" +
                "bidder: 'test'," +
                "params: { " +
                "test : '000'" +
                "}" +
                "},{" +
                "bidder: 'gumgum'," +
                "params: { " +
                "id : '123'," +
                "field : '234'" +
                "}" +
                "}" +
                "] }" +
                "];" +
                "pbjs.addAdUnits(adUnits);" +
                "pbjs.requestBids({" +
                "bidsBackHandler: function (bidResponses) {" +
                "console.log('my-bid-response-data', bidResponses);" +
                "impression78(bidResponses, '111');" +
                "initAdserver();" +
                "}" +
                "});" +
                "});" +
                "function impression78(b_res78, div_id78) {" +
                "var device78 = window.navigator.userAgent;" +
                "const params78 = {" +
                "b_res: b_res78," +
                "div_id: div_id78," +
                "device: device7" +
                "}" +
                "var xhttp = new XMLHttpRequest();" +
                "xhttp.open('POST', 'https://phplaravel-361553-1515970.cloudwaysapps.com/api/log/impression', false);" +
                // xhttp.setRequestHeader('Content-type', 'application/json');
                "xhttp.send(JSON.stringify(params78));" +
                "}" +
                "</br>" +
                "<span><</span>scrip" +
                // GPT setup
                "googletag.cmd.push(function() {" +
                "var REFRESH_KEY = 'refresh';" +
                "var REFRESH_VALUE = 'true';" +
                "let mapping78 = googletag.sizeMapping()" +
                ".addSize([1024, 768], div_1_sizes)" +
                ".addSize([650, 375], [468,60])" +
                ".addSize([0, 0], [320, 100])" +
                ".build();" +
                "googletag.defineSlot('222', div_1_sizes, '111')" +
                ".setTargeting(REFRESH_KEY, REFRESH_VALUE)" +
                ".defineSizeMapping(mapping78)" +
                ".addService(googletag.pubads());" +
                "googletag.pubads().addEventListener('impressionViewable', function(event78) {" +
                "let slot78 = event78.slot;" +
                "if (slot78.getTargeting(REFRESH_KEY).indexOf(REFRESH_VALUE) > -1) {" +
                "setTimeout(function() {googletag.pubads().refresh([slot78]);}, 45000);" +
                "}" +
                "});" +
                "googletag.pubads().enableSingleRequest();" +
                "googletag.pubads().enableLazyLoad();" +
                "googletag.pubads().collapseEmptyDivs(true);" +
                "googletag.enableServices();" +
                "});" +
                "googletag.cmd.push(function() {" +
                "var REFRESH_KEY = 'refresh';" +
                "var REFRESH_VALUE = 'true';" +
                "let mapping78 = googletag.sizeMapping()" +
                ".addSize([1024, 768], div_2_sizes)" +
                ".addSize([650, 375], [468,60])" +
                ".addSize([0, 0], [320, 100])" +
                ".build();" +
                "googletag.defineSlot('222', div_2_sizes, '111')" +
                ".setTargeting(REFRESH_KEY, REFRESH_VALUE)" +
                ".defineSizeMapping(mapping78)" +
                ".addService(googletag.pubads());" +
                "googletag.pubads().addEventListener('impressionViewable', function(event78) {" +
                "let slot78 = event78.slot;" +
                "if (slot78.getTargeting(REFRESH_KEY).indexOf(REFRESH_VALUE) > -1) {" +
                "setTimeout(function() {googletag.pubads().refresh([slot78]);}, 45000);" +
                "}" +
                "});" +
                " googletag.pubads().enableSingleRequest();" +
                "googletag.pubads().enableLazyLoad();" +
                "googletag.pubads().collapseEmptyDivs(true);" +
                "googletag.enableServices();" +
                "});" +
                "<span><</span>/script<span>></span></code>",
            }}
          ></div>
        </>
      )}
    </>
  );
}

export default App;
