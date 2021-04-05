//expand standards:
const expandStandards = document.getElementById("expandStandards");
const collapseStandards = document.getElementById("collapseStandards");

let onExpandStandardsClick = function(e) {
    e.preventDefault();
    document.getElementById("standardsList").style.display = "block";
    collapseStandards.style.display = "block";
    expandStandards.style.display = "none";
};

expandStandards.addEventListener("click", onExpandStandardsClick, false);

//collapse standards:
let onCollapseStandardsClick = function(e) {
    e.preventDefault();
    document.getElementById("standardsList").style.display = "none";
    collapseStandards.style.display = "none";
    expandStandards.style.display = "block";
};

collapseStandards.addEventListener("click", onCollapseStandardsClick, false);

//expand disclaimer:
const expandDisclaimer = document.getElementById("expandDisclaimer");
const collapseDisclaimer = document.getElementById("collapseDisclaimer");

let onExpandDisclaimerClick = function(e) {
    e.preventDefault();
    document.getElementById("disclaimer").style.display = "block";
    collapseDisclaimer.style.display = "block";
    expandDisclaimer.style.display = "none";
};

expandDisclaimer.addEventListener("click", onExpandDisclaimerClick, false);

//collapse disclaimer:
let onCollapseDisclaimerClick = function(e) {
    e.preventDefault();
    document.getElementById("disclaimer").style.display = "none";
    collapseDisclaimer.style.display = "none";
    expandDisclaimer.style.display = "block";
};

collapseDisclaimer.addEventListener("click", onCollapseDisclaimerClick, false);


//LIGHTBOXA make locACityHall button display pop-up about mystery and display q1Container 
let locACityHall = document.getElementById("locACityHall");

let onCityHallClick = function(e) {
    e.preventDefault();
    document.getElementById('level1Heading').style.display = "block";
    document.getElementById('q1Container').style.display = "block";
    document.getElementById('lightboxA').style.display = "block";
}

locACityHall.addEventListener("click", onCityHallClick, false);

//make close button for lightboxA
let closeCluesLocA = document.getElementById("closeCluesLocA");

let onCloseCluesAClick = function(e) {
    e.preventDefault();
    document.getElementById('lightboxA').style.display = "none";  
}

closeCluesLocA.addEventListener("click", onCloseCluesAClick, false);

//make show and collapse buttons for sources within lightbox
let showSourceA = document.getElementById("showSourceA");
let collapseSourceA = document.getElementById("collapseSourceA");

let onShowSourceAClick = function(e) {
    e.preventDefault();
    document.getElementById('sourceA').style.display = "block";
    collapseSourceA.style.display = "block";
    showSourceA.style.display = "none";
    lightboxBackgroundA.style.display = "block";
}

showSourceA.addEventListener("click", onShowSourceAClick, false);

let onCollapseSourceAClick = function(e) {
    e.preventDefault();
    document.getElementById('sourceA').style.display = "none";
    collapseSourceA.style.display = "none";
    showSourceA.style.display = "block";
    document.getElementById('lightboxA').style.display = "block";
}

collapseSourceA.addEventListener("click", onCollapseSourceAClick, false);

//slideshow
let slideIndexA = 1;
showSlidesA(slideIndexA);

// Next/previous controls
function plusSlidesA(n) {
  showSlidesA(slideIndexA += n);
}

// Thumbnail image controls
function currentSlideA(n) {
  showSlidesA(slideIndexA = n);
}

function showSlidesA(n) {
  let i;
  let slidesA = document.getElementsByClassName("locA");
  let dotsA = document.getElementsByClassName("dotsA");
  if (n > slidesA.length) {slideIndexA = 1}
  if (n < 1) {slideIndexA = slidesA.length}
  for (i = 0; i < slidesA.length; i++) {
      slidesA[i].style.display = "none";
  }
  for (i = 0; i < dotsA.length; i++) {
      dotsA[i].className = dotsA[i].className.replace(" active", "");
  }
  slidesA[slideIndexA-1].style.display = "block";
  dotsA[slideIndexA-1].className += " active";
}


//LIGHTBOX0 make loc0University button display lightbox0 of clues 
let loc0University = document.getElementById("loc0University");

let onUniversityClick = function(e) {
    e.preventDefault();
    document.getElementById('lightbox0').style.display = "block";
}

loc0University.addEventListener("click", onUniversityClick, false);

//make close button for lightbox0 
let closeCluesLoc0 = document.getElementById("closeCluesLoc0");

let onCloseClues0Click = function(e) {
    e.preventDefault();
    document.getElementById('lightbox0').style.display = "none";  
}

closeCluesLoc0.addEventListener("click", onCloseClues0Click, false);

//make show and collapse buttons for sources within lightbox
let showSource0 = document.getElementById("showSource0");
let collapseSource0 = document.getElementById("collapseSource0");

let onShowSource0Click = function(e) {
    e.preventDefault();
    document.getElementById('source0').style.display = "block";
    collapseSource0.style.display = "block";
    showSource0.style.display = "none";
    lightboxBackground0.style.display = "block";
}

