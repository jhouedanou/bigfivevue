<template>
  <ContenuAltLayout>
    <PageLoader v-if="state.isLoading" />
    <div id="menumobile">
      <Logo :id="3" v-if="!isSidebarOpen" class="desktop" />
      <Logo :id="2" v-if="!isSidebarOpen" class="mobile" />
      <button
        id="menutrigger"
        @click="
          isSidebarOpen = !isSidebarOpen;
          isMainFull = !isMainFull;
          toClose = !toClose;
        "
        :class="{ dana: closeBlack }"
      >
        <img loading="lazy" v-if="toClose" src="/img/btn-close.png" alt="" />
        <img
          loading="lazy"
          v-if="!toClose"
          src="/img/btn-menu.png"
          alt=""
          class="desktop"
        />
        <img
          loading="lazy"
          v-if="!toClose"
          src="/img/btn-menu-mobile.svg"
          alt=""
          class="mobile"
        />
      </button>
    </div>
    <div
      id="sidebar"
      class="sidebar rakim"
      :class="{ flipit: state.isSlide1Active, open: isSidebarOpen }"
    >
      <Logo :id="2" />
      <Menu :page="'/solutions'" />
      <Menumobile />
    </div>

    <div id="rakimz" class="swiper" ref="swiperContainer">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <!-- solutionsBanner -->
          <div
            id="solutionBanner"
            :style="{
              backgroundImage:
                windowWidth >= 1024
                  ? `url(/img/solutions/bigcity/banner.jpg)`
                  : `url(/img/solutions/bigcity/homeMobile.jpg)`,
            }"
          >
            <div class="cartouchez">
              <i
                class="solutionlogo"
                :style="{ backgroundImage: `url(/img/solutions/bigcity.svg)` }"
              ></i>
              <h4>
                Fédérez votre audience et faites<br />rayonner votre marque
              </h4>
              <a id="btnDiscova" @click="scrollToElement">Découvrir</a>
            </div>
          </div>
        </div>
        <div id="avecbigcity" class="swiper-slide">
          <div
            id="restedelapage"
            class="dflex justify-content-center align-items-center"
          >
            <div id="pargrapheIntros" v-if="matchingSolution">
              <div id="introforeal">
                <p>
                  <strong>BIG CITY</strong> est un CMS d’application No Code qui
                  permet de créer des applications<br />de Brand Content
                  personnalisées et bien plus encore pour les
                  <span
                    >marques, réseaux<br />franchisés, institutions,
                    collectivités, fédérations, associations…</span
                  >.
                </p>
                <p>
                  Bien exploité, ce média permet à la marque de fédérer sa
                  communauté de professionnels<br />au bénéfice de sa communauté
                  de consommateurs en centralisant toute l’actualité<br />événementielle
                  de son territoire et en la transformant en levier
                  d’opportunités.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div id="unannuairegeolocalise" class="swiper-slide">
          <div
            class="divwrapper dflex justify-content-center align-items-center"
          >
            <div id="sectionunbigcity" class="container">
              <div v-if="windowWidth >= 1024" id="intro" class="obam">
                <h4>Avec BIG City, vous pouvez rapidement créer…</h4>
              </div>
            </div>
            <div id="sectiontwobigcity" class="container">
              <div class="row no-gutters noh">
                <div class="col-md-6">
                  <img
                    loading="lazy"
                    class="img-fluid"
                    src="/img/solutions/bigcity/igcityanim_2.png"
                    alt
                  />
                </div>
                <div class="col-md-6">
                  <div v-if="windowWidth < 1024" id="intro" class="obam">
                    <h4>Avec BIG City, vous pouvez rapidement créer…</h4>
                  </div>
                  <ul>
                    <li>une application Brand-content</li>
                    <li>une application BtoB</li>
                    <li>une marketplace</li>
                    <li>un guide touristique</li>
                    <li>une application événementielle</li>
                    <li>une plateforme associative</li>
                    <li>un annuaire BtoBtoC</li>
                    <li>une plateforme pour votre fédération</li>
                    <li>une application sur-mesure</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="outildefielisation" class="swiper-slide">
          <div id="sectionthreebigcity" class="container-fluid">
            <div class="row no-gutters">
              <div v-if="windowWidth <= 1024" id="carousel-wrapper">
                <div
                  id="carouselExampleIndicators"
                  class="carousel slide"
                  data-bs-ride="carousel"
                >
                  <div class="carousel-inner">
                    <div class="imgwrapper p-0 conundrum carousel-item active">
                      <img
                        loading="lazy"
                        src="/img/solutions/bigcity/17.png"
                        alt
                      />
                      <p class="legende">Géolocalisation des établissements</p>
                    </div>

                    <div class="imgwrapper p-0 carousel-item conundrum">
                      <img
                        loading="lazy"
                        src="/img/solutions/bigcity/15.png"
                        alt
                      />
                      <p class="legende">Page établissement</p>
                    </div>
                    <div class="imgwrapper p-0 conundrum carousel-item">
                      <img
                        loading="lazy"
                        src="/img/solutions/bigcity/16.png"
                        alt
                      />
                      <p class="legende">Vue des établissements par liste</p>
                    </div>
                  </div>
                </div>
                <button
                  class="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide="prev"
                >
                  <span
                    class="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span class="visually-hidden">Previous</span>
                </button>
                <button
                  class="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide="next"
                >
                  <span
                    class="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span class="visually-hidden">Next</span>
                </button>
              </div>
              <div class="col-md-4 offset-md-1 letexte">
                <div class="paddingzone">
                  <img
                    loading="lazy"
                    src="/img/solutions/bigcity/logopetit.svg"
                    alt
                  />
                  <h3>C’est un annuaire géolocalisé</h3>
                  <p>
                    Vous avez désormais le moyen de valoriser l’expertise de vos
                    revendeurs, maillons essentiels pour transformer l’acte
                    d’engagement quel qu’il soit : achat, conversion ou
                    fidélisation
                  </p>
                  <p>
                    Le CMS BIG CITY a été conçu comme un guide Événementiel
                    interactif permettant de donner de la visibilité aux points
                    de vente qui y sont inscrits, à leurs événements ainsi que
                    ceux que la marque exploitante sponsorise
                  </p>
                  <p>
                    Au fur et à mesure que votre réseau grandit, ajoutez
                    facilement à votre application vos nouveaux établissement
                  </p>
                </div>
              </div>
              <div
                v-if="windowWidth > 1024"
                class="col-md-7 d-flex align-items-center justify-content-center"
              >
                <div
                  class="row d-flex align-items-center justify-content-center"
                >
                  <div class="imgwrapper col-md-4 col-sm-12 p-0 conundrum">
                    <img
                      loading="lazy"
                      class="img-fluid"
                      src="/img/solutions/bigcity/17.png"
                      alt
                    />
                    <p class="legende">Géolocalisation des établissements</p>
                  </div>

                  <div class="imgwrapper col-md-4 col-sm-12 p-0 conundrum">
                    <img
                      loading="lazy"
                      class="img-fluid"
                      src="/img/solutions/bigcity/15.png"
                      alt
                    />
                    <p class="legende">Page établissement</p>
                  </div>
                  <div class="imgwrapper col-md-4 col-sm-12 p-0 conundrum">
                    <img
                      loading="lazy"
                      class="img-fluid"
                      src="/img/solutions/bigcity/16.png"
                      alt
                    />
                    <p class="legende">Vue des établissements par liste</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="generateurdecontenu" class="swiper-slide">
          <div id="sectionfourbigcity" class="container-fluid">
            <div class="row no-gutters">
              <div class="row no-gutters">
                <div
                  class="col-md-7 fusbal d-flex align-items-end justify-content-center flex-column"
                >
                  <div class="paddingzone imgwrapper">
                    <img
                      loading="lazy"
                      class="img-fluid"
                      src="/img/solutions/bigcity/18.png"
                      alt
                    />

                    <p class="legende">
                      Homepage utilisateur<br />Programme de fidélité
                    </p>
                  </div>
                </div>
                <div class="col-md-5 letexte">
                  <img
                    loading="lazy"
                    src="/img/solutions/bigcity/logopetit.svg"
                    alt
                  />
                  <h3>C’est un outil de fidélisation</h3>
                  <p>
                    BIG CITY permet la mise en place de programmes de fidélité
                    pour les consommateurs et de motivation pour les points de
                    vente prescripteurs de la marque.
                  </p>
                  <p>
                    Entièrement personnalisables, ce sont les outils idéaux pour
                    lancer un produit ou dynamiser des ventes et récompenser les
                    PDV en suivant en temps réel leurs performances.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="gestionactivites" class="swiper-slide">
          <div id="sectionfivebigcity" class="container-fluid">
            <div class="row no-gutters">
              <div v-if="windowWidth <= 1024" id="carousel-wrapper2">
                <div
                  id="carouselExampleIndicators2"
                  class="carousel slide"
                  data-bs-ride="carousel"
                >
                  <div class="carousel-inner">
                    <div class="imgwrapper p-0 conundrum carousel-item active">
                      <img
                        loading="lazy"
                        src="/img/solutions/bigcity/19.png"
                        alt
                      />
                      <p class="legende">
                        Homepage utilisateur<br />Catégorie Bons plans
                      </p>
                    </div>
                    <div class="imgwrapper p-0 conundrum carousel-item">
                      <img
                        loading="lazy"
                        src="/img/solutions/bigcity/20.png"
                        alt
                      />
                      <p class="legende">Catégorie Actualités</p>
                    </div>
                  </div>
                </div>

                <button
                  class="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide="prev"
                >
                  <span
                    class="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span class="visually-hidden">Previous</span>
                </button>
                <button
                  class="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide="next"
                >
                  <span
                    class="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span class="visually-hidden">Next</span>
                </button>
              </div>
              <div class="col-md-4 offset-md-1 letexte">
                <div class="paddingzone">
                  <img
                    loading="lazy"
                    src="/img/solutions/bigcity/logopetit.svg"
                    alt
                  />
                  <h3>C’est un Générateur de contenu…</h3>
                  <p>
                    … pour la marque, ses produits et ses événements, mais
                    également pour les Points de vente : bons plans, promotions,
                    lancement de produits, événements, actualités…
                  </p>
                </div>
              </div>
              <div v-if="windowWidth > 1024" class="col-md-7 d-flex conundrum">
                <div class="row d-flex fusbal">
                  <div class="col-md-6 imgwrapper">
                    <img
                      loading="lazy"
                      class="img-fluid"
                      src="/img/solutions/bigcity/19.png"
                      alt
                    />
                    <p class="legende">
                      Homepage utilisateur<br />Catégorie Bons plans
                    </p>
                  </div>
                  <div class="col-md-6 imgwrapper">
                    <img
                      loading="lazy"
                      class="img-fluid"
                      src="/img/solutions/bigcity/20.png"
                      alt
                    />
                    <p class="legende">Catégorie Actualités</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="alternativeresociaux" class="swiper-slide">
          <div id="sectionsixbigcity" class="container-fluid">
            <div class="row no-gutters">
              <!-- div s"affichant si la résoluton d'écran est inférieure ou égale à 1024px.  -->

              <div v-if="windowWidth <= 1024" id="carousel-wrapper3">
                <div
                  id="carouselExampleIndicators3"
                  class="carousel slide"
                  data-bs-ride="carousel"
                >
                  <div class="carousel-inner">
                    <div class="imgwrapper p-0 conundrum carousel-item active">
                      <img
                        loading="lazy"
                        src="/img/solutions/bigcity/21.png"
                        alt
                      />
                      <p class="legende">
                        Homepage Pros<br />Programme de motivation
                      </p>
                    </div>
                    <div class="imgwrapper p-0 conundrum carousel-item">
                      <img
                        loading="lazy"
                        src="/img/solutions/bigcity/22.png"
                        alt
                      />
                      <p class="legende">Homepage Pros<br />Rapports</p>
                    </div>
                    <div class="imgwrapper p-0 conundrum carousel-item">
                      <img
                        loading="lazy"
                        src="/img/solutions/bigcity/23.png"
                        alt
                      />
                      <p class="legende">
                        ajout d'un nouvel<br />établissement
                      </p>
                    </div>
                  </div>
                </div>
                <button
                  class="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide="prev"
                >
                  <span
                    class="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span class="visually-hidden">Previous</span>
                </button>
                <button
                  class="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide="next"
                >
                  <span
                    class="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span class="visually-hidden">Next</span>
                </button>
              </div>
              <div v-if="windowWidth > 1024" class="col-md-8 conundrum">
                <div class="row fusbal">
                  <div class="col-md-4 imgwrapper">
                    <img
                      loading="lazy"
                      class="img-fluid"
                      src="/img/solutions/bigcity/21.png"
                      alt
                    />
                    <p class="legende">
                      Homepage Pros<br />Programme de motivation
                    </p>
                  </div>
                  <div class="col-md-4 imgwrapper">
                    <img
                      loading="lazy"
                      class="img-fluid"
                      src="/img/solutions/bigcity/22.png"
                      alt
                    />
                    <p class="legende">Homepage Pros<br />Rapports</p>
                  </div>
                  <div class="col-md-4 imgwrapper">
                    <img
                      loading="lazy"
                      class="img-fluid"
                      src="/img/solutions/bigcity/23.png"
                      alt
                    />
                    <p class="legende">ajout d'un nouvel<br />établissement</p>
                  </div>
                </div>
              </div>
              <div class="col-md-4 letexte">
                <img
                  loading="lazy"
                  src="/img/solutions/bigcity/logopetit.svg"
                  alt
                />
                <h3>C’est un gestionnaire d’activité pour les pros</h3>
                <p>
                  Les propriétaires des PDV peuvent créer et piloter leur page
                  PDV depuis leur compte PRO. En un clic, ils ont accès à leur
                  dashboard business (revenus, points obtenus dans le programme
                  de motivation, les raccourcis vers des cadeaux, la possibilité
                  d’ajouter rapidement des événements ou d’envoyer
                  notifications…).
                </p>
              </div>
            </div>
          </div>
        </div>
        <div id="createuractivation" class="swiper-slide">
          <div id="sectionsevenbigcity" class="container-fluid">
            <div class="row no-gutters">
              <div
                v-if="windowWidth <= 1024"
                id="carousel-wrapper4"
                class="col-md-7 conundrum"
              >
                <div
                  id="carouselExampleIndicators4"
                  class="carousel slide"
                  data-bs-ride="carousel"
                >
                  <div class="carousel-inner">
                    <div class="imgwrapper carousel-item active">
                      <img
                        loading="lazy"
                        class="img-fluid"
                        src="/img/solutions/bigcity/24.png"
                        alt
                      />
                      <p class="legende">
                        Catégorie Fanwall<br />d’un établissement
                      </p>
                    </div>
                    <div class="imgwrapper carousel-item">
                      <img
                        loading="lazy"
                        class="img-fluid"
                        src="/img/solutions/bigcity/24a.png"
                        alt
                      />
                      <p class="legende">Notifications de bons plans</p>
                    </div>
                  </div>
                </div>

                <button
                  class="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide="prev"
                >
                  <span
                    class="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span class="visually-hidden">Previous</span>
                </button>
                <button
                  class="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide="next"
                >
                  <span
                    class="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span class="visually-hidden">Next</span>
                </button>
              </div>
              <div class="col-md-4 offset-md-1 letexte">
                <div class="paddingzone">
                  <img
                    loading="lazy"
                    src="/img/solutions/bigcity/logopetit.svg"
                    alt
                  />
                  <h3>C’est une alternative aux réseaux sociaux</h3>
                  <p>
                    La marque crée son propre réseau social. La marque devient
                    un média qui fédère sa propre communauté pour produire de la
                    valeur et de l’engagement.
                  </p>
                </div>
              </div>
              <div v-if="windowWidth > 1024" class="col-md-7 conundrum">
                <div class="row fusbal">
                  <div class="col-md-6 imgwrapper">
                    <img
                      loading="lazy"
                      class="img-fluid"
                      src="/img/solutions/bigcity/24.png"
                      alt
                    />
                    <p class="legende">
                      Catégorie Fanwall<br />d’un établissement
                    </p>
                  </div>
                  <div class="col-md-6 imgwrapper">
                    <img
                      loading="lazy"
                      class="img-fluid"
                      src="/img/solutions/bigcity/24a.png"
                      alt
                    />
                    <p class="legende">Notifications de bons plans</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="boutiqueintegree" class="swiper-slide">
          <div id="sectioneightbigcity" class="container-fluid">
            <div class="row no-gutters">
              <div
                v-if="windowWidth < 1024"
                class="col-md-8"
                id="carousel-wrapper5"
              >
                <div
                  id="carouselExampleIndicators5"
                  class="carousel slide"
                  data-bs-ride="carousel"
                >
                  <div class="carousel-inner">
                    <div class="imgwrapper carousel-item active">
                      <img
                        loading="lazy"
                        class="img-fluid"
                        src="/img/solutions/bigcity/26.png"
                        alt
                      />
                      <p class="legende">
                        Homepage utilisateur<br />Jeu concours
                      </p>
                    </div>
                    <div class="imgwrapper carousel-item">
                      <img
                        loading="lazy"
                        class="img-fluid"
                        src="/img/solutions/bigcity/27.png"
                        alt
                      />
                      <p class="legende">Module Pronostiques</p>
                    </div>
                    <div class="imgwrapper carousel-item">
                      <img
                        loading="lazy"
                        class="img-fluid"
                        src="/img/solutions/bigcity/26a.png"
                        alt
                      />
                      <p class="legende">Module Pronostiques<br />Classement</p>
                    </div>
                  </div>
                </div>
                <button
                  class="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide="prev"
                >
                  <span
                    class="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span class="visually-hidden">Previous</span>
                </button>
                <button
                  class="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide="next"
                >
                  <span
                    class="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span class="visually-hidden">Next</span>
                </button>
              </div>
              <div v-if="windowWidth >= 1024" class="col-md-8 conundrum">
                <div class="row fusbal">
                  <div class="col-md-4 imgwrapper">
                    <img
                      loading="lazy"
                      class="img-fluid"
                      src="/img/solutions/bigcity/26.png"
                      alt
                    />
                    <p class="legende">
                      Homepage utilisateur<br />Jeu concours
                    </p>
                  </div>
                  <div class="col-md-4 imgwrapper">
                    <img
                      loading="lazy"
                      class="img-fluid"
                      src="/img/solutions/bigcity/27.png"
                      alt
                    />
                    <p class="legende">Module Pronostiques</p>
                  </div>
                  <div class="col-md-4 imgwrapper">
                    <img
                      loading="lazy"
                      class="img-fluid"
                      src="/img/solutions/bigcity/26a.png"
                      alt
                    />
                    <p class="legende">Module Pronostiques<br />Classement</p>
                  </div>
                </div>
              </div>
              <div class="col-md-4 letexte">
                <img
                  loading="lazy"
                  src="/img/solutions/bigcity/logopetit.svg"
                  alt
                />
                <h3>C’est un créateur d’activations</h3>
                <p>
                  BIG CITY permet la mise en place d’activations digitales
                  (jeux, concours, loteries, cartes à gratter…) qui renforcent
                  le lien entre la marque et le consommateur.
                </p>
                <p>
                  Le module PRONOSTICS permet une animation originale en ligne
                  et dans les points de vente autour de grands événements
                  sportifs (ponctuels ou tout au long de l’année) fédérateurs.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div id="billeterie" class="swiper-slide">
          <div id="sectionninebigcity" class="container-fluid">
            <div class="row no-gutters">
              <div v-if="windowWidth <= 1024" id="carousel-wrapper6">
                <div
                  id="carouselExampleIndicators6"
                  class="carousel slide"
                  data-bs-ride="carousel"
                >
                  <div class="carousel-inner">
                    <div class="imgwrapper carousel-item active">
                      <img
                        loading="lazy"
                        class="img-fluid"
                        src="/img/solutions/bigcity/ndole1.png"
                      />

                      <p class="legende">Vue par liste</p>
                    </div>
                    <div class="imgwrapper carousel-item">
                      <img
                        loading="lazy"
                        class="img-fluid"
                        src="/img/solutions/bigcity/ndole2.png"
                      />
                      <p class="legende">Commande</p>
                    </div>
                    <div class="imgwrapper carousel-item">
                      <img
                        loading="lazy"
                        class="img-fluid"
                        src="/img/solutions/bigcity/ndole3.png"
                      />
                      <p class="legende">
                        Prise recommande sur place<br />ou en ligne
                      </p>
                    </div>
                    <div class="imgwrapper carousel-item">
                      <img
                        loading="lazy"
                        class="img-fluid"
                        src="/img/solutions/bigcity/ndole4.png"
                      />
                      <p class="legende">Suivi de commande en temps direct</p>
                    </div>
                    <div class="imgwrapper carousel-item">
                      <img
                        loading="lazy"
                        class="img-fluid"
                        src="/img/solutions/bigcity/ndole5.png"
                      />
                      <p class="legende">Solution de Paiement digital</p>
                    </div>
                    <div class="imgwrapper carousel-item">
                      <img
                        loading="lazy"
                        class="img-fluid"
                        src="/img/solutions/bigcity/ndole6.png"
                      />
                      <p class="legende">Visualisation des commandes</p>
                    </div>

                    <div class="imgwrapper carousel-item">
                      <img
                        loading="lazy"
                        class="img-fluid"
                        src="/img/solutions/bigcity/ndole7.png"
                      />
                      <p class="legende">
                        Visualisation en temps réel <br />de la livraison
                      </p>
                    </div>

                    <div class="imgwrapper carousel-item">
                      <img
                        loading="lazy"
                        class="img-fluid"
                        src="/img/solutions/bigcity/ndole8.png"
                      />
                      <p class="legende">Notification de livraison</p>
                    </div>
                  </div>
                </div>

                <button
                  class="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide="prev"
                >
                  <span
                    class="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span class="visually-hidden">Previous</span>
                </button>
                <button
                  class="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide="next"
                >
                  <span
                    class="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span class="visually-hidden">Next</span>
                </button>
              </div>
              <div class="col-md-4 offset-md-1 letexte">
                <div class="paddingzone">
                  <img
                    loading="lazy"
                    src="/img/solutions/bigcity/logopetit.svg"
                    alt
                  />
                  <h3>C’est une boutique intégrée</h3>
                  <p>
                    L’application dispose d’un module e-commerce intégré
                    permettant les paiements digitaux.
                  </p>
                  <p>
                    Il permet aux établissements de vendre leurs produits de
                    façon digitale, prise de commande par le personnel ou
                    commande directe par les clients, sur place, à emporter ou à
                    se faire livrer. Le système permet la vente par mobile
                    money, carte de crédit ou cash et est fourni avec un
                    dashboard analytics pour suivre ses ventes.
                  </p>
                  <p>
                    Les établissements sélectionnent eux-mêmes leurs livreurs et
                    organisent les tarifs comme ils le souhaitent en fonction de
                    la distance, ce qui leur donne une plus grande flexibilité
                    que ce qu’offrent les autres plateformes de livraison.
                  </p>
                </div>
              </div>
              <div v-if="windowWidth > 1024" class="col-md-7 conundrum">
                <div id="galerieimg">
                  <div ref="swiperContainer2" id="imagshop" class="swiper">
                    <div id="swidel" class="swiper-wrapper">
                      <div class="imgwrapper swiper-slide">
                        <img
                          loading="lazy"
                          class="img-fluid"
                          src="/img/solutions/bigcity/ndole1.png"
                        />
                        <p class="legende">Vue par liste</p>
                      </div>
                      <div class="imgwrapper swiper-slide">
                        <img
                          loading="lazy"
                          class="img-fluid"
                          src="/img/solutions/bigcity/ndole2.png"
                        />
                        <p class="legende">Commande</p>
                      </div>
                      <div class="imgwrapper swiper-slide">
                        <img
                          loading="lazy"
                          class="img-fluid"
                          src="/img/solutions/bigcity/ndole3.png"
                        />
                        <p class="legende">
                          Prise recommande sur place<br />ou en ligne
                        </p>
                      </div>
                      <div class="imgwrapper swiper-slide">
                        <img
                          loading="lazy"
                          class="img-fluid"
                          src="/img/solutions/bigcity/ndole4.png"
                        />
                        <p class="legende">Suivi de commande en temps direct</p>
                      </div>
                      <div class="imgwrapper swiper-slide">
                        <img
                          loading="lazy"
                          class="img-fluid"
                          src="/img/solutions/bigcity/ndole5.png"
                        />
                        <p class="legende">Solution de Paiement digital</p>
                      </div>
                      <div class="imgwrapper swiper-slide">
                        <img
                          loading="lazy"
                          class="img-fluid"
                          src="/img/solutions/bigcity/ndole6.png"
                        />
                        <p class="legende">Visualisation des commandes</p>
                      </div>
                      <div class="imgwrapper swiper-slide">
                        <img
                          loading="lazy"
                          class="img-fluid"
                          src="/img/solutions/bigcity/ndole7.png"
                        />
                        <p class="legende">
                          Visualisation en temps réel <br />de la livraison
                        </p>
                      </div>
                      <div class="imgwrapper swiper-slide">
                        <img
                          loading="lazy"
                          class="img-fluid"
                          src="/img/solutions/bigcity/ndole8.png"
                        />
                        <p class="legende">Notification de livraison</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="aspirateurdate" class="swiper-slide">
          <div id="sectiontenbigcity" class="container-fluid">
            <div class="row no-gutters">
              <div v-if="windowWidth <= 1024" id="carousel-wrapper7">
                <div
                  id="carouselExampleIndicators7"
                  class="carousel slide"
                  data-bs-ride="carousel"
                >
                  <div class="carousel-inner">
                    <div class="imgwrapper carousel-item active">
                      <img
                        loading="lazy"
                        class="img-fluid"
                        src="/img/solutions/bigcity/32.png"
                        alt
                      />
                      <p class="legende">Page événement</p>
                    </div>
                    <div class="imgwrapper carousel-item">
                      <img
                        loading="lazy"
                        class="img-fluid"
                        src="/img/solutions/bigcity/31.png"
                        alt
                      />
                      <p class="legende">Billetterie événementielle</p>
                    </div>
                    <div class="imgwrapper carousel-item">
                      <img
                        loading="lazy"
                        class="img-fluid"
                        src="/img/solutions/bigcity/30.png"
                        alt
                      />
                      <p class="legende">Billet événement</p>
                    </div>
                  </div>
                </div>
              </div>
              <div v-if="windowWidth >= 1024" class="col-md-8 conundrum">
                <div class="row fusbal">
                  <div class="col-md-4 imgwrapper">
                    <img
                      loading="lazy"
                      class="img-fluid"
                      src="/img/solutions/bigcity/32.png"
                      alt
                    />
                    <p class="legende">Page événement</p>
                  </div>
                  <div class="col-md-4 imgwrapper">
                    <img
                      loading="lazy"
                      class="img-fluid"
                      src="/img/solutions/bigcity/31.png"
                      alt
                    />
                    <p class="legende">Billetterie événementielle</p>
                  </div>
                  <div class="col-md-4 imgwrapper">
                    <img
                      loading="lazy"
                      class="img-fluid"
                      src="/img/solutions/bigcity/30.png"
                      alt
                    />
                    <p class="legende">Billet événement</p>
                  </div>
                </div>
              </div>
              <div class="col-md-4 letexte">
                <div class="paddingzone">
                  <img
                    loading="lazy"
                    src="/img/solutions/bigcity/logopetit.svg"
                    alt
                  />

                  <h3>C’est un guide et une billetterie événementielle</h3>
                  <p>
                    Les utilisateurs peuvent acheter des billets de concert,
                    festival ou tout type d’événement depuis l’application !
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="lastfreakingsection" class="swiper-slide">
          <div id="sectionelevenbigcity" class="container-fluid">
            <div class="row no-gutters">
              <div class="col-md-5 offset-md-1 letexte">
                <div class="paddingzone">
                  <img
                    loading="lazy"
                    src="/img/solutions/bigcity/logopetit.svg"
                    alt
                  />
                  <h3>C’est un aspirateur de datas</h3>
                  <p>
                    Depuis le dashboard de l’application, directement depuis
                    votre smartphone la marque prend le contrôle du contenu,
                    attribue les rôles de ses administrés et suit les analytics
                    de son écosystème pour mieux anticiper les prochaines
                    actions.
                  </p>
                </div>
              </div>
              <div id="mathers" class="col-md-6">
                <img
                  loading="lazy"
                  src="/img/solutions/bigcity/sulat.png"
                  class="img-fluid responsive-img"
                  alt
                />
                <p class="legende">Homepage Dashboard</p>
              </div>
            </div>
          </div>
        </div>
        <div id="tantquelepoussin" class="swiper-slide">
          <div id="sectiontwelvebigcity" class="container-fluid">
            <div class="row no-gutters">
              <div class="col-md-7" v-if="windowWidth < 1024">
                <img loading="lazy" src="/img/formules.jpg" alt />
              </div>
              <div class="col-md-7"></div>
              <div class="col-md-5 letexte">
                <div class="paddingzone">
                  <img
                    loading="lazy"
                    src="/img/solutions/bigcity/logopetit.svg"
                    alt
                  />
                  <h3>Formule 1</h3>
                  <p>
                    <strong
                      >Logiciel seul + hébergement + maintenance +
                      formation</strong
                    ><br />Vous n’avez plus qu’à vous occuper de votre contenu
                  </p>
                  <h3>Formule 2</h3>
                  <p>
                    <strong
                      >Logiciel seul + hébergement + maintenance + formation +
                      Accompagnement</strong
                    ><br />
                    On s’occupe de tout, y compris de votre contenu
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="swiper-slide">
          <div id="sectionthirteenbigcity" class="container-fluid">
            <div
              id="nosautresolutons"
              class="dflex align-content-center align-items-center justify-content-center"
            >
              <div class="container">
                <div
                  class="row no-gutters d-flex align-items-center justify-content-center"
                >
                  <h3>Découvrez nos autres solutions</h3>
                  <div class="dflex austin">
                    <div
                      class="chyna"
                      v-for="item in menusolutions"
                      :key="item.id"
                    >
                      <a
                        v-if="item.lien !== matchingSolution.lien"
                        :href="`/solutions/${item.lien}`"
                      >
                        <i
                          :style="{
                            backgroundImage: 'url(/' + item.logo + ')',
                          }"
                          alt="logo"
                        ></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!--footer-->
        <div id="bigcityfooter" class="swiper-slide">
          <div id="bigcityfooterinner">
            <FooterBigCity />
          </div>
        </div>
      </div>

      <div class="swiper-pagination"></div>
    </div>
  </ContenuAltLayout>
