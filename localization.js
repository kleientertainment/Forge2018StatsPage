var loc_selected_language = "English";
var loc_strings = {
    "English": {
        "author": "English by <a href='https://klei.com/'>Klei</a>",
        "locale": "en",
        "progress_communityunlocks": "Community Unlocks",
        "progress_bar_title": "Progress: %1%",
        "progress_locked": "Locked",
        "progress_beetletaur": "Infernal Swineclops",
        "progress_boarrior": "Grand Forge Boarrior",
        "progress_book_elemental": "Tome of Beckoning & Spiral Spear",
        "progress_lavaarena_armor_hpextraheavy": "Steadfast Grand Armor",
        "progress_lavaarena_armor_hpdamager": "Jagged Grand Armor",
        "progress_lavaarena_armor_hprecharger": "Silken Grand Armor",
        "progress_lavaarena_armor_hppetmastery": "Whispering Grand Armor",
        "progress_lavaarena_heavyblade": "Blacksmith's Edge",
        "progress_lavaarena_firebomb": "Crystalized Magma Chamber",
        "progress_rhinodrill": "Rhinocebros",
        "progress_trails": "Boarilla",
        "progress_lastsync": "Last updated %1",
        "progress_lastsync_title": "Last updated on %1",
        "leaderboards-title": "Top Teams",
        "leaderboards-loading": "Loading top teams..",
        "leaderboards-noresults": "No results returned.. Try again later",
        "leaderboards-pos": "%1",
        "leaderboards-time": "Time",
        "leaderboards-seconds": "s",
        "leaderboards-deaths": "Deaths",
        "leaderboards-showmore": "Show More",
        "leaderboards-showless": "Show Fewer",
        "date": {
            "parentLocale": 'en',
            "months": 'January_February_March_April_May_June_July_August_September_October_November_December'.split('_'),
            "longDateFormat": {
                LLL: 'MMMM D, YYYY h:mm A',
            },
            "relativeTime": {
                "future": "in %s",
                "past": "%s ago",
                "s": 'a few seconds',
                "ss": '%d seconds',
                "m": "a minute",
                "mm": "%d minutes",
                "h": "an hour",
                "hh": "%d hours",
                "d": "a day",
                "dd": "%d days",
                "M": "a month",
                "MM": "%d months",
                "y": "a year",
                "yy": "%d years"
            },
            "ordinal": function(number) {
                var b = number % 10,
                    output = (~~(number % 100 / 10) === 1) ? 'th' :
                    (b === 1) ? 'st' :
                    (b === 2) ? 'nd' :
                    (b === 3) ? 'rd' : 'th';
                return number + "<span class='ordinal'>" + output + "</span>";
            }
        },
        "localization-credits": "Localization Credits",
        "localization-help": "Want to help?",
        "localization-helptext": "Want to add your own language? Submit a pull request on %1."
    },
    "Français": {
        "author": "Français par <a href='https://klei.com/'>Klei</a>, Frodeur et Hugy",
        "locale": "fr-FR",
        "progress_communityunlocks": "Progression Communautaire",
        "progress_bar_title": "Progression: %1%",
        "progress_locked": "Verrouillé",
        "progress_beetletaur": "Porcyclops Infernal",
        "progress_boarrior": "Imposant Sanglerrier de la Forge",
        "progress_book_elemental": "Tome d'invocation & Lance Spirale",
        "progress_lavaarena_armor_hpextraheavy": "Imposante Armure Inébranlable",
        "progress_lavaarena_armor_hpdamager": "Imposante Armure D'épine",
        "progress_lavaarena_armor_hprecharger": "Imposante Armure de Tissoin",
        "progress_lavaarena_armor_hppetmastery": "Imposante Armure de Domestication",
        "progress_lavaarena_heavyblade": "Fendoir du Forgeron",
        "progress_lavaarena_firebomb": "Chambre Magmatique Crystalisée",
        "progress_rhinodrill": "Perçorhino",
        "progress_trails": "Sangoriller",
        "progress_lastsync": "Dernière mise à jour %1",
        "progress_lastsync_title": "Dernière mise à jour le %1",
        "leaderboards-title": "Meilleures équipes",
        "leaderboards-loading": "Chargement des meilleurs équipes..",
        "leaderboards-noresults": "Aucun résultat. Réessayez plus tard",
        "leaderboards-pos": "%1",
        "leaderboards-time": "Temps",
        "leaderboards-seconds": "s",
        "leaderboards-deaths": "Morts",
        "leaderboards-showmore": "Voir plus",
        "leaderboards-showless": "Voir moins",
        "date": {
            "parentLocale": 'en',
            "months": 'Janvier_Février_Mars_Avril_Mai_Juin_Juillet_Août_Septembre_Octobre_Novembre_Décembre'.split('_'),
            "longDateFormat": {
                LLL: 'D MMMM YYYY à k:mm',
            },
            "relativeTime": {
                "future": "dans %s",
                "past": "il y a %s",
                "s": 'quelques secondes',
                "ss": '%d secondes',
                "m": "une minute",
                "mm": "%d minutes",
                "h": "une heure",
                "hh": "%d hours",
                "d": "un jour",
                "dd": "%d jours",
                "M": "un mois",
                "MM": "%d mois",
                "y": "un an",
                "yy": "%d ans"
            },
            "ordinal": function(number) {
                var suffix = "ème";
                switch (number) {
                    case 1:
                        suffix = "er";
                        break;
                    case 2:
                        suffix = "nd";
                        break;
                }
                return number + "<span class='ordinal'>" + suffix + "</span>";
            }
        },
        "localization-credits": "Auteurs des traductions",
        "localization-help": "Vous souhaitez aider ?",
        "localization-helptext": "Vous souhaitez ajouter votre propre language ? Envoyez une pull request sur %1."
    },
    "Nederlands": {
        "author": "Nederlands door <a href='https://github.com/PassTheWessel'>Wesselgame</a>",
        "locale": "nl",
        "progress_communityunlocks": "Gemeenschap Ontgrendelingen",
        "progress_bar_title": "Progressie: %1%",
        "progress_locked": "Vergrendeld",
        "progress_beetletaur": "Hels Swineclops",
        "progress_boarrior": "Grote Smederij Boarrior",
        "progress_book_elemental": "Tome van Beckoning & Spiraalvormige Speer",
        "progress_lavaarena_armor_hpextraheavy": "Standvastig Groot Pantser",
        "progress_lavaarena_armor_hpdamager": "Gekarteld Groot Pantser",
        "progress_lavaarena_armor_hprecharger": "Zijden Groot Pantser",
        "progress_lavaarena_armor_hppetmastery": "Fluisterend Groot Pantser",
        "progress_lavaarena_heavyblade": "Smid's rand",
        "progress_lavaarena_firebomb": "Gekristalliseerde magmakamer",
        "progress_rhinodrill": "Rhinocebros",
        "progress_trails": "Boarilla",
        "progress_lastsync": "Laatst bijgewerkt %1",
        "progress_lastsync_title": "Laatst gijgewerkt op %1",
        "leaderboards-title": "Beste Teams",
        "leaderboards-loading": "Beste teams aan het laden..",
        "leaderboards-noresults": "Geen resultaten gevonden.. Probeer het later opnieuw",
        "leaderboards-pos": "%1",
        "leaderboards-time": "Tijd",
        "leaderboards-seconds": "s",
        "leaderboards-deaths": "Sterfgevallen",
        "leaderboards-showmore": "Laat meer zien",
        "leaderboards-showless": "Laat minder zien",
        "date": {
            "parentLocale": 'en',
            "months": 'Januari_Februari_Maart_April_Mei_Juni_Juli_Augustus_September_Oktober_November_December'.split('_'),
            "longDateFormat": {
                LLL: 'D MMMM YYYY HH:mm',
            },
            "relativeTime": {
                "future": "over %s",
                "past": "%s geleden",
                "s": 'een paar seconden',
                "ss": '%d seconden',
                "m": "één minuut",
                "mm": "%d minuten",
                "h": "één uur",
                "hh": "%d uur",
                "d": "één dag",
                "dd": "%d dagen",
                "M": "één maand",
                "MM": "%d maanden",
                "y": "één jaar",
                "yy": "%d jaar"
            },
            "ordinal": function ( number ) {
                return number + '<span class="ordinal">' + ( ( number === 1 || number === 8 || number >= 20 ) ? 'ste' : 'de' ) + '</span>';
            }
        },
        "localization-credits": "Localisatie Eer",
        "localization-help": "Wilt u helpen?",
        "localization-helptext": "Wilt u uw eigen taal toevoegen? Dien een pull-aanvraag in op %1."
    },
    "Norsk bokmål": {
        "author": "Norsk bokmål av <a href='https://github.com/Fjedjik'>Fjedjik</a>",
        "locale": "nb",
        "progress_communityunlocks": "Opplåst av fellesskapet",
        "progress_bar_title": "Fremgang: %1%",
        "progress_locked": "Låst",
        "progress_beetletaur": "Djevelske Svineklopper",
        "progress_boarrior": "Store Smiesvinkriger",
        "progress_book_elemental": "Bind av Tegngiving & Sprialspyd",
        "progress_lavaarena_armor_hpextraheavy": "Stødig Storslått Rustning",
        "progress_lavaarena_armor_hpdamager": "Skarp Storslått Rustning",
        "progress_lavaarena_armor_hprecharger": "Myk Storslått Rustning",
        "progress_lavaarena_armor_hppetmastery": "Hviskende Storslått Rustning",
        "progress_lavaarena_heavyblade": "Smedens Kant",
        "progress_lavaarena_firebomb": "Krystallisert Magmakammer",
        "progress_rhinodrill": "Neshorncebros",
        "progress_trails": "Griorilla",
        "progress_lastsync": "Sist oppdatert %1",
        "progress_lastsync_title": "Sist oppdatert på %1",
        "leaderboards-title": "Topplagene",
        "leaderboards-loading": "Laster topplagene..",
        "leaderboards-noresults": "Fant ingen resultater.. Prøv igjen senere",
        "leaderboards-pos": "%1",
        "leaderboards-time": "Tid",
        "leaderboards-seconds": "s",
        "leaderboards-deaths": "Dødsfall",
        "leaderboards-showmore": "Vis Mer",
        "leaderboards-showless": "Vis Mindre",
        "date": {
            "parentLocale": 'en',
            "months": 'januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember'.split('_'),
            "longDateFormat": {
                LLL: 'D. MMMM YYYY [kl.] HH:mm',
            },
            "relativeTime": {
                "future": "om %s",
                "past": "%s siden",
                "s": 'noen sekunder',
                "ss": '%d sekunder',
                "m": "ett minutt",
                "mm": "%d minutter",
                "h": "en time",
                "hh": "%d timer",
                "d": "en dag",
                "dd": "%d dager",
                "M": "en måned",
                "MM": "%d måneder",
                "y": "ett år",
                "yy": "%d år"
            },
            "ordinal": function(number) {
                return number + ".";
            },
        },
        "localization-credits": "Oversettelsesforfatterne",
        "localization-help": "Ønsker du å hjelpe?",
        "localization-helptext": "Ønsker du å legge til ditt eget språk? Send in en pullforespørsel på %1."
    },
    "Português PT": {
        "author": "Português pela <a href='https://klei.com/'>Klei</a>",
        "locale": "pt-PT",
        "progress_communityunlocks": "Desbloqueios da Comunidade",
        "progress_bar_title": "Progresso: %1%",
        "progress_locked": "Bloqueado",
        "progress_beetletaur": "Suínoclope Infernal",
        "progress_boarrior": "Grande Javaleiro da Forja",
        "progress_book_elemental": "Tomo de Encorajamento e Lança Espiral",
        "progress_lavaarena_armor_hpextraheavy": "Grande Armadura Inabalável",
        "progress_lavaarena_armor_hpdamager": "Grande Armadura Denteada",
        "progress_lavaarena_armor_hprecharger": "Grande Armadura Sedosa",
        "progress_lavaarena_armor_hppetmastery": "Grande Armadura Sussurrante",
        "progress_lavaarena_heavyblade": "Lâmina do Ferreiro",
        "progress_lavaarena_firebomb": "Câmara de Magma Cristalizado",
        "progress_rhinodrill": "Rinocemanos",
        "progress_trails": "Javarila",
        "progress_lastsync": "Actualizado %1",
        "progress_lastsync_title": "Actualizado em %1",
        "leaderboards-title": "Melhores Equipas",
        "leaderboards-loading": "A obter equipas..",
        "leaderboards-noresults": "Nenhuns dados obtidos.. Tenta novamente",
        "leaderboards-pos": "%1",
        "leaderboards-time": "Tempo",
        "leaderboards-seconds": "s",
        "leaderboards-deaths": "Mortes",
        "leaderboards-showmore": "Mostrar Mais",
        "leaderboards-showless": "Mostrar Menos",
        "date": {
            "parentLocale": 'en',
            "months": 'Janeiro_Fevereiro_Março_Abril_Maio_Junho_Julho_Agosto_Setembro_Outubro_Novembro_Dezembro'.split('_'),
            "longDateFormat": {
                LLL: 'D [de] MMMM [de] YYYY HH:mm',
            },
            "relativeTime": {
                "future": "daqui a %s",
                "past": "há %s atrás",
                "s": 'alguns segundos',
                "ss": '%d segundos',
                "m": "um minuto",
                "mm": "%d minutos",
                "h": "uma hora",
                "hh": "%d horas",
                "d": "um dia",
                "dd": "%d dias",
                "M": "um mês",
                "MM": "%d meses",
                "y": "um ano",
                "yy": "%d anos"
            },
            "ordinal": function(number) {
                return number + "º";
            }
        },
        "localization-credits": "Autores das Traduções",
        "localization-help": "Queres ajudar?",
        "localization-helptext": "Queres adicionar a tua língua? Envia um pull request no %1."
    },
    "Português BR": {
        "author": "Português pela <a href='https://klei.com/'>Klei</a>",
        "locale": "pt-BR",
        "progress_communityunlocks": "Desbloqueios da Comunidade",
        "progress_bar_title": "Progresso: %1%",
        "progress_locked": "Bloqueado",
        "progress_beetletaur": "Suínoclope Infernal",
        "progress_boarrior": "Grande Javaleiro da Forja",
        "progress_book_elemental": "Tomo de Encorajamento e Lança Espiral",
        "progress_lavaarena_armor_hpextraheavy": "Grande Armadura Inabalável",
        "progress_lavaarena_armor_hpdamager": "Grande Armadura Denteada",
        "progress_lavaarena_armor_hprecharger": "Grande Armadura Sedosa",
        "progress_lavaarena_armor_hppetmastery": "Grande Armadura Sussurrante",
        "progress_lavaarena_heavyblade": "Lâmina do Ferreiro",
        "progress_lavaarena_firebomb": "Câmara de Magma Cristalizado",
        "progress_rhinodrill": "Rinocemanos",
        "progress_trails": "Javarila",
        "progress_lastsync": "Atualizado %1",
        "progress_lastsync_title": "Atualizado em %1",
        "leaderboards-title": "Melhores Equipes",
        "leaderboards-loading": "Obtendo equipes..",
        "leaderboards-noresults": "Nenhum dado obtido.. Tente novamente",
        "leaderboards-pos": "%1",
        "leaderboards-time": "Tempo",
        "leaderboards-seconds": "s",
        "leaderboards-deaths": "Mortes",
        "leaderboards-showmore": "Mostrar Mais",
        "leaderboards-showless": "Mostrar Menos",
        "date": {
            "parentLocale": 'en',
            "months": 'Janeiro_Fevereiro_Março_Abril_Maio_Junho_Julho_Agosto_Setembro_Outubro_Novembro_Dezembro'.split('_'),
            "longDateFormat": {
                LLL: 'D [de] MMMM [de] YYYY HH:mm',
            },
            "relativeTime": {
                "future": "daqui a %s",
                "past": "há %s atrás",
                "s": 'alguns segundos',
                "ss": '%d segundos',
                "m": "um minuto",
                "mm": "%d minutos",
                "h": "uma hora",
                "hh": "%d horas",
                "d": "um dia",
                "dd": "%d dias",
                "M": "um mês",
                "MM": "%d meses",
                "y": "um ano",
                "yy": "%d anos"
            },
            "ordinal": function(number) {
                return number + "º";
            }
        },
        "localization-credits": "Autores das Traduções",
        "localization-help": "Quer ajudar?",
        "localization-helptext": "Quer adicionar o seu idioma? Envie um pull request em %1."
    },
    "Srpski": {
        "author": "Serbian by <a href='https://steamcommunity.com/id/rammbagrobar/'>rammba</a> and <a href='https://steamcommunity.com/id/Romanizat'>romanizat</a>",
        "locale": "sr",
        "progress_communityunlocks": "Zajednica je otključala",
        "progress_bar_title": "Progres: %1%",
        "progress_locked": "Zaključano",
        "progress_beetletaur": "Vatreni Svinjaklop",
        "progress_boarrior": "Veliki Forge Veparatnik",
        "progress_book_elemental": "Tom prizivanja i spiralnog koplja",
        "progress_lavaarena_armor_hpextraheavy": "Veliki istrajni oklop",
        "progress_lavaarena_armor_hpdamager": "Veliki zupčasti oklop",
        "progress_lavaarena_armor_hprecharger": "Veliki svileni oklop",
        "progress_lavaarena_armor_hppetmastery": "Veliki šaputajući oklop",
        "progress_lavaarena_heavyblade": "Kovačeva Oštrica",
        "progress_lavaarena_firebomb": "Kristalizovana odaja magme",
        "progress_rhinodrill": "Pesnicarog",
        "progress_trails": "Veparila",
        "progress_lastsync": "Poslednji put ažurirano %1",
        "progress_lastsync_title": "Poslednji put ažurirano %1",
        "leaderboards-title": "Najbolji timovi",
        "leaderboards-loading": "Učitavanje još timova...",
        "leaderboards-noresults": "Nema rezultata.. Pokušajte kasnije",
        "leaderboards-pos": "%1",
        "leaderboards-time": "Vreme",
        "leaderboards-seconds": "s",
        "leaderboards-deaths": "Broj smrti",
        "leaderboards-showmore": "Prikaži više",
        "leaderboards-showless": "Prikaži manje",
        "date": {
            "parentLocale": 'en',
            "months": 'Januara_Februara_Marta_Aprila_Maja_Juna_Jula_Avgusta_Septembra_Oktobra_Novembra_Decembra'.split('_'),
            "longDateFormat": {
				LLL: 'D[.]  MMMM  YYYY[. u]  HH:mm'

            },
            "relativeTime": {
                "future": "za %s",
                "past": "pre %s",
                "s": 'par sekundi',
                "ss": '%d sekundi',
                "m": "jednog minuta",
                "mm": "%d minuta",
                "h": "jednog sata",
                "hh": "%d sati",
                "d": "jednog dana",
                "dd": "%d dana",
                "M": "jednog meseca",
                "MM": "%d meseci",
                "y": "jedne godine",
                "yy": "%d godina"
            },
            "ordinal": function(number) {
                return number + ".";
            }
        },
        "localization-credits": "Zasluge lokalizacija",
        "localization-help": "Da li želiš da pomogneš?",
        "localization-helptext": "Želiš li dodati svoj jezik? Podnesi zahtev na %1."
	},
    "Svenska": {
        "author": "Svensk översättning av <a href='https://forums.kleientertainment.com/profile/912865-captain_rage/'>Captain Rage</a>",
        "locale": "sv",
        "progress_communityunlocks": "Gemensamt upplåsta mål",
        "progress_bar_title": "Förlopp: %1%",
        "progress_locked": "Låst",
        "progress_beetletaur": "Infernaliska cyklopsvinet",
        "progress_boarrior": "Smedjans storkrigare",
        "progress_book_elemental": "Tillkallelsens lunta & Spiraliska spjutet",
        "progress_lavaarena_armor_hpextraheavy": "Ståndaktiga storartade rustningen",
        "progress_lavaarena_armor_hpdamager": "Naggade storartade rustningen",
        "progress_lavaarena_armor_hprecharger": "Silkeslena storartade rustningen",
        "progress_lavaarena_armor_hppetmastery": "Viskande storartade rustningen",
        "progress_lavaarena_heavyblade": "Smedens egg",
        "progress_lavaarena_firebomb": "Kristalliserad magmakammare",
        "progress_rhinodrill": "Noshornsnavare",
        "progress_trails": "Grisilla",
        "progress_lastsync": "Senast uppdaterad %1",
        "progress_lastsync_title": "Senast uppdaterad den %1",
        "leaderboards-title": "Bästa lagen",
        "leaderboards-loading": "Laddar de bästa lagen..",
        "leaderboards-noresults": "Inga resultat funna.. Försök igen senare",
        "leaderboards-pos": "%1",
        "leaderboards-time": "Tid",
        "leaderboards-seconds": "s",
        "leaderboards-deaths": "Förluster",
        "leaderboards-showmore": "Visa fler",
        "leaderboards-showless": "Visa färre",
        "date": {
            "parentLocale": 'en',
            "months": 'Januari_Februari_Mars_April_Maj_Juni_Juli_Augusti_September_Oktober_November_December'.split('_'),
            "longDateFormat": {
                LLL: 'MMMM D, YYYY h:mm A',
            },
            "relativeTime": {
                "future": "om %s",
                "past": "%s sedan",
                "s": 'några sekunder',
                "ss": '%d sekunder',
                "m": "en minut",
                "mm": "%d minuter",
                "h": "en timme",
                "hh": "%d timmar",
                "d": "en dag",
                "dd": "%d dagar",
                "M": "en månad",
                "MM": "%d månader",
                "y": "ett år",
                "yy": "%d år"
            },
            "ordinal": function(number) {
                var b = number % 10,
                    output = (~~(number % 100 / 10) === 1) ? 'e' :
                    (b === 1) ? 'a' :
                    (b === 2) ? 'a' :
                    (b === 3) ? 'e' : 'e';
                return number + "<span class='ordinal'>" + output + "</span>";
            }
        },
        "localization-credits": "Lokaliseringsmedverkande",
        "localization-help": "Vill du hjälpa till?",
        "localization-helptext": "Vill du lägga till ditt eget språk? Gör en inkluderingsförfrågan på %1."
    },
    "Türkçe": {
        "author": "Türkçe by <a href='https://forums.kleientertainment.com/profile/478350-atagunz/'>Ata</a>", //hey mom!
        "locale": "tr-TR",
        "progress_communityunlocks": "Topluluk Başarıları",
        "progress_bar_title": "İlerleme: %1%",
        "progress_locked": "Kilitli",
        "progress_beetletaur": "Infernal Swineclops", //TODO I need to see what this is before making up a fitting wordplay
        "progress_boarrior": "Ulu Demirhane Savaşdomuzu",
        "progress_book_elemental": "Atıl Kurt Yazıtı ve Kıvrak Mızrak",
        "progress_lavaarena_armor_hpextraheavy": "Sarsılmaz Ulu Zırh",
        "progress_lavaarena_armor_hpdamager": "Dişli Ulu Zırh", //?
        "progress_lavaarena_armor_hprecharger": "İpeksi Ulu Zırh",
        "progress_lavaarena_armor_hppetmastery": "Fısıldayan Ulu Zırh",
        "progress_lavaarena_heavyblade": "Demirci Bıçağı",
        "progress_lavaarena_firebomb": "Kristal Mağma Odası",
        "progress_rhinodrill": "Gergindan Biraderler", //TODO I need to see what this is to verify that the wordplay is fitting
        "progress_trails": "Yabangorili",
        "progress_lastsync": "Son güncelleme %1",
        "progress_lastsync_title": "En son %1 tarihinde güncellendi",
        "leaderboards-title": "En İyi Takımlar",
        "leaderboards-loading": "En iyi takımlar yükleniyor..",
        "leaderboards-noresults": "Hiç sonuç yok.. Daha sonra tekrar deneyin",
        "leaderboards-pos": "%1",
        "leaderboards-time": "Süre",
        "leaderboards-seconds": "s",
        "leaderboards-deaths": "Ölümler",
        "leaderboards-showmore": "Daha Fazla Göster",
        "leaderboards-showless": "Daha Az Göster",
        "date": {
            "parentLocale": 'en',
            "months": 'Ocak_Şubat_Mart_Nisan_Mayıs_Haziran_Temmuz_Auğustos_Eylül_Ekim_Kasım_Aralık'.split('_'),
            "longDateFormat": {
                LLL: 'D MMMM, YYYY HH:mm',
            },
            "relativeTime": {
                "future": "%s içinde",
                "past": "%s önce",
                "s": 'birkaç saniye',
                "ss": '%d saniye',
                "m": "bir dakika",
                "mm": "%d dakika",
                "h": "bir saat",
                "hh": "%d saat",
                "d": "bir gün",
                "dd": "%d gün",
                "M": "bir ay",
                "MM": "%d ay",
                "y": "bir yıl",
                "yy": "%d yıl"
            },
            "ordinal": function(number) {
                var b = number % 10,
                    output = (~~(number % 100 / 10) === 1) ? '.' :
                    (b === 1) ? '<span class="ordinal">\'inci</span>' :
                    (b === 2) ? '<span class="ordinal">\'nci</span>' :
                    (b === 3) ? '<span class="ordinal">\'üncü</span>' : '.';
                return number + output;
            }
        },
        "localization-credits": "Çeviri Ekipleri",
        "localization-help": "Yardım etmek ister misin?",
        "localization-helptext": "Kendi dilini eklemek için %1'dan pull request at."
    },
    "中文": {
        "author": "中文由 <a href='https://klei.com/'>Klei提供</a>",
        "locale": "cn",
        "progress_communityunlocks": "全员解锁进度",
        "progress_bar_title": "进度: %1%",
        "progress_locked": "未解锁",
        "progress_beetletaur": "地狱野猪",
        "progress_boarrior": "大熔炉猪战士",
        "progress_book_elemental": "召唤命令古典 & 螺旋矛",
        "progress_lavaarena_armor_hpextraheavy": "坚固的大盔甲",
        "progress_lavaarena_armor_hpdamager": "锯齿状大盔甲",
        "progress_lavaarena_armor_hprecharger": "丝绸大盔甲",
        "progress_lavaarena_armor_hppetmastery": "耳语大盔甲",
        "progress_lavaarena_heavyblade": "铁匠利锋",
        "progress_lavaarena_firebomb": "结晶岩浆室",
        "progress_rhinodrill": "钻犀兄弟",
        "progress_trails": "猪猩",
        "progress_lastsync": "最近更新 %1",
        "progress_lastsync_title": "最近更新于 %1",
        "leaderboards-title": "最佳队伍",
        "leaderboards-loading": "正在加载最佳队伍..",
        "leaderboards-noresults": "未能获得结果.. 请稍候再试",
        "leaderboards-pos": "%1",
        "leaderboards-time": "时间",
        "leaderboards-seconds": "秒",
        "leaderboards-deaths": "死亡",
        "leaderboards-showmore": "显示更多",
        "leaderboards-showless": "收起",
        "date": {
            "parentLocale": 'en',
            "months": '一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月'.split('_'),
            "longDateFormat": {
                LLL: 'YYYY年M月D日Ah点mm分',
            },
            "relativeTime": {
                future: '%s内',
                past: '%s前',
                s: '几秒',
                ss: '%d 秒',
                m: '1 分钟',
                mm: '%d 分钟',
                h: '1 小时',
                hh: '%d 小时',
                d: '1 天',
                dd: '%d 天',
                M: '1 个月',
                MM: '%d 个月',
                y: '1 年',
                yy: '%d 年'
            },
            "ordinal": function(number, period) {
                switch (period) {
                    case 'd':
                    case 'D':
                    case 'DDD':
                        return number + '日';
                    case 'M':
                        return number + '月';
                    case 'w':
                    case 'W':
                        return number + '周';
                    default:
                        return number;
                }
            },
        },
        "localization-credits": "本地化人员",
        "localization-help": "需要帮助吗？",
        "localization-helptext": "想要添加您自己的语言吗？ 只需要提交一份申请 %1."
    },
}

