currpgid = 100;

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