</template>
<script setup>
import { ref, onMounted, computed, reactive, nextTick } from "vue";
import axios from "axios";
import { useRoute } from "vue-router";
import ContenuAltLayout from "@/layouts/contenuBigCity.vue";
import FooterBigCity from "@/components/FooterBigCity.vue";
import PageLoader from "@/components/PageLoader.vue";
import "bootstrap/dist/css/bootstrap.css";
import Swiper from "swiper/bundle";
import "swiper/css/bundle";
let swiperContainer = ref(null);
let swiperContainer2 = ref(null);
let swiperInstance;
let swiperInstance2;
const solutions = ref([]);
const menusolutions = ref([]);
const route = useRoute();
const scrollPosition = ref(0);
let isSidebarOpen = ref(false);
let toClose = ref(false);
let closeBlack = ref(false);
const filterValue = route.fullPath.substring("/solutions/".length);
const scrollToElement = () => {
  const element = document.getElementById("avecbigcity");
  swiperInstance.slideNext();
};
const windowWidth = ref(0);
const state = reactive({
  isLoading: true,
});
const updateWindowWidth = () => {
  windowWidth.value = window.innerWidth;
};
onUnmounted(() => {
  window.removeEventListener("resize", updateWindowWidth);
});
onMounted(() => {
  //ajouter l'id de la page  #bigcity à la balise body
  document.body.id = "bigcity";
  // ajouter la classe .bigcity à la balise body
  document.body.classList.add("bigcity");

  windowWidth.value = window.innerWidth;
  window.addEventListener("resize", updateWindowWidth);
  //window.addEventListener("scroll", onScroll);
  document.body.id = filterValue;
  document.body.classList.add("solutions");
});
onMounted(async () => {
  try {
    state.isLoading = true;
    const response = await axios.get("/api/solutions.json", {
      timeout: 10000,
    });
    solutions.value = response.data;
    menusolutions.value = response.data.map((solution) => ({
      id: solution.id,
      logo: solution.logo,
      lien: solution.lien,
    }));
    state.isLoading = false;
  } catch (error) {
    console.error(error);
    state.isLoading = false;
  }
});
const matchingSolution = computed(() => {
  const index = solutions.value.findIndex(
    (solution) => solution.lien === filterValue
  );
  return {
    ...solutions.value[index],
  };
});

