let data_crew;
let i = 0;
const crew = async () => {
  const response = await fetch("starter-code/data.json");
  const data = await response.json();
  data_crew = data.crew;
  //let longitud = data.crew.length;
 // console.log("array tamano " + longitud);
  move_slider(0);
  //console.log("buenas " + (data_crew.length - 1));
};

//FUNCION PARA MOVER DE FORMA AUTOMATICA EL SLIDER
setInterval(addVal, 5000)
function addVal() {
  if (i === data_crew.length - 1) {
    i = 0;
    move_slider(i);
    console.log("estoy mostrando el "+i);
  } else {
    i = i + 1;
    move_slider(i);
    console.log("estoy mostrando el " + i);
  }
}


crew();
function move_slider(destination) {
  const div_container = document.getElementById("section_crew");
  let data_crew_front = data_crew[destination];
  div_container.innerHTML = `
<h1 class="section_crew-title">02 MEET YOUR CREW</h1>
      <figure class="section_crew_img">
        <img
          class="section_crew-img"
          src=${data_crew_front.images.webp}
          alt=""
        />
      </figure>

      <section class="section_main_info">
        <section class="points_movement">
          <div class="circle_crew" onclick="move_slider(0)"></div>
          <div class="circle_crew" onclick="move_slider(1)"></div>
          <div class="circle_crew" onclick="move_slider(2)"></div>
          <div class="circle_crew" onclick="move_slider(3)"></div>
        </section>
        <section class="section_main_info-personal">
          <h1 class="section_title_info-personal-crew">${data_crew_front.role}</h1>
          <h2 class="section_title_info-personal-name">${data_crew_front.name}</h2>
          <p class="section_title_info-personal-info">
          ${data_crew_front.bio}
          </p>
        </section>
      </section>
`;
}