function LocalizeSetup() {
    // Add language selector
    var languageContainer = document.createElement("div");
    $(languageContainer).attr("id", "language");
    $(languageContainer).appendTo($("body"));

    var languageSelect = document.createElement("select");
    $(languageSelect).attr("class", "language-select");
    $(languageSelect).appendTo($(languageContainer));
    for (var language in loc_strings) {
        var languageOption = document.createElement("option");
        $(languageOption).attr("val", language);
        $(languageOption).text(language);
        $(languageOption).appendTo($(languageSelect));
    }

    // Show localization footer
    LocalizeSetupFooter();

    // Look for a language cookie
    var language = LocalizeGetCookie("language");
    if (language != null && loc_strings[language] != null) {
        // Use cookie's language
        LocalizeSetLanguage(language);
    } else {
        // Use default language
        LocalizeSetLanguage(loc_selected_language);
    }

    // Select the corresponding language on the selector
    $(languageSelect).val(language);

    // Setup language selector listener
    $(languageSelect).on('change', function() {
        LocalizeSetLanguage(this.value);
    });

}

(function() {
    LocalizeSetup();
})();

function UpdateLocalization(parent) {
    var parent = parent || "body";

    // Update credits hover on language selector
    $("#language").attr("title", (LocalizeString("author") || loc_strings["English"]["author"]).replace(/<\/?.+?>/ig, ''));

    // Try and update the locale on the Moment library
    if (typeof moment === 'function') {
        var locale = LocalizeString("locale") || "en";
        moment.locale(locale, LocalizeString("date"));
    }

    // Update translatable text elements
    var elements = $(parent).find("[i18n-text]");
    for (var i = 0; i < elements.length; i++) {
        var key = $(elements[i]).attr("i18n-text");
        var arg = $(elements[i]).attr("i18n-text-argument");
        var text = LocalizeString(key);
        text = LocalizeArguments(text, arg);
        $(elements[i]).html(text);
    }

    // Update translatable title elements
    var elements = $(parent).find("[i18n-title]");
    for (var i = 0; i < elements.length; i++) {
        var key = $(elements[i]).attr("i18n-title");
        var arg = $(elements[i]).attr("i18n-title-argument");
        var title = LocalizeString(key);
        title = LocalizeArguments(title, arg);
        $(elements[i]).attr("title", title);
    }
}

