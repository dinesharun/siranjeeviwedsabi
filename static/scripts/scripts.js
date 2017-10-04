var currpgid = 100;
var isItIE   = -1;
var lastCmtId = 100;
var idle = 0;

function onLoadActions() {
  isItIE = getInternetExplorerVersion();
  
  if(isItIE != -1) {
    $("#blockIE").css('display', 'block');
  }
  
  resizeMe();
  registerForms();
  preloadImages('static/imgs/albums/e01.jpg',
                'static/imgs/albums/e02.jpg',
                'static/imgs/albums/finvif.jpg',
                'static/imgs/albums/finvib.jpg');
  fillGuestBook();
  startCountDown();
  jQuery('.scrollbar-chrome').scrollbar();
  setTimeout(function() { navTo(0, 0); }, 900);
}

function getInternetExplorerVersion() {
   var rv = -1; 
   
   if (navigator.appName == 'Microsoft Internet Explorer') {
      var ua = navigator.userAgent;
      var re  = new RegExp("MSIE ([0-9]{1,}[\.0-9]{0,})");
      if (re.exec(ua) != null)
         rv = parseFloat( RegExp.$1 );
   }
   
   return rv;
}

function navTo(entry, pgid) {
  if((idle == 0) || (entry != 0)) {
    idle = 1;
    if(entry == 0) {
      if(currpgid != 100) {
        switch(currpgid) {
          case 0:
            $("#groom").removeClass('groomintro');
            $("#bride").removeClass('brideintro');
            $("#homeinvite").removeClass('inviintro');
            $("#groom").addClass('groomexit');
            $("#bride").addClass('brideexit');
            $("#homeinvite").addClass('inviexit');
            break;

          case 1:
            $("#tourr").removeClass('tourrintro');
            $("#tourr").addClass('tourrexit');
            $("#tourl").removeClass('tourlintro');
            $("#tourl").addClass('tourlexit');
            break;
            
          case 2:
            $("#nanogallery2").removeClass('ngintro');
            $("#nanogallery2").addClass('ngexit');
            break;

          case 3:
            $("#guestbook").removeClass('gbintro');
            $("#guestbook").addClass('gbexit');
            $("#guestbookform").removeClass('gbfintro');
            $("#guestbookform").addClass('gbfexit');
            break;
            
          case 4:
            $("#infor").removeClass('inforintro');
            $("#infor").addClass('inforexit');
            $("#infol").removeClass('infolintro');
            $("#infol").addClass('infolexit');
            break;
   
          default:
            break;
        }
        
        setTimeout(function () { navTo(1, pgid); }, 900);
      } else {
        $("#loader").addClass('loaded');
        setTimeout(function () { $("#loader").css('display', 'none'); }, 1800);
        setTimeout(function () { navTo(1, pgid); }, 10);
      }
    } else {
      switch(pgid) {
        case 0:
          $("#groom").removeClass('groomexit');
          $("#bride").removeClass('brideexit');
          $("#homeinvite").removeClass('inviexit');
          $("#groom").addClass('groomintro');
          $("#bride").addClass('brideintro');
          $("#homeinvite").addClass('inviintro');
          break;
       
        case 1:
          $("#tourr").removeClass('tourrexit');
          $("#tourr").addClass('tourrintro');
          $("#tourl").removeClass('tourlexit');
          $("#tourl").addClass('tourlintro');
          break;
     
        case 2:
          $("#nanogallery2").removeClass('ngexit');
          $("#nanogallery2").addClass('ngintro');
          break;

        case 3:
          $("#guestbook").removeClass('gbexit');
          $("#guestbook").addClass('gbintro');
          $("#guestbookform").removeClass('gbfexit');
          $("#guestbookform").addClass('gbfintro');
          break;
          
        case 4:
          $("#infor").removeClass('inforexit');
          $("#infor").addClass('inforintro');
          $("#infol").removeClass('infolexit');
          $("#infol").addClass('infolintro');
          break;
   
        default:
          break;
      }
      
      currpgid = pgid;
      idle = 0;
    }
  }
}

