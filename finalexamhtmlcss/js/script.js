//global header and footer
//function to create the header 
function createGlobalHeader() {
    const header = document.createElement('header');
    header.innerHTML = `
    <div class="logo">
        <a href="index.html"><img src="./img/sample-logo.png" alt="Logo"></a>
        <nav>
        <menu>
 
       <li><a href="index.html">HOME</a></li>
        <li>|</li>
        <li><a href="#">ABOUT</a></li>
        <li>|</li>
        <li><a href="#">CONTACT</a></li>

        </menu>
        </nav>
        <form class="search">
        <input type="search" name="search" placeholder="search">
        </form>
        </div>
        `;
    document.body.prepend(header);

}
//global footer
function createGlobalFooter() {
    const footer = document.createElement('footer');
    footer.innerHTML = ` <a href="index.html"><img src="./img/sample-logo.png" alt="Logo"></a>
        <div>
        <h3>Title</h3>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis ex et, numquam a quos vel harum omnis non amet tempore unde id mollitia adipisci minima.</p>
        </div> 
        `;
        document.body.appendChild(footer);
}
//calling the functions
createGlobalFooter();
createGlobalHeader();