showSource0.addEventListener("click", onShowSource0Click, false);

let onCollapseSource0Click = function(e) {
    e.preventDefault();
    document.getElementById('source0').style.display = "none";
    collapseSource0.style.display = "none";
    showSource0.style.display = "block";
    document.getElementById('lightbox0').style.display = "block";
}

collapseSource0.addEventListener("click", onCollapseSource0Click, false);

//slideshow
let slideIndex0 = 1;
showSlides0(slideIndex0);

// Next/previous controls
function plusSlides0(n) {
  showSlides0(slideIndex0 += n);
}

// Thumbnail image controls
function currentSlide0(n) {
  showSlides0(slideIndex0 = n);
}

function showSlides0(n) {
  let i;
  let slides0 = document.getElementsByClassName("loc0");
  let dots0 = document.getElementsByClassName("dots0");
  if (n > slides0.length) {slideIndex0 = 1}
  if (n < 1) {slideIndex0 = slides0.length}
  for (i = 0; i < slides0.length; i++) {
      slides0[i].style.display = "none";
  }
  for (i = 0; i < dots0.length; i++) {
      dots0[i].className = dots0[i].className.replace(" active", "");
  }
  slides0[slideIndex0-1].style.display = "block";
  dots0[slideIndex0-1].className += " active";
}

//LIGHTBOX1 make loc1Salmon Spawning button display lightbox1 of clues 
let loc1SpawningArea = document.getElementById("loc1SpawningArea");

let onSpawningAreaClick = function(e) {
    e.preventDefault();
    document.getElementById('lightbox1').style.display = "block";
}

loc1SpawningArea.addEventListener("click", onSpawningAreaClick, false);

//make close button for lightbox1
let closeCluesLoc1 = document.getElementById("closeCluesLoc1");

let onCloseClues1Click = function(e) {
    e.preventDefault();
    document.getElementById('lightbox1').style.display = "none";  
}

closeCluesLoc1.addEventListener("click", onCloseClues1Click, false);

//make show and collapse buttons for sources within lightbox
let showSource1 = document.getElementById("showSource1");
let collapseSource1 = document.getElementById("collapseSource1");

let onShowSource1Click = function(e) {
    e.preventDefault();
    document.getElementById('source1').style.display = "block";
    collapseSource1.style.display = "block";
    showSource1.style.display = "none";
    lightboxBackground1.style.display = "block";
}

showSource1.addEventListener("click", onShowSource1Click, false);

let onCollapseSource1Click = function(e) {
    e.preventDefault();
    document.getElementById('source1').style.display = "none";
    collapseSource1.style.display = "none";
    showSource1.style.display = "block";
    document.getElementById('lightbox1').style.display = "block";
}

collapseSource1.addEventListener("click", onCollapseSource1Click, false);

//slideshow
let slideIndex1 = 1;
showSlides1(slideIndex1);

// Next/previous controls
function plusSlides1(n) {
  showSlides1(slideIndex1 += n);
}

// Thumbnail image controls
function currentSlide1(n) {
  showSlides1(slideIndex1 = n);
}

function showSlides1(n) {
  let i;
  let slides1 = document.getElementsByClassName("loc1");
  let dots1 = document.getElementsByClassName("dots1");
  if (n > slides1.length) {slideIndex1 = 1}
  if (n < 1) {slideIndex1 = slides1.length}
  for (i = 0; i < slides1.length; i++) {
      slides1[i].style.display = "none";
  }
  for (i = 0; i < dots1.length; i++) {
      dots1[i].className = dots1[i].className.replace(" active", "");
  }
  slides1[slideIndex1-1].style.display = "block";
  dots1[slideIndex1-1].className += " active";
}

//LIGHTBOX2 make loc2Library button display lightbox2 of clues 
let loc2Library = document.getElementById("loc2Library");

let onLibraryClick = function(e) {
    e.preventDefault();
    document.getElementById('lightbox2').style.display = "block";
}

loc2Library.addEventListener("click", onLibraryClick, false);

//make close button for lightbox2
let closeCluesLoc2 = document.getElementById("closeCluesLoc2");

let onCloseClues2Click = function(e) {
    e.preventDefault();
    document.getElementById('lightbox2').style.display = "none";  
}

closeCluesLoc2.addEventListener("click", onCloseClues2Click, false);

//make show and collapse buttons for sources within lightbox
let showSource2 = document.getElementById("showSource2");
let collapseSource2 = document.getElementById("collapseSource2");

let onShowSource2Click = function(e) {
    e.preventDefault();
    document.getElementById('source2').style.display = "block";
    collapseSource2.style.display = "block";
    showSource2.style.display = "none";
    lightboxBackground2.style.display = "block";
}

showSource2.addEventListener("click", onShowSource2Click, false);

let onCollapseSource2Click = function(e) {
    e.preventDefault();
    document.getElementById('source2').style.display = "none";
    collapseSource2.style.display = "none";
    showSource2.style.display = "block";
    document.getElementById('lightbox2').style.display = "block";
}

