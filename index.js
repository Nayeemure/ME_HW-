const fs = require("fs/promises");

(async () => {
  const CREATE_NAVBAR = "create_navbar";
  const CREATE_BANNER = "create_Banner";
  const CREATE_FOOTER = "create_footer";
  const indexPath = "./index.html"; 

  const initializeHTMLFile = async () => {
    try {
      await fs.access(indexPath);
    } catch (e) {
      const initialContent = `
      <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Innovate Project-2</title>
    <link
      href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;500;600;700;800&family=Open+Sans:wght@400;500;600;700;800&family=Paprika&family=Poppins:wght@400;500;600;700;800;900&display=swap"
      rel="stylesheet"
    />
    <link rel="stylesheet" href="Css/all.min.css" />

    <link rel="stylesheet" href="Css/style.css" />
  </head>
  <body>
      `;
      await fs.writeFile(indexPath, initialContent, "utf-8");
    }
  };


  const appendToBody = async (content) => {
    const html = await fs.readFile(indexPath, "utf-8");
    const updatedHTML = html.replace("</body>", `${content}\n</body>`);
    await fs.writeFile(indexPath, updatedHTML, "utf-8");
  };


  const appendNavbarToHTML = async () => {
    const navbarHTML = `    <nav>
      <div class="container">
        <div id="main_menu">
          <div class="logo">
            <picture>
              <img src="Images/Logo.png" alt="Logo" />
            </picture>
          </div>
          <div class="menu">
            <ul>
              <li>
                <a href="#">Home</a>
                <i class="fa-solid fa-angle-down"></i>
                <ul class="dropdown">
                  <li><a href="#">Service-1</a><i class="fa-solid fa-angle-down"></i></li>
                  <li><a href="#">Service-2</a><i class="fa-solid fa-angle-down"></i></li>
                  <li><a href="#">Service-3</a><i class="fa-solid fa-angle-down"></i></li>
                </ul>
              </li>
              <li>
                <a href="#">About</a>
                <i class="fa-solid fa-angle-down"></i>
                <ul class="dropdown">
                  <li><a href="#">Service-1</a><i class="fa-solid fa-angle-down"></i></li>
                  <li><a href="#">Service-2</a><i class="fa-solid fa-angle-down"></i></li>
                  <li><a href="#">Service-3</a><i class="fa-solid fa-angle-down"></i></li>
                </ul>
              </li>
              <li>
                <a href="#">Service</a>
                <i class="fa-solid fa-angle-down"></i>
                <ul class="dropdown">
                  <li><a href="#">Service-1</a><i class="fa-solid fa-angle-down"></i></li>
                  <li><a href="#">Service-2</a><i class="fa-solid fa-angle-down"></i></li>
                  <li><a href="#">Service-3</a><i class="fa-solid fa-angle-down"></i></li>
                </ul>
              </li>
              <li>
                <a href="#">Portfolio</a>
                <i class="fa-solid fa-angle-down"></i>
                <ul class="dropdown">
                  <li><a href="#">Service-1</a><i class="fa-solid fa-angle-down"></i></li>
                  <li><a href="#">Service-2</a><i class="fa-solid fa-angle-down"></i></li>
                  <li><a href="#">Service-3</a><i class="fa-solid fa-angle-down"></i></li>
                </ul>
              </li>
              <li>
                <a href="#">Price</a>
                <i class="fa-solid fa-angle-down"></i>
                <ul class="dropdown">
                  <li><a href="#">Service-1</a><i class="fa-solid fa-angle-down"></i></li>
                  <li><a href="#">Service-2</a><i class="fa-solid fa-angle-down"></i></li>
                  <li><a href="#">Service-3</a><i class="fa-solid fa-angle-down"></i></li>
                </ul>
              </li>
              <li>
                <a href="#">Blog</a>
                <i class="fa-solid fa-angle-down"></i>
                <ul class="dropdown">
                  <li><a href="#">Service-1</a><i class="fa-solid fa-angle-down"></i></li>
                  <li><a href="#">Service-2</a><i class="fa-solid fa-angle-down"></i></li>
                  <li><a href="#">Service-3</a><i class="fa-solid fa-angle-down"></i></li>
                </ul>
              </li>
            </ul>
          </div>
          <div class="nav_btn">
            <a class="btn" href="#">Contact Us</a>
          </div>
        </div>
      </div>
    </nav>`;
    await appendToBody(navbarHTML);
  };

  const appendBannerSection = async () => {
    const bannerHTML = ` <section id="banner">
      <div class="img">
        <img class="img1" src="Images/BannerUpper.png" alt="" />
        <img class="img2" src="Images/Bannerlowyer.png" alt="" />
        <img class="img3" src="Images/pinkSnake.png" alt="" />
        <img class="img4" src="Images/Skybluesnake.png" alt="" />
        <img class="img5" src="Images/Bigball.png" alt="" />
        <img class="img6" src="Images/BlurCircle.png" alt="" />
        <div class="ani_1">
          <img class="img7" src="Images/Round-ball.png" alt="" />
        </div>
        <img class="img8" src="Images/Cross1.png" alt="" />
        <img class="img9" src="Images/PurpleBall.png" alt="" />
        <img class="img10" src="Images/smallball.png" alt="" />
        <img class="img11" src="Images/Cross.png" alt="" />
        <img class="img12" src="Images/purplecircle.png" alt="" />
        <!-- <div class="ani_6">
          <img class="img13" src="Images/purplecircle.png" alt="" />
          <div class="golla"></div>
        </div> -->
        <div class="ani_2">
          <div class="ball1"></div>
        </div>
        <div class="ani_3">
          <div class="ball2"></div>
        </div>
        <div class="ani_4">
          <div class="ball3"></div>
        </div>
        <div class="ani_5">
          <div class="ball4"></div>
        </div>
      </div>
      <div class="side_info">
        <div class="item1">
          <h4 class="text">scroll</h4>
        </div>
        <div class="item2">
          <h4 class="text">contact@innovate.com</h4>
          <!-- <a href="mailto:contact@innovate.com" class="text"
            >contact@innovate.com</a
          > -->
        </div>
        <div class="item3">
          <h4 class="text">
            <span>en.</span> <span>fr.</span> <span>ge.</span>
          </h4>
        </div>
      </div>
      <div class="container">
        <h1>We are a full range <span>design agency</span></h1>
        <p class="text">
          Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil
          impedit quo minus id quod maxime.
        </p>
        <a class="btn contact" href="#">Contact Us</a>
        <a class="btn showcase" href="#">Showcase</a>
      </div>
    </section>`;
    await appendToBody(bannerHTML);
  };
  const appendFooterToHTML = async () => {
    const footerHTML = `<footer id="footer">
  <div class="container">
    <div class="main">
      <div class="part1">
        <div class="logo">
          <img src="Images/Logo.png" alt="">
        </div>
        <p class="text item">Install any demo or template with a single click. You can mix and match all the demos & templates. Every demo can be turned into one or multi-page.</p>
      </div>
       <div class="feature">
        <h5>Features</h5>
        <div class="option">
        <p>Home</p>
        <p>About</p>
        <p>Benefit</p>
        <p>Pricing</p>
        <p>Blog</p>
        </div>
       </div>
       <div class="product">
        <h5>Products</h5>
        <div class="option">
        <p class="">Task Management</p>
        <p>Company growth</p>
        <p>Time tracking</p>
        </div>
       </div>
       <div class="support">
        <h5>Support</h5>
        <div class="option">
        <p class="">Customer service</p>
        <p>Accessibility</p>
        <p>Contact us</p>
        </div>
       </div>
    </div>
    <div class="term">
      <p class="text item1 ">@20201 Innovate.All rights reserved.</p>
      <p class="text item2">Privacy policy</p>
      <p class="text item3">Terms & condition</p>
    </div>
  </div>

</footer>`;
    await appendToBody(footerHTML);
  };

  const commandFileHandler = await fs.open("./command.txt", "r");

  commandFileHandler.on("change", async () => {
    const size = (await commandFileHandler.stat()).size;
    const buff = Buffer.alloc(size);
    await commandFileHandler.read(buff, 0, size, 0);
    const command = buff.toString("utf-8").trim();

    await initializeHTMLFile();


    if (command === CREATE_NAVBAR) {
      await appendNavbarToHTML();
    } else if (command === CREATE_BANNER) {
      await appendBannerSection();
    } else if (command === CREATE_FOOTER) {
      await appendFooterToHTML();
    }
  });

  const watcher = fs.watch("./command.txt");
  for await (const event of watcher) {
    if (event.eventType === "change") {
      commandFileHandler.emit("change");
    }
  }
})();