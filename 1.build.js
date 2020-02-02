(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{105:function(n,a,e){var i=e(483);"string"==typeof i&&(i=[[n.i,i,""]]),i.locals&&(n.exports=i.locals);(0,e(49).default)("2977c907",i,!0,{})},346:function(n,a,e){n.exports=e.p+"wulkanowy-small-flat.svg?fca84d6c2447dff02d6fc1f47ef90db4"},44:function(n,a,e){"use strict";e.r(a);e(26),e(347),e(252);var i=e(349),o=e.n(i),t=e(474),s={name:"faq-view",components:{VueMarkdown:o.a},data:function(){return{faqMap:t,faqAnswers:{},faqCurrent:null,window:{width:0,height:0}}},created:function(){window.addEventListener("resize",this.handleWindowResize),this.handleWindowResize()},destroyed:function(){window.removeEventListener("resize",this.handleWindowResize)},methods:{importFaqAnswers:function(n){var a=this;n.keys().forEach((function(e){a.faqAnswers[e]=n(e)}))},handleWindowResize:function(){this.window.width=window.innerWidth,this.window.height=window.innerHeight}},mounted:function(){var n=this;this.importFaqAnswers(e(475)),this.$watch("$route",(function(a){if(a.params.question_id){if(!n.faqAnswers["./".concat(a.params.question_id,".md")])return n.$router.push("/czesto-zadawane-pytania"),void(n.faqCurrent=null);n.faqCurrent=n.faqAnswers["./".concat(a.params.question_id,".md")].default}else n.faqCurrent=null}),{immediate:!0})}},r=(e(482),e(9)),d=Object(r.a)(s,(function(){var n=this,a=n.$createElement,i=n._self._c||a;return i("div",{staticClass:"faq"},[i("div",{staticClass:"header"},[n.window.width<=850&&n.faqCurrent?i("router-link",{staticClass:"header__back",attrs:{to:"/czesto-zadawane-pytania"}},[n._v("←")]):n._e(),n._v(" "),i("router-link",{staticClass:"header__wulkanowy",attrs:{to:"/"}},[i("img",{attrs:{src:e(346),alt:""}})])],1),n._v(" "),n.window.width>850||!n.faqCurrent?i("div",{staticClass:"questions"},n._l(n.faqMap,(function(a){return i("router-link",{key:a.id,staticClass:"questions__link",attrs:{to:"/czesto-zadawane-pytania/"+a.id}},[n._v("\n      "+n._s(a.name)+"\n    ")])})),1):n._e(),n._v(" "),!n.faqCurrent&&n.window.width>850?i("div",{staticClass:"answer answer--no-question-selected"},[i("h1",[n._v("Żadne pytanie nie jest wybrane")])]):n._e(),n._v(" "),n.faqCurrent?i("div",{staticClass:"answer answer--question-selected"},[i("vue-markdown",{attrs:{source:n.faqCurrent,linkify:!1,breaks:!1}})],1):n._e()])}),[],!1,null,null,null);a.default=d.exports},474:function(n){n.exports=JSON.parse('[{"name":"Czym jest Wulkanowy?","id":"czym-jest-wulkanowy"},{"name":"Dlaczego nie mogę się zalogować?","id":"dlaczego-nie-moge-sie-zalogowac"},{"name":"Co jeśli nie pamiętam hasła?","id":"co-jesli-nie-pamietam-hasla"},{"name":"Co to jest symbol?","id":"co-to-jest-symbol"},{"name":"Jaki wybrać dziennik podczas logowania?","id":"jaki-wybrac-dziennik"},{"name":"Czym różnią się wersje BETA i DEV?","id":"czym-roznia-sie-wersje-beta-i-dev"}]')},475:function(n,a,e){var i={"./co-jesli-nie-pamietam-hasla.md":476,"./co-to-jest-symbol.md":477,"./czym-jest-wulkanowy.md":478,"./czym-roznia-sie-wersje-beta-i-dev.md":479,"./dlaczego-nie-moge-sie-zalogowac.md":480,"./jaki-wybrac-dziennik.md":481};function o(n){var a=t(n);return e(a)}function t(n){if(!e.o(i,n)){var a=new Error("Cannot find module '"+n+"'");throw a.code="MODULE_NOT_FOUND",a}return i[n]}o.keys=function(){return Object.keys(i)},o.resolve=t,n.exports=o,o.id=475},476:function(n,a,e){"use strict";e.r(a),a.default='<h1 id="co-jeśli-nie-pamiętam-hasła">Co jeśli nie pamiętam hasła?</h1>\n<p>Hasło zresetujesz na stronie swojego dziennika klikając w <strong>Przywróć dostęp</strong>:</p>\n<p><img src="https://i.imgur.com/Zlr99Tx.png" alt="Odzyskiwanie dostępu do istniejącego konta pod formularzem logowania"></p>\n'},477:function(n,a,e){"use strict";e.r(a),a.default='<h1 id="co-to-jest-symbol">Co to jest <em>symbol</em>?</h1>\n<p>Symbol to w uproszczeniu nazwa miejscowości, powiatu lub gminy, do której należy szkoła, zapisana w odpowiedni sposób.\nWulkanowy w większości przypadków potrafi automatycznie wykryć odpowiedni symbol, lecz np. przy korzystaniu z innego\ndziennika niż domyślny, trzeba go wprowadzić ręcznie.</p>\n<p>Poprawny dla twojej szkoły symbol znajdziesz po zalogowaniu się do dziennika UONET+ przez przeglądarkę, przejściu\nprzez kafelek <strong>Uczeń</strong> do zakładki <strong>Dostęp mobilny</strong> i kliknięcie w:</p>\n<p><strong>Zarejestruj urządzenie mobilne</strong> w starym module Uczeń (zaznaczone na niebiesko, w tym przypadku będzie to <strong>warszawa</strong>):</p>\n<p><img src="https://i.imgur.com/iaDJ84i.png" alt=""></p>\n<p>lub <strong>Wygeneruj kod dostępu</strong> w nowym (zaznaczone kursorem):</p>\n<p><img src="https://i.imgur.com/v3to2W0.png" alt=""></p>\n'},478:function(n,a,e){"use strict";e.r(a),a.default='<h1 id="czym-jest-aplikacja-wulkanowy">Czym jest aplikacja Wulkanowy?</h1>\n<p>Wulkanowy to nieoficjalna aplikacja mobilna przeznaczona dla <strong>uczniów i rodziców</strong> korzystających dziennika <strong>Vulcan UONET+</strong>.</p>\n'},479:function(n,a,e){"use strict";e.r(a),a.default='<h1 id="czym-różnią-się-wersje-beta-i-dev">Czym różnią się wersje <em>BETA</em> i <em>DEV</em>?</h1>\n<h2 id="wersja-beta">Wersja <em>BETA</em></h2>\n<p>Jest to stabilna i zatwierdzona wersja aplikacji, zalecana dla przeciętnego użytkownika.\nStaramy się, aby wersja <em>BETA</em> nie zawierała błędów. Można ją pobrać ze\n<a href="https://play.google.com/store/apps/details?id=io.github.wulkanowy&amp;utm_source=homepage">Sklepu Play</a>,\n<a href="https://f-droid.org/en/packages/io.github.wulkanowy/">Katalogu F-Droid</a> lub pobierając plik APK z naszej strony.</p>\n<h2 id="wersja-dev">Wersja <em>DEV</em></h2>\n<p>Wersja <em>DEV</em> to tak naprawdę wiele wersji, generowanych automatycznie podczas tworzenia kodu nowych funkcji.\nPrzeznaczona jest przede wszystkim dla programistów aplikacji oraz dla testerów nowych funkcji.</p>\n<p>Podstawowa wersja DEV (oznaczona na stronie jako <em>Ostatnia wersja DEV</em>) zawiera ukończone nowe funkcje,\nale może posiadać problemy ze stabilnością.</p>\n<p>Istnieją również wersje DEV generowane automatyczne dla każdej funkcji, nad którą aktualnie pracujemy.\nZazwyczaj są niestabilne lub niedokończone.</p>\n<p>Wszystkie typy wersji DEV można pobrać jedynie z naszej strony internetowej.</p>\n<p><strong>UWAGA:</strong> Wersji DEV nie można pobrać ze Sklepu Play, dlatego też trzeba je aktualizować ręcznie.</p>\n'},480:function(n,a,e){"use strict";e.r(a),a.default='<h1 id="dlaczego-nie-mogę-się-zalogować">Dlaczego nie mogę się zalogować?</h1>\n<p>Jeśli masz pewność, że wpisywane przez ciebie hasło jest prawidłowe (możesz się upewnić klikając w ikonę oka po prawej\nstronie pola na hasło, dzięki czemu zobaczysz je <em>niezagwiazdkowane</em>), a mimo to nadal nie możesz się zalogować,\nsprawdź czy z listy pod polem na hasło <a href="/czesto-zadawane-pytania/jaki-wybrac-dziennik">został wybrany odpowiedni dziennik</a>.\nInne dostępne prócz Vulcan to np. <strong>eSzkoła opolska</strong>, <strong>Resman Rzeszów</strong> czy <strong>Lubelski Portal Oświatowy</strong>.</p>\n<p>Jeśli używasz dziennika innego niż zaznaczony domyślnie, spróbuj użyć do zalogowania się przyznanego loginu zamiast adresu email.</p>\n'},481:function(n,a,e){"use strict";e.r(a),a.default='<h1 id="jaki-wybrać-dziennik-podczas-logowania">Jaki wybrać dziennik podczas logowania?</h1>\n<p>Dziennik VULCAN jest dostępny pod wieloma adresami, które zależą od miejscowości, do których należą szkoły.\nAdres do dziennika powinien znajdować się na stronie twojej szkoły.</p>\n<ul>\n<li>Vulcan - <strong>vulcan.net.pl</strong></li>\n<li>Opolska eSzkoła - <strong>eszkola.opolskie.pl</strong></li>\n<li>Gdańska Platforma Edukacyjna - <strong>edu.gdansk.pl</strong></li>\n<li>Lubelski Portal Oświatowy - <strong>edu.lublin.eu</strong></li>\n<li>EduNet Miasta Tarnowa - <strong>umt.tarnow.pl</strong></li>\n<li>ResMan Rzeszów - <strong>resman.pl</strong></li>\n<li>Fakelog - <strong>fakelog.cf</strong> - to dziennik przeznaczony do testowania naszej aplikacji</li>\n</ul>\n<p><img src="https://i.imgur.com/tPFTMT2.jpg" alt="Wybór dziennika na ekranie logowania"></p>\n'},482:function(n,a,e){"use strict";var i=e(105);e.n(i).a},483:function(n,a,e){var i=e(48),o=e(58),t=e(59);(a=i(!1)).push([n.i,"@import url(https://fonts.googleapis.com/css?family=Roboto:300,400,500);"]);var s=o(t);a.push([n.i,"body{background:linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)),url("+s+");background-size:cover;background-position:center;background-attachment:fixed}.faq{height:100vh;display:grid;grid-template-rows:auto 1fr;grid-template-columns:1fr auto minmax(auto, 850px) 1fr}@media screen and (max-width: 850px){.faq{grid-template-columns:1fr}.faq .header{grid-column:1;margin:4px}.faq .header__back{text-decoration:none}.faq .questions{margin-right:16px;grid-column:1;min-width:initial;max-width:unset;width:unset}.faq .questions .questions__link{background-color:#fff4;padding:12px}.faq .questions .questions__link:hover{background-color:#fff8}.faq .questions .questions__link:not(:last-of-type){margin-bottom:12px}.faq .answer{grid-column:1}}.header{grid-row:1;grid-column:1/5;display:grid;grid-template-columns:1fr auto 1fr;margin:8px 0}.header__back{grid-column:1;grid-row:1;justify-self:start;color:#fff;font-size:32px;line-height:32px;height:32px;width:32px;padding:8px;margin:8px}.header__wulkanowy{padding:8px;height:48px;grid-row:1;grid-column:2}.header__wulkanowy img{height:48px}.questions{grid-row:2;grid-column:2;margin:0 0 16px 16px;background-color:#fff8;padding:8px;border-radius:4px;overflow-y:auto;width:fit-content;min-width:320px;max-width:480px;box-shadow:0px 2px 4px -1px rgba(0,0,0,0.2),0px 4px 5px 0px rgba(0,0,0,0.14),0px 1px 10px 0px rgba(0,0,0,0.12)}.questions__link{display:block;padding:8px;font-size:16px;text-decoration:none;color:#000;border-radius:3px;transition:background-color 300ms;font-family:'Roboto', sans-serif;font-weight:300}.questions__link:not(:last-of-type){margin-bottom:8px}.questions__link:hover{background-color:#fff4}.questions__link.router-link-active{background-color:#fff8;font-weight:400}.answer{grid-row:2;grid-column:3;margin:0 16px 16px;background-color:#fff8;border-radius:4px;padding:16px;overflow-y:auto;box-shadow:0 2px 4px -1px rgba(0,0,0,0.2),0px 4px 5px 0px rgba(0,0,0,0.14),0px 1px 10px 0px rgba(0,0,0,0.12);font-family:'Roboto', sans-serif}.answer--question-selected h1{margin-top:8px}.answer--question-selected h1,.answer--question-selected h2,.answer--question-selected h3{font-weight:normal}.answer--question-selected p{text-align:justify;margin:24px 0;line-height:1.6}.answer--question-selected img{max-height:512px;border-radius:4px;box-shadow:0 2px 4px -1px rgba(0,0,0,0.2),0px 4px 5px 0px rgba(0,0,0,0.14),0px 1px 10px 0px rgba(0,0,0,0.12);margin:12px auto 32px;display:block;max-width:100%}.answer--no-question-selected{display:flex;justify-content:center;align-items:center;text-align:center;flex-direction:column;padding:32px}.answer--no-question-selected h1{margin:0;font-weight:300;font-size:28px}\n",""]),n.exports=a},59:function(n,a,e){n.exports=e.p+"wallpaper.jpg?b24bba72c9a640034d286f295fac8878"}}]);
//# sourceMappingURL=1.build.js.map