collapseSource2.addEventListener("click", onCollapseSource2Click, false);

//slideshow
let slideIndex2 = 1;
showSlides2(slideIndex2);

// Next/previous controls
function plusSlides2(n) {
  showSlides2(slideIndex2 += n);
}

// Thumbnail image controls
function currentSlide2(n) {
  showSlides2(slideIndex2 = n);
}

function showSlides2(n) {
  let i;
  let slides2 = document.getElementsByClassName("loc2");
  let dots2 = document.getElementsByClassName("dots2");
  if (n > slides2.length) {slideIndex2 = 1}
  if (n < 1) {slideIndex2 = slides2.length}
  for (i = 0; i < slides2.length; i++) {
      slides2[i].style.display = "none";
  }
  for (i = 0; i < dots2.length; i++) {
      dots2[i].className = dots2[i].className.replace(" active", "");
  }
  slides2[slideIndex2-1].style.display = "block";
  dots2[slideIndex2-1].className += " active";
}

//LIGHTBOX3 make loc3RichardHatton button display lightbox3 of clues 
let loc3RichardHatton = document.getElementById("loc3RichardHatton");

let onRichardHattonClick = function(e) {
    e.preventDefault();
    document.getElementById('lightbox3').style.display = "block";
}

loc3RichardHatton.addEventListener("click", onRichardHattonClick, false);

//make close button for lightbox1
let closeCluesLoc3 = document.getElementById("closeCluesLoc3");

let onCloseClues3Click = function(e) {
    e.preventDefault();
    document.getElementById('lightbox3').style.display = "none";  
}

closeCluesLoc3.addEventListener("click", onCloseClues3Click, false);

//make show and collapse buttons for sources within lightbox
let showSource3 = document.getElementById("showSource3");
let collapseSource3 = document.getElementById("collapseSource3");

let onShowSource3Click = function(e) {
    e.preventDefault();
    document.getElementById('source3').style.display = "block";
    collapseSource3.style.display = "block";
    showSource3.style.display = "none";
    lightboxBackground3.style.display = "block";
}

showSource3.addEventListener("click", onShowSource3Click, false);

let onCollapseSource3Click = function(e) {
    e.preventDefault();
    document.getElementById('source3').style.display = "none";
    collapseSource3.style.display = "none";
    showSource3.style.display = "block";
    document.getElementById('lightbox3').style.display = "block";
}

collapseSource3.addEventListener("click", onCollapseSource3Click, false);

//slideshow
let slideIndex3 = 1;
showSlides3(slideIndex3);

// Next/previous controls
function plusSlides3(n) {
  showSlides3(slideIndex3 += n);
}

// Thumbnail image controls
function currentSlide3(n) {
  showSlides3(slideIndex3 = n);
}

function showSlides3(n) {
  let i;
  let slides3 = document.getElementsByClassName("loc3");
  let dots3 = document.getElementsByClassName("dots3");
  if (n > slides3.length) {slideIndex3 = 1}
  if (n < 1) {slideIndex3 = slides3.length}
  for (i = 0; i < slides3.length; i++) {
      slides3[i].style.display = "none";
  }
  for (i = 0; i < dots3.length; i++) {
      dots3[i].className = dots3[i].className.replace(" active", "");
  }
  slides3[slideIndex3-1].style.display = "block";
  dots3[slideIndex3-1].className += " active";
}

//LIGHTBOX4 make loc4CalienteCorp button display lightbox4 of clues 
let loc4CalienteCorp = document.getElementById("loc4CalienteCorp");

let onCalienteCorpClick = function(e) {
    e.preventDefault();
    document.getElementById('lightbox4').style.display = "block";
}

loc4CalienteCorp.addEventListener("click", onCalienteCorpClick, false);

//make close button for lightbox4
let closeCluesLoc4 = document.getElementById("closeCluesLoc4");

let onCloseClues4Click = function(e) {
    e.preventDefault();
    document.getElementById('lightbox4').style.display = "none";  
}

closeCluesLoc4.addEventListener("click", onCloseClues4Click, false);

//make show and collapse buttons for sources within lightbox
let showSource4 = document.getElementById("showSource4");
let collapseSource4 = document.getElementById("collapseSource4");

let onShowSource4Click = function(e) {
    e.preventDefault();
    document.getElementById('source4').style.display = "block";
    collapseSource4.style.display = "block";
    showSource4.style.display = "none";
    lightboxBackground4.style.display = "block";
}

showSource4.addEventListener("click", onShowSource4Click, false);

let onCollapseSource4Click = function(e) {
    e.preventDefault();
    document.getElementById('source4').style.display = "none";
    collapseSource4.style.display = "none";
    showSource4.style.display = "block";
    document.getElementById('lightbox4').style.display = "block";
}

collapseSource4.addEventListener("click", onCollapseSource4Click, false);

//slideshow
let slideIndex4 = 1;
showSlides4(slideIndex4);

// Next/previous controls
function plusSlides4(n) {
  showSlides4(slideIndex4 += n);
}

