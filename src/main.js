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
  "./cadavreDrawings/cadavre1.png",
  "./cadavreDrawings/cadavre2.png",
  "./cadavreDrawings/cadavre3.png",
  "./cadavreDrawings/cadavre4.png",
  "./cadavreDrawings/cadavre5.png",
];

const Interop = [
  "./Interop/Pavilion.png",
  "./Interop/Torus.png",
  "./Interop/Olaf.png",
  "./Interop/Model.png",
  "./Interop/Reflection.png",
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
          <a href="./cadavreDrawings/cadavre0.png" target="new">
            <img src="./cadavreDrawings/cadavre0.png" alt="random image" style="width: 316.8px; height: 489.6px;">
          </a>
        </div>
        <div id="images-description">
          <div id="images">
          <a href="./cadavreDrawings/cadavre1.png" target="_blank">
        <img src="./cadavreDrawings/cadavre1.png" alt="Image 1">
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


     Interop(erability)
        <div class="three-model">
        <div id="model4"></div>
        </div>
       
        <div id="images-description">
          <div id="images">
          <a href="./Interop/Pavilion.png" target="_blank">
        <img src="./Interop/Pavilion.png" alt="Image 1">
    </a> 
          <a href="./Interop/Torus.png" target="_blank">
        <img src="./Interop/Torus.png" alt="Image 1">
    </a>
    <a href="./Interop/Olaf.png" target="_blank">
        <img src="./Interop/Olaf.png" alt="Image 2">
    </a>
    <a href="./Interop/Model.png" target="_blank">
        <img src="./Interop/Model.png" alt="Image 3">
    </a>
    <a href="./Interop/Reflection.png" target="_blank">
        <img src="./Interop/Reflection.png" alt="Image 3">
    </a>
     <a href="./Interop/Photogrammetry.png" target="_blank">
        <img src="./Interop/Photogrammetry.png" alt="Image 3">
    </a>

          </div>
          <h4 id="description">The Interop(erability) assignment focused on exploring the compatibility and interaction between different software tools and file formats in 3D modeling. The goal was to understand how various formats (like FBX, OBJ, and STL) handle geometry differently when exported from one program to another, such as from Blender to Rhino. The assignment required us to model objects (like a pavilion, torus, and 3D models), export them in different file formats, and then experiment with converting between meshes, SubD surfaces, and NURBS within Rhino. By doing so, we could observe how these conversions impacted the geometry's smoothness, editability, and suitability for real-world applications, like rendering or fabrication, while gaining insights into the challenges of achieving seamless interoperability across platforms.</h4>
        </div>
      </div>



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
createThreeScene("#model4", "/public/3DModels/project4/OOLaf.obj");