function LocalizeArguments(text, arg) {
    if (arg) {
        if (text.indexOf('%1') != -1) {
            // Check if this argument is an unix date that must be formatted

            // Relative formatting
            if (arg.indexOf('%rd') != -1) {
                var date = arg.substring(arg.indexOf('%rd') + 3);
                date = date.substring(0, date.indexOf(' ') != -1 || undefined);
                arg = moment.unix(date).fromNow();
            }

            // Short precise formatting
            if (arg.indexOf('%lll') != -1) {
                var date = arg.substring(arg.indexOf('%lll') + 4);
                date = date.substring(0, date.indexOf(' ') != -1 || undefined);
                arg = moment.unix(date).format("LLL");
            }

            // Ordinal formatting
            if (arg.indexOf('%o') != -1) {
                var numberText = arg.substring(arg.indexOf('%o') + 2);
                numberText = numberText.substring(0, numberText.indexOf(' ') != -1 || undefined);
                var number = parseInt(numberText);
                arg = loc_strings[loc_selected_language]["date"]["ordinal"](number) || arg;
            }

            text = text.replace('%1', arg);
        }
    }
    return text;
}

function LocalizeSetLanguage(languageKey) {
    loc_selected_language = languageKey;

    UpdateLocalization();

    // Set a cookie
    LocalizeSetCookie("language", loc_selected_language, 6);
}

