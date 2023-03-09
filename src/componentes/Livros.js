import React from "react"
import img2 from'./../img/HP1.jpg'
import img3 from'./../img/SDA.jpg'
import img4 from'./../img/berserk.jpg'


export default function Livros(props){

    return(
      <main>
        <article id="arti">
        <section>
        <h4>{props.livros[0]}</h4>
        <img src={img2} className="livros"/>
        </section>
        
        <section>
        <h4>{props.livros[1]}</h4>
        <img src={img3} className="livros"/>
        </section>

        <section>
        <h4>{props.livros[2]}</h4>
        <img src={img4} className="livros"/>
        </section>
        </article>


      </main>
        
        
        


        
    )
}