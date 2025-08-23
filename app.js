/* app.js — DoggyGo (CSP safe, no inline handlers) */
(function(){
    'use strict';

    // ======== Config ========
    var lang = 'fr';
    var treeBase = './trees/';
    var treeName = 'doggygo-contacts-' + lang + '.json';

    // ======== Persons (codes -> nom + lien annuaire / e‑mail) ========
    // ======== Persons (codes -> nom + lien annuaire / e‑mail) ========
    var persons = {
	/* SR (Service de la recherche) */
	"JR"  : { "name": "Julian Randall",        "url": "https://annuaire.unil.ch/person/R4rszLkKew3U7p" },
	"MC"  : { "name": "Micaela Crespo",        "url": "https://annuaire.unil.ch/person/cKu9p4u7m9XUBj" },
	"LC"  : { "name": "Lucia Couto",           "url": "https://annuaire.unil.ch/person/p9L8fB2bjLZnA4" },
	"EAM" : { "name": "Eliane Abou-Mansour",   "url": "https://annuaire.unil.ch/person/LgLLf7wep3kZBi" },
	"RT"  : { "name": "Rolande Tardy",         "url": "https://annuaire.unil.ch/person/hd73XGXkGb4U5w" },
	"AEDC": { "name": "Anne-Emmanuelle de Crousaz", "url": "https://annuaire.unil.ch/person/R87FcLkKew3U7p" },
	"AB"  : { "name": "Aurélie Brehmer",       "url": "https://annuaire.unil.ch/person/hk2dAGXkGb4U5w" },
	"CA"  : { "name": "Claire Arnold",         "url": "https://annuaire.unil.ch/person/47c7LgpckuHb25" },
	"ZEM" : { "name": "Zohra El Masbahi",      "url": "https://annuaire.unil.ch/person/KGKZjmZikDrmpw" },
	"ACB" : { "name": "Anne-Christine Butty",  "url": "https://annuaire.unil.ch/person/LjB3d7wep3kZBi" },
	"PAD" : { "name": "Pablo Diaz",            "url": "https://annuaire.unil.ch/person/pfFzXB2bjLZnA4" },
	"TVL" : { "name": "Thé Van Luong",         "url": "https://annuaire.unil.ch/person/cmbpD4u7m9XUBj" },
	"MD"  : { "name": "Maëlle Desard",         "url": "https://annuaire.unil.ch/person/hkifyGXkGb4U5w" },
	"VL"  : { "name": "Véronique Longchamp",   "url": "https://annuaire.unil.ch/person/u5rsd2fbRe7LFH" },
	"SG"  : { "name": "Stéphanie Glaeser",     "url": "mailto:collabexterne@unil.ch" },
	"SRSEC":{ "name": "Secrétariat SR",        "url": "mailto:recherche@unil.ch" },
	"MP"  : { "name": "Marchés publics recherche",  "url": "mailto:marchespublics-recherche@unil.ch" },
	/* RACP (ex‑ColLaboratoire) — désormais au SR */
	"COL-MA" : { "name": "Marc Audétat",     "url": "https://annuaire.unil.ch/person/czBgZ4u7m9XUBj" },
	"COL-AC" : { "name": "Alexandre Camus",  "url": "https://annuaire.unil.ch/person/Rc5BnLkKew3U7p" },


	/* Graduate Campus */
	"MB"  : { "name": "Mélanie Bosson",        "url": "https://annuaire.unil.ch/person/Z3zgfb83u29UXn" },
	"VE"  : { "name": "Verity Elston",         "url": "https://annuaire.unil.ch/person/yLQjyww9ekudcm" },
	"PF"  : { "name": "Pauline Fritsch",       "url": "https://annuaire.unil.ch/person/Dz8ghV2HzeAGUd" },
	"MS"  : { "name": "Martine Schaer",        "url": "https://annuaire.unil.ch/person/4m444gpckuHb25" },
	"SN"  : { "name": "Shervine Nafissi",      "url": "https://annuaire.unil.ch/person/nApfs3z9krU78L" },
	"GCCONTACT" : { "name": "Graduate Campus – Contact", "url": "mailto:graduatecampus@unil.ch" },
	"GC-EL": { "name": "Esther Liekmeier",     "url": "https://annuaire.unil.ch/person/B8UQczGrsc324Z" },
	"GC-AV": { "name": "Aliénor Vauthey",      "url": "https://annuaire.unil.ch/person/c7zhK4u7m9XUBj" },

	/* PACTT */
	"AS"  : { "name": "Alberto Schena",        "url": "mailto:Alberto.Schena@unil.ch" },
	"PACTTINFO": { "name": "PACTT – Info",     "url": "mailto:pactt.info@chuv.ch" },
	"PACTTLIC" : { "name": "PACTT – Inventions & valorisation", "url": "mailto:pactt.license@chuv.ch" },
	"PACTTLEG" : { "name": "PACTT – Juridique & contrats",      "url": "mailto:pactt.legal@chuv.ch" },
	"FG"  : { "name": "Florence Guth",         "url": "https://annuaire.unil.ch/person/XD94zpnh8kfQsy" },
	"ARL" : { "name": "Anne-Renée Leyvraz",    "url": "https://annuaire.unil.ch/person/wpDy8cUikfng4b" },
	"JP"  : { "name": "Jonas Pollard",         "url": "https://annuaire.unil.ch/person/r4LgKRB5Kh7cUQ" },
	"PH"  : { "name": "Pierre Heuzé",          "url": "https://annuaire.unil.ch/person/p9j2zB2bjLZnA4" },
	"PACTT-J1": { "name": "Laura Lo Bello", "url": "https://annuaire.unil.ch/person/fwsXbrVL9AmpXg" },
	"PACTT-J2": { "name": "Olga Larionova", "url": "https://annuaire.unil.ch/person/fwbDUrVL9AmpXg" },
	"PACTT-J3": { "name": "Tristan Gianora", "url": "https://annuaire.unil.ch/person/25yyRiUs8kBdye" },
	"PACTT-J4": { "name": "Simon Jossen",   "url": "https://annuaire.unil.ch/person/hFw75GXkGb4U5w" },
	"DH"  : { "name": "Djamila Houha",  "url": "https://annuaire.unil.ch/person/HisdneGjZLAfUQ" },
	"PACTT-AP": { "name": "Aurélie Périsset", "url": "https://annuaire.unil.ch/person/hF7LAGXkGb4U5w" },

	/* UNIRIS */
	"UNIRIS": { "name": "UNIRIS – Contact",    "url": "mailto:uniris@unil.ch" },
	"UNIRIS-DR1": { "name": "Carmen Jambé",    "url": "https://annuaire.unil.ch/person/hKVsgGXkGb4U5w" },
	"UNIRIS-DR2": { "name": "Magalie Vetter",  "url": "https://annuaire.unil.ch/person/R4hmKLkKew3U7p" },
	"UNIRIS-DR3": { "name": "Marielle Guirlet","url": "mailto:Marielle.Guirlet@unil.ch" },
	"UNIRIS-RM1": { "name": "Laurence Gauvin", "url": "https://annuaire.unil.ch/person/DH7AV2HzeAGUdB" },
	"UNIRIS-RM2": { "name": "Nathalie Montet", "url": "https://annuaire.unil.ch/person/4GhGmgpckuHb25" },
	"UNIRIS-RM3": { "name": "Noha El Sadawy",  "url": "https://annuaire.unil.ch/person/QGLsAyQdbFR27m" },
	"UNIRIS-AR1": { "name": "Sacha Auderset",  "url": "https://annuaire.unil.ch/person/XsbBrpnh8kfQsy" },
	"UNIRIS-AR2": { "name": "Julie Farine",    "url": "https://annuaire.unil.ch/person/rybU4RB5Kh7cUQ" },
	"UNIRIS-AR3": { "name": "Elora Lovey",     "url": "#" },
	"UNIRIS-AR4": { "name": "Xavier Baume",    "url": "#" },
	"UNIRIS-V1" : { "name": "Eva Frei",        "url": "https://annuaire.unil.ch/person/uHmiw2fbRe7LFH" },
	"UNIRIS-V2" : { "name": "Flavia Mizel",    "url": "mailto:Flavia.Mizel@unil.ch" },
	"UNIRIS-RESP": { "name": "Gérard Bagnoud", "url": "https://annuaire.unil.ch/person/p8ejQB2bjLZnA4" },
	"UNIRIS-ADM" : { "name": "Romain Clément", "url": "https://annuaire.unil.ch/person/47nrHgpckuHb25" }
    };

    // ======== Traductions ========
    var translate = {
	fr: { contact: "Contacter", text: "La personne ci‑dessous est votre point de contact.",
              error: "DoggyGo n'est pas accessible pour le moment.", back: "Revenir",
              restart: "Recommencer", note: "Les boutons Contacter ouvrent l’annuaire UNIL ou un e‑mail." },
	en: { contact: "Contact", text: "This person is your point of contact.",
              error: "DoggyGo is not available right now.", back: "Back",
              restart: "Restart", note: "Contact buttons open the UNIL directory or an email." }
    };

    // ======== État ========
    var tree = {};
    var parent = '', oldItem = '', trail = [];

    // ======== Helpers ========
    function $(sel){ return document.querySelector(sel); }
    function setHTML(selOrEl, html){
	var el = (typeof selOrEl === 'string') ? $(selOrEl) : selOrEl;
	if(el) el.innerHTML = html;
    }
    function show(el){ if(el) el.style.display = ''; }
    function hide(el){ if(el) el.style.display = 'none'; }
    function escapeHTML(str){
	var div = document.createElement('div'); div.textContent = String(str || ''); return div.innerHTML;
    }
    function t(key){ return (translate[lang] && translate[lang][key]) || key; }
    function applyI18n(){
	document.querySelectorAll('[data-i18n]').forEach(function(el){
	    el.innerHTML = t(el.getAttribute('data-i18n'));
	});
    }
    function renderProgress(){
	var progressEl = $('#progress'); if(!progressEl) return;
	if(trail.length === 0){ progressEl.innerHTML = ''; return; }
	var chips = trail.map(function(_, idx){
	    return '<span class="chip'+(idx === trail.length-1 ? '' : ' muted')+'">'+ (idx+1) +'</span>';
	}).join('');
	progressEl.innerHTML = chips;
    }
    function initials(name){
	if(!name) return '?';
	var parts = String(name).split(' ');
	var a = parts[0] ? parts[0][0] : ''; var b = parts[1] ? parts[1][0] : '';
	return (a+b).toUpperCase();
    }

    // ======== Rendu ========
    function attachOptionHandlers(container){
	container.querySelectorAll('.option-item').forEach(function(a){
	    a.addEventListener('click', function(ev){
		ev.preventDefault();
		var v = a.getAttribute('data-value') || '';
		format(v);
	    });
	});
    }

    function renderOptions(key){
	var node = tree[key] || {};
	var label = escapeHTML(node.label || '');
	parent = node.parent || '';
	oldItem = key;

	if(trail[trail.length-1] !== key){ trail.push(key); }
	renderProgress();

	var optionsHTML = (node.options || []).map(function(opt){
	    var v = String(opt.value || '');
	    return ''+
		'<a class="option-item" data-value="'+ escapeHTML(v) +'" href="#" role="button">'+
		'<span class="label"><i class="fa-solid fa-arrow-right-long"></i> '+ escapeHTML(opt.option) +'</span>'+
		'</a>';
	}).join('');

	var html = ''+
	    '<div class="q-title">'+ label +'</div>'+
	    '<div class="list-group">'+ optionsHTML +'</div>';

	var container = $('#question');
	setHTML(container, html);
	container.classList.add('fade-up');

	// Controls
	show($('#buttons'));
	if(node.parent){ show($('#back')); } else { hide($('#back')); }
	hide($('#restart'));
	applyI18n();

	attachOptionHandlers(container);
    }

    function renderContact(item){
	var match = /^Contacter\s+(.+)$/.exec(item);
	var code = match ? match[1] : '';
	var p = persons[code] || {};
	var name = p.name || code || 'Contact';
	var url = p.url || '#';

	if(trail[trail.length-1] !== 'contact:'+code){ trail.push('contact:'+code); }
	renderProgress();

	var html = ''+
	    '<div class="q-title">'+ escapeHTML(t('text')) +'</div>'+
	    '<div class="contact-wrap">'+
            '<div class="contact-id">'+
            '<div class="avatar" aria-hidden="true">'+ initials(name) +'</div>'+
            '<div>'+
            '<p class="contact-name">'+ escapeHTML(name) +'</p>'+
            '<p class="contact-meta"><i class="fa-regular fa-address-card"></i> UNIL · Point de contact</p>'+
            '</div>'+
            '</div>'+
            '<div class="cta">'+
            '<a class="btn" target="_blank" rel="noopener" href="'+ url +'">'+
            '<i class="fa-solid fa-paper-plane"></i> '+ escapeHTML(t('contact')) +
            '</a>'+
            '</div>'+
	    '</div>';

	setHTML('#question', html);
	$('#question').classList.add('fade-up');

	show($('#buttons')); show($('#back')); show($('#restart'));
	applyI18n();
    }

    // ======== API ========
    function format(item){
	if(String(item).substr(0,9) === 'Contacter'){
	    renderContact(item);
	} else {
	    renderOptions(item);
	}
    }
    function goback(){
	var last = trail[trail.length-1] || '';
	if(typeof last === 'string' && last.indexOf('contact:') === 0){
	    trail.pop();
	    format(oldItem);
	    return;
	}
	if(!parent) return;
	trail.pop();
	format(parent);
    }

    // ======== Init ========
    function loadParams(){
	var params = new URLSearchParams(location.search);
	var qLang = params.get('lang');
	var notitle = params.get('notitle');
	if(qLang && translate[qLang]){ lang = qLang; treeName = 'doggygo-contacts-' + lang + '.json'; }
	if(notitle === 'true'){ document.querySelectorAll('h1,.title').forEach(function(h){ h.classList.add('visually-hidden'); }); }
    }

    function showLoader(){
	setHTML('#question',
		'<div class="progress" style="height:6px;"><div class="progress-bar progress-bar-striped progress-bar-animated" style="width: 50%"></div></div>'
	       );
	hide($('#back')); hide($('#restart'));
    }

    async function loadTree(){
	var url = treeBase + treeName;
	var res = await fetch(url, { cache: 'no-store' });
	if(!res.ok) throw new Error('HTTP '+res.status+' sur '+url);
	var txt = await res.text();
	// Support JSON "commenté"
	var json = JSON.parse(String(txt).replace(/\/\*[\s\S]*?\*\//g, '').replace(/^\s*\/\/.*$/mg, ''));
	return json;
    }

    async function boot(){
	loadParams();
	applyI18n();
	showLoader();

	// Boutons (handlers non-inlines)
	var backEl = $('#back'); if(backEl){ backEl.addEventListener('click', function(e){ e.preventDefault(); goback(); }); }
	var restartEl = $('#restart'); if(restartEl){ restartEl.addEventListener('click', function(e){ e.preventDefault(); location.reload(); }); }

	try{
	    tree = await loadTree();
	    if(!tree || !Object.prototype.hasOwnProperty.call(tree, '0')){
		throw new Error('Le JSON ne contient pas la clé "0".');
	    }
	    show($('#buttons'));
	    format('0');
	}catch(e){
	    console.error(e);
	    setHTML('#question',
		    '<div class="alert alert-danger mb-0" role="alert">'+
		    '<i class="fa-solid fa-triangle-exclamation"></i> '+ (translate[lang] ? translate[lang]['error'] : 'Erreur') +
		    '<div class="small mt-1">'+ escapeHTML(e.message) +'</div></div>'
		   );
	}
    }

    document.addEventListener('DOMContentLoaded', boot);
})();