function LocalizeSetCookie(cookieName, cookieValue, expirationDays) {
    var d = new Date();
    d.setTime(d.getTime() + (expirationDays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toUTCString();
    document.cookie = cookieName + "=" + cookieValue + ";" + expires + ";path=/";
}

function LocalizeGetCookie(cookieName) {
    var name = cookieName + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function LocalizeString(key) {
    return loc_strings[loc_selected_language][key] ||
        loc_strings["English"][key] || "Invalid String";
}

function LocalizeSetupFooter() {
    var footerContainer = document.createElement("div");
    $(footerContainer).attr("class", "localization-footer");
    $(footerContainer).appendTo($("body"));

    var footerLeft = document.createElement("div");
    $(footerLeft).attr("class", "localization-credits");
    $(footerLeft).appendTo($(footerContainer));

    var footerRight = document.createElement("div");
    $(footerRight).attr("class", "localization-help");
    $(footerRight).appendTo($(footerContainer));

    $(footerLeft).append("<h1 i18n-text='localization-credits'></h1>");
    var creditsHtml = "";
    for (var language in loc_strings) {
        creditsHtml += "<span>" + loc_strings[language].author + ". </span>";
    }
    $(footerLeft).append(creditsHtml);

    $(footerRight).append("<h1 i18n-text='localization-help'></h1>");
    $(footerRight).append("<p i18n-text='localization-helptext' i18n-text-argument='<a href=\"https://github.com/kleientertainment/Forge2018StatsPage\">github</a>'></p>");
}
