import "./style.css";
import data from "./data/data";
import { createThreeScene } from "./threeScene";

const cubes = [
  "./cubeDrawings/cube1.webp",
  "./cubeDrawings/cube2.webp",
  "./cubeDrawings/cube3.webp",
  "./cubeDrawings/cube4.webp",
];

const trees = [
  "./treeDrawings/tree1.jpg",
  "./treeDrawings/tree2.jpg",
  "./treeDrawings/tree3.jpg",
  "./treeDrawings/tree4.jpg",
];

const cadavre = [
  "./cadavreDrawings/cadavre2.png",
  "./cadavreDrawings/cadavre3.png",
  "./cadavreDrawings/cadavre4.png",
  "./cadavreDrawings/cadavre5.png",
];

document.querySelector("#app").innerHTML = `
  <main id="container">
    <section id="heading">
      <h1>${data.name}</h1>
      <p>${data.bio}</p>
    </section>

    <section id="projects">
      <div id="project-row">
      Cadavre Exquis
        <div class="three-model">
          <img src="/cadavreDrawings/cadavre0.png" id="model1" alt="Model 1 Image" />
        </div>
        <div id="images-description">
          <div id="images">
          <a href="./cadavreDrawings/cadavre0.png" target="_blank">
        <img src="./cadavreDrawings/cadavre0.png" alt="Image 1">
    </a>
           <a href="./cadavreDrawings/cadavre2.png" target="_blank">
        <img src="./cadavreDrawings/cadavre2.png" alt="Image 1">
    </a>
    <a href="./cadavreDrawings/cadavre3.png" target="_blank">
        <img src="./cadavreDrawings/cadavre3.png" alt="Image 2">
    </a>
    <a href="./cadavreDrawings/cadavre4.png" target="_blank">
        <img src="./cadavreDrawings/cadavre4.png" alt="Image 3">
    </a>
    <a href="./cadavreDrawings/cadavre5.png" target="_blank">
        <img src="./cadavreDrawings/cadavre5.png" alt="Image 3">
    </a>
          </div>
          <h4 id="description">The Afterlife: A Journey of Reflection, Healing, and Unity <br>
        <br>
        In this vision, the afterlife is not a static, final destination but an ongoing, transformative journey where souls experience a process of profound self-realization and deep interconnection with others. Rather than facing judgment or punishment, souls in the afterlife embark on a journey of reflection, healing, and growth—both individually and collectively. This vision proposes that the afterlife is not merely about what we did in life, but about how we evolve and learn to understand ourselves, others, and the greater universe after death. 
        <br>
        Upon entering, souls reflect on their lives, gaining clarity about their choices, actions, and their impact on others. Next, they undergo healing, revisiting unresolved conflicts and emotional wounds, allowing for forgiveness, reconciliation, and growth. Souls then connect deeply with others, experiencing shared understanding and learning empathy through collective interactions. Finally, the journey leads to transcending individuality, where souls merge with universal consciousness, embracing unity, compassion, and the interconnectedness of all existence.</h4>
       
        </div>
      </div>

      <div id="project-row">
     ${/* Model 2
        <div class="three-model">
          <div id="model2"></div>
        </div>
        <div id="images-description">
          <div id="images">
            ${trees
              .map(
                (trees, index) =>
                  `<img src="${trees}" alt="tree${index + 1}" />`
              )
              .join("")}
          </div>
          <h4 id="description">A 3D tree model is a geometric representation of a tree, featuring a trunk, branches, and foliage. The trunk is typically cylindrical, with textured bark, while the branches extend outward to support leaves or a canopy. It may include roots or flowers for added detail.</h4>
        </div>
      </div>
*/""}
      <div id="project-row">
     ${/* Model 3
        <div class="three-model">
          <div id="model3"></div>
        </div>
        <div id="images-description">
          <div id="images">
            ${cubes
              .map(
                (cube, index) => `<img src="${cube}" alt="cube${index + 1}" />`
              )
              .join("")}
          </div>
          <h4 id="description">A 3D house model is a geometric representation of a house, featuring walls, a roof, and windows. It often includes additional details such as doors, chimneys, and balconies, with textures like brick, wood, or stucco to enhance realism. The interior may also feature rooms, furniture, and lighting for a more detailed design.</h4>
        </div>
      </div>
*/""}      
    </section>

    <ul id="footer-items">
      <li>Email: ${data.contact.email}</li>
      <li>Phone: ${data.contact.phone}</li>
      <li>LinkedIn: <a href="${data.contact.linkedin}">${
  data.contact.linkedin
}</a></li>
      <li>GitHub: <a href="${data.contact.github}">${
  data.contact.github
}</a></li>
    </ul>
  </main>
`;


// Create three.js scenes for each
createThreeScene("#model1", "/3DModels/project1/cube.obj");
createThreeScene("#model2", "/3DModels/project2/tree.obj");
createThreeScene("#model3", "/3DModels/project3/cottage.obj");
