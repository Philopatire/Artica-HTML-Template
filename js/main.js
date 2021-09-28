// Menu //
{
  // This Scope For Closing And Opening The Menu //
  {
    // Necessary Variables
    let menu = document.querySelector("nav .menu"),
      openBtn = document.querySelector("nav .icon"),
      closeBtn = document.querySelector("nav .menu > i");
  
    // On Open
    openBtn.onclick = () => menu.style.right = "0";
  
    // On Close
    closeBtn.onclick = () => menu.style.right = "-260px";
  }

  // This Scope To Hide Menu Onclick on any links
  {
    // Necessary Variables
    let menu = document.querySelector("nav .menu"),
        anchors = document.querySelectorAll("nav .menu a")
    
    anchors.forEach(anchor => {
      anchor.onclick = () => menu.style.right = "-260px"
    })
  }
}
// End Menu //
// Portfolio //
{
  // This Scope For Closing And Opening Captions
  {
    // Necessary Variables
    let inlineCaptions = document.querySelectorAll(
        ".portfolio .images .image .main-image .inline-caption"
      ),
      captions = document.querySelectorAll(
        ".portfolio .images .image .caption"
      ),
      triangles = document.querySelectorAll(
        ".portfolio .images .image .main-image .triangle"
      ),
      closeBtns = document.querySelectorAll(
        ".portfolio .images .image .caption .text-content button.close"
      ),
      images = document.querySelectorAll(".portfolio .images .image");

    // On Open and Close
    inlineCaptions.forEach((img, index) => {
      img.onclick = () => {
        if (captions[index].style.display != "flex") {
          captions.forEach((caption) => (caption.style.display = ""));
          triangles.forEach((triangle) => (triangle.style.display = ""));
          images.forEach((img) => {
            img.style.height = "";
            img.style.marginBottom = "";
          });
          inlineCaptions.forEach((img) => img.classList.remove("active"));
          inlineCaptions[index].classList.add("active");
          triangles[index].style.display = "block";
          captions[index].style.display = "flex";
          images[index].style.height = `${
            images[index].clientHeight + captions[index].clientHeight 
          }px`;
          images[index].style.marginBottom = `20px`;
        } else {
          inlineCaptions[index].classList.remove("active");
          captions.forEach((caption) => (caption.style.display = ""));
          triangles.forEach((triangle) => (triangle.style.display = ""));
          images.forEach((img) => {
            img.style.height = "";
            img.style.marginBottom = "";
          });
        }
      };
      closeBtns[index].onclick = () => {
        inlineCaptions[index].classList.remove("active");
        captions.forEach((caption) => (caption.style.display = ""));
        triangles.forEach((triangle) => (triangle.style.display = ""));
        images.forEach((img) => {
          img.style.height = "";
          img.style.marginBottom = "";
        });
      };
    });
  }

  // This Scope For Shuffle
  {
    // Buttons Variables //
    let allBtns = document.querySelectorAll(".portfolio .shuffle button"),
      btnAll = document.getElementById("allPortfolio"),
      btnGraphic = document.getElementById("graphicPortfolio"),
      btnWeb = document.getElementById("webPortfolio"),
      btnPhotograph = document.getElementById("photographyPortfolio");

    // Images Variables //
    let allImages = document.querySelectorAll(".portfolio .images .image");

    // Show All Button  //
    btnAll.onclick = () => {
      allBtns.forEach((btn) => btn.classList.remove("active"));
      btnAll.classList.add("active");
      allImages.forEach((img) => (img.style.display = ""));
    };

    // Function To Shuffle //
    function shuffle(btnVar, theClass) {
      btnVar.onclick = () => {
        allBtns.forEach((btn) => btn.classList.remove("active"));
        btnVar.classList.add("active");
        allImages.forEach((img) => {
          if (!img.classList.contains(theClass)) img.style.display = "none";
          else img.style.display = "";
        });
      };
    }

    // Calling Shuffle Function On Shuffle Buttons //
    shuffle(btnGraphic, "graphic");
    shuffle(btnWeb, "web");
    shuffle(btnPhotograph, "photography");
  }
}
// End Portfolio //

// About //
{
  // This Scope For Closing And Opening Captions

  // Necessary Variables
  let agentsPhotos = document.querySelectorAll(
      ".about .row .agent .main-photo"
    ),
    closeBtns = document.querySelectorAll(
      ".about .row .agent .caption button.close"
    ),
    captions = document.querySelectorAll(".about .row .agent .caption"),
    agentsDivs = document.querySelectorAll(".about .row .agent");

  // On Open and Close
  agentsPhotos.forEach((img, index) => {
    img.onclick = () => {
      if (!agentsDivs[index].classList.contains("active")) {
        agentsDivs.forEach((div) => {
          div.classList.remove("active");
          div.style.height = "";
        });
        agentsDivs[index].classList.add("active");
        agentsDivs[index].style.height = `${
          agentsDivs[index].clientHeight + captions[index].clientHeight
        }px`;
      } else {
        agentsDivs.forEach((div) => {
          div.classList.remove("active");
          div.style.height = "";
        });
      }
      closeBtns[index].onclick = () => {
        agentsDivs.forEach((div) => {
          div.classList.remove("active");
          div.style.height = "";
        });
      };
    };
  });
}
// End About //

