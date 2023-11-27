// 6.1 (3p) Hämta posts med fetch från denna url: https://jsonplaceholder.typicode.com/posts
// Visa title och body från varje post på sidan inuti: <div id="posts"></div>
// Visa endast posts från användaren med userId: 1

// 6.2 (3p)
// Varje post ska ha padding: 20px och margin: 10px
// Texten på title ska vara bold
// Text-färgen ska vara grå
// Backgrundsfärgen på varje post ska vara ljus-grå
// När man för muspekaren över en post ska bakgrundsfärgen ändras till vit
// Visa posts i fyra kolumner för desktop och en kolumn för mobil

const mainDiv = document.getElementById("posts");

fetch("https://jsonplaceholder.typicode.com/posts")
    .then((respone) => {
        return respone.json();
    })
    .then((post) => {
        const filteredPost = post.filter((item) => item.userId === 1)

        filteredPost.forEach((item) => {
            const divEl = document.createElement("div");
            const titleEl = document.createElement("div");
            titleEl.textContent = `${item.title}`;
            titleEl.setAttribute("id", "title")
            const bodyEl = document.createElement("div");
            bodyEl.textContent = `${item.body}`;
            bodyEl.setAttribute("id", "body")

            divEl.style.padding = "20px"
            divEl.style.margin = "10px"
            divEl.style.backgroundColor = "lightGrey"
            titleEl.style.fontWeight = "bold"
            bodyEl.style.color = "grey"

            divEl.addEventListener("mouseover", (event) => {
                event.target.style.backgroundColor = "white";


            })

            mainDiv.appendChild(divEl)
            divEl.appendChild(titleEl);
            divEl.appendChild(bodyEl);
        })
    })

// 6.3 (3p)
// Hämta posts från url: https://jsonplaceholder.typicode.com/posts
// och hämta comments från denna url: https://jsonplaceholder.typicode.com/comments
// Visa title och body från varje post
// Under varje post visa alla dess tillhörande kommentarer.
// name och body visas för varje kommentar.
// Lägg alla posts med kommentarer på sidan inuti: <div id="postsWithComments"></div>
// Styla posts och comments på samma sätt som ovan.
// tips: comments är kopplade till posts med postId