// Thumbnail image controls
function currentSlide4(n) {
  showSlides4(slideIndex4 = n);
}

function showSlides4(n) {
  let i;
  let slides4 = document.getElementsByClassName("loc4");
  let dots4 = document.getElementsByClassName("dots4");
  if (n > slides4.length) {slideIndex4 = 1}
  if (n < 1) {slideIndex4 = slides4.length}
  for (i = 0; i < slides4.length; i++) {
      slides4[i].style.display = "none";
  }
  for (i = 0; i < dots4.length; i++) {
      dots4[i].className = dots4[i].className.replace(" active", "");
  }
  slides4[slideIndex4-1].style.display = "block";
  dots4[slideIndex4-1].className += " active";
}

//LIGHTBOX5 make loc5EPA button display lightbox4 of clues 
let loc5EPA = document.getElementById("loc5EPA");

let onEPAClick = function(e) {
    e.preventDefault();
    document.getElementById('lightbox5').style.display = "block";
}

loc5EPA.addEventListener("click", onEPAClick, false);

//make close button for lightbox5
let closeCluesLoc5 = document.getElementById("closeCluesLoc5");

let onCloseClues5Click = function(e) {
    e.preventDefault();
    document.getElementById('lightbox5').style.display = "none";  
}

closeCluesLoc5.addEventListener("click", onCloseClues5Click, false);

//make show and collapse buttons for sources within lightbox
let showSource5 = document.getElementById("showSource5");
let collapseSource5 = document.getElementById("collapseSource5");

let onShowSource5Click = function(e) {
    e.preventDefault();
    document.getElementById('source5').style.display = "block";
    collapseSource5.style.display = "block";
    showSource5.style.display = "none";
    lightboxBackground5.style.display = "block";
}

showSource5.addEventListener("click", onShowSource5Click, false);

let onCollapseSource5Click = function(e) {
    e.preventDefault();
    document.getElementById('source5').style.display = "none";
    collapseSource5.style.display = "none";
    showSource5.style.display = "block";
    document.getElementById('lightbox5').style.display = "block";
}

collapseSource5.addEventListener("click", onCollapseSource5Click, false);

//slideshow
let slideIndex5 = 1;
showSlides5(slideIndex5);

// Next/previous controls
function plusSlides5(n) {
  showSlides5(slideIndex5 += n);
}

// Thumbnail image controls
function currentSlide5(n) {
  showSlides5(slideIndex5 = n);
}

function showSlides5(n) {
  let i;
  let slides5 = document.getElementsByClassName("loc5");
  let dots5 = document.getElementsByClassName("dots5");
  if (n > slides5.length) {slideIndex5 = 1}
  if (n < 1) {slideIndex5 = slides5.length}
  for (i = 0; i < slides5.length; i++) {
      slides5[i].style.display = "none";
  }
  for (i = 0; i < dots5.length; i++) {
      dots5[i].className = dots5[i].className.replace(" active", "");
  }
  slides5[slideIndex5-1].style.display = "block";
  dots5[slideIndex5-1].className += " active";
}

//LIGHTBOX6 make loc6LorraineHadwick button display lightbox6 of clues 
let loc6LorraineHadwick = document.getElementById("loc6LorraineHadwick");

let onLorraineHadwickClick = function(e) {
    e.preventDefault();
    document.getElementById('lightbox6').style.display = "block";
}

loc6LorraineHadwick.addEventListener("click", onLorraineHadwickClick, false);

//make close button for lightbox6
let closeCluesLoc6 = document.getElementById("closeCluesLoc6");

let onCloseClues6Click = function(e) {
    e.preventDefault();
    document.getElementById('lightbox6').style.display = "none";  
}

closeCluesLoc6.addEventListener("click", onCloseClues6Click, false);

//make show and collapse buttons for sources within lightbox
let showSource6 = document.getElementById("showSource6");
let collapseSource6 = document.getElementById("collapseSource6");

let onShowSource6Click = function(e) {
    e.preventDefault();
    document.getElementById('source6').style.display = "block";
    collapseSource6.style.display = "block";
    showSource6.style.display = "none";
    lightboxBackground6.style.display = "block";
}

showSource6.addEventListener("click", onShowSource6Click, false);

let onCollapseSource6Click = function(e) {
    e.preventDefault();
    document.getElementById('source6').style.display = "none";
    collapseSource6.style.display = "none";
    showSource6.style.display = "block";
    document.getElementById('lightbox6').style.display = "block";
}

collapseSource6.addEventListener("click", onCollapseSource6Click, false);

//slideshow
let slideIndex6 = 1;
showSlides6(slideIndex6); 

// Next/previous controls
function plusSlides6(n) {
  showSlides6(slideIndex6 += n);
}

// Thumbnail image controls
function currentSlide6(n) {
  showSlides6(slideIndex6 = n);
}

