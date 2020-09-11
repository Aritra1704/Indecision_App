class VisibilityToggle extends React.Component {
    handleToggleVisibilty() {
        this.setState((previousState) => {
            return {
                visibilty: !previousState.visibilty
            };
        })
    }
    constructor(props) {
        super(props);
        this.handleToggleVisibilty = this.handleToggleVisibilty.bind(this);
        this.state = {
            visibilty: false
        };
    }
    render() {
        return (
            <div>
                <h1>Visibilty Toggle</h1>
                <button onClick={this.handleToggleVisibilty}>
                    {this.state.visibilty ? 'Hide Details' : 'Show Details'}
                </button>
                {
                    this.state.visibilty && (
                        <div>
                            <p>Hey. These are some details you can now see!!</p>
                        </div>
                    )
                }
            </div>
        );
    }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));

// let isVisible = false;

// const toggleVisibility = () => {
//     isVisible = !isVisible;
//     renderVisiblityToggleApp();
// }

// const renderVisiblityToggleApp = () => {
    
//     const templateTwo = (
//         <div>
//             <h1>Visibilty Toggle</h1>
//             <button onClick={toggleVisibility}>{
//                 isVisible ? 'Hide Details' : 'Show Details'
//             }</button>
//             {isVisible && <p>Hey these are some details you can now see</p>}
//         </div>
//     );

//     ReactDOM.render(templateTwo, document.getElementById('app'));
// };

// renderVisiblityToggleApp();