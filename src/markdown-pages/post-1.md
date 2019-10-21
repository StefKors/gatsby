---
path: "/blog/my-first-post"
date: "2019-05-04"
title: "My first blog post"
---

# Hoe werkt deze app?

De ECT app is een app ontwikkeld op basis van Cordova. Cordova is een library die een website (`html`) pages omhult en zo een app bouwt. Cordova is verantwoordelijk voor de brug tussen "app" functionaliteiten en de website. In het geval van de ECT app is de website gebouwd op basis van `AngularJS v1.4.5`.

## AngularJS v1.4.5

Angular is een web framework ontwikkeld door Google in 2010. Angular maakt grofweg gebruik van het MVC (Model View Controller) model. De views zijn in dit project in de `tpl` map en de Models en Controllers in de `scripts` map. Angular versie 2.0 is in 2014 uitgebracht. Echter doordat de nieuwe versies van Angular een andere project setup gebruiken is het upgraden niet simpel. (Fun fact: de nieuwere versies van Angular gaan met elke versie steeds meer richting een component based model. Vergelijkbaar met React, Vue en dergelijke.)

## Drupal

Drupal verzorgt een groot deel van de content van de App. Deze content wordt ingeladen via rest API's en is beschikbaar voor ECT redacteuren om aan te passen. De content wordt gelevert in verschillende talen (NL, EN).
