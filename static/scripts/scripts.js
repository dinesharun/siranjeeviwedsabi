var currpgid = 100;
var isItIE   = -1;

function onLoadActions() {
  isItIE = getInternetExplorerVersion();
  
  if(isItIE != -1) {
    $("#blockIE").css('display', 'block');
  }
  
  registerForms();
  preloadImages('static/imgs/albums/001.jpg',
                'static/imgs/albums/002.jpg',
                'static/imgs/albums/003.jpg',
                'static/imgs/albums/004.jpg',
                'static/imgs/albums/005.jpg',
                'static/imgs/albums/006.jpg');
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
          $("#invialbum").removeClass('inviaintro');
          $("#invialbum").addClass('inviaexit');
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
      setTimeout(function () { $("#loader").css('display', 'none'); }, 3300);
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
        $("#invialbum").removeClass('inviaexit');
        $("#invialbum").addClass('inviaintro');
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
	if(isItIE != -1) {
		$("#gbform").submit(function(event) {
		 
		  /* stop form from submitting normally */
		  event.preventDefault();
		  
		  /* get some values from elements on the page: */
		  var $form = $( this ),
			  name  = $form.find( 'input[name="gname"]' ).val(),
			  email = $form.find( 'input[name="gemail"]' ).val(),
			  log   = $form.find( 'textarea[name="gmsg"]' ).val(),
			  url = $form.attr( 'action' );
		  
		  /* Validate the form */
		  if((name == "") || (name == " ") || (name == "Name... (Req)")) {
			  alert("A Valid Name is required for Posting....");
		  } else if((log == "") || (log == " ") || (log == " Enter Your Wishes in Our Guestbook... ")) {
			  alert("At least something is required for Posting....");
		  } else {
			  /* Send the data using post */
			  this.submit();
		  }
		});
	}
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
