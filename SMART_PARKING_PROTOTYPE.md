# Prototype de Parking Intelligent (Smart Parking)

**Mémoire de Master – Électronique des systèmes embarqués**  
Université Badji Mokhtar – Annaba (2020/2021)

---

## 📋 Résumé du Projet

Ce projet propose un **système de parking intelligent** utilisant l'Internet des Objets (IoT) pour optimiser la gestion des places de stationnement en milieu urbain. Le prototype permet la détection en temps réel des places disponibles, la réservation via application mobile, et l'amélioration de la mobilité urbaine.

---

## 🎯 Objectifs

- **Détection automatique** de la disponibilité des places en temps réel
- **Réservation mobile** via l'application Blynk
- **Réduction** du temps de recherche de stationnement
- **Diminution** de la congestion et de la pollution urbaine
- **Sécurité renforcée** avec détection d'intrusion et alertes SMS

---

## 🔧 Architecture Technique

### Composants Matériels

| Composant | Fonction |
|-----------|----------|
| **Arduino UNO** | Microcontrôleur principal |
| **Capteurs IR** | Détection de présence véhicule |
| **Capteur PIR** | Détection de mouvement/intrusion |
| **Servomoteur** | Contrôle des barrières |
| **Module GSM SIM900** | Envoi de SMS d'alerte |
| **Module RTC DS1307** | Gestion temporelle |
| **LCD 16x2** | Affichage des informations |

### Logiciels et Outils

- **Arduino IDE** : Programmation du microcontrôleur
- **PROTEUS** : Simulation électronique
- **Application Blynk** : Interface mobile de contrôle et réservation
- **Commandes AT** : Communication avec le module GSM

---

## ⚙️ Fonctionnement du Système

### Processus Principal

1. **Détection** : Les capteurs IR identifient les places occupées/libres
2. **Affichage** : Le LCD affiche le nombre de places disponibles
3. **Réservation** : L'utilisateur réserve via l'application mobile
4. **Accès** : Le servomoteur ouvre la barrière pour les véhicules autorisés
5. **Sécurité** : Le capteur PIR détecte les intrusions et déclenche une alerte SMS

### Scénarios d'Utilisation

- **Entrée de véhicule** : Détection → Vérification → Ouverture barrière → Mise à jour compteur
- **Sortie de véhicule** : Détection → Ouverture barrière → Libération de place
- **Réservation** : Consultation app → Sélection place → Confirmation → Notification
- **Intrusion** : Détection PIR → Alerte SMS → Notification sécurité

---

## 💡 Avantages et Impact

### Bénéfices Utilisateurs
- ⏱️ **Gain de temps** : Localisation rapide des places disponibles
- 📱 **Confort** : Réservation anticipée via smartphone
- 💰 **Économie** : Réduction de la consommation de carburant

### Bénéfices Urbains
- 🌍 **Environnement** : Diminution des émissions de CO₂
- 🚗 **Fluidité** : Réduction de la congestion urbaine
- 🏙️ **Gestion** : Optimisation des infrastructures de stationnement

---

## 🧪 Validation et Résultats

Le prototype a été simulé avec succès sous **PROTEUS**, validant :

✅ La détection précise des véhicules  
✅ Le contrôle automatique des barrières  
✅ La communication GSM et l'envoi de SMS  
✅ L'interface mobile fonctionnelle  
✅ La gestion en temps réel des places  

---

## 🔮 Perspectives et Évolutions

### Améliorations Futures

1. **Intelligence Artificielle** : Prédiction des périodes de forte affluence
2. **Cloud Computing** : Centralisation des données multi-parkings
3. **Paiement intégré** : Transaction automatique via l'application
4. **Énergies renouvelables** : Alimentation solaire du système
5. **Intégration ville intelligente** : Connexion aux systèmes urbains de transport

### Extensibilité

- Scalabilité pour parkings multi-niveaux
- Interface web pour la gestion administrative
- Analyse de données pour l'optimisation
- Intégration avec GPS et systèmes de navigation

---

## 📊 Synthèse Technique

**Technologies clés** : IoT, Arduino, GSM, Application mobile  
**Type de projet** : Système embarqué temps réel  
**Domaine** : Mobilité intelligente et ville connectée  
**Coût** : Solution économique et accessible  
**Fiabilité** : Validé par simulation  

---

## 📝 Conclusion

Ce prototype de **parking intelligent** démontre la viabilité d'une solution IoT pour améliorer la mobilité urbaine. En combinant capteurs, communication mobile et automatisation, le système offre une réponse efficace aux défis du stationnement en milieu urbain.

Le projet s'inscrit dans la vision des **villes intelligentes** et contribue à la réduction de la pollution, à l'amélioration de la qualité de vie, et à l'optimisation des ressources urbaines.

---

## 🏷️ Mots-clés

`Smart Parking` • `IoT` • `Arduino UNO` • `GSM` • `Application mobile` • `Ville intelligente` • `Capteurs` • `Mobilité urbaine` • `Système embarqué`

---

## 📄 Notes de Conversion

**Pour convertir ce document en format Word** :

### Méthode 1 : Pandoc (recommandé)
```bash
pandoc SMART_PARKING_PROTOTYPE.md -o Smart_Parking.docx
```

### Méthode 2 : En ligne
- Ouvrir avec **GitHub** → Télécharger → Importer dans **Google Docs** → Exporter en .docx
- Utiliser des convertisseurs en ligne : [pandoc.org](https://pandoc.org) ou [cloudconvert.com](https://cloudconvert.com)

### Méthode 3 : Éditeurs
- Ouvrir avec **Typora**, **Mark Text**, ou **Visual Studio Code** (avec extension Markdown)
- Exporter directement en Word ou PDF

---

**Document créé le** : Décembre 2025  
**Basé sur** : Mémoire de Master – État de l'art "Smart Parking"  
**Version** : Améliorée et condensée