function showSlides6(n) {
  let i;
  let slides6 = document.getElementsByClassName("loc6");
  let dots6 = document.getElementsByClassName("dots6");
  if (n > slides6.length) {slideIndex6 = 1}
  if (n < 1) {slideIndex6 = slides6.length}
  for (i = 0; i < slides6.length; i++) {
      slides6[i].style.display = "none";
  }
  for (i = 0; i < dots6.length; i++) {
      dots6[i].className = dots6[i].className.replace(" active", "");
  }
  slides6[slideIndex6-1].style.display = "block";
  dots6[slideIndex6-1].className += " active";
}

//LIGHTBOX7 make loc7DanLewis button display lightbox7 of clues 
let loc7DanLewis = document.getElementById("loc7DanLewis");

let onDanLewisClick = function(e) {
    e.preventDefault();
    document.getElementById('lightbox7').style.display = "block";
}

loc7DanLewis.addEventListener("click", onDanLewisClick, false);

//make close button for lightbox6
let closeCluesLoc7 = document.getElementById("closeCluesLoc7");

let onCloseClues7Click = function(e) {
    e.preventDefault();
    document.getElementById('lightbox7').style.display = "none";  
}

closeCluesLoc7.addEventListener("click", onCloseClues7Click, false);

//make show and collapse buttons for sources within lightbox
let showSource7 = document.getElementById("showSource7");
let collapseSource7 = document.getElementById("collapseSource7");

let onShowSource7Click = function(e) {
    e.preventDefault();
    document.getElementById('source7').style.display = "block";
    collapseSource7.style.display = "block";
    showSource7.style.display = "none";
    lightboxBackground7.style.display = "block";
}

showSource7.addEventListener("click", onShowSource7Click, false);

let onCollapseSource7Click = function(e) {
    e.preventDefault();
    document.getElementById('source7').style.display = "none";
    collapseSource7.style.display = "none";
    showSource7.style.display = "block";
    document.getElementById('lightbox7').style.display = "block";
}

collapseSource7.addEventListener("click", onCollapseSource7Click, false);

//slideshow
let slideIndex7 = 1;
showSlides7(slideIndex7); 

// Next/previous controls
function plusSlides7(n) {
  showSlides7(slideIndex7 += n);
}

// Thumbnail image controls
function currentSlide7(n) {
  showSlides7(slideIndex7 = n);
}

function showSlides7(n) {
  let i;
  let slides7 = document.getElementsByClassName("loc7");
  let dots7 = document.getElementsByClassName("dots7");
  if (n > slides7.length) {slideIndex7 = 1}
  if (n < 1) {slideIndex7 = slides7.length}
  for (i = 0; i < slides7.length; i++) {
      slides7[i].style.display = "none";
  }
  for (i = 0; i < dots7.length; i++) {
      dots7[i].className = dots7[i].className.replace(" active", "");
  }
  slides7[slideIndex7-1].style.display = "block";
  dots7[slideIndex7-1].className += " active";
}

//LIGHTBOX8 make loc8BeaTartan button display lightbox8 of clues 
let loc8BeaTartan = document.getElementById("loc8BeaTartan");

let onBeaTartanClick = function(e) {
    e.preventDefault();
    document.getElementById('lightbox8').style.display = "block";
}

loc8BeaTartan.addEventListener("click", onBeaTartanClick, false);

//make close button for lightbox8
let closeCluesLoc8 = document.getElementById("closeCluesLoc8");

let onCloseClues8Click = function(e) {
    e.preventDefault();
    document.getElementById('lightbox8').style.display = "none";  
}

closeCluesLoc8.addEventListener("click", onCloseClues8Click, false);

//make show and collapse buttons for sources within lightbox
let showSource8 = document.getElementById("showSource8");
let collapseSource8 = document.getElementById("collapseSource8");

let onShowSource8Click = function(e) {
    e.preventDefault();
    document.getElementById('source8').style.display = "block";
    collapseSource8.style.display = "block";
    showSource8.style.display = "none";
    lightboxBackground8.style.display = "block";
}

showSource8.addEventListener("click", onShowSource8Click, false);

let onCollapseSource8Click = function(e) {
    e.preventDefault();
    document.getElementById('source8').style.display = "none";
    collapseSource8.style.display = "none";
    showSource8.style.display = "block";
    document.getElementById('lightbox8').style.display = "block";
}

collapseSource8.addEventListener("click", onCollapseSource8Click, false);

//slideshow
let slideIndex8 = 1;
showSlides8(slideIndex8); 

// Next/previous controls
function plusSlides8(n) {
  showSlides8(slideIndex8 += n);
}

// Thumbnail image controls
function currentSlide8(n) {
  showSlides8(slideIndex8 = n);
}

function showSlides8(n) {
  let i;
  let slides8 = document.getElementsByClassName("loc8");
  let dots8 = document.getElementsByClassName("dots8");
  if (n > slides8.length) {slideIndex8 = 1}
  if (n < 1) {slideIndex8 = slides8.length}
  for (i = 0; i < slides8.length; i++) {
      slides8[i].style.display = "none";
  }
  for (i = 0; i < dots8.length; i++) {
      dots8[i].className = dots8[i].className.replace(" active", "");
  }
  slides8[slideIndex8-1].style.display = "block";
  dots8[slideIndex8-1].className += " active";
}