function loadtmap(id) {
  if(id == 0) {
    $("#tmap").attr('src', 'https://www.google.com/maps/embed/v1/place?key=AIzaSyCYwmQUnZRSsXfwJXAeNKo6h7AjtvVlZmg \
    &q=Arulmigu+Nellaiappar+Temple,+East+Car+Street,+Tirunelveli,+Tamil+Nadu,+India');
    document.getElementById("tdesc").innerHTML = " <h3> Arulmigu Nellaiappar Temple </h3>";
  } else if(id == 1) {
    $("#tmap").attr('src', 'https://www.google.com/maps/embed/v1/place?key=AIzaSyCYwmQUnZRSsXfwJXAeNKo6h7AjtvVlZmg \
    &q=Courtallam+Tirunelveli,+Tamil+Nadu,+India');
    document.getElementById("tdesc").innerHTML = " <h3> Courtallam </h3>";
  } else if(id == 2) {
    $("#tmap").attr('src', 'https://www.google.com/maps/embed/v1/place?key=AIzaSyCYwmQUnZRSsXfwJXAeNKo6h7AjtvVlZmg \
    &q=Papanasam+Tirunelveli,+Tamil+Nadu,+India');
    document.getElementById("tdesc").innerHTML = " <h3> Papanasam </h3>";
  } else {
    $("#tmap").attr('src', 'https://www.google.com/maps/embed/v1/place?key=AIzaSyCYwmQUnZRSsXfwJXAeNKo6h7AjtvVlZmg \
    &q=Tirunelveli,+Tamil+Nadu,+India');
    document.getElementById("tdesc").innerHTML = " <h3> Tourist Attractions in and around Tirunelveli </h3>";
  }
}

function loadgmap(id) {
  if(id == 2)
    $("#gmap").attr('src', 'https://www.google.com/maps/embed/v1/directions?key=AIzaSyCYwmQUnZRSsXfwJXAeNKo6h7AjtvVlZmg \
    &origin=Tirunelveli+Old+Bus+Stand+Tirunelveli+Tamil Nadu+India \
    &destination=VMS+Kalyana+Mandapam+Tirunelveli+Tamil Nadu+India');
  else if(id == 1)
    $("#gmap").attr('src', 'https://www.google.com/maps/embed/v1/directions?key=AIzaSyCYwmQUnZRSsXfwJXAeNKo6h7AjtvVlZmg \
    &origin=Tirunelveli+New+Bus+Stand+Tirunelveli+Tamil Nadu+India \
    &destination=VMS+Kalyana+Mandapam+Tirunelveli+Tamil Nadu+India');
  else
    $("#gmap").attr('src', 'https://www.google.com/maps/embed/v1/place?key=AIzaSyCYwmQUnZRSsXfwJXAeNKo6h7AjtvVlZmg \
    &q=VMS+Kalyana+Mandapam+Tirunelveli+Tamil Nadu+India');
}

function resizeMe() {
    //Standard height, for which the body font size is correct
    var preferredHeight = 720; 
    var preferredWidth = 1366; 
    var fontsize = 10;

    var displayHeight = $(window).height();
    var displayWidth = $(window).width();
    var percentageH = ((0.96 * displayHeight) / preferredHeight);
    var percentageW = ((0.96 * displayWidth) / preferredWidth);
    var percentage  = ((percentageH > percentageW)?(percentageW):(percentageH))
    var newFontSize = Math.floor(fontsize * percentage);
    $("body").css("font-size", newFontSize);
}

function removeVal(id) {
  var i = document.getElementById(id);

  if(i) {
    if(i.value==i.defaultValue) {
      i.value='';
    }
    i.style.color = "#000000";
  }
}

