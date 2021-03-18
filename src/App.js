import React, { useEffect } from "react";
import "./App.css";
import axios from "axios";
import CircularProgress from "@material-ui/core/CircularProgress";

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
        <div
          style={{ padding: "5rem" }}
          className="App"
          dangerouslySetInnerHTML={{
            __html:
              "<span><</span>script async src = '//www.googletagservices.com/tag/js/gpt.js'> <span><</span>/script<span>></span> <br/>" +
              "<span><</span>script  async src = '//phpstack-361553-1427736.cloudwaysapps.com/prebid/prebid.js'> <span><</span>/script<span>></span> <br/>" +
              "<span><</span>script  <br/>" +
              "var googletag = googletag || {}; <br/>" +
              "googletag.cmd = googletag.cmd || []; <br/>" +
              "var pbjs = pbjs || {}; <br/>" +
              "pbjs.que = pbjs.que || []; <br/>" +
              "var PREBID_TIMEOUT = 3000; <br/>" +
              "var date = new Date().getTime(); <br/>" +
              "var div_1_sizes = [ <br/>" +
              "[" +
              height +
              "," +
              width +
              "], <br/>" +
              "[" +
              height1 +
              "," +
              width1 +
              "], <br/>" +
              "]; <br/>" +
              "var div_2_sizes = [ <br/>" +
              "[66,55] <br/>" +
              "]; <br/>" +
              "function initAdserver() { <br/>" +
              "if (pbjs.initAdserverSet) return; <br/>" +
              "googletag.cmd.push(function () { <br/>" +
              "pbjs.que.push(function () { <br/>" +
              "pbjs.setTargetingForGPTAsync(); <br/>" +
              "googletag.pubads().refresh(); <br/>" +
              "}); <br/>" +
              "}); <br/>" +
              "pbjs.initAdserverSet = true; <br/>" +
              "}<br/>" +
              // Load GPT when timeout is reached.
              "setTimeout(initAdserver, PREBID_TIMEOUT); <br/>" +
              "pbjs.que.push(function () { <br/>" +
              "pbjs.setConfig({ <br/>" +
              "debug: true, <br/>" +
              "bidderTimeout: 5000 <br/>" +
              "}); <br/>" +
              "var allSlotsBidWon = function allSlotsBidWon() {<br/>" +
              "console.log('allSlotsBidWon called');<br/>" +
              "};<br/>" +
              "pbjs.onEvent('bidWon', allSlotsBidWon);var PREBID_TIMEOUT = 1000;<br/>" +
              "var FAILSAFE_TIMEOUT = 3000;var adUnits = [{ <br/>" +
              " code: '111',<br/>" +
              "mediaTypes: { banner: { sizes: div_1_sizes } }, bids: [<br/>" +
              "{<br/>" +
              "bidder: '"+bidderName1+"',<br/>" +
              "params: { <br/>" +
              paramsName1+" : '"+paramsValue1+"',<br/>" +
              "}<br/>" +
              "},{<br/>" +
              "bidder: '"+bidderName2+"',<br/>" +
              "params: { <br/>" +
              paramsName2+" : '"+paramsValue2+"',<br/>" +
              "}<br/>" +
              "},{<br/>" +
              "bidder: 'luponmedia',<br/>" +
              " params: { <br/>" +
              "keyId : '888',<br/>" +
              "siteId : '999' <br/>" +
              "}<br/>" +
              "},{<br/>" +
              "bidder: 'test',<br/>" +
              " params: { <br/>" +
              "test : '000'<br/>" +
              "}<br/>" +
              "},{<br/>" +
              "bidder: 'gumgum',<br/>" +
              "params: { <br/>" +
              "id : '123',<br/>" +
              "field : '234'<br/>" +
              "}<br/>" +
              "}<br/>" +
              "] },{<br/>" +
              "code: '111',<br/>" +
              "mediaTypes: { banner: { sizes: div_2_sizes } }, bids: [<br/>" +
              "{<br/>" +
              "bidder: 'adkernel',<br/>" +
              "params: { <br/>" +
              "host : '333',<br/>" +
              "zoneId : '444'<br/>" +
              "}<br/>" +
              "},{<br/>" +
              "bidder: 'project-limelight',<br/>" +
              "params: {<br/>" +
              "adUnitType : '555',<br/>" +
              "adUnitId : '666',<br/>" +
              "host : '777' <br/>" +
              "}<br/>" +
              "},{<br/>" +
              "bidder: 'luponmedia',<br/>" +
              "params: { <br/>" +
              "keyId : '888',<br/>" +
              "siteId : '999'<br/>" +
              "}<br/>" +
              "},{<br/>" +
              "bidder: 'test',<br/>" +
              "params: { <br/>" +
              "test : '000'<br/>" +
              "}<br/>" +
              "},{<br/>" +
              "bidder: 'gumgum',<br/>" +
              "params: { <br/>" +
              "id : '123',<br/>" +
              "field : '234'<br/>" +
              "}<br/>" +
              "}<br/>" +
              "] }<br/>" +
              "];<br/>" +
              "pbjs.addAdUnits(adUnits);<br/>" +
              "pbjs.requestBids({<br/>" +
              "bidsBackHandler: function (bidResponses) {<br/>" +
              "console.log('my-bid-response-data', bidResponses);<br/>" +
              "impression78(bidResponses, '111');<br/>" +
              "initAdserver();<br/>" +
              "}<br/>" +
              "});<br/>" +
              "});<br/>" +
              "function impression78(b_res78, div_id78) {<br/>" +
              "var device78 = window.navigator.userAgent;<br/>" +
              "const params78 = {<br/>" +
              "b_res: b_res78,<br/>" +
              "div_id: div_id78,<br/>" +
              "device: device78<br/>" +
              "}<br/>" +
              "var xhttp = new XMLHttpRequest();<br/>" +
              "xhttp.open('POST', 'https://phplaravel-361553-1515970.cloudwaysapps.com/api/log/impression', false);<br/>" +
              // xhttp.setRequestHeader('Content-type', 'application/json');
              "xhttp.send(JSON.stringify(params78));<br/>" +
              "}<br/>" +
              "</br><br/>" +
              "<span><</span>script<br/>" +
              // GPT setup
              "googletag.cmd.push(function() {<br/>" +
              "var REFRESH_KEY = 'refresh';<br/>" +
              "var REFRESH_VALUE = 'true';<br/>" +
              "let mapping78 = googletag.sizeMapping()<br/>" +
              ".addSize([1024, 768], div_1_sizes)<br/>" +
              ".addSize([650, 375], [468,60])<br/>" +
              ".addSize([0, 0], [320, 100])<br/>" +
              ".build();<br/>" +
              "googletag.defineSlot('222', div_1_sizes, '111')<br/>" +
              ".setTargeting(REFRESH_KEY, REFRESH_VALUE)<br/>" +
              ".defineSizeMapping(mapping78)<br/>" +
              ".addService(googletag.pubads());<br/>" +
              "googletag.pubads().addEventListener('impressionViewable', function(event78) {<br/>" +
              "let slot78 = event78.slot;<br/>" +
              "if (slot78.getTargeting(REFRESH_KEY).indexOf(REFRESH_VALUE) > -1) {<br/>" +
              "setTimeout(function() {googletag.pubads().refresh([slot78]);}, 45000);<br/>" +
              "}<br/>" +
              "});<br/>" +
              "googletag.pubads().enableSingleRequest();<br/>" +
              "googletag.pubads().enableLazyLoad();<br/>" +
              "googletag.pubads().collapseEmptyDivs(true);<br/>" +
              "googletag.enableServices();<br/>" +
              "});<br/>" +
              "googletag.cmd.push(function() {<br/>" +
              "var REFRESH_KEY = 'refresh';<br/>" +
              "var REFRESH_VALUE = 'true';<br/>" +
              "let mapping78 = googletag.sizeMapping()<br/>" +
              ".addSize([1024, 768], div_2_sizes)<br/>" +
              ".addSize([650, 375], [468,60])<br/>" +
              ".addSize([0, 0], [320, 100])<br/>" +
              ".build();<br/>" +
              "googletag.defineSlot('222', div_2_sizes, '111')<br/>" +
              ".setTargeting(REFRESH_KEY, REFRESH_VALUE)<br/>" +
              ".defineSizeMapping(mapping78)<br/>" +
              ".addService(googletag.pubads());<br/>" +
              "googletag.pubads().addEventListener('impressionViewable', function(event78) {<br/>" +
              "let slot78 = event78.slot;<br/>" +
              "if (slot78.getTargeting(REFRESH_KEY).indexOf(REFRESH_VALUE) > -1) {<br/>" +
              "setTimeout(function() {googletag.pubads().refresh([slot78]);}, 45000);<br/>" +
              "}<br/>" +
              "});<br/>" +
              " googletag.pubads().enableSingleRequest();<br/>" +
              "googletag.pubads().enableLazyLoad();<br/>" +
              "googletag.pubads().collapseEmptyDivs(true);<br/>" +
              "googletag.enableServices();<br/>" +
              "});<br/>" +
              "<span><</span>/script<span>></span>",
          }}
        ></div>
      )}
    </>
  );
}

export default App;
