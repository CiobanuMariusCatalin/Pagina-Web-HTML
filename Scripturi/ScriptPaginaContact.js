$("document").ready(function() {

/*Contact confirma trimitere*/
$('#form').submit(function(){
 return window.confirm("Acestea sunt datele ce vrei sa le trimiti?\n nume:"+$("#nume").val()+"\n prenume:"+$("#prenume").val()+"\n Eroul Preferat:"+$("#tags").val()+"\n E-mail:"+$("#mail").val()+"\n Sex:"+$('input[name=Sex]:checked').val()+"\n Mesajul:"+$("#mesaj").val());
});

/*autofill PLUGIN*/
  $(function() {
    var availableTags = [
      "Aatrox",
      "Ahri",
      "Akali",
      "Alistar",
      "Amumu",
      "Anivia",
      "Annie",
      "Ashe",
      " Blitzcrank",
      " Brand",
      "Caitlyn",
      "Cassiopeia",
      "Cho'Gath",
      "Corki",
      "Darius",
      "Diana",
      "Dr. Mundo",
      "Draven",
      "Elise",
      "Evelynn",
      "Ezreal",
      "Fiddlesticks",
	  " Fiora",
	  "Fizz",
	  "Galio",
	  "Gangplank",
	  "Garen",
	  " Gragas",
	  "Graves",
	  "Hecarim",
	  "Heimerdinger",
	  "Irelia",
	  "Janna",
	  "Jarvan IV",
	  "Jax",
	  " Jayce",
	  " Jinx",
	  "Karma",
	  "Karthus",
	  "Kassadin",
	  "Katarina",
	  "Kayle",
	  "Kennen",
	  "Kha'Zix",
	  "Kog'Maw",
	  "LeBlanc",
	  "Lee Sin",
	  "Leona",
	  "Lissandra",
	  "Lucian",
	  "Lulu",
	  "Lux",
	  "Malphite",
	  "Malzahar",
	  "Maokai",
	  "Master Yi",
	  "Miss Fortune",
	  "Mordekaiser",
	  " Morgana",
	  "Nami",
	  "Nasus",
	  "Nautilus",
	  "Nidalee",
	  "Nocturne",
	  "Nunu",
	  "Olaf",
	  "Orianna",
	  "Pantheon",
	  "Poppy",
	  "Quinn",
	  "Rammus",
	  "Renekton",
	  "Rengar",
	  "Riven",
	  "Rumble",
	  "Ryze",
	  "Sejuani",
	  "Shaco",
	  "Shen",
	  "Shyvana",
	  "Singed",
	  " Sion",
	  "Sivir",
	  "Skarner",
	  "Sona",
	  "Soraka",
	  "Swain",
	  "Syndra",
	  "Talon",
	  "Taric",
	  "Teemo",
	  "Thresh",
	  "Tristana",
	  "Trundle",
	  "Tryndamere",
	  "Twisted Fate",
	  "Twitch",
	  "Udyr",
	  "Urgot",
	  "Varus",
	  "Vayne",
	  "Veigar",
	  "Vel'Koz",
	  " Vi",
	  "Viktor",
	  "Vladimir",
	  " Volibear",
	  "Warwick",
	  "Wukong",
	  "Xerath",
	  " Xin Zhao",
	  "Yasuo",
	  "Yorick",
	  "Zac",
	  " Zed",
	  "Ziggs",
	  "Zilean",
	  "Zyra"	  
    ];
    $( "#tags" ).autocomplete({
	
      source: availableTags
    });
  });
});