var data_json;

const getinfo = async () => {
  const response = await fetch("starter-code/data.json");
  const data = await response.json();

  console.log(data.destinations);
  data_json = data.destinations;
  change_destinatio(0)
};

getinfo();

const change_destinatio = (destination) => {
  let divContainer = document.getElementById("section_info");
  let data = data_json[destination];
  console.log(data)
  divContainer.innerHTML = `
    <section class="section_info_planets">
    <section class="main_section">
      <h1 class="main_section-title">
        01 PICK YOUR DESTINATION
        <figcaption>
          <img
            class="image_main_section"
            src="${data.images.webp}"
            alt="imagen de un planeta"
          />
        </figcaption>
      </h1>
    </section>
    <section class="navigate_section">
      <section class="list">
        <button onclick="change_destinatio(0)" class="list_link moon" >MOON</button>
        <button onclick="change_destinatio(1)"  class="list_link mars" >MARS</button>
        <button onclick="change_destinatio(2)"  class="list_link europa">EUROPA</button>
        <button onclick="change_destinatio(3)"  class="list_link titan">TITAN</button>
      </section>
    </section>
    <section class="info_section">
      <h1 class="name_planet">${data.name}</h1>
      <p class="concept_planets">
        ${data.description}
      </p>
    </section>
    <section class="line">
      <span> </span>
    </section>

    <section class="aditional_info">
      <section class="distance">
        <h1 class="title">AVG. DISTANCE</h1>
        <h2>${data.distance}</h2>
      </section>
      <section class="travel">
        <h1 class="title">EST. TRAVEL TIME</h1>
        <h2>${data.travel}</h2>
      </section>
    </section>
  </section>
    `;
};