//make q1 button check answer, hide question and show clue and new map location
let q1Button = document.getElementById("q1Button");

const treesPattern = new RegExp('[Tt]rees?');

let onQ1ButtonClick = function(e) {
    let answer1 = document.getElementById("answer1").value;
    if (treesPattern.test(answer1) === true) {
        e.preventDefault();
        document.getElementById('loc0University').style.display = "block";
        document.getElementById('clue1Container').style.display = "block";
        document.getElementById('q1Container').style.display = "none";
        q1Button.removeEventListener("click", onQ1ButtonClick, false);
        document.getElementById('level2Heading').style.display = "block";
        document.getElementById('q2Container').style.display = "block";
    }
}

q1Button.addEventListener("click", onQ1ButtonClick, false);

//make q2 button check answer, hide question and show clue 
let q2Button = document.getElementById("q2Button");

const decomposePattern = new RegExp('[Dd]ecomposer?s?');

let onQ2ButtonClick = function(e) {
    let answer2 = document.getElementById("answer2").value;
    if (decomposePattern.test(answer2) === true) {
        e.preventDefault();
        document.getElementById('loc1SpawningArea').style.display = "block";
        document.getElementById('clue2Container').style.display = "block";
        document.getElementById('q2Container').style.display = "none";
        q2Button.removeEventListener("click", onQ2ButtonClick, false);
        document.getElementById('level3Heading').style.display = "block";
        document.getElementById('q3Container').style.display = "block";
    }
}

q2Button.addEventListener("click", onQ2ButtonClick, false);


//make q3 button check answer, hide question and show clue 
let q3Button = document.getElementById("q3Button");

const energyPattern = new RegExp('[Ee]nergy');

let onQ3ButtonClick = function(e) {
    let answer3 = document.getElementById("answer3").value;
    if (energyPattern.test(answer3) === true) {
        e.preventDefault();
        document.getElementById('clue3Container').style.display = "block";
        document.getElementById('loc2Library').style.display = "block";
        document.getElementById('q3Container').style.display = "none";
        document.getElementById('level4Heading').style.display = "block";
        document.getElementById('q4Container').style.display = "block";
        q3Button.removeEventListener("click", onQ3ButtonClick, false);        
    }
}

q3Button.addEventListener("click", onQ3ButtonClick, false);

//make q4 button check answer, hide question and show clue 
let q4Button = document.getElementById("q4Button");

const ratsPattern = new RegExp('[Rr]ats?');

let onQ4ButtonClick = function(e) {
    let answer4 = document.getElementById("answer4").value;
    if (ratsPattern.test(answer4) === true) {
        e.preventDefault();
        document.getElementById('loc3RichardHatton').style.display = "block";
        document.getElementById('clue4Container').style.display = "block";
        document.getElementById('q4Container').style.display = "none";
        document.getElementById('level5Heading').style.display = "block";
        document.getElementById('q5Container').style.display = "block";
        q4Button.removeEventListener("click", onQ4ButtonClick, false);
        ratButton.removeEventListener("click", onRatButtonClick, false);
        notRatButton.removeEventListener("click", onNotRatButtonClick, false);
    }
}

q4Button.addEventListener("click", onQ4ButtonClick, false);


//make q4 RAT button to hide question and show clue 
let ratButton = document.getElementById("ratButton");

let onRatButtonClick = function() {
    document.getElementById('loc3RichardHatton').style.display = "block";
    document.getElementById('clue4Container').style.display = "block";
    document.getElementById('q4Container').style.display = "none";
    document.getElementById('level5Heading').style.display = "block";
    document.getElementById('q5Container').style.display = "block";
    ratButton.removeEventListener("click", onRatButtonClick, false);
    notRatButton.removeEventListener("click", onNotRatButtonClick, false);
    q4Button.removeEventListener("click", onQ4ButtonClick, false);
}

ratButton.addEventListener("click", onRatButtonClick, false);

//make q4 NOT RAT button (everywhere else on the image) to alert "Keep Trying!"
let notRatButton = document.getElementById('q4Image');

let onNotRatButtonClick = function() {
    alert("Not quite. Keep trying!");
}

notRatButton.addEventListener("click", onNotRatButtonClick, false);

//make q5 button check answer, hide question and show clue 
let q5Button = document.getElementById("q5Button");

const runPattern = new RegExp('[Rr][Uu][Nn]');

let onQ5ButtonClick = function(e) {
    let answer5 = document.getElementById("answer5").value;
    if (runPattern.test(answer5) === true) {
        e.preventDefault();
        document.getElementById('loc4CalienteCorp').style.display = "block";
        document.getElementById('loc5EPA').style.display = "block";
        document.getElementById('clue5Container').style.display = "block";
        document.getElementById('q5Container').style.display = "none";
        document.getElementById('level6Heading').style.display = "block";
        document.getElementById('q6Container').style.display = "block";
        q5Button.removeEventListener("click", onQ5ButtonClick, false);
    }
}

