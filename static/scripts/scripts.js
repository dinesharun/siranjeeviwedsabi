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
          
        case 2:
          $("#nanogallery2").removeClass('ngintro');
          $("#nanogallery2").addClass('ngexit');
          break;
          
        default:
          $("#placeholder").removeClass('plhintro');
          $("#placeholder").addClass('plhexit');
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
        
      case 2:
        $("#nanogallery2").removeClass('ngexit');
        $("#nanogallery2").addClass('ngintro');
        break;
        
      default:
        $("#placeholder").removeClass('plhexit');
        $("#placeholder").addClass('plhintro');
        break;
    }
    
    currpgid = pgid;
  }
}