onMounted(async () => {
  if (windowWidth.value > 1024) {
    // Initialisation du swiper sur la page
    swiperInstance = new Swiper(swiperContainer.value, {
      direction: "vertical",
      slidesPerView: 1,
      spaceBetween: 0,
      mousewheel: true,
      keyboard: true,
      rewind: true,
      parallax: true,
      draggable: true,
      autoHeight: true,
      lazy: true,
      observer: true,
      observeParents: true,
      parallax: true,
      autoplay: {
        delay: 10000, // delay between transitions in ms
        disableOnInteraction: true, // enable/disable autoplay on user interaction
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      on: {
        init: function () {},
      },
    });
    await nextTick();
    swiperInstance2 = new Swiper(swiperContainer2.value, {
      direction: "horizontal",
      slidesPerView: 3,
      spaceBetween: 0,
      rewind: true,
      draggable: true,
      autoHeight: true,
      lazy: false,
      loop: true,
      /*  observer: true,
      observeParents: true,
      parallax: true,
      */ autoplay: {
        delay: 4000, // delay between transitions in ms
        disableOnInteraction: true, // enable/disable autoplay on user interaction
      },

      on: {
        init: function () {},
      },
    });
    //console.log(swiperContainer2.value);
  } else {
    const { default: Hammer } = await import("hammerjs");
    const { Carousel } = await import("bootstrap");
    // 1st carousel
    const carouselElement = document.querySelector(
      "#carouselExampleIndicators"
    );
    const hammer = new Hammer(carouselElement);
    hammer.on("swipeleft", function () {
      $("#carouselExampleIndicators").carousel("next");
    });
    hammer.on("swiperight", function () {
      $("#carouselExampleIndicators").carousel("prev");
    });
    const carousel = new Carousel(carouselElement, {
      interval: 2000,
    });
    // 2nd carousel
    const carouselElement2 = document.querySelector(
      "#carouselExampleIndicators2"
    );
    const hammer2 = new Hammer(carouselElement2);
    hammer2.on("swipeleft", function () {
      $("#carouselExampleIndicators2").carousel("next");
    });
    hammer2.on("swiperight", function () {
      $("#carouselExampleIndicators2").carousel("prev");
    });
    const carousel2 = new Carousel(carouselElement2, {
      interval: 2000,
    });
    //3e carousel
    const carouselElement3 = document.querySelector(
      "#carouselExampleIndicators3"
    );
    const hammer3 = new Hammer(carouselElement3);
    hammer3.on("swipeleft", function () {
      $("#carouselExampleIndicators3").carousel("next");
    });
    hammer3.on("swiperight", function () {
      $("#carouselExampleIndicators3").carousel("prev");
    });
    const carousel3 = new Carousel(carouselElement3, {
      interval: 2000,
    });
    //4e carousel
    const carouselElement4 = document.querySelector(
      "#carouselExampleIndicators4"
    );
    const hammer4 = new Hammer(carouselElement4);
    hammer4.on("swipeleft", function () {
      $("#carouselExampleIndicators4").carousel("next");
    });
    hammer4.on("swiperight", function () {
      $("#carouselExampleIndicators4").carousel("prev");
    });
    const carousel4 = new Carousel(carouselElement4, {
      interval: 2000,
    });
    //5e carousel
    const carouselElement5 = document.querySelector(
      "#carouselExampleIndicators5"
    );
    const hammer5 = new Hammer(carouselElement5);
    hammer5.on("swipeleft", function () {
      $("#carouselExampleIndicators5").carousel("next");
    });
    hammer5.on("swiperight", function () {
      $("#carouselExampleIndicators5").carousel("prev");
    });
    const carousel5 = new Carousel(carouselElement5, {
      interval: 2000,
    });
    //6e carousel
    const carouselElement6 = document.querySelector(
      "#carouselExampleIndicators6"
    );
    const hammer6 = new Hammer(carouselElement6);
    hammer6.on("swipeleft", function () {
      $("#carouselExampleIndicators6").carousel("next");
    });
    hammer6.on("swiperight", function () {
      $("#carouselExampleIndicators6").carousel("prev");
    });
    const carousel6 = new Carousel(carouselElement6, {
      interval: 2000,
    });
    //7e carousel
    const carouselElement7 = document.querySelector(
      "#carouselExampleIndicators7"
    );
    const hammer7 = new Hammer(carouselElement7);
    hammer7.on("swipeleft", function () {
      $("#carouselExampleIndicators7").carousel("next");
    });
    hammer7.on("swiperight", function () {
      $("#carouselExampleIndicators7").carousel("prev");
    });
    const carousel7 = new Carousel(carouselElement7, {
      interval: 2000,
    });
  }
});
</script>
<style lang="scss" scoped>
#footercontactfrom {
  display: none !important;
  height: 100vh !important;
  .container {
    max-width: 100vw !important;
  }
  .container {
    width: 100vw !important;
  }
}
#shefg {
  width: 100vw !important;
  height: auto !important;
}
#oman {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  flex-direction: column !important;
}
#bigcityfooterinner {
  flex-direction: column !important;
}
#bigcityfooter {
  flex-direction: column !important;
}
#nosautresolutons {
  padding-bottom: 0em !important;
  h3 {
    margin-top: 0em !important;
    padding-top: 0em !important;
  }
}
#sectionthirteenbigcity {
  height: 100%;
  display: flex;
  justify-content: center;
}

