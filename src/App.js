class IndecisionApp extends React.Component {
    constructor(props) {
        super(props);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOptions = this.handleAddOptions.bind(this);
        this.state = {
            options: []
        }
    }
    
    handleDeleteOptions() {
        this.setState(() => {
            return {
                options: []
            };
        });
    }

    handlePick() {
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        const options = this.state.options[randomNum];

        alert(options);
    }

    handleAddOptions(option) {
        if(!option) {
            return 'Enter valid value to add item';
        } else if (this.state.options.indexOf(option) > -1) {
            return 'This options already exists';
        } 

        this.setState((previousState) => {
            return {
                options: previousState.options.concat([option])
            };
        });
    }

    render() {
        const title = "Indecision";
        const subTitle = "Put your life in the hands of a computer";
        return (
            <div>
                <Header title={title} subTitle={subTitle} />
                <Action 
                    hasOptions={this.state.options.length > 0} 
                    handlePick={this.handlePick}
                />
                <Options 
                    options={this.state.options}
                    handleDeleteOptions={this.handleDeleteOptions}
                 />
                <AddOption 
                    handleAddOptions={this.handleAddOptions}
                />
            </div>
        );
    }
}

const Header = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            <h1>{props.subTitle}</h1>
        </div>
    );
}

const Action = (props) => {
    return (
        <div>
            <button 
                onClick={props.handlePick}
                disabled={!props.hasOptions}
            >
            What should I do?
            </button>
        </div>
    );
}

const Options = (props) => {
    return (
        <div>
            <button onClick={props.handleDeleteOptions}>Remove All</button>
            {
                props.options.map((option) => 
                    <Option key={option} optionText={option} />)
            }
            <Option />
        </div>
    );
}

const Option = (props) => {
    return (
        <div>
            {props.optionText}
        </div>
    );
} 

class AddOption extends React.Component {
    constructor(props) {
        super(props);
        this.handleAddOption = this.handleAddOption.bind(this);
        // Local state to show error from Add option
        this.state = {
            error: undefined
        }
    }
    handleAddOption(e) {
        e.preventDefault();// Doesn't allow default form submission process
        
        const option = e.target.elements.option.value.trim();
        const error = this.props.handleAddOptions(option);
        this.setState(() => {
            return { error };
        });
        if(option) {    
            e.target.elements.option.value = '';
        }
    }
    render() {
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.handleAddOption}>
                    <input type="text" name="option"/>
                    <button>Add option</button>
                </form>
            </div>
        );
    }
}

// const User = (props) => {
//     return (
//         <div>
//             <p>Name: {props.name}</p>
//             <p>Age: {props.age}</p>
//         </div>
//     );
// };

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));