q5Button.addEventListener("click", onQ5ButtonClick, false);


//make q6 button check answer, hide question and show clue 
let q6Button = document.getElementById("q6Button");

let onQ6ButtonClick = function(e) {
    let answer6 = document.getElementById("answer6").value;
    if (answer6 === "3") {
        e.preventDefault();
        document.getElementById('loc6LorraineHadwick').style.display = "block";
        document.getElementById('clue6Container').style.display = "block";
        document.getElementById('q6Container').style.display = "none";
        document.getElementById('level7Heading').style.display = "block";
        document.getElementById('q7Container').style.display = "block";
        q6Button.removeEventListener("click", onQ6ButtonClick, false);
        xButton.removeEventListener("click", onXButtonClick, false);
        notXButton.removeEventListener("click", onNotXButtonClick, false);
    }
}

q6Button.addEventListener("click", onQ6ButtonClick, false);


//make "x" picture button check answer, hide question and show clue 
let xButton = document.getElementById("xButton");

let onXButtonClick = function(e) {
    document.getElementById('loc6LorraineHadwick').style.display = "block";
    document.getElementById('clue6Container').style.display = "block";
    document.getElementById('q6Container').style.display = "none";
    document.getElementById('level7Heading').style.display = "block";
    document.getElementById('q7Container').style.display = "block";
    q6Button.removeEventListener("click", onQ6ButtonClick, false);
    xButton.removeEventListener("click", onXButtonClick, false);
    notXButton.removeEventListener("click", onNotXButtonClick, false);
}

xButton.addEventListener("click", onXButtonClick, false);

//make "Not x" picture button (anywhere else on the image) alert "Not quite":
let notXButton = document.getElementById('q6Image');

let onNotXButtonClick = function() {
    alert("Not quite! Keep trying!");
};

notXButton.addEventListener("click", onNotXButtonClick, false);

//make q7 button check answer, hide question and show clue 
let q7Button = document.getElementById("q7Button");

const wPattern = new RegExp('[Ww]');

let onQ7ButtonClick = function(e) {
    let answer7 = document.getElementById("answer7").value;
    if (wPattern.test(answer7) === true) {
        e.preventDefault();
        document.getElementById('loc7DanLewis').style.display = "block";
        document.getElementById('clue7Container').style.display = "block";
        document.getElementById('q7Container').style.display = "none";
        document.getElementById('level8Heading').style.display = "block";
        document.getElementById('q8Container').style.display = "block";
        q7Image.removeEventListener("mousemove", drawOnMouseMove, false);
        q7Button.removeEventListener("click", onQ7ButtonClick, false);
        clearMarkerButton.removeEventListener("click", clearMarkerOnButtonClick, false);
    }
}

q7Button.addEventListener("click", onQ7ButtonClick, false);

//user can draw on q7 picture by holding mouse button down and mousing over:
let q7Image = document.getElementById("q7Image");

let drawOnMouseMove = function(event) {
    let q7ImageWrapper = document.getElementById('q7ImageWrapper');
    let marker = document.createElement("div");
    marker.className = "marker";
    q7ImageWrapper.insertBefore(marker, q7Image);
    let q7ImageRect = q7Image.getBoundingClientRect();  //gives the distance to viewport
    marker.style.top = event.clientY - q7ImageRect.y + "px"; 
    marker.style.left = event.clientX - q7ImageRect.x  + "px"; 
};

q7Image.addEventListener("mousemove", drawOnMouseMove, false);

//button to clear marker and start over:
let clearMarkerButton = document.getElementById("clearMarkerButton");

let clearMarkerOnButtonClick = function() {
    let allMarker = document.querySelectorAll(".marker");
    for (i = 0; i < allMarker.length; i++) {
        allMarker[i].remove();
    };
};

clearMarkerButton.addEventListener("click", clearMarkerOnButtonClick, false);

//make q8 button check answer, hide question and show clue 
let q8Button = document.getElementById("q8Button");

const climatePattern = new RegExp('[Cc]limate');

let onQ8ButtonClick = function(e) {
    let answer8 = document.getElementById("answer8").value;
    if (climatePattern.test(answer8) === true) {
        e.preventDefault();
        document.getElementById('loc8BeaTartan').style.display = "block";
        document.getElementById('clue8Container').style.display = "block";
        document.getElementById('q8Container').style.display = "none";
        document.getElementById('q9Container').style.display = "block";
        q8Image.removeEventListener("click", highlightOnClick, false);
        q8Button.removeEventListener("click", onQ8ButtonClick, false);
        clearHighlightButton.removeEventListener("click", clearHighlightButtonClick, false);
    }
}

q8Button.addEventListener("click", onQ8ButtonClick, false);

//user can highlight on q8 picture by clicking:
let q8Image = document.getElementById("q8Image");

