const getinfo = async () => {
  const response = await fetch("starter-code/data.json");
  const data = await response.json();

  const info = data
  console.log(info.destinations);

  
  
  document.querySelector(".moon").addEventListener("click", (e) => {
    const father = document.querySelector(".section_info_planets");
    e.preventDefault();
    const son = ` <section class="main_section">
    <h1 class="main_section-title">
      01 PICK YOUR DESTINATION
      <figcaption>
        <img
          class="image_main_section"
          src=${info.destinations[0].images.png}
          alt=""
        />
      </figcaption>
    </h1>
  </section>
  <section class="navigate_section">
    <section class="list">
      <a class="list_link moon" href="./destination.html">MOON</a>
      <a class="list_link mars" href="./destination.html">MARS</a>
      <a class="list_link europa" href="./destination.html">EUROPA</a>
      <a class="list_link titan" href="./destination.html">TITAN</a>
    </section>
  </section>
  <section class="info_section">
    <h1 class="name_planet">${info.destinations[0].name}</h1>
    <p class="concept_planets">
      ${info.destinations[0].description}
    </p>
  </section>
  <section class="line">
    <span> </span>
  </section>

  <section class="aditional_info">
    <section class="distance">
      <h1 class="title">AVG. DISTANCE</h1>
      <h2>${data.destinations[0].distance}</h2>
    </section>
    <section class="travel">
      <h1 class="title">EST. TRAVEL TIME</h1>
      <h2>${data.destinations[0].travel}</h2>
    </section>
  </section>`;

    father.innerHTML += son;
  });
};

const info = getinfo();