#header-alt {
  position: relative !important;
}

@media screen and (min-width: 1024px) {
  #galerieimg {
    height: 100vh;
    align-items: center;
    display: flex;
    .swiper-slide {
      max-width: 402px !important;
      max-height: none !important;
      min-height: 722px !important;
      display: flex !important;
      align-items: center !important;
    }
  }
  .swiper-wrapper {
    height: 100vh;
  }

  .imgwrapper {
    img {
      //   min-width: 280px;
    }
  }
  .conundrum {
    img {
      //  min-width: 280px;
    }
  }
  .swiper {
    width: 100%;
    height: 100vh;
  }

  .swiper-horizontal {
    height: auto;
  }

  .swiper-slide {
    /* Styles pour les slides */
    padding: 0;
    margin: 0 auto;
  }
}

#restedelapage {
  padding: 0;
  margin: 0 auto;
}

.divwrapper {
  padding: 0;
  margin: 0 auto;
}

@media screen and (max-width: 1024px) {
  .swiper-wrapper {
    flex-direction: column;
    overflow-y: scroll;
    min-height: 100%;
    height: 100%;
    overflow-x: hidden;
    margin: 0;
    padding: 0;
    width: 100vw;
  }

  .swiper {
    width: 100%;
    height: auto;
  }

  .swiper-wrapper {
    .swiper-slide {
      padding: 0em !important;
      min-height: 100% !important;
    }
  }

  .swiper-horizontal {
    height: auto;
  }

  #introforeal {
    p {
      &:nth-of-type(1) {
        margin-bottom: 1em !important;
      }

      &:nth-of-type(2) {
        margin-bottom: 1em !important;
      }
    }
  }
}
</style>
