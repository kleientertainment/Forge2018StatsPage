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
    "Português": {
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

    // Show localization footer
    LocalizeSetupFooter();

}

(function() {
    LocalizeSetup();
})();

function UpdateLocalization(parent) {
    var parent = parent || "body";

    // Update credits hover on language selector
    $("#language").attr("title", LocalizeString("author") || loc_strings["English"]["author"]);

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
