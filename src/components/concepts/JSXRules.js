const JSXRules = () => {
return(
    <div className="main">
    <div className="mainDiv">
    <h1 className="section-title">JSX</h1>
        <dl>
            <dt>Resembles HTML</dt>
                <dd>It is not. It is actually closer to JavaScript. </dd>
            <dt>React Elements</dt>
                <dd> These are used to construct and update the DOM, or what you see on the screen.</dd>
            <dt>Not Required</dt>
                <dd> You can write in vanilla JS, but most sane people use JSX. </dd>
        </dl>
    <hr />
    </div>
    <NormalComponent />
    </div>
);
}


const NormalComponent = () => {
    return(
    <div style={{ border: '2px solid black'}}>
        <h1>Normal Functional Component</h1>
        <p>This was constructed using JSX in the return</p>
    </div>
        );
}

export default JSXRules;