import React from "react";
import '../styles/content.css'

function content(){
    return(
        <div className="content">
            <section class="content_section">
                <h3 class="content_title">Valorant</h3>
                <ul class="content_list">
                    <li class="content_list_item">Diamond Rank</li>
                    <li class="content_list_item">Jett Main</li>
                    <li class="content_list_item">Chennai Tenz</li>
                </ul>
            </section>
            <section class="content_section">
                <h3 class="content_title">Work</h3>
                <ul class="content_list">
                    <li class="content_list_item">Salesforce Admin</li>
                    <li class="content_list_item">RX</li>
                    <li class="content_list_item">Two Certifications</li>
                </ul>
            </section>
            <section class="content_section">
                <h3 class="content_title">Education</h3>
                <ul class="content_list">
                    <li class="content_list_item">8.6 CGPA</li>
                    <li class="content_list_item">RIT</li>
                    <li class="content_list_item">OP College</li>
                </ul>
            </section>
        </div>
    )
}

export default content;