let highlightOnClick = function(event) {
    let q8ImageWrapper = document.getElementById('q8ImageWrapper');
    let highlighter = document.createElement("div");
    highlighter.className = "highlighter";
    q8ImageWrapper.insertBefore(highlighter, q8Image);
    let q8ImageRect = q8Image.getBoundingClientRect();  
    //gives the distance to viewport; subtract radius (fifteen) to center the mark:
    highlighter.style.top = event.clientY - q8ImageRect.y - 15 + "px"; 
    highlighter.style.left = event.clientX - q8ImageRect.x  - 15 + "px"; 
};

q8Image.addEventListener("click", highlightOnClick, false);

//button to clear highlight and start over:
let clearHighlightButton = document.getElementById("clearHighlightButton");

let clearHighlightOnButtonClick = function() {
    let allHighlights = document.querySelectorAll(".highlighter");
    for (i = 0; i < allHighlights.length; i++) {
        allHighlights[i].remove();
    };
};

clearHighlightButton.addEventListener("click", clearHighlightOnButtonClick, false);

//make q9 button check answer, hide question and show clue (solution video) 
let q9Button = document.getElementById("q9Button");
let showSolutionButton = document.getElementById('showSolutionButton');


/*function to check (and validate: "true/false") final answers about suspects
and causes of salmon famine (checkboxes and text area):*/
let onQ9ButtonClick = function(e) {
    let numberOfSuspectsChecked = 0;
    let mysteryExplanation = document.getElementsByName("mysteryExplanation")[0].value;
    let answer9 = document.getElementsByName("suspect");
    
    console.log("Length of typed input is " + mysteryExplanation.length + " characters.");
    //iterate through checkboxes and count the number that are checked:
    for (i = 0; i < answer9.length; i++) {      
        if (answer9[i].checked) {
            numberOfSuspectsChecked++;
        }
    }    
    
    //unless there are exactly two boxes checked, alert user to select 2 answers:
    if (numberOfSuspectsChecked > 2 || numberOfSuspectsChecked <= 1 ) {
        alert("Please select two primary suspects.");
        console.log("Correct answer 1 checked? " + answer9[1].checked + ' Correct answer 2 checked? ' + answer9[2].checked);
        return false;
        
        /*If both checked answers are correct, but the text area response is too short,
         request more explanation:*/
    } else if (answer9[1].checked && answer9[2].checked && !(mysteryExplanation.length > 60)) {
        alert("You answered correctly! But can you please explain your answer a little more?");
        return false;

        /*If both checked answers are correct, AND the text area length is > 60 char,
        display solution, hide question and remove event listener for the button:*/
    } else if (answer9[1].checked && answer9[2].checked && mysteryExplanation.length > 60) {
        alert("You did it!");
        e.preventDefault();  //******CONSIDER REPLACING THIS TO SEND FINAL ANSWER SOMEWHERE******
        document.getElementById('solutionContainer').style.display = "block";
        document.getElementById('q9Container').style.display = "none";
        q9Button.removeEventListener("click", onQ9ButtonClick, false);
        showSolutionButton.removeEventListener("click", onShowSolutionClick, false);
        return true;

        /*If one of the answers is correct, and explanation is too short,
        notify user and ask for more information:*/
    } else if ((answer9[1].checked || answer9[2].checked) && !(mysteryExplanation.length > 60)) {
        console.log("Length of typed input is " + mysteryExplanation.length + " characters.");
        alert("You're almost there! Please look back at your clues, and be sure to explain your answer a little more!");
        return false;

        /*If one of the answers is correct, and explanation is long enough,
        notify user and display a button to let them show the solution:*/
    } else if ((answer9[1].checked || answer9[2].checked) && mysteryExplanation.length > 60) {
        alert("You're getting close! Keep trying, or click the 'Show Solution Button.'");
        e.preventDefault();  //******CONSIDER REPLACING THIS TO SEND FINAL ANSWER SOMEWHERE******
        showSolutionButton.style.display = "block";
        return true;  
        
        /*If neither answer is correct, and explanation is too short,
        notify user and ask for more information:*/
    } else if (!(mysteryExplanation.length > 60)) {
        alert("I'm not sure I agree. Please look back at your clues. Be sure to explain your answer!");
        return false;

        /*If neither answer is correct, but the explanation is long enough,
        notify user and display a button to let them show the solution:*/
    } else {
        alert("I'm not sure I'm convinced. Keep trying, or click the 'Show Solution Button.'");
        e.preventDefault();  //******CONSIDER REPLACING THIS TO SEND FINAL ANSWER SOMEWHERE******
        showSolutionButton.style.display = "block";
        return true;
    }
};

q9Button.addEventListener("click", onQ9ButtonClick, false);

/*show solution button to see solution video if user didn't get the answer correct
(give user control over whether to keep trying):*/
let onShowSolutionClick = function () {
    document.getElementById('solutionContainer').style.display = "block";
    document.getElementById('q9Container').style.display = "none";
    showSolutionButton.removeEventListener("click", onShowSolutionClick, false);
}

showSolutionButton.addEventListener("click", onShowSolutionClick, false)