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
  preloadImages('static/imgs/albums/te01.jpg',
                'static/imgs/albums/te02.jpg',
                'static/imgs/albums/te03.jpg',
                'static/imgs/albums/te04.jpg',
                'static/imgs/albums/te05.jpg',
                'static/imgs/albums/te06.jpg',
                'static/imgs/albums/te07.jpg',
                'static/imgs/albums/te08.jpg',
                'static/imgs/albums/te09.jpg',
                'static/imgs/albums/tfinvi1.jpg',
                'static/imgs/albums/tfinvi2.jpg',
                'static/imgs/albums/tfinvi3.jpg',
                'static/imgs/albums/tfinvi4.jpg',
                'static/imgs/albums/tfinvif.jpg',
                'static/imgs/albums/tfinvib.jpg');
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
        loadgmap(0);
        loadtmap(10);
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
    $("#tmap").attr('src', 'https://www.google.com/maps/embed/v1/directions?key=AIzaSyCYwmQUnZRSsXfwJXAeNKo6h7AjtvVlZmg \
    &origin=Tirunelveli+New+Bus+Stand+Tirunelveli+Tamil Nadu+India&destination=Arulmigu+Nellaiappar+Temple,+East+Car+Street,+Tirunelveli,+Tamil+Nadu,+India&zoom=12');
    document.getElementById("tdesc").innerHTML = " <h3> Arulmigu Nellaiappar Temple </h3> The temple of Nellaiappar and Kanthimathi is situated in the centre of the town. The very name of the town,  Tirunelveli which was known in the past as Then Pandyanagaram is a part of the town which has developed around the temple of Nellaiyappar. From a distance itself one can have a beautiful view of the  the rules laid down in the agamasastras by Rama Pandyan.";
  } else if(id == 1) {
    $("#tmap").attr('src', 'https://www.google.com/maps/embed/v1/directions?key=AIzaSyCYwmQUnZRSsXfwJXAeNKo6h7AjtvVlZmg \
    &origin=Tirunelveli+New+Bus+Stand+Tirunelveli+Tamil Nadu+India&destination=Main+Falls+Courtallam+Tirunelveli,+Tamil+Nadu,+India&zoom=9');
    document.getElementById("tdesc").innerHTML = " <h3> Courtallam Falls </h3> Kuttralam or Kuttalam or Courtallam, is situated on the Western Ghats in Tirunelveli. Many seasonal and few perennial rivers such as the Chittar River, the Manimuthar River, the Pachaiyar River and the Thamirabarani River originate in this region. The numerous waterfalls and cascades along with the ubiquitous health resorts in the area have earned it the title the Spa of South India. The falls carry a good amount of water only when there is a rain on the hills. Season begins from June of every year till September. The South West Monsoon brings in the cold breeze with mild temperature. From October to December North East Monsoon sets over in Tamil Nadu and the climate is cold and the rains are very heavy sometimes.Nestled in the Western Ghats, Courtallam has scenic surroundings. The hillocks which dominate the scenery disappear into the blue mist of Agasthiarmalai, the mountain bearing the name of a sage who made immense contributions to Tamil literature and is believed to have lived in the area.";
  } else if(id == 2) {
    $("#tmap").attr('src', 'https://www.google.com/maps/embed/v1/directions?key=AIzaSyCYwmQUnZRSsXfwJXAeNKo6h7AjtvVlZmg \
    &origin=Tirunelveli+New+Bus+Stand+Tirunelveli+Tamil Nadu+India&destination=Agasthiyar+Falls+Papanasam+Tirunelveli,+Tamil+Nadu,+India&zoom=9');
    document.getElementById("tdesc").innerHTML = " <h3> Papanasam Agasthiyar Falls </h3> Agasthiyar Falls is located in Western Ghats to the South of Papanasam town and to the north of Papanasam Lower, the first lake in the descent of Tamiraparani River. It is located 42 km from the nearest city Tirunelveli. The waters from the falls meanders the stream in the river to Papansam hydro electric project and reaches the catchment area to the Papanasam Dam, which has a storage capacity of 142.15 ft. The place is frequented by animals like Tiger and Panther, which are frequently spotted in the route from Agasthiyar Falls to Papansam as both are located close to Kalakkad Mundanthurai Tiger Reserve. The falls receives its waters during the South-west monsoon from May to September, but the maximum amount of rainfall is received during the North-east monsoon during October to December.But the falls is commonly said by the nearby locales as 365 days falls as people can go there any day because the water is from the dam hence the water flow will not be affected by the monsoon to a large extent. There is a small temple of Agasthiyar near the falls, where devotees worship after taking a holy dip in the falls.";
  } else if(id == 3) {
    $("#tmap").attr('src', 'https://www.google.com/maps/embed/v1/directions?key=AIzaSyCYwmQUnZRSsXfwJXAeNKo6h7AjtvVlZmg \
    &origin=Tirunelveli+New+Bus+Stand+Tirunelveli+Tamil Nadu+India&destination=Maanjolai+Tirunelveli,+Tamil+Nadu,+India&zoom=9');
    document.getElementById("tdesc").innerHTML = " <h3> Maanjolai </h3> Manjolai Hills is a lovely hill station tucked away deep in the magnificent Kalakad Mundanthurai Tiger Reserve in the Western Ghats. The hills rise to a height of 1000-1500 meters and are covered here with tranquil tea gardens. Manjolai Hills is above the Manimuthar Dam and the picturesque Manimuthar Waterfalls and is 70 Kms from Tirunelveli. Manjolai Hills is famed for its lovely weather, which is such a blessing after the searing heat of the plains. It is also known for its awesome scenic beauty and the serenity of its surroundings";
  } else if(id == 4) {
    $("#tmap").attr('src', 'https://www.google.com/maps/embed/v1/directions?key=AIzaSyCYwmQUnZRSsXfwJXAeNKo6h7AjtvVlZmg \
    &origin=Tirunelveli+New+Bus+Stand+Tirunelveli+Tamil Nadu+India&destination=Koonthakulam+Bird+Sanctuary,+Koonthakulam,+Tamil+Nadu+627355,+India&zoom=9');
    document.getElementById("tdesc").innerHTML = " <h3> Koonthankulam Bird Sanctuary </h3>  It is just a short distance away from Tirunelveli having more than 43 species of resident and migratory water birds visit here every year and more than 100,000 migratory birds start coming by December and fly away to their northern homes by June or July after they lay and hatch eggs and the young ones mature enough to fly with the older ones.";
  } else if(id == 5) {
    $("#tmap").attr('src', 'https://www.google.com/maps/embed/v1/directions?key=AIzaSyCYwmQUnZRSsXfwJXAeNKo6h7AjtvVlZmg \
    &origin=Tirunelveli+New+Bus+Stand+Tirunelveli+Tamil Nadu+India&destination=Thenmalai,+Tamil+Nadu+627757,+India&zoom=9');
    document.getElementById("tdesc").innerHTML = " <h3> Thenmalai </h3> Located 45 kms from Courtallam, Thenmala is a small village at the foothills of Western Ghats and predominantly a forest area. The famous Shenduruney Wildlife Sanctuary forms the main attraction of Thenmala Ecotourism.";
  } else if(id == 6) {
    $("#tmap").attr('src', 'https://www.google.com/maps/embed/v1/directions?key=AIzaSyCYwmQUnZRSsXfwJXAeNKo6h7AjtvVlZmg \
    &origin=Tirunelveli+New+Bus+Stand+Tirunelveli+Tamil Nadu+India&destination=Kanyakumari+Sunrise+View,+Kanyakumari,+Tamil+Nadu,+India&zoom=9');
    document.getElementById("tdesc").innerHTML = " <h3> Kanyaakumari </h3>  Kanyakumari town has tourist attractions of its own, the district has many more, from centuries-old historic and religious  sites to scenic places.A unique feature of Kanyakumari district is its diversity of natural ecosystems, including beaches, mountain valleys, evergreen forests in the deep interior, rubber and clove plantations on the highlands located 84 kms from Tirunelveli";
  } else if(id == 7) {
    $("#tmap").attr('src', 'https://www.google.com/maps/embed/v1/directions?key=AIzaSyCYwmQUnZRSsXfwJXAeNKo6h7AjtvVlZmg \
    &origin=Tirunelveli+New+Bus+Stand+Tirunelveli+Tamil Nadu+India&destination=Arulmigu+Sankaranarayanaswamy+Temple,+Sankarankovil+Tirunelveli,+Tamil+Nadu,+India&zoom=9');
    document.getElementById("tdesc").innerHTML = " <h3> Sankaranarayanaswamy Temple </h3>Sankaranainar Kovil, also known as the Sankara Narayanan Temple and was built in the 11th century by the Pandya king, Ukirapandiar. This temple also gives the town its name, Sankarankoil. In this temple you can see an unusual sight of Lord Shiva and Lord Vishnu placed together in the same sanctum sanctorum. Shiva lingams usually represent one particular natural element. In this holy place the Shivalingam, Sri Sankaralingaswami personifies the earth.The Sankarankoil temple’s architecture has been designed brilliantly so that in March and September, the rays of the sun fall on the icon of Lord Sankaralingam for three days from the 21st of each month.";
  } else if(id == 8) {
    $("#tmap").attr('src', 'https://www.google.com/maps/embed/v1/directions?key=AIzaSyCYwmQUnZRSsXfwJXAeNKo6h7AjtvVlZmg \
    &origin=Tirunelveli+New+Bus+Stand+Tirunelveli+Tamil Nadu+India&destination=Tirparappu+Water+Falls,+Kanyakumari+Tamil+Nadu,+India&zoom=9');
    document.getElementById("tdesc").innerHTML = " <h3> Tirparappu Falls </h3> The Kodayar River makes its descent at Thiruparappu. The water fall at this place is about 13 kilometres from Pechiparai Dam. The river bed is rocky and about 300 feet in length. The water falls from a height of nearly 50 feet and the water flows for about seven months per year. On either side of the river, on the left bank of the river in between the waterfalls and the weir, there is a temple dedicated to Shiva enclosed by strong fortification. The District Administration has recently constructed a swimming pool which is very popular among the children. Other more serene waterfalls in this area are Vattaparai Falls and Kalikesam falls.";
  } else {
    $("#tmap").attr('src', 'https://www.google.com/maps/embed/v1/place?key=AIzaSyCYwmQUnZRSsXfwJXAeNKo6h7AjtvVlZmg \
    &q=Tirunelveli+Tamil+Nadu,+India&zoom=12');
    document.getElementById("tdesc").innerHTML = " <h3> Tourist Attractions in and around Tirunelveli </h3> <br /> \
     Tirunelveli, located on the banks of the river Tamiraparani and surrounded by the western ghats, has a rich history and thus contains a several historical and geographical interesting locations worth a visit. Above you can find a collection of such locations where you can visit during your travel to Tirunelveli. Just click on the locations to get more inforamtion about that tourist attraction and also get directions and other useful tips and links.";
  }
}

function loadgmap(id) {
  if(id == 2)
    $("#gmap").attr('src', 'https://www.google.com/maps/embed/v1/directions?key=AIzaSyCYwmQUnZRSsXfwJXAeNKo6h7AjtvVlZmg \
    &origin=Tirunelveli+Old+Bus+Stand+Tirunelveli+Tamil Nadu+India \
    &destination=VMS+Kalyana+Mandapam+Tirunelveli+Tamil Nadu+India&zoom=12');
  else if(id == 1)
    $("#gmap").attr('src', 'https://www.google.com/maps/embed/v1/directions?key=AIzaSyCYwmQUnZRSsXfwJXAeNKo6h7AjtvVlZmg \
    &origin=Tirunelveli+New+Bus+Stand+Tirunelveli+Tamil Nadu+India \
    &destination=VMS+Kalyana+Mandapam+Tirunelveli+Tamil Nadu+India&zoom=12');
  else
    $("#gmap").attr('src', 'https://www.google.com/maps/embed/v1/place?key=AIzaSyCYwmQUnZRSsXfwJXAeNKo6h7AjtvVlZmg \
    &q=VMS+Kalyana+Mandapam+Tirunelveli+Tamil Nadu+India&zoom=12');
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
