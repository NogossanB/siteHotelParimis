const menu = `
<!- LANGUES HEADER GAUCHE ->
<div class="header">
    <div class="langues">
        <ul>
            <li class="deroulant"><a href="#">FR</a>
                <ul class="sous">
                    <li><a href="#">EN</a></li>
                </ul>
            </li>
        </ul>
    </div>
    <a class="header-logo" href="index.html"><img src="/img/Logo.png" alt="Logo"/></a>

    <form class="header-droite" action="">
        <input class="barrederecherche" type="search" placeholder="Recherche"/>
        <a href="#">
            <svg class="icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
            </svg>
        </a>
        <a href="/reservation.html" class="icones-header">
            <svg class="icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-basket3" viewBox="0 0 16 16">
                <path d="M5.757 1.071a.5.5 0 0 1 .172.686L3.383 6h9.234L10.07 1.757a.5.5 0 1 1 .858-.514L13.783 6H15.5a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H.5a.5.5 0 0 1-.5-.5v-1A.5.5 0 0 1 .5 6h1.717L5.07 1.243a.5.5 0 0 1 .686-.172zM3.394 15l-1.48-6h-.97l1.525 6.426a.75.75 0 0 0 .729.574h9.606a.75.75 0 0 0 .73-.574L15.056 9h-.972l-1.479 6z"/>
            </svg>
        </a>
        <a href="/plan.html" class="icones-header">
            <svg class="icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo-alt" viewBox="0 0 16 16">
                <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A32 32 0 0 1 8 14.58a32 32 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10"/>
                <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/>
            </svg>
        </a>
    </form>
    <div class="bottom-menu"></div>
    <div class="clear"></div>
</div>
` ;
document.querySelector("#menu").innerHTML = menu;

const nav = `
	<div class="menu-toggle" id="mobile-menu">
            <span class="bar"></span>
            <span class="bar"></span>
            <span class="bar"></span>
        </div>
        <ul class="nav-list">
            <li><a href="/index.html">L'hôtel</a></li>
            <li><a href="/chambres.html">Chambres</a></li>
            <li><a href="/restaurant.html">Restaurant & Bar</a></li>
            <li><a href="/spa.html">Spa</a></li>
            <li><a href="/reservation.html">Réservation</a></li>
            <li><a href="/contact.html">Contact</a></li>
        </ul>
         
`
document.querySelector("#nav").innerHTML = nav;

const footer = `
				
				<section>
					<span class="contact-info">
					<h3>S'inscrire à la newsletter</h3>
						</select>
					<form class="gap" action="">
                    <input class="barrederecherche" type="text" type="search" placeholder="mon@mail.fr"/>
                    <button class="btn btn-size">S'incrire</button>
                </form>
				</select>
					</span >
					<ul>
					<li><a href="/mentions-legales.html">Mentions légales</a></li>
					<li><a href="/conditions-ventes.html">Conditions générales de vente</a></li>
					<li><a href="/plan.html">Plan du site</a></li>
					<li><a href="/contact.html">Contact</a></li>
					<button class="btn mtop btn-size" onclick="window.print()">Imprimer la page</button>
				</ul>
				Nogossan Binate 2025 © Hôtel Spa Parimis  - <a href="#container">Retour Haut de page</a> <br>
				Site sans but commercial, créé dans le cadre d'une formation Développeur/Intégrateur IFOCOP.
			</section>
			
`
document.querySelector("#footer").innerHTML = footer;

const mobileMenu = document.getElementById('mobile-menu');
const navList = document.querySelector('.nav-list');

mobileMenu.addEventListener('click', () => {
    navList.classList.toggle('active');
});