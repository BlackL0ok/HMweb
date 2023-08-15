function getValue() {
    // Récupérer l'élément select par son ID
    var selectElement = document.getElementById('inputGroupSelect04');
  
    // Récupérer la valeur sélectionnée
    var selectedValue = selectElement.value;
    var new_url = getUrlWithoutHash() + '#'+selectedValue;
    window.location.href = new_url;
    // Afficher la valeur dans la console (vous pouvez faire autre chose avec cette valeur)
    return new_url;
  }

  function getUrlWithoutHash() {
    const currentUrl = window.location.href;
    const urlWithoutHash = currentUrl.split('#')[0];
    return urlWithoutHash;
  }
  function getHashWithoutUrl() {
    const currentUrl = window.location.href;
    const urlWithoutHash = currentUrl.split('#')[1];
    return urlWithoutHash;
  }
  function openInNewTab(url) {
    window.open(url, '_blank').focus();
  }
function goToLink(){
    // Changement de lien
    var link;
    // Récupérez la valeur souhaitée (par exemple, la valeur d'un champ select)
    const valueFromJS = getHashWithoutUrl(getValue()); // Remplacez "value1" par la valeur réellement récupérée depuis JavaScript
    console.log(valueFromJS)
    // Récupérez l'élément du contenu par son identifiant
    const contentElement = document.getElementById("content-to-show");

    // Vous pouvez maintenant décider d'afficher ou de masquer le contenu en fonction de la valeur récupérée
    if (valueFromJS === "mail") {
    link  = "mailto:mathys.haubert80@gmail.com"; // Afficher le contenu spécifique à 'value1'
    } else if (valueFromJS === "phone") {
    link  = "tel:+33625483650"
    } else if (valueFromJS === "lkd") {
    link="https://www.linkedin.com/in/mathys-haubert-3496a5274";
    } else if (valueFromJS === "dc") {
      link="https://discord.com/users/blackl0ok";
    }
    else if (valueFromJS === "gh") {
      link="https://github.com/BlackL0ok";
    }
    else{
    
    }
    window.open(link, '_blank').focus();
}
