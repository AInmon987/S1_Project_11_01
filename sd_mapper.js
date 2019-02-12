"use strict";
/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 9
   Case Problem 1

   Planisphere Script
   Author: Austin Inmon
   Date: 2.12.19

*/
//The variable gives the current date and time. 
var thisTime = new Date();
//The variable takes the time that the users computer has and put the time on the page. 
var timeStr = thisTime.toLocaleString();
//
document.getElementById("timeStamp").innerHTML = timeStr;
//getting the hour from thisTime variable. 
var thisHour = thisTime.getHours();
//getting the month from thisTime varible.
var thisMonth = thisTime.getMonth();
//this is the formula to decide witch image to display on the web page.
var mapNum = (2 * thisMonth + thisHour) % 24;
//Getting the image that belongs on the page. 
var imgStr = "<img src='sd_sky" + mapNum + ".png' />";
//Displaying the certain sky image. 
document.getElementById("planisphere").insertAdjacentHTML('afterbegin', imgStr);