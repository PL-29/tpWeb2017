
// La création d'un Dnd requière un canvas et un interacteur.
// L'interacteur viendra dans un second temps donc ne vous en souciez pas au départ.
function DnD(canvas, interactor) {
	// Définir ici les attributs de la 'classe'
	var x0 = 0;
	var x1 = 0;
	var y0 = 0;
	var y1 = 0;
	var bool = false;
	
	canvas.addEventListener("mousedown", presser);
	canvas.addEventListener("mousemove", deplacer);
	canvas.addEventListener("mouseup", relacher); 

	// Developper les 3 fonctions gérant les événements
	function presser(evt){
		console.log("presser");
		bool = true;
		var coordonnees = getMousePosition(canvas, evt);
		this.x0 = coordonnees.x;
		this.y0 = coordonnees.y;
	}
	
	function deplacer(evt){
		if(bool){
			console.log("deplacer");
			var coordonnees = getMousePosition(canvas, evt);
			this.x1 = coordonnees.x;
			this.y1 = coordonnees.y;	
		}
	}
	
	function relacher(evt){
		if(bool){
			console.log("relacher");
			var coordonnees = getMousePosition(canvas, evt);
			this.x1 = coordonnees.x;
			this.y1 = coordonnees.y;
			bool = false;
		}
	}
	// Associer les fonctions précédentes aux évènements du canvas.
};


// Place le point de l'événement evt relativement à la position du canvas.
function getMousePosition(canvas, evt) {
  var rect = canvas.getBoundingClientRect();
  return {
    x: evt.clientX - rect.left,
    y: evt.clientY - rect.top
  };
};






