eKRK - Front End
========================================
## Przygotowanie środowiska deweloperskiego
Kroki potrzebne do przygotowania środowiska deweloperskiego:

1. Zainstalowany npm w wersji 3.5.2, dla starszego można uaktualnić tak:
        
        npm update -g npm
2. Instalujemy pakiety yeoman (1.5.1), grunt-cli (0.1.13), bower (1.7.2)

        npm install -g yo grunt-cli bower
3. Instalujemy generator dla yeomana:

        npm install -g generator-angm

**Uwaga: Przy instalacji modułów jako globalne mogą być potrzebne uprawnienia administratora.**

## Przydatne informacje
### Odpalanie aplikacji
Odpalenie aplikacji w środowisku deweloperskim za pomocą zadania grunt:

        grunt dev
Informacje o możliwościach generatora:
  https://github.com/newaeonweb/generator-angm
  [github.com/newaeonweb/generator-angm](https://github.com/newaeonweb/generator-angm "Title")
  
### Tłumaczenia
Wykorzystujemy plugin angular-translate
Pliki z tłumaczeniami w katalogu i18n
Wystarczy w pliku .html: ```{{'KLUCZ' | translate}}```
Poprzedzajmy klucze nazwami modułów jako prefixy, ew. dajmy global, jeśli wiemy, że będzie użyty w wielu miejscach.

## Komentarz dotyczący wyboru generatora
   Najpopularniejszy generator angular dla yeomana nie trzyma dobrego stylu (zwłaszcza modularności)
   Postanowiłem poszukać czegoś innego, co nam wygeneruje szkielet i wspomoże w kodowaniu.
   Pamiętajmy, że to generator jest dla nas, a nie odwrotnie. 
   Jeśli będzie potrzebne z jakiegoś istotnego powodu złamanie jakiejś reguły albo stylu zróbmy to!
   
### Generator-Angm:
- utrzymuje modułowość, generuje całe moduły zawierające to co potrzebujemy (controller, view, service)
- używa najnowszego stabilnego angulara 1.4.8
- używa domyślnie ui-router (mocno się przyda, pomoże tez przy autoryzacji)
- ostatni commit w listopadzie 2015 (daje to jakieś nadzieje na update)
- mało zależności
   
### Rozważałem także Generator-Cg-Angular:   
- utrzymuje modułowość
- wspiera ui-ruter (pyta czy chcemy go używać)
- ostatnie commity sprzed roku
- na starcie poczęstował mnie wersją 1.2.29 angulara
- brak nadziei na update
   
Pakietu Generator-Angular-Fullstack ze względu na jego przerost formy nad treścią nawet nie testowałem.
Nie korzystamy ani z MongoDB, ani z Express Server jako API dla naszej aplikacji.

Nic ciekawszego z projektów, które mają jakąś znaczną liczbę pobrań na http://yeoman.io/generators/ nie znalazłem.
Podjąłem decyzje by wykorzystać Generator-angm do pomocy w budowaniu naszej aplikacji.
