import { Noun } from '../word.js';

export const NOUNS = [
    new Noun('яблоко', 'der', 'Apfel', 'Äpfel'),
    new Noun('понедельник', 'der', 'Montag', 'Montage'),
    new Noun('среда', 'der', 'Mittwoch', 'Mittwoche'),
    new Noun('ветер', 'der', 'Wind', 'Winde'),
    new Noun('страна', 'das', 'Land', 'Länder'),
    new Noun('Швейцария', 'die', 'Schweiz', null, true, false),
    new Noun('Турция', 'die', 'Türkei', null, true, false),
    new Noun('Иран', 'der', 'Iran', null, true, false),
    new Noun('Австрия', null, 'Österreich', null, true, false, true),
    new Noun('Германия', null, 'Deutschland', null, true, false, true),
    new Noun('Испания', null, 'Spanien', null, true, false, true),
    new Noun('Италия', null, 'Italien', null, true, false, true),
    new Noun('Португалия', null, 'Portugal', null, true, false, true),
    new Noun('Франция', null, 'Frankreich', null, true, false, true),
    new Noun('Польша', null, 'Polen', null, true, false, true),
    new Noun('Бразилия', null, 'Brasilien', null, true, false, true),
    new Noun('задание', 'die', 'Aufgabe', 'Aufgaben'),
    new Noun('разговор', 'das', 'Gespräch', 'Gespräche'),
    new Noun('федеральный канцлер', 'der', 'Bundeskanzler', 'Bundeskanzler'),
    new Noun('федеральный канцлер (женский род)', 'die', 'Bundeskanzlerin', 'Bundeskanzlerinnen'),
    new Noun('профессия', 'der', 'Beruf', 'Berufe'),
    new Noun('учитель', 'der', 'Lehrer', 'Lehrer'),
    new Noun('учительница', 'die', 'Lehrerin', 'Lehrerinnen'),
    new Noun('страница', 'die', 'Seite', 'Seiten'),
    new Noun('предложение', 'der', 'Satz', 'Sätze'),
    new Noun('мелодия', 'die', 'Melodie', 'Melodien'),
    new Noun('интонация', 'die', 'Satzmelodie', 'Satzmelodien'),
    new Noun('вопрос', 'die', 'Frage', 'Fragen'),
    new Noun('встречный вопрос', 'die', 'Rückfrage', 'Rückfragen'),
    new Noun('утро', 'der', 'Morgen', 'Morgen'),
    new Noun('день', 'der', 'Tag', 'Tage'),
    new Noun('вечер', 'der', 'Abend', 'Abende'),
    new Noun('ночь', 'die', 'Nacht', 'Nächte'),
    new Noun('госпожа', 'die', 'Frau', 'Frauen'),
    new Noun('господин', 'der', 'Herr', 'Herren'),
    new Noun('имя', 'der', 'Name', 'Namen'),
    new Noun('имя (первое)', 'der', 'Vorname', 'Vornamen'),
    new Noun('фамилия', 'der', 'Familienname', 'Familiennamen'),
    new Noun('журналистка', 'die', 'Journalistin', 'Journalistinnen'),
    new Noun('инженер', 'der', 'Ingenieur', 'Ingenieure'),
    new Noun('механик-электроник', 'der', 'Mechatroniker', 'Mechatroniker'),
    new Noun('актер', 'der', 'Schauspieler', 'Schauspieler'),
    new Noun('картина', 'das', 'Bild', 'Bilder'),
    new Noun('образование', 'die', 'Bildung', null, true),
    new Noun('профессиональное образование', 'die', 'Ausbildung', null, true),
    new Noun('практика, стажировка', 'das', 'Praktikum', 'Praktika'),
    new Noun('разработчик', 'der', 'Entwickler', 'Entwickler'),
    new Noun('свадьба', 'die', 'Hochzeit', 'Hochzeiten'),
    new Noun('архитекторша', 'die', 'Architektin', 'Architektinnen'),
    new Noun('продавец', 'der', 'Verkäufer', 'Verkäufer'),
    new Noun('секретарша', 'die', 'Sekretärin', 'Sekretärinnen'),
    new Noun('докторша', 'die', 'Ärztin', 'Ärztinnen'),
    new Noun('журналист', 'der', 'Journalist', 'Journalisten'),
    new Noun('архитектор', 'der', 'Architekt', 'Architekten'),
    new Noun('студент', 'der', 'Student', 'Studenten'),
    new Noun('секретарь', 'der', 'Sekretär', 'Sekretäre'),
    new Noun('парикмахерша', 'die', 'Friseurin', 'Friseurinnen'),
    new Noun('работа, занятие', 'der', 'Job', 'Jobs'),
    new Noun('официантка', 'die', 'Kellnerin', 'Kellnerinnen'),
    new Noun('ребенок', 'das', 'Kind', 'Kinder'),
    new Noun('год', 'das', 'Jahr', 'Jahre'),
    new Noun('площадка, место, место работы, должность', 'die', 'Stelle', 'Stellen'),
    new Noun('школа', 'die', 'Schule', 'Schulen'),
    new Noun('университет', 'die', 'Universität', 'Universitäten'),
    new Noun('место проживания', 'der', 'Wohnort', 'Wohnorte'),
    new Noun('слог', 'die', 'Silbe', 'Silben'),
    new Noun('слово', 'das', 'Wort', 'Wörter'),
    new Noun('работодатель', 'der', 'Arbeitgeber', 'Arbeitgeber'),
    new Noun('номер телефона', 'die', 'Telefonnummer', 'Telefonnummern'),
    new Noun('родители', 'die', null, 'Eltern', false, true),
    new Noun('семейное положение', 'der', 'Familienstand', null, true),
    new Noun('возраст', 'das', 'Alter', null, true),
    new Noun('место происхождения', 'die', 'Herkunft', 'Herkünfte'),
    new Noun('краткий профиль, личное дело', 'der', 'Steckbrief', 'Steckbriefe'),
    new Noun('медсестра (современно)', 'die', 'Krankenpflegerin', 'Krankenpflegerinnen'),
    new Noun('медбрат', 'der', 'Krankenpfleger', 'Krankenpfleger'),
    new Noun('медсестра', 'die', 'Krankenschwester', 'Krankenschwestern'),
    new Noun('отец', 'der', 'Vater', 'Väter'),
    new Noun('бабушка', 'die', 'Oma', 'Omas'),
    new Noun('мать', 'die', 'Mutter', 'Mütter'),
    new Noun('дедушка', 'der', 'Opa', 'Opas'),
    new Noun('высказывание', 'die', 'Aussage', 'Aussagen'),
    new Noun('сестра', 'die', 'Schwester', 'Schwestern'),
    new Noun('сын', 'der', 'Sohn', 'Söhne'),
    new Noun('дочь', 'die', 'Tochter', 'Töchter'),
    new Noun('супруг', 'der', 'Ehemann', 'Ehemänner'),
    new Noun('супруга', 'die', 'Ehefrau', 'Ehefrauen'),
    new Noun('внук', 'der', 'Enkel', 'Enkel'),
    new Noun('внучка', 'die', 'Enkelin', 'Enkelinnen'),
    new Noun('дед', 'der', 'Großvater', 'Großväter'),
    new Noun('бабушка (в общем)', 'die', 'Großmutter', 'Großmütter'),
    new Noun('загадка', 'das', 'Rätsel', 'Rätsel'),
    new Noun('пенсионер', 'der', 'Rentner', 'Rentner'),
    new Noun('пенсионерка', 'die', 'Rentnerin', 'Rentnerinnen'),
    new Noun('брат', 'der', 'Bruder', 'Brüder'),
    new Noun('невестка', 'die', 'Schwiegertochter', 'Schwiegertöchter'),
    new Noun('братья/сестры', 'die', null, 'Geschwister', false, true),
    new Noun('ошибка', 'der', 'Fehler', 'Fehler'),
    new Noun('банковский служащий (женский род)', 'die', 'Bankkauffrau', 'Bankkauffrauen'),
    new Noun('деревня', 'das', 'Dorf', 'Dörfe'),
    new Noun('город', 'die', 'Stadt', 'Städte'),
    new Noun('язык', 'die', 'Sprache', 'Sprachen'),
    new Noun('Весы', 'die', 'Waage', 'Waagen'),
    new Noun('знак зодиака', 'das', 'Sternzeichen', 'Sternzeichen'),
    new Noun('племянница', 'die', 'Nichte', 'Nichten'),
    new Noun('племянник', 'der', 'Neffe', 'Neffen'),
    new Noun('Овен', 'der', 'Widder', 'Widder'),
    new Noun('родной город', 'die', 'Heimatstadt', 'Heimatstädte'),
    new Noun('родина', 'die', 'Heimat', null, true),
    new Noun('коллега', 'der', 'Kollege', 'Kollegen'),
    new Noun('коллега (женский род)', 'die', 'Kollegin', 'Kolleginnen'),
    new Noun('партнер', 'der', 'Partner', 'Partner'),
    new Noun('партнерша', 'die', 'Partnerin', 'Partnerinnen'),
    new Noun('друг', 'der', 'Freund', 'Freunde'),
    new Noun('подруга', 'die', 'Freundin', 'Freundinnen'),
    new Noun('врач', 'der', 'Arzt', 'Ärzte'),
    new Noun('доска', 'die', 'Tafel', 'Tafeln'),
    new Noun('правило', 'die', 'Regel', 'Regeln'),
    new Noun('семья', 'die', 'Familie', 'Familien'),
    new Noun('приветствие', 'die', 'Begrüßung', 'Begrüßungen'),
    new Noun('прощание', 'der', 'Abschied', 'Abschiede'),
    new Noun('самооценка', 'die', 'Selbsteinschätzung', 'Selbsteinschätzungen'),
    new Noun('условие, состояние', 'das', 'Befinden', null, true),
    new Noun('художник', 'der', 'Maler', 'Maler'),
    new Noun('писатель', 'der', 'Schriftsteller', 'Schriftsteller'),
    new Noun('ведущий', 'der', 'Moderator', 'Moderators'),
    new Noun('столица', 'die', 'Hauptstadt', 'Hauptstädte'),
    new Noun('квалифицированный рабочий', 'der', 'Facharbeiter', 'Facharbeiter'),
    new Noun('облако', 'die', 'Wolke', 'Wolken'),
    new Noun('дождь', 'der', 'Regen', null, true),
    new Noun('снег', 'der', 'Schnee', null, true),
    new Noun('стол', 'der', 'Tisch', 'Tische'),
    new Noun('лампа', 'die', 'Lampe', 'Lampen'),
    new Noun('предложение, ассортимент', 'das', 'Angebot', 'Angebote'),
    new Noun('шкаф', 'der', 'Schrank', 'Schränke'),
    new Noun('ковер', 'der', 'Teppich', 'Teppiche'),
    new Noun('диван', 'die', 'Couch', 'Couchs'),
    new Noun('диван, софа', 'das', 'Sofa', 'Sofas'),
    new Noun('записка, заметка', 'die', 'Notiz', 'Notizen'),
    new Noun('цена', 'der', 'Preis', 'Preise'),
    new Noun('утка', 'die', 'Ente', 'Enten'),
    new Noun('каникулы', 'die', 'Ferien', null, true),
    new Noun('кресло', 'der', 'Sessel', 'Sessel'),
    new Noun('подарок', 'das', 'Geschenk', 'Geschenke'),
    new Noun('порядок, последовательность, очередность', 'die', 'Reihenfolge', 'Reihenfolgen'),
    new Noun('стул', 'der', 'Stuhl', 'Stühle'),
    new Noun('помощь', 'die', 'Hilfe', 'Hilfen'),
    new Noun('комната', 'das', 'Zimmer', 'Zimmer'),
    new Noun('стекло, стакан', 'das', 'Glas', 'Gläser'),
    new Noun('осень', 'der', 'Herbst', 'Herbste'),
    new Noun('лето', 'der', 'Sommer', 'Sommer'),
    new Noun('зима', 'der', 'Winter', 'Winter'),
    new Noun('весна', 'der', 'Frühling', 'Frühlinge'),
    new Noun('цвет', 'die', 'Farbe', 'Farben'),
    new Noun('ткань, материал', 'der', 'Stoff', 'Stoffe'),
    new Noun('очки', 'die', 'Brille', 'Brillen'),
    new Noun('глаз', 'das', 'Auge', 'Augen'),
    new Noun('буква', 'der', 'Buchstabe', 'Buchstaben'),
    new Noun('зажигалка', 'das', 'Feuerzeug', 'Feuerzeuge'),
    new Noun('огонь', 'das', 'Feuer', 'Feuer'),
    new Noun('карандаш', 'der', 'Bleistift', 'Bleistifte'),
    new Noun('авторучка', 'der', 'Kugelschreiber', 'Kugelschreiber'),
    new Noun('фотоаппарат', 'der', 'Fotoapparat', 'Fotoapparate'),
    new Noun('ключ', 'der', 'Schlüssel', 'Schlüssel'),
    new Noun('книга', 'das', 'Buch', 'Bücher'),
    new Noun('бутылка', 'die', 'Flasche', 'Flaschen'),
    new Noun('сумка', 'die', 'Tasche', 'Taschen'),
    new Noun('цепочка', 'die', 'Kette', 'Ketten'),
    new Noun('дерево (материал), древесина', 'das', 'Holz', 'Hölzer'),
    new Noun('бумага (материал)', 'das', 'Papier', 'Papiere'),
    new Noun('пластик (материал)', 'das', 'Plastik', 'Plastiks'),
    new Noun('металл (материал)', 'das', 'Metall', 'Metalle'),
    new Noun('зонт', 'der', 'Regenschirm', 'Regenschirme'),
    new Noun('собака', 'der', 'Hund', 'Hunde'),
    new Noun('количество', 'die', 'Menge', 'Mengen'),
    new Noun('деньги', 'das', 'Geld', null, true),
    new Noun('кошелек', 'die', 'Geldbörse', 'Geldbörsen'),
    new Noun('спичка', 'das', 'Streichholz', 'Streichhölzer'),
    new Noun('мыло', 'die', 'Seife', 'Seifen'),
    new Noun('часы (наручные)', 'die', 'Uhr', 'Uhren'),
    new Noun('бабочка', 'der', 'Schmetterling', 'Schmetterlinge'),
    new Noun('форма', 'die', 'Form', 'Formen'),
    new Noun('рама, рамка', 'der', 'Rahmen', 'Rahmen'),
    new Noun('тип', 'der', 'Typ', 'Typen'),
    new Noun('тетя', 'die', 'Tante', 'Tanten'),
    new Noun('дядя', 'der', 'Onkel', 'Onkel'),
    new Noun('объект', 'der', 'Gegenstand', 'Gegenstände'),
    new Noun('кольцо', 'der', 'Ring', 'Ringe'),
    new Noun('дата рождения', 'das', 'Geburtsdatum', 'Geburtsdaten'),
    new Noun('улица', 'die', 'Straße', 'Straßen'),
    new Noun('счет', 'die', 'Rechnung', 'Rechnungen'),
    new Noun('назначенная встреча', 'der', 'Termin', 'Termine'),
    new Noun('озеро, море', 'der', 'See', 'Seen'),
    new Noun('предлог', 'die', 'Präposition', 'Präpositionen'),
    new Noun('место, площадь', 'der', 'Platz', 'Plätze'),
    new Noun('союз', 'die', 'Konjunktion', 'Konjunktionen'),
    new Noun('местоимение', 'das', 'Pronomen', 'Pronomen'),
    new Noun('наречие', 'das', 'Adverb', 'Adverbien'),
    new Noun('существительное (длинно)', 'das', 'Substantiv', 'Substantive'),
    new Noun('прилагательное', 'das', 'Adjektiv', 'Adjektive'),
    new Noun('существительное', 'das', 'Nomen', 'Nomen'),
    new Noun('глагол', 'das', 'Verb', 'Verben'),
    new Noun('падеж', 'der', 'Fall', 'Fälle'),
    new Noun('вторичный продавец', 'der', 'Trödler', 'Trödler'),
    new Noun('король', 'der', 'König', 'Könige'),
    new Noun('шляпа', 'der', 'Hut', 'Hüte'),
    new Noun('рынок', 'der', 'Markt', 'Märkte'),
    new Noun('стройка', 'die', 'Baustelle', 'Baustellen'),
    new Noun('одежда', 'die', 'Kleidung', null, true),
    new Noun('товар', 'die', 'Ware', 'Waren'),
    new Noun('вход (плата за вход)', 'der', 'Eintritt', null, true),
    new Noun('комплимент', 'das', 'Kompliment', 'Komplimente'),
    new Noun('шахматы', 'der', 'Schach', 'Schachs'),
    new Noun('концерт', 'das', 'Konzert', 'Konzerten'),
    new Noun('хобби', 'das', 'Hobby', 'Hobbys'),
    new Noun('природа', 'die', 'Natur', 'Naturen'),
    new Noun('полет', 'der', 'Flug', 'Flüge'),
    new Noun('поход', 'der', 'Ausflug', 'Ausflüge'),
    new Noun('любимая книга', 'das', 'Lieblingsbuch', 'Lieblingsbücher'),
    new Noun('время', 'die', 'Zeit', 'Zeiten'),
    new Noun('автор', 'der', 'Autor', 'Autoren'),
    new Noun('отпуск', 'der', 'Urlaub', 'Urlaube'),
    new Noun('кинотеатр', 'das', 'Kino', 'Kinos'),
    new Noun('театр', 'das', 'Theater', 'Theater'),
    new Noun('музей', 'das', 'Museum', 'Museen'),
    new Noun('стадион', 'das', 'Stadium', 'Stadien'),
    new Noun('выставка', 'die', 'Ausstellung', 'Ausstellungen'),
    new Noun('дискотека', 'die', 'Disco', 'Discos'),
    new Noun('ванная', 'das', 'Bad', 'Bäder'),
    new Noun('охота, желание', 'die', 'Lust', 'Lüste'),
    new Noun('игра', 'das', 'Spiel', 'Spiele'),
    new Noun('полночь', 'die', 'Mitternacht', 'Mitternächte'),
    new Noun('нога (ступня)', 'der', 'Fuß', 'Füße'),
    new Noun('пауза', 'die', 'Pause', 'Pausen'),
    new Noun('конец', 'das', 'Ende', 'Enden'),
    new Noun('вторник', 'der', 'Dienstag', 'Dienstage'),
    new Noun('четверг', 'der', 'Donnerstag', 'Donnerstage'),
    new Noun('пятница', 'der', 'Freitag', 'Freitage'),
    new Noun('суббота', 'der', 'Samstag', 'Samstage'),
    new Noun('воскресенье', 'der', 'Sonntag', 'Sonntage'),
    new Noun('время суток', 'die', 'Tageszeit', 'Tageszeiten'),
    new Noun('первая половина дня', 'der', 'Vormittag', 'Vormittage'),
    new Noun('полдень', 'der', 'Mittag', 'Mittage'),
    new Noun('вторая половина дня', 'der', 'Nachmittag', 'Nachmittage'),
    new Noun('люди (people)', 'die', null, 'Leute', false, true),
    new Noun('бар', 'die', 'Kneipe', 'Kneipen'),
    new Noun('праздник', 'die', 'Feier', 'Feiern'),
    new Noun('голод', 'der', 'Hunger', null, true),
    new Noun('жажда', 'der', 'Durst', null, true),
    new Noun('пирог', 'der', 'Kuchen', 'Kuchen'),
    new Noun('картошка', 'die', 'Kartoffel', 'Kartoffeln'),
    new Noun('шоколад', 'die', 'Schokolade', 'Schokoladen'),
    new Noun('суп', 'die', 'Suppe', 'Suppen'),
    new Noun('чай', 'der', 'Tee', 'Tees'),
    new Noun('жареное мясо', 'der', 'Braten', 'Braten'),
    new Noun('хлеб', 'das', 'Brot', 'Brote'),
    new Noun('стена', 'die', 'Wand', 'Wände'),
    new Noun('табуретка', 'der', 'Hocker', 'Hocker'),
    new Noun('окно', 'das', 'Fenster', 'Fenster'),
    new Noun('пол, земля', 'der', 'Boden', 'Böden'),
    new Noun('рыба', 'der', 'Fisch', 'Fische'),
    new Noun('апельсин', 'die', 'Orange', 'Orangen'),
    new Noun('сливочное масло', 'die', 'Butter', null, true),
    new Noun('салат', 'der', 'Salat', 'Salate'),
    new Noun('помидор', 'die', 'Tomate', 'Tomaten'),
    new Noun('молоко', 'die', 'Milch', 'Milche'),
    new Noun('еда', 'das', 'Lebensmittel', 'Lebensmittel'),
    new Noun('сыр', 'der', 'Käse', 'Käse'),
    new Noun('яйцо', 'das', 'Ei', 'Eier'),
    new Noun('колбаса', 'die', 'Wurst', 'Würste'),
    new Noun('ветчина', 'der', 'Schinken', 'Schinken'),
    new Noun('овощи', 'das', 'Gemüse', null, true),
    new Noun('фрукты', 'das', 'Obst', null, true),
    new Noun('закуска', 'die', 'Vorspeise', 'Vorspeisen'),
    new Noun('главное блюдо', 'das', 'Hauptgericht', 'Hauptgerichte'),
    new Noun('десерт', 'das', 'Dessert', 'Desserts'),
    new Noun('напиток', 'das', 'Getränk', 'Getränke'),
    new Noun('меню (в ресторане)', 'die', 'Speisekarte', 'Speisekarten'),
    new Noun('дверь', 'die', 'Tür', 'Türen'),
    new Noun('страх', 'die', 'Angst', 'Ängste'),
    new Noun('кладовая', 'der', 'Vorratsraum', 'Vorratsräume'),
    new Noun('корабль', 'das', 'Schiff', 'Schiffe'),
    new Noun('свет', 'das', 'Licht', 'Lichter'),
    new Noun('животное', 'das', 'Tier', 'Tiere'),
    new Noun('история', 'die', 'Geschichte', 'Geschichten'),
    new Noun('стиральный порошок', 'das', 'Waschmittel', null, true),
    new Noun('чистящее средство', 'das', 'Reinigungsmittel', null, true),
    new Noun('личная гигиена', 'die', 'Körperpflege', null, true),
    new Noun('полка', 'das', 'Regal', 'Regalien'),
    new Noun('бумажник', 'die', 'Brieftasche', 'Brieftaschen'),
    new Noun('кошелек, портмоне', 'der', 'Geldbeutel', 'Geldbeutel'),
    new Noun('мелочь (деньги)', 'das', 'Kleingeld', null, true),
    new Noun('кредитная карта', 'die', 'Kreditkarte', 'Kreditkarten'),
    new Noun('чек', 'der', 'Scheck', 'Schecke'),
    new Noun('пластиковый пакет', 'die', 'Plastiktüte', 'Plastiktüten'),
    new Noun('мясо', 'das', 'Fleisch', null, true),
    new Noun('птица (мясо)', 'das', 'Geflügel', null, true),
    new Noun('молочный продукт', 'das', 'Milchprodukt', 'Milchprodukte'),
    new Noun('выпечка', 'die', 'Backware', 'Backwaren'),
    new Noun('кассирша', 'die', 'Kassiererin', 'Kassiererinnen'),
    new Noun('касса', 'die', 'Kasse', 'Kassen'),
    new Noun('магазинная тележка', 'der', 'Einkaufswagen', 'Einkaufswägen'),
    new Noun('стаканчик (упаковка)', 'die', 'Büchse', 'Büchsen'),
    new Noun('тюбик, трубка', 'die', 'Tube', 'Tuben'),
    new Noun('пакет', 'die', 'Tüte', 'Tüten'),
    new Noun('дилер, продавец', 'der', 'Händler', 'Händler'),
    new Noun('арбуз', 'die', 'Wassermelone', null, true),
    new Noun('виноград', 'die', 'Traube', 'Trauben'),
    new Noun('дыня', 'die', 'Honigmelone', null, true),
    new Noun('лимон', 'die', 'Zitrone', 'Zitronen'),
    new Noun('клубника', 'die', 'Erdbeere', 'Erdbeeren'),
    new Noun('вишня', 'die', 'Kirsche', 'Kirschen'),
    new Noun('банан', 'die', 'Banane', 'Bananen'),
    new Noun('ананас', 'die', 'Ananas', 'Ananas'),
    new Noun('слива', 'die', 'Pflaume', 'Pflaumen'),
    new Noun('инжир', 'die', 'Feige', 'Feigen'),
    new Noun('персик', 'der', 'Pfirsich', 'Pfirsiche'),
    new Noun('груша', 'die', 'Birne', 'Birnen'),
    new Noun('ценник', 'das', 'Preisschild', 'Preisschilder'),
    new Noun('вывеска', 'das', 'Ladenschild', 'Ladenschilder'),
    new Noun('баклажан', 'die', 'Aubergine', 'Auberginen'),
    new Noun('гриб', 'der', 'Pilz', 'Pilze'),
    new Noun('морковь', 'die', 'Karotte', 'Karotten'),
    new Noun('капуста', 'der', 'Kohl', 'Kohle'),
    new Noun('лук', 'die', 'Zwiebel', 'Zwiebeln'),
    new Noun('ящик для овощей', 'die', 'Gemüsekiste', 'Gemüsekisten'),
    new Noun('перец, паприка', 'der', 'Paprika', 'Paprikas'),
    new Noun('решетка-ролл', 'das', 'Rollgitter', 'Rollgitter'),
    new Noun('магазин', 'das', 'Geschäft', 'Geschäfte'),
    new Noun('товары для дома', 'die', 'Haushaltsware', 'Haushaltswaren'),
    new Noun('сладость', 'die', 'Süßigkeit', 'Süßigkeiten'),
    new Noun('мясник', 'der', 'Metzger', 'Metzger'),
    new Noun('свинья', 'das', 'Schwein', 'Schweine'),
    new Noun('скот, корова', 'das', 'Rind', 'Rinder'),
    new Noun('баранина', 'das', 'Lammfleisch', null, true),
    new Noun('дичь', 'das', 'Wildfleisch', null, true),
    new Noun('ингридиент', 'die', 'Zutat', 'Zutaten'),
    new Noun('помощница юриста', 'die', 'Anwaltsgehilfin', 'Anwaltsgehilfinnen'),
    new Noun('адвокат, юрист', 'der', 'Anwalt', 'Anwälte'),
    new Noun('взгляд, вид (из окна)', 'der', 'Blick', 'Blicke'),
    new Noun('депутат', 'die der', 'Abgeordnete', 'Abgeordneten'),
    new Noun('тарелка', 'der', 'Teller', 'Teller'),
    new Noun('чашка', 'die', 'Tasse', 'Tassen'),
    new Noun('шаг', 'der', 'Schritt', 'Schritte'),
    new Noun('змея', 'die', 'Schlange', 'Schlangen'),
    new Noun('перила', 'die', 'Brüstung', 'Brüstungen'),
    new Noun('вид (синоним)', 'die', 'Aussicht', 'Aussichten'),
    new Noun('устрица', 'die', 'Auster', 'Austern'),
    new Noun('сооружение', 'das', 'Gebäude', 'Gebäude'),
    new Noun('путешествие, поездка', 'die', 'Reise', 'Reisen'),
    new Noun('нож', 'das', 'Messer', 'Messer'),
    new Noun('канцелярия', 'die', 'Kanzlei', 'Kanzleien'),
    new Noun('конверт', 'der', 'Briefumschlag', 'Briefumschlag'),
    new Noun('двор', 'der', 'Hof', 'Höfe'),
    new Noun('лицо (часть тела)', 'das', 'Gesicht', 'Gesichter'),
    new Noun('связь, взаимосвязь', 'die', 'Verbindung', 'Verbindungen'),
    new Noun('голова', 'der', 'Kopf', 'Köpfe'),
    new Noun('наследство', 'die', 'Erbschaft', 'Erbschaften'),
    new Noun('биржа', 'die', 'Börse', 'Börsen'),
    new Noun('небоскреб', 'der', 'Wolkenkratzer', 'Wolkenkratzer'),
    new Noun('производство (более конкретно)', 'die', 'Herstellung', 'Herstellungen'),
    new Noun('упаковка', 'die', 'Verpackung', 'Verpackungen'),
    new Noun('пристань', 'die', 'Anlegestelle', 'Anlegestellen'),
    new Noun('плечо', 'die', 'Schulter', 'Schultern'),
    new Noun('путаница (обознался)', 'die', 'Verwechslung', 'Verwechslungen'),
    new Noun('безопасность', 'die', 'Sicherheit', 'Sicherheiten'),
    new Noun('остров', 'die', 'Insel', 'Inseln'),
    new Noun('аэропорт', 'der', 'Flughafen', 'Flughäfen'),
    new Noun('платформа, перрон', 'der', 'Bahnsteig', 'Bahnsteige'),
    new Noun('осторожность, осмотрительность', 'die', 'Vorsicht', null, true),
    new Noun('вокзал', 'der', 'Bahnhof', 'Bahnhöfe'),
    new Noun('остановка, станция', 'die', 'Haltestelle', 'Haltestellen'),
    new Noun('чемодан', 'der', 'Koffer', 'Koffer'),
    new Noun('багаж, кладь', 'das', 'Gepäck', null, true),
    new Noun('путь, рельсы', 'das', 'Gleis', 'Gleise'),
    new Noun('транспортное средство', 'das', 'Verkehrsmittel', 'Verkehrsmittel'),
    new Noun('свинья (самка)', 'die', 'Sau', 'Säue'),
    new Noun('средство', 'das', 'Mittel', 'Mittel'),
    new Noun('особенность', 'die', 'Besonderheit', 'Besonderheiten'),
    new Noun('автобус', 'der', 'Bus', 'Busse'),
    new Noun('пианино', 'das', 'Klavier', 'Klaviere'),
    new Noun('растение', 'die', 'Pflanze', 'Pflanzen'),
    new Noun('газета', 'die', 'Zeitung', 'Zeitungen'),
    new Noun('распространение', 'die', 'Verbreitung', null, true),
    new Noun('уровень, класс', 'das', 'Niveau', 'Niveaus'),
    new Noun('банк', 'die', 'Bank', 'Banken'),
    new Noun('лавка, скамейка', 'die', 'Bank', 'Bänke'),
    new Noun('кафе', 'das', 'Cafe', 'Cafes'),
    new Noun('середина', 'die', 'Mitte', 'Mitten'),
    new Noun('центр (города)', 'das', 'Zentrum', 'Zentren'),
    new Noun('почта', 'die', 'Post', 'Posten'),
    new Noun('светофор, светильник', 'die', 'Ampel', 'Ampeln'),
    new Noun('лес', 'der', 'Wald', 'Wälder'),
    new Noun('штаны, брюки', 'die', 'Hose', 'Hosen'),
    new Noun('кроссовок', 'der', 'Turnschuh', 'Turnschuhe'),
    new Noun('лист (дерева)', 'das', 'Blatt', 'Blätter'),
    new Noun('гора', 'der', 'Berg', 'Berge'),
    new Noun('путешественник', 'der', 'Wanderer', 'Wanderer'),
    new Noun('опыт, событие, впечатление', 'das', 'Erlebnis', 'Erlebnisse'),
    new Noun('приключение', 'das', 'Abenteuer', 'Abenteuer'),
    new Noun('беспокойство, забота', 'die', 'Sorge', 'Sorgen'),
    new Noun('птица', 'der', 'Vogel', 'Vögel'),
    new Noun('вершина', 'der', 'Gipfel', 'Gipfel'),
    new Noun('луг', 'die', 'Wiese', 'Wiesen'),
    new Noun('долина, впадина', 'das', 'Tal', 'Täler'),
    new Noun('корова', 'die', 'Kuh', 'Kühe'),
    new Noun('карета, повозка', 'die', 'Kutsche', 'Kutschen'),
    new Noun('палка (альпеншток), этаж', 'der', 'Stock', 'Stöcke'),
    new Noun('альпинист', 'der', 'Bergsteiger', 'Bergsteiger'),
    new Noun('опыт, знание', 'die', 'Erfahrung', 'Erfahrungen'),
    new Noun('хозяин (кафе)', 'der', 'Wirt', 'Wirte'),
    new Noun('бобы, фасоль', 'die', 'Bohne', 'Bohnen'),
    new Noun('листок, записка', 'der', 'Zettel', 'Zettel'),
    new Noun('хата, хижина', 'die', 'Hütte', 'Hütten'),
    new Noun('ручей', 'der', 'Bach', 'Bäche'),
    new Noun('камень', 'der', 'Stein', 'Steine'),
    new Noun('вода', 'das', 'Wasser', 'Wasser'),
    new Noun('талая вода', 'das', 'Schmelzwasser', 'Schmelzwasser'),
    new Noun('ледник', 'der', 'Gletscher', 'Gletscher'),
    new Noun('кусок, штука', 'das', 'Stück', 'Stücke'),
    new Noun('флаг, знамя', 'die', 'Fahne', 'Fahnen'),
    new Noun('мусор', 'der', 'Müll', null, true),
    new Noun('вещь, предмет, дело', 'die', 'Sache', 'Sachen'),
    new Noun('гость, гостья', 'der', 'Gast', 'Gäste'),
    new Noun('воздух, ветерок', 'die', 'Luft', 'Lüfte'),
    new Noun('ухо', 'das', 'Ohr', 'Ohren'),
    new Noun('ощущение, чувство', 'das', 'Gefühl', 'Gefühle'),
    new Noun('точка', 'der', 'Punkt', 'Punkte'),
    new Noun('новичок, начинающий', 'der', 'Anfänger', 'Anfänger'),
    new Noun('туман, мгла', 'der', 'Nebel', 'Nebel'),
    new Noun('совет', 'der', 'Rat', 'Räte'),
    new Noun('сообщение, новость', 'die', 'Nachricht', 'Nachrichten'),
    new Noun('нога (целиком)', 'das', 'Bein', 'Beine'),
    new Noun('гном', 'der', 'Zwerg', 'Zwerge'),
    new Noun('ничто, пустота', 'das', 'Nichts', 'Nichtse'),
    new Noun('помещение, комната', 'die', 'Stube', 'Stuben'),
    new Noun('риск', 'das', 'Risiko', 'Risikos'),
    new Noun('глупость', 'die', 'Dummheit', 'Dummheiten'),
    new Noun('холм, бугор', 'der', 'Hügel', 'Hügel'),
    new Noun('поле', 'das', 'Feld', 'Felder'),
    new Noun('потолок, одеяло, покров', 'die', 'Decke', 'Decken'),
    new Noun('холод', 'die', 'Kälte', null, true),
    new Noun('боль, горе', 'der', 'Schmerz', 'Schmerzen'),
    new Noun('смелость, уверенность, мужество', 'der', 'Mut', null, true),
    new Noun('утес', 'der', 'Fels', 'Felsen'),
    new Noun('колено', 'das', 'Knie', 'Knie'),
    new Noun('чрезвычайная ситуация', 'der', 'Notfall', 'Notfälle'),
    new Noun('горноспасательная служба', 'die', 'Bergwacht', 'Bergwachten'),
    new Noun('несчастный случай', 'der', 'Unfall', 'Unfälle'),
    new Noun('вертолет', 'der', 'Hubschrauber', 'Hubschrauber'),
    new Noun('след (ноги)', 'die', 'Fußspur', 'Fußspuren'),
    new Noun('нос', 'die', 'Nase', 'Nasen'),
    new Noun('пятно, точка', 'der', 'Fleck', 'Flecke'),
    new Noun('поиск', 'die', 'Suche', 'Suchen'),
    new Noun('рот', 'der', 'Mund', 'Münde'),
    new Noun('голос', 'die', 'Stimme', 'Stimmen'),
    new Noun('спасение, скорая помощь', 'die', 'Rettung', 'Rettungen'),
    new Noun('слеза', 'die', 'Träne', 'Tränen'),
    new Noun('договор, контракт', 'der', 'Vertrag', 'Verträge'),
    new Noun('ограничение', 'die', 'Beschränkung', 'Beschränkungen'),
    new Noun('граница, барьер', 'die', 'Schranke', 'Schranken'),
    new Noun('часть, доля, деталь', 'der', 'Teil', 'Teile'),
    new Noun('объявление', 'die', 'Anzeige', 'Anzeigen'),
    new Noun('объявление, анонс (в газете)', 'das', 'Inserat', 'Inserate'),
    new Noun('позыв, стремление', 'der', 'Drang', 'Dränge'),
    new Noun('первый этаж (на уровне земли)', 'das', 'Erdgeschoss', 'Erdgeschosse'),
    new Noun('палатка, шатер', 'das', 'Zelt', 'Zelte'),
    new Noun('амбар, хлев, конюшня', 'der', 'Stall', 'Ställe'),
    new Noun('герой', 'der', 'Held', 'Helden'),
    new Noun('воин', 'der', 'Krieger', 'Krieger'),
    new Noun('интеллект, интеллигенция', 'die', 'Intelligenz', 'Intelligenzen'),
    new Noun('поручение, заказ', 'der', 'Auftrag', 'Aufträge'),
    new Noun('сила', 'die', 'Kraft', 'Kräfte'),
    new Noun('магия, волшебство', 'der', 'Zauber', 'Zauber'),
    new Noun('зелье, микстура, напиток', 'der', 'Trank', 'Tränke'),
    new Noun('друид', 'der', 'Druide', 'Druiden'),
    new Noun('знак, обозначение', 'das', 'Zeichen', 'Zeichen'),
    new Noun('поставщик', 'der', 'Lieferant', 'Lieferanten'),
    new Noun('поклонник, любитель, любовник', 'der', 'Liebhaber', 'Liebhaber'),
    new Noun('драка, мордобой', 'die', 'Rauferei', 'Raufereien'),
    new Noun('сопровождение, охрана, конвой', 'die', 'Begleitung', 'Begleitungen'),
    new Noun('отчаяние', 'die', 'Verzweiflung', 'Verzweiflungen'),
    new Noun('окружающая среда', 'die', 'Umwelt', 'Umwelten'),
    new Noun('дерево', 'der', 'Baum', 'Bäume'),
    new Noun('успех, удача', 'der', 'Erfolg', 'Erfolge'),
    new Noun('вождь', 'der', 'Häuptling', 'Häuptlinge'),
    new Noun('род, племя', 'der', 'Stamm', 'Stämme'),
    new Noun('враг', 'der', 'Feind', 'Feinde'),
    new Noun('вещь (thing)', 'das', 'Ding', 'Dinge'),
    new Noun('небо', 'der', 'Himmel', 'Himmel'),
    new Noun('борьба', 'der', 'Kampf', 'Kämpfe'),
    new Noun('оружие', 'die', 'Waffe', 'Waffen'),
    new Noun('агрессия, нападение', 'der', 'Angriff', 'Angriffe'),
    new Noun('область, территория, район', 'das', 'Gebiet', 'Gebiete'),
    new Noun('незваный гость, захватчик', 'der', 'Eindringling', 'Eindringlinge'),
    new Noun('сопротивление, отпор', 'der', 'Widerstand', 'Widerstände'),
    new Noun('напряжение, усилие', 'die', 'Anstrengung', 'Anstrengungen'),
    new Noun('охота', 'die', 'Jagd', 'Jagden'),
    new Noun('горе, печаль', 'die', 'Wehe', 'Wehen'),
    new Noun('бог', 'der', 'Gott', 'Götter'),
    new Noun('атакующий, нападающий', 'der', 'Angreifer', 'Angreifer'),
    new Noun('тайна, секрет', 'das', 'Geheimnis', 'Geheimnisse'),
    new Noun('нападение', 'die', 'Offensive', 'Offensiven'),
    new Noun('ветка, сучок', 'der', 'Zweig', 'Zweige'),
    new Noun('древность, давние времена', 'die', 'Vorzeit', 'Vorzeiten'),
    new Noun('рак, омар', 'der', 'Hummer', 'Hummer'),
    new Noun('младенец, грудной ребенок', 'der', 'Säugling', 'Säuglinge'),
    new Noun('котел', 'der', 'Kessel', 'Kessel'),
    new Noun('воздействие, влияние', 'die', 'Wirkung', 'Wirkungen'),
    new Noun('рука', 'die', 'Hand', 'Hände'),
    new Noun('шут, дурак', 'der', 'Narr', 'Narren'),
    new Noun('кожа, шкура', 'die', 'Haut', 'Häute'),
    new Noun('толпа, орда, банда', 'die', 'Horde', 'Horden'),
    new Noun('мир, согласие, покой', 'der', 'Frieden', 'Frieden'),
    new Noun('круиз', 'der', 'Kreuzfahrt', 'Kreuzfahrten'),
    new Noun('крестовый поход', 'der', 'Kreuzzug', 'Kreuzzüge'),
    new Noun('башня', 'der', 'Turm', 'Türme'),
    new Noun('порт', 'der', 'Hafen', 'Häfen'),
    new Noun('река', 'der', 'Fluss', 'Flüsse'),
    new Noun('счет (в банке), учетная запись', 'das', 'Konto', 'Kontos'),
    new Noun('отряд, команда', 'der', 'Trupp', 'Trupps'),
    new Noun('победа', 'der', 'Sieg', 'Siege'),
    new Noun('вина, долг', 'die', 'Schuld', 'Schulden'),
    new Noun('усы', 'der', 'Schnurrbart', 'Schnurrbärte'),
    new Noun('награда', 'die', 'Belohnung', 'Belohnungen'),
    new Noun('информация, справка', 'die', 'Auskunft', 'Auskünfte'),
    new Noun('сеть, паутина', 'das', 'Netz', 'Netze'),
    new Noun('дурак', 'der', 'Blödmann', 'Blödmänner'),
    new Noun('безумие, безумство', 'der', 'Wahnsinn', null, true),
    new Noun('пещера, берлога', 'die', 'Höhle', 'Höhlen'),
    new Noun('расходы, издержки', 'die', 'Kosten', 'Kosten'),
    new Noun('корм', 'der', 'Fraß', 'Fräße'),
    new Noun('пытка', 'die', 'Folter', 'Foltern'),
    new Noun('доверие, уверенность', 'das', 'Vertrauen', null, true),
    new Noun('заложник', 'der', 'Geisel', 'Geisel'),
    new Noun('гонец, курьер, посыльный', 'der', 'Bote', 'Boten'),
    new Noun('лифт', 'der', 'Aufzug', 'Aufzüge'),
    new Noun('душ', 'die', 'Dusche', 'Duschen'),
    new Noun('телевизор', 'der', 'Fernseher', 'Fernseher'),
    new Noun('фен', 'der', 'Föhn', 'Föhne'),
    new Noun('полотенце (для рук)', 'das', 'Handtuch', 'Handtücher'),
    new Noun('отопление', 'die', 'Heizung', 'Heizungen'),
    new Noun('кондиционер', 'die', 'Klimaanlage', 'Klimaanlagen'),
    new Noun('будильник', 'der', 'Wecker', 'Wecker'),
    new Noun('ответ (на просьбу)', 'der', 'Bescheid', 'Bescheide'),
    new Noun('водительские права', 'der', 'Führerschein', 'Führerscheine'),
    new Noun('рука (целиком)', 'der', 'Arm', 'Arme'),
    new Noun('аптека', 'die', 'Apotheke', 'Apotheken'),
    new Noun('медикамент, лекарственное средство', 'das', 'Medikament', 'Medikamente'),
    new Noun('рецепт (от врача)', 'das', 'Rezept', 'Rezepte'),
    new Noun('клиника, кабинет', 'die', 'Praxis', 'Praxen'),
    new Noun('кашель', 'der', 'Husten', 'Husten'),
    new Noun('лихорадка, температура', 'das', 'Fieber', 'Fieber'),
    new Noun('насморк', 'der', 'Schnupfen', 'Schnupfen'),
    new Noun('таблетка', 'die', 'Tablette', 'Tabletten'),
    new Noun('мазь', 'die', 'Salbe', 'Salben'),
    new Noun('пластырь', 'das', 'Pflaster', 'Pflaster'),
    new Noun('результат, итог', 'das', 'Ergebnis', 'Ergebnisse'),
    new Noun('шея, горло', 'der', 'Hals', 'Hälse'),
    new Noun('грудь, грудная клетка', 'die', 'Brust', 'Brüste'),
    new Noun('живот', 'der', 'Bauch', 'Bäuche'),
    new Noun('спина, хребет', 'der', 'Rücken', 'Rücken'),
    new Noun('монастырь', 'das', 'Kloster', 'Klöster'),
    new Noun('лекарственная трава', 'das', 'Heilkraut', 'Heilkräuter'),
    new Noun('реальность, действительность', 'die', 'Wirklichkeit', 'Wirklichkeiten'),
    new Noun('борода', 'der', 'Bart', 'Bärte'),
    new Noun('кудри', 'die', 'Locke', 'Locken'),
    new Noun('знаменитость (мужской род)', 'der', 'Promi', 'Promis'),
    new Noun('знаменитость (женский род)', 'der', 'Promi', 'Promis'),
    new Noun('разница, различие', 'der', 'Unterschied', 'Unterschiede'),
    new Noun('пыль, прах', 'der', 'Staub', 'Stäube'),
    new Noun('запись (в журнале)', 'der', 'Eingrag', 'Einträge'),

    // new Noun('кафе', 'das', 'Cafe', 'Cafes'),
    // new Noun('кафе', 'das', 'Cafe', 'Cafes'),
    // new Noun('кафе', 'das', 'Cafe', 'Cafes'),
    // new Noun('кафе', 'das', 'Cafe', 'Cafes'),
    // new Noun('кафе', 'das', 'Cafe', 'Cafes'),
    // new Noun('кафе', 'das', 'Cafe', 'Cafes'),
    // new Noun('кафе', 'das', 'Cafe', 'Cafes'),
    // new Noun('кафе', 'das', 'Cafe', 'Cafes'),
    // new Noun('кафе', 'das', 'Cafe', 'Cafes'),
    // new Noun('кафе', 'das', 'Cafe', 'Cafes'),
    // new Noun('кафе', 'das', 'Cafe', 'Cafes'),
    // new Noun('кафе', 'das', 'Cafe', 'Cafes'),
    // new Noun('кафе', 'das', 'Cafe', 'Cafes'),
    // new Noun('кафе', 'das', 'Cafe', 'Cafes'),
    // new Noun('кафе', 'das', 'Cafe', 'Cafes'),
    // new Noun('кафе', 'das', 'Cafe', 'Cafes'),
    // new Noun('кафе', 'das', 'Cafe', 'Cafes'),
    // new Noun('кафе', 'das', 'Cafe', 'Cafes'),
    // new Noun('кафе', 'das', 'Cafe', 'Cafes'),
    // new Noun('кафе', 'das', 'Cafe', 'Cafes'),
    // new Noun('кафе', 'das', 'Cafe', 'Cafes'),
    // new Noun('кафе', 'das', 'Cafe', 'Cafes'),
    // new Noun('кафе', 'das', 'Cafe', 'Cafes'),
    // new Noun('кафе', 'das', 'Cafe', 'Cafes'),
    // new Noun('кафе', 'das', 'Cafe', 'Cafes'),
    // new Noun('кафе', 'das', 'Cafe', 'Cafes'),
    // new Noun('кафе', 'das', 'Cafe', 'Cafes'),
    // new Noun('кафе', 'das', 'Cafe', 'Cafes'),
];
