  $(document).ready(function(){
      $("li").hover(function(){
          $(this).css("font-size", "29px");
    }, function(){
          $(this).css("font-size", "25px");
    });
  });

  function loadRepo(url, callback) {
    const gitRequest = new XMLHttpRequest();
  
    gitRequest.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        callback(this);
      }
      
    };
    gitRequest.open("GET", url, true);
    gitRequest.send();
  }

  const thingToDoWhenClicked = (evt) => alert('I was clicked by: ' + evt.srcElement.id);
    document.getElementById('alertButton').onclick = thingToDoWhenClicked;
 
    function loadRepoCallback(gitRequest) {
    var htmlUpdate = "";
    let gitRepo = JSON.parse(gitRequest.responseText);
    gitRepo.forEach(function(inRepo) {
      htmlUpdate =
        htmlUpdate +
        "<li> " +
        '<a href="' +
        inRepo.html_url +
        '" target="_blank">' +
        inRepo.name +
        "</a></li> ";
    });
    document.getElementById("repoList").innerHTML = htmlUpdate;
  }
  