// Skills //
{
  // This Scope For Show More Button

  // Necessary Variables
  let btn = document.querySelector(".skills .company button"),
      span = document.querySelector(".skills .company p span")
  
  // Button Click
  btn.onclick = () => {
    if (span.style.display != "inline"){
      span.style.display = "inline"
      btn.textContent = "Show More"
    }else{
      span.style.display = ""
      btn.textContent = "Read More"
    }
  }
}
// End Skills   

// statics //
{
  // This Scope For Smooth Counting Statics

  // Necessary Variables
  let cusotmers = document.querySelectorAll(".statics .icon span.number")[0],
      awards = document.querySelectorAll(".statics .icon span.number")[1],
      projects = document.querySelectorAll(".statics .icon span.number")[2],
      follwers = document.querySelectorAll(".statics .icon span.number")[3]
  
  // Data
  let countData = {
    customers: 230,
    awards: 20,
    projects: 2300,
    follwers: 50890
  }

  // Function To Smooth Counting
  function createCounter(htmlElement, nameInData, interval, milliseconds) {
    setInterval(()=> {
      if (htmlElement.textContent < countData[nameInData]){
        let valueShowed = parseInt(htmlElement.textContent)
        valueShowed+=interval
        htmlElement.textContent = valueShowed
      }
    }, milliseconds)
  }

  // Callign Create Counter Function
  createCounter(cusotmers, "customers", 1, 100)
  createCounter(awards, "awards", 1, 500)
  createCounter(projects, "projects", 1, 10)
  createCounter(follwers, "follwers", 1, 1)
}
// End statics //

// Post //
{
  // This Scope For Shuffle Only //

  // Necessary Variables //
  // Buttons Variables //
  let allBtns = document.querySelectorAll(".blog .shuffle button"),
      btnAll = document.getElementById("allBlog"),
      btnNews = document.getElementById("newsBlog"),
      btnOld = document.getElementById("oldBlog"),
      btnPopular = document.getElementById("popular")
  
  // Blogs Post //
  let allposts = document.querySelectorAll(".blog .row .blog-post")

  // Special Classes //
  let halfRows = [],
      halfColumns = [],
      largRows = [],
      fullRows = []
      changedHalfColumns = [],
      changedLargColumns = []
      changedfullRows = []


  // Functions //
  // Reset Function 
  function reset() {
    allposts.forEach(post => post.style.display = "")
    changedHalfColumns.forEach(post => {
      post.classList.remove("half-row")
      post.classList.remove("larg-row")
      post.classList.remove("big-row")
      post.classList.remove("full-row")
      post.classList.add("half-column")
    })
    changedLargColumns.forEach(post => {
      post.classList.remove("half-row")
      post.classList.remove("half-column")
      post.classList.remove("big-row")
      post.classList.remove("full-row")
      post.classList.add("larg-row")
    })
    changedfullRows.forEach(post => {
      post.classList.remove("half-row")
      post.classList.remove("half-column")
      post.classList.remove("big-row")
      post.classList.remove("larg-row")
      post.classList.add("full-row")
    })
    halfRows = []
    halfColumns = []
    largRows = []
    fullRows = []
    changedHalfColumns = []
    changedLargColumns = []
    changedfullRows = []
  }

  // GetNews Function 
  function getNews() {
    allposts.forEach(post => {
      if (post.style.display != "none") {
        if (post.classList.contains("half-row")) halfRows.push(post)
        else if (post.classList.contains("half-column")) halfColumns.push(post)
        else if (post.classList.contains("larg-row")) largRows.push(post)
        else if (post.classList.contains("full-row")) fullRows.push(post)
      }
    })
  }

  // Shuffle Function
  function shuffle(btnVar, theClass) {
    btnVar.onclick = () => {
      reset()
      allBtns.forEach(btn => btn.classList.remove("active"))
      btnVar.classList.add("active")
      allposts.forEach(post => {
        if (! post.classList.contains(theClass)) {
          post.style.display = "none"
          getNews()
          if (halfRows.length < 2) {
            largRows[0].classList.remove("larg-row")
            largRows[0].classList.add("big-row")
            changedLargColumns.push(largRows[0])
            fullRows[0].classList.remove("full-row")
            fullRows[0].classList.add("half-row")
            changedfullRows.push(fullRows[0])
          } if (halfColumns.length < 2) {
            halfColumns[0].classList.remove("half-column")
            halfColumns[0].classList.add("larg-row")
            changedHalfColumns.push(halfColumns[0])
          }
        }
      })
    }
  }
  btnAll.onclick = () => {
    allBtns.forEach(btn => btn.classList.remove("active"))
    btnAll.classList.add("active")
    reset()
  }


  // Calling Shuffle Function //
  shuffle(btnNews, "new")
  shuffle(btnOld, "old")
  shuffle(btnPopular, "popular")
}
// End Post//