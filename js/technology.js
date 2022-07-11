let data_json;

const get_info = async () => {
  const response = await fetch("starter-code/data.json");
  const data = await response.json();
  data_json = data.technology;
  console.log(data_json);
  show_techonology(0);
};

get_info();

const show_techonology = (destino) => {
  const dad = document.getElementById("section_info_tech");
  let data_show = data_json[destino];
  dad.innerHTML = `<section class="main_section-title-tech">
    <h1 class="main_section-title-tech-title">03 SPACE LAUNCH 101</h1>
    <figcaption>
      <img
        class="image_main_section-tech"
        src=${data_show.images.portrait}
        alt="imagen de una nave espacial"
      />
    </figcaption>
  </section>

  <section class="secondary_section-title-tech">
    <section class="movement_page">
      <button class="link_page_technology" onclick="show_techonology(0)">
        1
      </button>
      <button class="link_page_technology" onclick="show_techonology(1)">
        2
      </button>
      <button class="link_page_technology" onclick="show_techonology(2)">
        3
      </button>
    </section>
    <section class="titles_page">
      <h1 class="titles_page-primary">THE TERMINOLOGY…</h1>
      <h2 class="titles_page-secondary">${data_show.name}</h2>
    </section>
    <section class="paragrapho_page">
      <p>
      ${data_show.description}
      </p>
    </section>
  </section>`;
};
