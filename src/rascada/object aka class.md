## Kod ze szkoły
```html
<head>
  <script language="javascript" type="text/javascript">
    function wyswietl_komputer() {
      document.write("<br>Procesor: "+this.procesor);
      document.write("<br>Zegar: "+this.zegar);
      document.write("<br>Cena: "+this.cena);
      this.wlasciciel.wyswietl();
    }

    function wyswietl_osoba () {
      document.write("<br>Imię właściciela: "+this.imie);
      document.write("<br>Nazwisko właściciela: "+this.nazwisko);
    }

    /* 
     * To nie obiekt*, to klasa!
     */
    function komputer (procesor, zegar, cena, wlasciciel) {
      this.procesor = procesor;
      this.zegar = zegar;
      this.cena = cena;
      this.wlasciciel = wlasciciel;
      this.wyswietl = wyswietl_komputer;
    }

    function osoba(imie,nazwisko) {
      this.imie=imie;
      this.nazwisko=nazwisko;
      this.wyswietl=wyswietl_osoba;
    }
  </script>
</head>

<body>
  <script language="javascript" type="text/javascript">
    ja=new osoba("Tomek", "Nazwisko Tomka");
    moj_pc= new komputer ("Intel Core i7-4790K", "4.0 GHz", "1500zł", ja);
    moj_pc.wyswietl();
  </script>
</body>
```

## refaktoryzacja
Wrzucenie funkcji do `<head>` tylko spowolni wczytanie strony (html'a i css'a, czyli wyglądu).
Skrypt najlepiej pisać na samym końcu `<body>`.

#### Właściwy sposób aby dodać metode** do klasy.
```js
function Komputer(procesor, zegar, cena, wlasciciel) {
  this.procesor = procesor;
  this.zegar = zegar;
  this.cena = cena;
  this.wlasciciel = wlasciciel;
}

Komputer.prototype.wyswietl = function() {
  document.write("<br>Procesor: " + this.procesor);
  document.write("<br>Zegar: " + this.zegar);
  document.write("<br>Cena: " + this.cena);
  this.wlasciciel.wyswietl();
};

function Osoba(imie, nazwisko) {
  this.imie = imie;
  this.nazwisko = nazwisko;
}

Osoba.prototype.wyswietl = function() {
  document.write("<br>Imię właściciela: " + this.imie);
  document.write("<br>Nazwisko właściciela: " + this.nazwisko);
};

var ja = new osoba("Tomek", "Nazwisko Tomka");
var mojPc = new Komputer("Intel Core i7-4790K", "4.0 GHz", "1500zł", ja);

// np tutaj używamy metody
mojPc.wyswietl();
```

## aktualny js
Świat idzie do przodu, js również, niestety polskie szkoły nie...

#### Właściwy sposób tworzenia klas
```js
'use strict';

class Komputer {
  constructor(procesor, zegar, cena, wlasciciel) {
    this.procesor = procesor;
    this.zegar = zegar;
    this.cena = cena;
    this.wlasciciel = wlasciciel;
  }

  wyswietl() {
    document.write("<br>Procesor: " + this.procesor);
    document.write("<br>Zegar: " + this.zegar);
    document.write("<br>Cena: " + this.cena);
    this.wlasciciel.wyswietl();
  }
}

class Osoba {
  constructor(imie, nazwisko) {
    this.imie = imie;
    this.nazwisko = nazwisko;
  }
  
  wyswietl() {
    document.write("<br>Imię właściciela: " + this.imie);
    document.write("<br>Nazwisko właściciela: " + this.nazwisko);
  }
}

var ja = new osoba("Tomek", "Nazwisko Tomka");
var moj_pc = new Komputer("Intel Core i7-4790K", "4.0 GHz", "1500zł", ja);

moj_pc.wyswietl();
```

## Dla wytrwałych

#### refaktoryzacja głęboko zakorzenionego `document.write`

```js
  wyswietl() {
    document.write("<br>Imię właściciela: " + this.imie);
    document.write("<br>Nazwisko właściciela: " + this.nazwisko);
  }
```
`document.body.innerText` - jest to propercja*** która zawiera tekst z `<body>`
```js
  wyswietl() {
    document.body.innerText += "\n Imię właściciela: " + this.imie;
    document.body.innerText += "\n Nazwisko właściciela: " + this.nazwisko;
  }
```

#### jeszcze trochę nowości
to jest backtick ` (ten koło tyldy (~)) a nie pojedyńczy cudzysłów '

` != '

```js
document.body.innerText = `\n Nazwisko właściciela: ${this.nazwisko}`;
```
a nawet 
```js
  wyswietl() {
    // wewnątrz ` ` enter nie jest ignorowany, nie trzeba pisać \n
    document.body.innerText += `
    Imię właściciela: ${this.imie}
    Nazwisko właściciela: ${this.nazwisko}
    `;
  }
```

#### obiekt*
```js
  // to jest obiekt:
  var obiekt = { siema: 'jestem obiektem' };
```
#### metoda** - funkcja która należy do klasy bądź obiektu
#### propercja*** - zmienna wewnątrz obiektu bądź w klasie
