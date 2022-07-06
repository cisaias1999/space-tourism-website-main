


const getinfo = async () => {
  const response = await fetch("starter-code/data.json");
  const data = await response.json();
  console.log(data.destinations);

  document.querySelector(".moon").addEventListener("click", (e)=>{
    console.log("click luna")
    e.preventDefault();
  })

};

const info = getinfo();
