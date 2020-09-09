import React from "react"
import Thumbnails from "./thumbnails";

function Projects(props){
    return(
        <div>
            <Thumbnails
                link="/sidework"
                image="https://picsum.photos/200/200.jpg"
                title="$IDEWORK"
                category="full-stack"
            />

            <Thumbnails
                link="/portfolio"
                image="https://picsum.photos/200/200.jpg"
                title="portfolio"
                category="front end"
            />
        </div>
    )
}

export default Projects;