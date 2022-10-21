import { Verb } from '../word.js';

export const VERBS = [
    new Verb('происходить', 'passieren', 'passiert', 'passierte', 'ist passiert'),
    new Verb('начинать', 'beginnen', 'beginnt', 'begann', 'hat begonnen'),
    new Verb('предлагать', 'bieten', 'bietet', 'bot', 'hat geboten'),
    new Verb('просить', 'bitten', 'bittet', 'bat', 'hat gebeten'),
    new Verb('оставаться', 'bleiben', 'bleibt', 'blieb', 'ist geblieben'),
    new Verb('ломать', 'brechen', 'bricht', 'brach', 'hat gebrochen'),
    new Verb('есть, кушать', 'essen', 'isst', 'aß', 'hat gegessen'),
    new Verb('ехать', 'fahren', 'fährt', 'fuhr', 'ist gefahren'),
    new Verb('падать', 'fallen', 'fällt', 'fiel', 'ist gefallen'),
    new Verb('ловить', 'fangen', 'fängt', 'fing', 'hat gefangen'),
    new Verb('находить', 'finden', 'findet', 'fand', 'hat gefunden'),
    new Verb('летать', 'fliegen', 'fliegt', 'flog', 'ist geflogen'),
    new Verb('давать', 'geben', 'gibt', 'gab', 'hat gegeben'),
    new Verb('ходить', 'gehen', 'geht', 'ging', 'ist gegangen'),
    new Verb('наслаждаться', 'genießen', 'genießt', 'genoss', 'hat genossen'),
    new Verb('выигрывать', 'gewinnen', 'gewinnt', 'gewann', 'hat gewonnen'),
    new Verb('держать', 'halten', 'hält', 'hielt', 'hat gehalten'),
    new Verb('висеть', 'hängen', 'hängt', 'hing', 'hat gehangen'),
    new Verb('называться', 'heißen', 'heißt', 'hieß', 'hat geheißen'),
    new Verb('помогать', 'helfen', 'hilft', 'half', 'hat geholfen'),
    new Verb('грузить', 'laden', 'lädt', 'lud', 'hat geladen'),
    new Verb('позволять', 'lassen', 'lässt', 'ließ', 'hat gelassen'),
    new Verb('бегать', 'laufen', 'läuft', 'lief', 'ist gelaufen'),
    new Verb('страдать', 'leiden', 'leidet', 'litt', 'hat gelitten'),
    new Verb('одалживать', 'leihen', 'leiht', 'lieh', 'hat geliehen'),
    new Verb('читать', 'lesen', 'liest', 'las', 'hat gelesen'),
    new Verb('лежать', 'liegen', 'liegt', 'lag', 'hat gelegen'),
    new Verb('врать', 'lügen', 'lügt', 'log', 'hat gelogen'),
    new Verb('брать', 'nehmen', 'nimmt', 'nahm', 'hat genommen'),
    new Verb('приходить', 'kommen', 'kommt', 'kam', 'ist gekommen'),
    new Verb('нюхать', 'riechen', 'riecht', 'roch', 'hat gerochen'),
    new Verb('звать, кричать', 'rufen', 'ruft', 'rief', 'hat gerufen'),
    new Verb('делить', 'scheiden', 'scheidet', 'schied', 'ist geschieden'),
    new Verb('спать', 'schlafen', 'schläft', 'schlief', 'hat geschlafen'),
    new Verb('бить', 'schlagen', 'schlägt', 'schlug', 'hat geschlagen'),
    new Verb('закрывать', 'schließen', 'schließt', 'schloss', 'geschlossen'),
    new Verb('писать', 'schreiben', 'schreibt', 'schrieb', 'hat geschrieben'),
    new Verb('плавать', 'schwimmen', 'schwimmt', 'schwamm', 'ist geschwommen'),
    new Verb('видеть, смотреть', 'sehen', 'sieht', 'sah', 'gesehen'),
    new Verb('петь', 'singen', 'singt', 'sang', 'hat gesungen'),
    new Verb('сидеть', 'sitzen', 'sitzt', 'saß', 'hat gesessen'),
    new Verb('говорить', 'sprechen', 'spricht', 'sprach', 'hat gesprochen'),
    new Verb('стоять', 'stehen', 'steht', 'stand', 'hat gestanden'),
    new Verb('воровать', 'stehlen', 'stiehlt', 'stahl', 'hat gestohlen'),
    new Verb('подниматься', 'steigen', 'steigt', 'stieg', 'ist gestiegen'),
    new Verb('спорить', 'streiten', 'streitet', 'stritt', 'hat gestritten'),
    new Verb('носить (одежду)', 'tragen', 'trägt', 'trug', 'hat getragen'),
    new Verb('встречать', 'treffen', 'trifft', 'traff', 'hat getroffen'),
    new Verb('гнать', 'treiben', 'treibt', 'trieb', 'ist getrieben'),
    new Verb('ступать', 'treten', 'tritt', 'trat', 'ist getreten'),
    new Verb('пить', 'trinken', 'trinkt', 'trank', 'hat getrunken'),
    new Verb('делать (что-то)', 'tun', 'tut', 'tat', 'hat getan'),
    new Verb('забывать', 'vergessen', 'vergisst', 'vergaß', 'hat vergessen'),
    new Verb('терять', 'verlieren', 'verliert', 'verlor', 'hat verloren'),
    new Verb('мыть', 'waschen', 'wäscht', 'wusch', 'hat gewaschen'),
    new Verb('бросать', 'werfen', 'wirft', 'warf', 'hat geworfen'),
    new Verb('знать, уметь', 'wissen', 'weiß', 'wusste', 'hat gewusst'),
    new Verb('тащить', 'ziehen', 'zieht', 'zog', 'hat gezogen'),
    new Verb('спрашивать', 'fragen', 'fragt', 'fragte', 'hat gefragt'),
    new Verb('отвечать', 'antworten', 'antwortet', 'antwortete', 'hat geantwortet'),
    new Verb('работать', 'arbeiten', 'arbeitet', 'arbeitete', 'hat gearbeitet'),
    new Verb('жить', 'wohnen', 'wohnt', 'wohnte', 'hat gewohnt'),
    new Verb('заниматься спортом', 'turnen', 'turnt', 'turnte', 'hat geturnt'),
    new Verb('играть', 'spielen', 'spielt', 'spielte', 'hat gespielt'),
    new Verb('рисовать, чертить', 'zeichnen', 'zeichnet', 'zeichnete', 'hat gezeichnet'),
    new Verb('рисовать красками', 'malen', 'malt', 'malte', 'hat gemalt'),
    new Verb('танцевать', 'tanzen', 'tanzt', 'tanzte', 'hat getanzt'),
    new Verb('слушать, слышать', 'hören', 'hört', 'hörte', 'hat gehört'),
    new Verb('учить', 'lernen', 'lernt', 'lernte', 'hat gelernt'),
    new Verb('готовить', 'kochen', 'kocht', 'kochte', 'hat gekocht'),
    new Verb('разговаривать, болтать', 'reden', 'redet', 'redete', 'hat geredet'),
    new Verb('посещать', 'besuchen', 'besucht', 'besuchte', 'hat besucht'),
    new Verb('искать', 'suchen', 'sucht', 'suchte', 'hat gesucht'),
    new Verb('верить', 'glauben', 'glaubt', 'glaubte', 'hat geglaubt'),
    new Verb('соответствовать', 'stimmen', 'stimmt', 'stimmte', 'hat gestimmt'),
    new Verb('мочь', 'können', 'kann', 'konnte', 'hat gekonnt'),
    new Verb('рассказывать', 'erzählen', 'erzählt', 'erzählte', 'hat erzählt'),
    new Verb('знать', 'kennen', 'kennt', 'kannte', 'hat gekannt'),
    new Verb('покупать', 'kaufen', 'kauft', 'kaufte', 'hat gekauft'),
    new Verb('печь, выпекать', 'backen', 'backt', 'backte', 'hat gebacken'),
    new Verb('менять', 'wechseln', 'wechselt', 'wechselte', 'ist gewechselt'),
    new Verb('заказывать', 'bestellen', 'bestellt', 'bestellte', 'hat bestellt'),
    new Verb('светить', 'scheinen', 'scheint', 'schien', 'hat geschienen'),
    new Verb('пометить крестиком', 'kreuzen', 'kreuzt', 'kreuzte', 'hat gekreuzt'),
    new Verb('делать', 'machen', 'macht', 'machte', 'hat gemacht'),
    new Verb('упорядочивать', 'ordnen', 'ordnet', 'ordnete', 'hat geordnet'),
    new Verb('сортировать', 'sortieren', 'sortiert', 'sortierte', 'hat sortiert'),
    new Verb('дополнять', 'ergänzen', 'ergänzt', 'ergänzte', 'hat ergänzt'),
    new Verb('называть по буквам', 'buchstabieren', 'buchstabiert', 'buchstabierte', 'hat buchstabiert'),
    new Verb('разрабатывать, развивать', 'entwickeln', 'entwickelt', 'entwickelte', 'hat entwickelt'),
    new Verb('жить, находиться', 'leben', 'lebt', 'lebte', 'hat gelebt'),
    new Verb('переводить (язык)', 'übersetzen', 'übersetzt', 'übersetzte', 'hat übersetzt'),
    new Verb('следить', 'achten', 'achtet', 'achtete', 'hat geachtet'),
    new Verb('соединять', 'verbinden', 'verbindet', 'verband', 'hat verbunden'),
    new Verb('связывать', 'binden', 'bindet', 'band', 'hat gebunden'),
    new Verb('подходить, быть в пору', 'passen', 'passt', 'passte', 'hat gepasst'),
    new Verb('изучать в ВУЗе', 'studieren', 'studiert', 'studierte', 'hat studiert'),
    new Verb('ставить, устанавливать, помещать', 'stellen', 'stellt', 'stellte', 'hat gestellt'),
    new Verb('платить, считать', 'zahlen', 'zahlt', 'zahlte', 'hat gezahlt'),
    new Verb('поздравлять', 'gratulieren', 'gratuliert', 'gratulierte', 'hat gratuliert'),
    new Verb('продавать', 'verkaufen', 'verkauft', 'verkaufte', 'hat verkauft'),
    new Verb('нуждаться', 'brauchen', 'braucht', 'brauchte', 'hat gebraucht'),
    new Verb('открывать', 'öffnen', 'öffnet', 'öffnete', 'hat geöffnet'),
    new Verb('понимать', 'verstehen', 'versteht', 'verstand', 'hat verstanden'),
    new Verb('ждать', 'warten', 'wartet', 'wartete', 'hat gewartet'),
    new Verb('увольняться', 'kündigen', 'kündigt', 'kündigte', 'hat gekündigt'),
    new Verb('дождить', 'regnen', 'regnet', 'regnete', 'hat geregnet'),
    new Verb('снежить', 'schneien', 'schneit', 'schneite', 'hat geschneit'),
    new Verb('записывать', 'notieren', 'notiert', 'notierte', 'hat notiert'),
    new Verb('сравнивать', 'vergleichen', 'vergleicht', 'verglich', 'hat verglichen'),
    new Verb('представлять', 'stellen vor', 'stellt vor', 'stellte vor', 'hat vorgestellt'),
    new Verb('отрицать', 'verneinen', 'verneint', 'verneinte', 'hat verneint'),
    new Verb('вести (передачу)', 'moderieren', 'moderiert', 'moderierte', 'hat moderiert'),
    new Verb('кормить', 'füttern', 'füttert', 'fütterte', 'hat gefüttert'),
    new Verb('лаять', 'bellen', 'bellt', 'bellte', 'hat gebellt'),
    new Verb('думать, полагать', 'denken', 'denkt', 'dachte', 'hat gedacht'),
    new Verb('получать', 'bekommen', 'bekommt', 'bekam', 'hat bekommen'),
    new Verb('называть', 'nennen', 'nennt', 'nannte', 'hat genannt'),
    new Verb('хотеть, желать', 'wollen', 'will', 'wollte', 'hat gewollt'),
    new Verb('звонить (кому-то)', 'rufen an', 'ruft an', 'rief an', 'hat angerufen'),
    new Verb('торговать', 'handeln', 'handelt', 'handelte', 'hat gehandelt'),
    new Verb('рыться, выбирать (сленг)', 'stöbern', 'stöbert', 'stöberte', 'hat gestöbert'),
    new Verb('строить', 'bauen', 'baut', 'baute', 'hat gebaut'),
    new Verb('приносить', 'bringen', 'bringt', 'brachte', 'hat gebracht'),
    new Verb('мыть, убирать', 'putzen', 'putzt', 'putzte', 'hat geputzt'),
    new Verb('договариваться', 'sich verabreden', 'verabredet', 'verabredete', 'hat verabredet'),
    new Verb('просыпаться', 'stehen auf', 'steht auf', 'stand auf', 'hat aufgestanden'),
    new Verb('заканчивать', 'beenden', 'beendet', 'beendete', 'hat beendet'),
    new Verb('завтракать', 'frühstücken', 'frühstückt', 'frühstückte', 'hat gefrühstückt'),
    new Verb('бегать трусцой', 'joggen', 'joggt', 'joggte', 'hat gejoggt'),
    new Verb('гулять', 'spazieren', 'spaziert', 'spazierte', 'ist spaziert'),
    new Verb('приглашать', 'laden ein', 'lädt ein', 'lud ein', 'hat eingeladen'),
    new Verb('любить, предпочитать', 'mögen', 'mag', 'mochte', 'hat gemocht'),
    new Verb('бить, стучать', 'klopfen', 'klopft', 'klopfte', 'hat geklopft'),
    new Verb('выключать', 'schalten', 'schaltet', 'schaltete', 'hat geschaltet'),
    new Verb('смеяться', 'lachen', 'lacht', 'lachte', 'hat gelacht'),
    new Verb('прибираться', 'räumen', 'räumt', 'räumte', 'hat geräumt'),
    new Verb('показывать', 'zeigen', 'zeigt', 'zeigte', 'hat gezeigt'),
    new Verb('смотреть (спектакль)', 'schauen', 'schaut', 'schaute', 'hat geschaut'),
    new Verb('отправлять, посылать', 'schicken', 'schickt', 'schickte', 'hat geschickt'),
    new Verb('выбирать', 'wählen', 'wählt', 'wählte', 'hat gewählt'),
    new Verb('мечтать', 'träumen', 'träumt', 'träumte', 'hat geträumt'),
    new Verb('надевать, натягивать', 'ziehen an', 'zieht an', 'zog an', 'hat angezogen'),
    new Verb('чувствовать', 'empfinden', 'empfindet', 'empfand', 'hat empfunden'),
    new Verb('улыбнуться (кому-то)', 'strahlen an', 'strahlt an', 'strahlte an', 'hat angestrahlt'),
    new Verb('начинать (что-то)', 'fangen an', 'fängt an', 'fing an', 'hat angefangen'),
    new Verb('замечать, отмечать', 'merken', 'merkt', 'merkte', 'hat gemerkt'),
    new Verb('поворачивать, крутить', 'drehen', 'dreht', 'drehte', 'hat gedreht'),
    new Verb('желать (чего-то)', 'wünschen', 'wünscht', 'wünschte', 'hat gewünscht'),
    new Verb('резать', 'schneiden', 'schneidet', 'schnitt', 'hat geschnitten'),
    new Verb('думать, соображать', 'überlegen', 'überlegt', 'überlegte', 'hat überlegt'),
    new Verb('мямлить, бурчать', 'murmeln', 'murmelt', 'murmelte', 'hat gemurmelt'),
    new Verb('пересаживаться (транспорт)', 'steigen um', 'steigt um', 'stieg um', 'hat umgestiegen'),
    new Verb('садиться (транспорт)', 'steigen ein', 'steigt ein', 'stieg ein', 'hat eingestiegen'),
    new Verb('выходить (транспорт)', 'steigen aus', 'steigt aus', 'stieg aus', 'hat ausgestiegen'),
    new Verb('проходить, пересекать', 'überqueren', 'überquert', 'überquerte', 'hat überquert'),
    new Verb('принадлежать', 'gehören', 'gehört', 'gehörte', 'hat gehört'),
    new Verb('иметь в виду, подразумевать', 'meinen', 'meint', 'meinte', 'hat gemeint'),
    new Verb('звенеть, звонить', 'klingeln', 'klingelt', 'klingelte', 'hat geklingelt'),
    new Verb('упаковывать', 'verpacken', 'verpackt', 'verpackte', 'hat verpackt'),
    new Verb('пробовать, пытаться', 'versuchen', 'versucht', 'versuchte', 'hat versucht'),
    new Verb('взбираться', 'klettern', 'klettert', 'kletterte', 'hat geklettert'),
    new Verb('приниматься', 'unternehmen', 'unternimmt', 'unternahm', 'hat unternommen'),
    new Verb('прибывать, приезжать', 'kommen an', 'kommt an', 'kam an', 'ist angekommen'),
    new Verb('смотреть телевизор', 'sehen fern', 'sieht fern', 'sah fern', 'hat ferngesehen'),
    new Verb('отезжать, отправляться', 'fahren ab', 'fährt ab', 'fuhr ab', 'ist abgefahren'),
    new Verb('прощаться', 'sich verabschieden', 'verabschiedet', 'verabschiedete', 'hat verabschiedet'),
    new Verb('использовать, пользоваться', 'benutzen', 'benutzt', 'benutzte', 'hat benutzt'),
    new Verb('забирать', 'holen ab', 'holt ab', 'holte ab', 'hat abgeholt'),
    new Verb('подготавливать, приготавливать', 'bereiten vor', 'bereitet vor', 'bereitete vor', 'hat vorbereitet'),
    new Verb('переезжать', 'ziehen um', 'zieht um', 'zog um', 'ist umgezogen'),
    new Verb('таскать', 'schleppen', 'schleppt', 'schleppte', 'hat geschleppt'),
    new Verb('тонуть', 'ertrinken', 'ertrinkt', 'ertrank', 'ist ertrunken'),
    new Verb('распространять', 'verbreiten', 'verbreitet', 'verbreitete', 'hat verbreitet'),
    new Verb('поворачивать, сворачивать', 'biegen ab', 'biegt ab', 'bog ab', 'ist abgebogen'),

    // new Verb('тонуть', 'ertrinken', 'ertrinkt', 'ertrank', 'ist ertrunken'),
    // new Verb('тонуть', 'ertrinken', 'ertrinkt', 'ertrank', 'ist ertrunken'),
    // new Verb('тонуть', 'ertrinken', 'ertrinkt', 'ertrank', 'ist ertrunken'),
    // new Verb('тонуть', 'ertrinken', 'ertrinkt', 'ertrank', 'ist ertrunken'),
    // new Verb('тонуть', 'ertrinken', 'ertrinkt', 'ertrank', 'ist ertrunken'),
    // new Verb('тонуть', 'ertrinken', 'ertrinkt', 'ertrank', 'ist ertrunken'),
    // new Verb('тонуть', 'ertrinken', 'ertrinkt', 'ertrank', 'ist ertrunken'),
    // new Verb('тонуть', 'ertrinken', 'ertrinkt', 'ertrank', 'ist ertrunken'),
    // new Verb('тонуть', 'ertrinken', 'ertrinkt', 'ertrank', 'ist ertrunken'),
    // new Verb('тонуть', 'ertrinken', 'ertrinkt', 'ertrank', 'ist ertrunken'),
    // new Verb('тонуть', 'ertrinken', 'ertrinkt', 'ertrank', 'ist ertrunken'),
    // new Verb('тонуть', 'ertrinken', 'ertrinkt', 'ertrank', 'ist ertrunken'),

];
