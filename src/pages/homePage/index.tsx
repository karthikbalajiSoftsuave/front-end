import React from "react";
import Layout from "../../layout";
import Kitchen from "../../assests/images/sec-4-tile.jpg"
import "./styles.scss"
type Tprops = {

}

const HomePage: React.FC<Tprops> = () => {
    return (
        <div className="homePage">
            <section className="sec1Background">
                <section className="sec1">
                    <div className="sec1-left">
                        <h1>
                            From colour and moodboards to project management for the entire project
                        </h1>
                    </div>
                </section>
            </section>
            <section className="sec2Background">
                <section className="sec2">
                    <div className="content">
                        <h3>A tailor-made solution for your space </h3>
                        <p>Our job is to interpret your vision, according to the conditions of your home, and take it to the next level. Under our Birch & Wood brand, we can produce all your home furnishings, such as kitchens, wardrobes, bathroom storage, as well as bookcases and sideboards. This means that all fixed storage specifications for the project can also be ordered directly from us, exactly as they are intended to look. We produce drawings, design concepts, interior design proposals and lighting plans for one, or all rooms depending on the scope of the project.</p>
                        <p>We work with you to create a beautiful, well thought-out and personal home. The whole is important to us and we leave nothing to chance. The design, features and technical solutions must go together. With our knowledge and experience, we help you get the best out of your space, your dreams and your ideas</p>
                    </div>
                </section>
            </section>
            <section className="sec3Background">
                <div className="sec3">
                </div>
            </section>
            <section className="sec4Background">
                <div className="sec4">
                    <div className="content">
                        <div className="left-Content">
                            <img src={Kitchen} alt="" />
                        </div>
                        <div className="right-content">
                            <h3>The process in steps</h3>
                            <ul>
                                <li>A first meeting is booked where we go through the needs and how we can help to best meet these wishes.</li>
                                <li>You will receive a quote/assignment description detailing what is included and how the work process works.</li>
                                <li>After you have accepted the offer, you will be contacted by a project manager to arrange a start-up meeting.</li>
                                <li>Start-up meeting at customer site for style and needs discussion and measuremen</li>
                                <li>Once the interior designer has finished sketching the concept, it is presented in our showroom. We go through material and product proposals and drawings.</li>
                                <li>We can also carry out the execution plan, review the project and drawings with the craftsmen. Need help with purchasing and planning deliveries? We can help you with this too.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Layout(HomePage);