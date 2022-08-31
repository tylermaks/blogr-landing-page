import React from "react"
import featureData from "../FeatureData";

function Features({instance}){
    
    return(
        <>  
            {
                featureData.slice(instance, (instance + 1)).map(item => {
                    return(
                        <section>
                            <h2>{item.title}</h2>
                            <img src={item.mobileImg} alt="Editor" />
                            <article>
                                <h3>{item.subHeadingOne}</h3>
                                <p>{item.paragraphOne}</p>
                            </article>
                            <article>
                                <h3>{item.subHeadingTwo}</h3>
                                <p>{item.paragraphTwo}</p>
                            </article>
                        </section>
                    )
             
                })
            }
        </>

       
    )
}

export default Features;