import desktopImgOne from "./Assets/images/illustration-editor-desktop.svg"
import mobileImgOne from "./Assets/images/illustration-editor-mobile.svg"
import desktopImgTwo from "./Assets/images/illustration-laptop-desktop.svg"
import mobileImgTwo from "./Assets/images/illustration-laptop-mobile.svg"


const featureData = [
    {
        title:"Designed for the future", 
        desktopImg: desktopImgOne,
        mobileImg: mobileImgOne,
        subheadingOne: "Introducing an extensible editor", 
        paragraphOne: "Blogr features an exceedingly intuitive interface which lets you focus on one thing: creating content. The editor supports management of multiple blogs and allows easy manipulation of embeds such as images, videos, and Markdown. Extensibility with plugins and themes provide easy ways to add functionality or change the looks of a blog.",
        subheadingTwo:"Robust content management",
        paragraphTwo:"Flexible content management enables users to easily move through posts. Increase the usability of your blog by adding customized categories, sections, format, or flow. With this functionality, you’re in full control."
    },

    {
        title:"",
        desktopImg:desktopImgTwo,
        mobileImg:mobileImgTwo,
        subHeadingOne:"Free, open, simple", 
        paragraphOne:"Blogr is a free and open source application backed by a large community of helpful developers. It supports features such as code syntax highlighting, RSS feeds, social media integration, third-party commenting tools, and works seamlessly with Google Analytics. The architecture is clean and is relatively easy to learn.", 
        subheadingTwo:"Powerful tooling",
        paragraphTwo:"  Batteries included. We built a simple and straightforward CLI tool that makes customization and deployment a breeze, butcapable of producing even the most complicated sites."
    }

]

export default featureData;