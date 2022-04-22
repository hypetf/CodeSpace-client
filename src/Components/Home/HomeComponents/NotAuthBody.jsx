import React from "react";

export default function NotAuthBody() {
    return <div className="body-offline">
        <h1>CodeSpace</h1>
        <p>Your coding space where you can develop, improve and compete.</p>
        <div id="body-offline-buttons">
            <a id="btn-join" href="/signin">Join now</a>
            <a id="btn-resources" href="/">Start learning</a>
        </div>
    </div>
}