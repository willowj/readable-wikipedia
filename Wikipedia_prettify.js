// ==UserScript==
// @name        Wikipedia_prettfy
// @description prettfy wikipedia move toc to side,etc make it easier to read
// @namespace   https://github.com/willowj/readable-wikipedia
// @include     http*://*.wikipedia.org/**
// @version     1.0
// @grant       Adam willow
// modified from https://greasyfork.org/zh-CN/scripts/35198-readable-wikipedia/code v1
// ==/UserScript==

function GM_addStyle_from_string(str) {
    var node = document.createElement('style');
    node.innerHTML = str;
    document.body.appendChild(node);
}

//var cssSrc = GM_getResourceText ("readableWikipediaCss");

var cssSrc = `
/* Base Wikipedia Enhancement */


body{
    background: none !important;
}

a:visited {
  color: #948af5 !important;
}
a {
  color: #063b92;
}
.reference {
/*  display: none !important;*/
}

.internal {
  /*display: none !important;*/
}




#mw-head-base {
  background-image: none !important;
}


.infobox th {
  background-color: #e6e0c8 !important;
  /*font-weight: normal !imporant;*/
}

/*.infobox th a {
  color: white !important;
  font-weight: normal !imporant;
}*/

table.infobox {
    border-spacing: 3px;
    text-align: left;
    font-size: small;
    line-height: 1.5em;
}


#siteNotice {
  display: none !important;
}

h2 {
  margin-top: 2em !important;
}

#mw-page-base {
  height: auto !important;
}

#siteSub {
  display: none !important;
}

.metadata {
  display: none !important;
}

.catlinks {
  /*display: none !important;*/
}

.Template-Fact {
  display: none !important;
}

div#content a.external {
  background: none !important;
}

.topicon {
  display: none !important;
  right: 9999px !important;
}

.icone_de_titre {
  display: none !important;
}

#coordinates {
  display: none !important;
}

#p-personal {
  display: inherit !important;
}

#left-navigation {
  margin-left: 20%;
  margin-top: 0px;
}

#right-navigation {
  margin-top: 20px !important;
}

#p-views {
  display: none !important;
}

#mw-panel {
    font-size: inherit;
    position: unset;
    top: 0;
    width: 10em;
    left: 0;
}


#mw-body {
  margin-left: 0px !important;
}

#protected-icon {
  display: none !important;
}

.dablink {
  display: none !important;
}

#mw-articlefeedback {
  display: none !important;
}

.editsection {
  display: none !important;
}

#footer {
  text-align: center !important;
  border-top: 1px solid grey !important;
}

#footer-places {
  display: none !important;
}

#footer img {
  display: none !important;
}

.tleft {
  margin: 1.5em 1.4em 1.3em 0 !important;
}

/* I'm really not sure about this change,
 * Eventually I'd like the TOC accessible
 * via a side menu, for now this is experimental
 * and might change
*/

#toc {
    position: fixed;
    margin-left: 0px;
    font-size: 13px;
    top: 0%;
    overflow: auto;
    height: 100%;
    display: inline-block;
    z-index: 1;
    background: beige ;
    border: 0px;
}
.toc ul ul {
    margin: 0 0 0 1em;
}
.toc>ul{
    margin-bottom: 2em;
    margin-left:5%;
}

.tocnumber, .toctext {
    display: table-cell;
    text-decoration: blink;
}

/* Reading Enhacements */

* {
  line-height: 1.7em !important;
}

p {
  font-size: 1em !important;
  margin-top: 1em !important;
}

/* File Enhancements */


/*#file img {
  width: 100% !important;
  height: auto !important;
}*/

.fullMedia, .sharedUploadNotice, #mw-imagepage-section-linkstoimage, #filelinks, #mw-imagepage-section-filehistory, #filehistory, #mw-imagepage-section-globalusage, #globalusage, #mw-imagepage-content, #template-picture-of-the-day, #metadata, .mw-imagepage-section-metadata, .mw-filepage-resolutioninfo {
  display: none !important;
}

/* Scripted in styles */
#logo {
  margin: .5em auto auto 1em;
}

.visible-link {
  color: #2B77BD !important;
}



#enhancement_credit {
  font-size: 12px !important;
}

.mw-editsection {
  display: none !important;
}

.mobile {
  display: none !important;
}

/* Responsive breakpoints */
@media screen and (min-width: 1200px) {

    div#content{
        margin-left: 15% !important;
        padding-left: 3em !important;
        padding-right: 5em !important;
    }
    .toc{
        width: 13%;
    }

}
@media screen and (max-width: 1200px) {
  div#content {
    width: 73% !important;
    margin-left: 20%;
  }
  #toc{
     width: 15%;
  }
  .thumb, .tright, .left {
    display: block !important;
 /*   float: none !important;*/
  }
  #mw-articlefeedbackv5 {
    display: none !important;
 }
}

@media screen and (max-width: 650px) {
  div#content {
    margin-left: 2%;
    width: 90% !important;
    padding-top: 1em !important
    background: none !important;
    padding: 4.25em 1.5em 1.5em 1.5em !important;
    border: none !important;
  }
  table.infobox{
    width:90% !important;
  }
  .toc{
    width: 90% !important;
    position : relative !important;
    height : auto !important;
    margin-left: 5% !important;
    top : 5em !important
  }
  #mw-panel{
    display :none !important;

  }
  #firstHeading {
    width: 100% !important;
  }

  .desktop {
    display: none !important;
  }

  .mobile {
    display: block !important;
  }

  .infobox {
    display: block !important;
    float: none !important;
    margin: 1em auto !important;
   }
}

/* MY CODE */


div#content {
   padding-top: 1em !important;
   margin-top: 3em;
   border: none;
}

.toc::-webkit-scrollbar{
    width: 8px;
    height: 8px;
}

/* 设置滚动条的滑轨 */
.toc::-webkit-scrollbar-track {
      /*background-color: #ddd;*/
}

/* 滑块 */
.toc::-webkit-scrollbar-thumb {
    background-color: #54595d;
    border-radius: 4px;
}

 /* 滑轨两头的监听按钮 */
.toc::-webkit-scrollbar-button {
    background-color: #888;
    display: none;
`;

GM_addStyle_from_string(cssSrc);
//document.getElementById("References").parentNode.nextSibling.nextSibling.style.display = "none";
var toc = document.querySelector('#toc');
if (toc == null){
    var toc = document.createElement('div');
    toc.setAttribute('id', 'toc');
    toc.setAttribute('class', 'toc');
}
document.body.insertBefore(toc, document.body.firstElementChild);

var pg = document.querySelector('#mw-panel');
document.querySelector('#toc').appendChild(pg);


/*toc toggle*/
if ( !document.querySelector("#toc .toctoggle")) {
    var tog = document.createElement('span');
    document.querySelector("#toc .toctitle").appendChild(tog);
    tog.outerHTML = `<span class="toctoggle">&nbsp;[<a role="button" tabindex="0" class="togglelink">隐藏</a>]&nbsp;</span>`;
}

var tog = document.querySelector("#toc .toctitle .togglelink");

var ul = document.querySelector("#toc>ul");
tog.addEventListener("click", function () {
    if (ul.style.display === 'none'){
        ul.style.display = 'block';
    }else{
        ul.style.display = 'none';
    }

    var tog_ ={"hide":"show","show":"hide", "隐藏":"显示","显示":'隐藏'};
    tog.text = tog_[tog.text];
});
if (document.body.offsetWidth <= 650){
    tog.click();
}
