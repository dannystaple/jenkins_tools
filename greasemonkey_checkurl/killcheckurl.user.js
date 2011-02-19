// No excludes
// ==UserScript==
// @name Jenkins Kill Checkurl
// @namespace tag:danny
// @description Kill checkurl properties on jenkins config pages.
// @include */job/*/configure
// ==/UserScript==

//GM log the input tag nodes
nodes = document.getElementsByName("_.artifacts");
//Remove the checkurl properties on them
nodes[0].attributes.removeNamedItem("checkurl");
