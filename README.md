Am creat pagina de înregistrare (RegistrationPage.js) care conține un formular cu câmpuri pentru introducerea datelor utilizatorului, precum numele, adresa de email și parola. Formularul include și un buton de trimitere pentru înregistrarea utilizatorului.

Am implementat validarea datelor introduse în formular înainte de a le trimite către server. Am verificat și asigurat că adresa de email are un format valid și că parola are o lungime minimă. Am utilizat, de exemplu, biblioteca Yup sau alte metode pentru validarea datelor.

Am adăugat funcționalitatea de verificare a existenței utilizatorului după ce datele sunt trimise și salvate în fișierul JSON. Am creat o pagină de autentificare (LoginPage.js) care verifică dacă adresa de email și parola introduse de utilizator coincid cu datele din fișierul JSON.

Am creat și implementat alte pagini pentru utilizator, cum ar fi pagina principală (HomePage.js) sau pagina de profil (ProfilePage.js). Ne-am asigurat că aceste pagini sunt accesibile doar utilizatorilor autentificați prin aplicarea unui sistem de autentificare sau restricționare a accesului.


rulare: npm run dev
