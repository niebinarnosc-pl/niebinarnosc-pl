// import React, {useContext} from "react";
// import "./styles.scss";
// import {LocaleContext} from "../../components/Layout";
// import Card from "../../components/Card";
// import Seo from "../../components/Seo";

// export default function PolitykaPrywatnosci() {
//     const {locale} = useContext(LocaleContext)

//     return <section className="privacy-policy">
//         <main>    
//             <header>
//                 <h1>Polityka prywatności</h1>
//             </header>
//             <Card>
//                 <h4 id="polityka-przetwarzania-danych-osobowych">Polityka przetwarzania danych osobowych</h4>
//                 <ol>
//                 <li>Na podstawie art. 13 ust.1 i 2 rozporządzenia Parlamentu Europejskiego i Rady (UE) 2016/679 z 27 kwietnia 2016 r. w sprawie ochrony osób fizycznych w związku z przetwarzaniem danych osobowych i w sprawie swobodnego przepływu takich danych oraz uchylenia dyrektywy 95/46/WE (Dz.Urz.UE.L.2016.119.1, dalej: „RODO”) Stowarzyszenie Homokomando informuje: Administratorem danych osobowych przetwarzanych jest: Stowarzyszenie Homokomando, ul. Paryska 17/2, 03-945 Warszawa, KRS nr 0000259254).</li>
//                 <li>Stowarzyszenie może przetwarzać Twoje dane osobowe w celach:
//                 <ol>
//                 <li>wykonania zamówionej lub zgłoszonej usługi wynikającej z działań statutowych Stowarzyszenia zgodnie z art. 6 ust. 1 lit. f Rozporządzenia;</li>
//                 <li>administrowania i zarządzania działalnością Stowarzyszenia, w szczególności w celu administrowania osobami członkowskimi zwyczajnymi, wspierającymi i honorowymi, oraz do celów realizacji wymogów wynikających z przepisów ustawy Prawo o stowarzyszeniach z 7 kwietnia 1989 z późn. zm. (Dz. U. 1989 nr 20 poz.104), zgodnie z art. 6 ust. 1 lit. f Rozporządzenia;</li>
//                 <li>statystycznym lub analitycznym, jeżeli wynika to z prawnie uzasadnionej przyczyny opartej na celach działalności statutowej, lub na celach prowadzenia pomiarów ruchu na stronie internetowej i mediach społecznościowych powiązanych ze Stowarzyszeniem zgodnie z art. 6 ust. 1 lit. f Rozporządzenia;</li>
//                 <li>w celu prowadzenia statutowej działalności informacyjnej oraz wysyłania nieodpłatnych, zamówionych materiałów marketingowych (newsletter) zgodnie z art. 6 ust. 1 lit. f Rozporządzenia;</li>
//                 <li>realizacji określonych projektów, gdzie prawnie uzasadniona przyczyna przetwarzania danych wynika z umów z innymi podmiotami, zobowiązań statutowych bądź innych dokumentów, zgodnie z art. 6 ust. 1 lit. f Rozporządzenia;</li>
//                 <li>wynikających z zawartej umowy świadczenia usług, umowy świadczenia wolontariatu, umowy zlecenia, umowy o dzieło, umowy o pracę lub innej prawnie dozwolonej formy zawartej umowy, do celów realizacji tej umowy, na podstawie art. 6 ust. 1 lit. b Rozporządzenia;</li>
//                 <li>wynikających z obowiązków prawnych Stowarzyszenia opierających się na przepisach księgowych i podatkowych, na podstawie art. 6 ust. 1 lit. c Rozporządzenia;</li>
//                 <li>dochodzenia lub ochrony przed roszczeniami prawnymi, zgodnie z art. 6 ust. 1 lit. f Rozporządzenia;</li>
//                 <li>związanych z zarządzaniem i administracją personelem lub osobami realizującymi w sposób zorganizowany zadania na rzecz Stowarzyszenia zgodnie z art. 6 ust. 1 lit. f Rozporządzenia.</li>
//                 <li>dane osobowe mogą być przetwarzane w celu zorganizowania pomocy, w tym lekarskiej lub psychologicznej na rzecz osoby, której dane są przetwarzane.</li>
//                 </ol>
//                 </li>
//                 <li>W związku ze wskazanymi w pkt 2 celami przetwarzania, Twoje dane mogą zostać udostępnione innym podmiotom, takim jak:
//                 <ol>
//                 <li>podmioty upoważnione do odbioru danych na podstawie przepisów prawa (m.in. Zakład Ubezpieczeń Społecznych, Urząd Skarbowy, organy sądowe i inne pokrewne);</li>
//                 <li>podmioty świadczące usługi pocztowe;</li>
//                 <li>podmioty świadczące usługi prawne;</li>
//                 <li>podmioty świadczącym usługi audytowe, lub podmioty uprawnione na podstawie osobnych umów ze Stowarzyszeniem do kontroli działalności Stowarzyszenia, w szczególności realizowanych przez Stowarzyszenie usług publicznych finansowanych ze środków publicznych, środków Unii Europejskiej lub środków pochodzących z funduszy Europejskiego Obszaru Gospodarczego, w zakresie w którym przekazanie danych jest niezbędne do wykonania poprawnej kontroli i udostępnienie takie wynika z zawartych umów, obowiązujących przepisów oraz jest prawnie uzasadnione;</li>
//                 <li>podmioty przetwarzające dane w imieniu Stowarzyszenia na podstawie umów powierzenia przetwarzania danych osobowych.</li>
//                 </ol>
//                 </li>
//                 <li>W związku z przetwarzaniem danych osobowych przysługuje Tobie:
//                 <ol>
//                 <li>na podstawie art. 15 Rozporządzenia – prawo do dostępu do treści danych;</li>
//                 <li>na podstawie art. 16 Rozporządzenia – prawo do sprostowania danych;</li>
//                 <li>na podstawie art. 17 Rozporządzenia – prawo do usunięcia danych, pod warunkiem, że dane osobowe nie są już niezbędne do celów, dla których nastąpiło ich zebranie oraz nie istnieje podstawa prawna do ich przetwarzania, tj. nie istnieje prawnie uzasadniona przyczyna do dalszego przetwarzania danych;</li>
//                 <li>na podstawie art. 18 Rozporządzenia – prawo do ograniczenia przetwarzania danych;</li>
//                 <li>na podstawie art. 21 Rozporządzenia – prawo do wniesienia sprzeciwu wobec przetwarzania danych.</li>
//                 </ol>
//                 </li>
//                 <li>Dane osobowe co do zasady są przetwarzane w ramach Europejskiego Obszaru Gospodarczego, jednak Stowarzyszenie może zlecić niektóre działania podwykonawcom spoza EOG. Dotyczy to w szczególności podwykonawców działających w ramach wsparcia usług teleinformatycznych i infrastruktury IT. Zgodnie z decyzją Komisji Europejskiej warunkiem realizacji takiego świadczenia musi być zapewnienie przez podwykonawcę stopnia ochrony danych osobowych zgodnego z wymogami Europejskiego Obszaru Gospodarczego.</li>
//                 </ol>
//                 <h4 id="polityka-przetwarzania-wizerunku">Polityka przetwarzania wizerunku</h4>
//                 <ol>
//                 <li>W związku z udziałem w niektórych wydarzeniach, spotkaniach i innych usługach wynikających z działań statutowych, Stowarzyszenie może przetwarzać Twoje dane biometryczne w postaci wizerunku i głosu, zgodnie z motywem 51 oraz art. 4 pkt 14 Rozporządzenia Parlamentu Europejskiego i Rady UE 2016/679 w sprawie ochrony osób fizycznych w związku z przetwarzaniem danych osobowych i w sprawie swobodnego przepływu takich danych oraz uchylenia Dyrektywy 95/46 z dnia 27 kwietnia 2016 (Dz. Urz. UE L 119.1 z 4 maja 2016).</li>
//                 <li>Wyrażenie zgody na przetwarzanie danych osobowych biometrycznych może się wiązać ze zgodą na nieodpłatne rozpowszechnienie Twojego wizerunku w mediach zewnętrznych, zgodnie z art. 81 ust. 1 Ustawy o prawie autorskim i prawach pokrewnych z dnia 4 lutego 1994 z późn. zm. (Dz. U. 2019 poz. 1231).</li>
//                 <li>Zgodnie z art. 81 ust. 2 Ustawy o prawie autorskim i prawach pokrewnych z dnia 4 lutego 1994 z późn. zm. (Dz. U. 1994 Nr 24 poz. 83)zgoda na przetwarzanie i rozpowszechnianie wizerunku nie jest wymagana w przypadku, gdy osoba której wizerunek jest rozpowszechniany jest osobą znaną, pełniącą obowiązki polityczne, społeczne lub zawodowe, lub w przypadku gdy wizerunek osoby stanowi jednie szczegół całości takiej jak zgromadzenie, krajobraz bądź publiczna impreza.</li>
//                 <li>W związku z przetwarzaniem danych biometrycznych wskazanym w pkt 1 przysługują Tobie te same prawa, co wskazane w pkt 5 Polityki przetwarzania danych osobowych Stowarzyszenia Homokomando.</li>
//                 </ol>
//                 <h4 id="polityka-użytkowania-plików-cookie">Polityka użytkowania plików cookie</h4>
//                 <ol>
//                 <li>Niniejsza polityka dotyczy użytkowania plików cookie (tzw. „ciasteczek”) przez stronę internetową projektu Nowa Tęcza na Placu Zbawiciela w budżecie obywatelskim w Warszawie (<a href="https://www.nowatecza.pl/">www.nowatecza.pl</a> oraz powiązane z nią podstrony) – dalej zwaną „Strona projektu Nowa Tęcza na Placu Zbawiciela”.</li>
//                 <li>Strona projektu Nowa tęcza na Placu Zbawiciela korzysta z plików cookie w celu dostosowania zawartości strony do Twoich preferencji. Używane są również w celu tworzenia anonimowych statystyk.</li>
//                 <li>Pliki cookie są danymi informatycznymi występującymi na ogół w formacie tekstowym zapisywanymi na urządzeniu końcowym, zawierające dane (w tym nazwę) dotyczące strony internetowej.</li>
//                 <li>Podmiotem odpowiedzialnym za automatyczne umieszczanie na Twoim urządzeniu plików cookie jest operator Strony projektu Nowa tęcza na Placu Zbawiciela.</li>
//                 <li>Strona projektu Nowa tęcza na Placu Zbawiciela stosuje dwa rodzaje plików cookie:
//                 <ol>
//                 <li>sesyjne, czyli takie, które pozwalają zapamiętać dokonane wybory. Pozostają one na urządzeniu końcowym do czasu zakończenia sesji strony internetowej/aplikacji bądź wyłączenia przeglądarki.</li>
//                 <li>stałe, czyli takie, które są przechowywane na urządzeniu przez czas zdefiniowany w parametrach danego pliku.</li>
//                 </ol>
//                 </li>
//                 <li>Strona projektu Nowa tęcza na Placu Zbawiciela korzysta z funkcjonalności analizy internetowej Google Analytics, która również używa plików cookie.</li>
//                 <li>Pliki cookie można wyczyścić, wyłączyć lub ograniczyć ich przechowywanie w ustawieniach przeglądarki internetowej. Może to wpłynąć na niektóre funkcjonalności Strony projektu Nowa tęcza na Placu Zbawiciela.</li>
//                 <li>Pliki cookie mogą być wykorzystywane przez współpracujących ze Stowarzyszeniem partnerów.</li>
//                 </ol>
//             </Card>
//         </main>
//     </section>
// }

// export const Head = ({pageContext, location}) => <Seo title={"Polityka prywatności"} description={"Polityka prywatności"} pageContext={pageContext} location={location}/>