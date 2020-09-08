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
        </div>
    )
}

export default Projects;