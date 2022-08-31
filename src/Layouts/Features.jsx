import React from "react"
import featureData from "../FeatureData";

import "../Assets/Styles/Features/Features.css"

function Features({instance}){
    
    return(
        <>  
            {
                featureData.slice(instance, (instance + 1)).map(item => {

                    const rowDirection = instance === 0 ? "right" : "left"

                    return(
                        <section className="features">
                            <h2>{item.title}</h2>
                            <div className={"features-inner features-inner--" + rowDirection}>
                                <div>
                                    <img className="mobile-img" src={item.mobileImg} alt="Editor" />
                                    <img className={"desktop-img desktop-img--" + rowDirection} src={item.desktopImg} alt="Editor" />
                                </div>
                                <article>
                                    <h2>{item.subheadingOne}</h2>
                                    <p>{item.paragraphOne}</p>
                                    <h2>{item.subheadingTwo}</h2>
                                    <p>{item.paragraphTwo}</p>
                                </article>
                            </div>
                        </section>
                    )
             
                })
            }
        </>

       
    )
}

export default Features;