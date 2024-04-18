import './Home.css'


function Home(){
    // When using functional components the return of the function should be the JSX/TSX that you want the react app to render

    return (
        <main> 
            <h3>Introduction</h3>
            <figure>
                <img src="https://www.cookingclassy.com/wp-content/uploads/2018/05/grilled-salmon-5.jpg" id="pic"/>
                <figcaption><h6>Slab o' Salmon</h6></figcaption>
            </figure>

            <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum ducimus omnis magnam 
            laudantium rerum officiis commodi harum voluptatem minus autem? Exercitationem 
            perspiciatis quo quis, facilis itaque aut praesentium eveniet reprehenderit!
            </p>

        </main>
    )
}

export default Home;