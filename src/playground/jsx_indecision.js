console.log('App.js is running');

// JSX - JavaScript XML

const app = {
    title: "Indecision App",
    subTitle: "This is some other info",
    options: []
};

const onFormSubmit = (e) => {
    e.preventDefault();

    const option = e.target.elements.option.value;
    if(option) {
        app.options.push(option);
        e.target.elements.option.value = '';
        renderUI();
    }
};

const onMakeDecision = () => {
    const randomNum = Math.floor(Math.random() * app.options.length);
    const options = app.options[randomNum];

    alert(options);
};

const removeAllButton = () => {
    app.options = [];
    renderUI();
};

const appRoot = document.getElementById('app');

const renderUI = () => {
    const template = (
        <div>
            <h1>{app.title}</h1>
            {app.subTitle && <p>{app.subTitle}</p>}
            <p>{(app.options && app.options.length > 0) ? 'Here are your options:' : 'No options'}</p>
            <button disabled={app.options.length === 0} onClick={onMakeDecision}>What should I do?</button>

            <button onClick={removeAllButton}>Remove All</button>
            <ol>
                {
                    app.options.map((option) => <li key="{option}">{option}</li>)
                }
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option"/>
                <button>Add option</button>
                
            </form>
        </div>
    );

    ReactDOM.render(template, appRoot);
}
renderUI();