function addVal(id)
{
  var i = document.getElementById(id);
	
  if(i)	{
    if(i.value=='') {
      i.value=i.defaultValue;
    }
    i.style.color = "#545454";
  }
}

function registerForms() {
	$("#gbform").submit(function(event) {
    event.preventDefault();
   
    var $form = $( this ),
      name  = $form.find( 'input[name="gname"]' ).val(),
      email = $form.find( 'input[name="gemail"]' ).val(),
      log   = $form.find( 'textarea[name="gmsg"]' ).val();

    url = "https://swadatastoregb.appspot.com/guestbook/greet";
    
    if((name == "") || (name == " ") || (name == "Name... (Req) ")) {
      alert("A Valid Name is required for Posting....");
    } else if((log == "") || (log == " ") || (log == " Enter Your Wishes in Our Guestbook... ")) {
      alert("At least something is required for Posting....");
    } else {
      var posting = $.post( url, { name: name, email: email, log: log, test: 1 }, null, "json");
    
      var n = document.getElementById("gname"); if(n) {n.value = "Name... (Req) "};
      var e = document.getElementById("gemail"); if(e) {e.value = "Email... (Opt) "};
      var l = document.getElementById("gmsg"); if(l) {l.value = " Enter Your Wishes in Our Guestbook... "};		
   
      posting.done(function( data ) {
        fillGuestBook();                      
      });
    }
  });
}

function preloadImages(images) {
	var i = 0;
	var imageArray = new Array();
	var imageObj   = new Image();
	
	imageArray = images.split(',');
	
	for(i=0; i<=imageArray.length-1; i++)  {
		imageObj.src=imageArray[i];
	}
}

function fillGuestBook() {
	var url = "";
	var c1 = document.getElementById("gbinner");
	
  if(c1) {	
    c1.innerHTML = '<div class="cmtLoading"> <img style="width:99%;" src="static/imgs/loading.gif" /> </div>';
  }

	url ="https://swadatastoregb.appspot.com/root";
		
  var getting = $.get(url, "", null, "json" );	

  getting.done(function( data )  {
    var i = 0;
    var c = document.getElementById("gbinner");
    
    if(c) {	
      c.innerHTML = "";
        
      for(i=0;i<=data.length-1;i++) {
        if((data[i].Post != undefined) && (data[i].Name != undefined) && (data[i].CreatedTime != undefined)) {
          c.innerHTML += '<div class="cmt cmt' + (i%2) + '"id="gC' + (i) + '"><div class="cmtNo">(' + (data.length - (i+1)) + ')</div>' 
                  + data[i].Post + '<div class="cmtName">' 
                  + data[i].Name + ' </div> <div class="cmtDate"> ' + data[i].CreatedTime + ' </div></div>';
        }
      }		
      
      lastCmtId = data.length;
        
      c.innerHTML += "<br /><br /><br /><br /> ~~~ End of Wishes ~~~ <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />";
    }
  });
}

function startCountDown() {
  // Set the date we're counting down to
  var countDownDate = new Date("Oct 27, 2017 08:30:00").getTime();

  // Update the count down every 1 second
  var x = setInterval(function() {

  // Get todays date and time
  var now = new Date().getTime();

  // Find the distance between now an the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  if (distance < 0) {
    document.getElementById("cd").innerHTML = "<span class='cdtime'> <span class='cdnum'>" + days + "</span> days, <span class='cdnum'>" + hours + "</span> hours, <span class='cdnum'>"
    + minutes + "</span> minutes & <span class='cdnum'>" + seconds + "</span> seconds Since Marriage </span>";
  } else {
    document.getElementById("cd").innerHTML = "<span class='cdtime'><span class='cdnum'>" + days + "</span> days, <span class='cdnum'>" + hours + "</span> hours, <span class='cdnum'>"
    + minutes + "</span> minutes & <span class='cdnum'>" + seconds + "</span> seconds To Go! </span>";
  }
}, 1000);
}
