
function changeContainer1() {   
    document.getElementById('slide-show').innerHTML = `
    <img class="img-recipe" src="./img/pancakes.jpg">
        <div class="explain-recipe">
            <h2>American Pancakes</h2>
            <p class="recipe-text">Alle Pancakes schmecken gleich? 
            Probieren Sie diese American Pancakes und sie werden Ihre Meinung ändern!
            Ein süßer Genuss, der Sie auf einer Wolke dahin schweben lässt.</p>         
        <div class="btn">
            <a href="rezept2.html"><button>Rezept öffnen</button></a>
        </div>
        </div>`;
    
    setTimeout(changeContainer2, 7000);
}


function changeContainer2() {  
    document.getElementById('slide-show').innerHTML = `
    <img class="img-recipe" src="./img/penne.jpg">
        <div class="explain-recipe">
            <h2>Penne</h2>
            <p class="recipe-text">Ihr wollt etwas anderes als Tomatensauce oder Pesto? 
            Dann probiert die cremeige Paprika-Penne! Super gesund und lecker auch an warmen Tagen.</p>         
        <div class="btn">
            <a href="rezept4.html"><button>Rezept öffnen</button></a>
        </div>
        </div>`;

    setTimeout(changeContainer3, 7000);
}


function changeContainer3() {  
    document.getElementById('slide-show').innerHTML = `
    <img class="img-recipe" src="./img/goulash.jpg">
        <div class="explain-recipe">
            <h2>Gulasch</h2>
            <p class="recipe-text">Mit der pikanten ungarischen Gulaschsuppe kommen jede Menge Vitalstoffe
            auf den Teller: Rindfleisch punktet mit reichlich Eisen, Paprika und Kartoffeln bringen Vitamin C in dieses
            Gericht, welches nicht nur das Immunsystem stärkt, sondern auch für straffes Bindegewebe sorgt.</p>         
        <div class="btn">
            <a href="rezeptgulasch.html"><button>Rezept öffnen</button></a>
        </div>
        </div>`;

    setTimeout(changeContainer4, 7000);
}


function changeContainer4() { 
    document.getElementById('slide-show').innerHTML = `
    <img class="img-recipe" src="./img/quiche.jpg">
        <div class="explain-recipe">
            <h2>Quiche Lorraine</h2>
            <p class="recipe-text">Die französische Spezialität ist ein kleiner Alles-Könner. 
            Als warme Vorspeise oder deftiges Hauptgericht, ob mit Fisch oder Gemüse die Quiche 
            ist ein schnell zubereitetes und leckeres Gericht</p>         
        <div class="btn">
            <a href="rezept.html"><button>Rezept öffnen</button></a>
        </div>
        </div>`;

    setTimeout(changeContainer1, 7000);
}


function menuscrollingDown() {
    document.getElementById('menuHidden').style.height = "125px";
    document.getElementById('scrollup').style.zIndex = "1";
    document.getElementById('scrolldown').style.zIndex = "0";
    document.getElementById('headder').style.boxShadow = "none";    
}

function menuscrollingUp() {
    document.getElementById('menuHidden').style.height = "0px";
    document.getElementById('scrolldown').style.zIndex = "1";
    document.getElementById('scrollup').style.zIndex = "0";
    document.getElementById('headder').style.boxShadow = "0px 2px 10px 0px rgb(0, 0, 0, 10%)";
}


function validateForm(){
    let name = document.forms['Contact']['name'].value;
    let mail = document.forms['Contact']['mail'].value;
    let text = document.forms['Contact']['text'].value;
    if (name == ''){
        alert('Bitte Name eingeben');
       return false
    } if (mail == ''){
        alert('Bitte E-Mail eingeben');
      return false
    } if (text == ''){
        alert('Bitte Nachricht eingeben');
       return false
    }
}
