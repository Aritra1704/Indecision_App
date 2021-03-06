// Next Section 47 
class IndecisionApp extends React.Component {
    constructor(props) {
        super(props);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOptions = this.handleAddOptions.bind(this);
        this.handleDeleteOption = this.handleDeleteOption.bind(this);
        this.state = {
            options: []
        }
    }
    componentDidMount() {
        try {
            const json = localStorage.getItem('options');
            const options = JSON.parse(json);
            if(options) {
                this.setState(() => ({ options }));
            }
        } catch (e) {
            // Do nothing
        }
    }
    componentDidUpdate(previousProps, previousState) {
        if(previousState.options.length !== this.state.options.length) {
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options', json);
        }
    }
    componentWillUnmount() {
        console.log('component will unmount');
    }
    
    handleDeleteOptions() {
        this.setState(() => ({ options: [] }));
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

        this.setState((prevState) => ({ options: prevState.options.concat([option]) }));
    }

    handleDeleteOption(optionToRemove) {
        this.setState((previousState) => ({
            options: previousState.options.filter((option) => optionToRemove !== option)
        }))
    }

    render() {
        const subTitle = "Put your life in the hands of a computer";
        return (
            <div>
                <Header subTitle={subTitle} />
                <Action 
                    hasOptions={this.state.options.length > 0} 
                    handlePick={this.handlePick}
                />
                <Options 
                    options={this.state.options}
                    handleDeleteOptions={this.handleDeleteOptions}
                    handleDeleteOption={this.handleDeleteOption}
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
            {props.subTitle && <h1>{props.subTitle}</h1>}
        </div>
    );
}

Header.defaultProps = {
    title: 'Indecision App'
};

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
            {props.options.length === 0 && <p>Please add an option to get started.</p>}
            {
                props.options.map((option) => (
                    <Option 
                        key={option} 
                        optionText={option} 
                        handleDeleteOption={props.handleDeleteOption}
                    />
                ))
            }
            <Option />
        </div>
    );
}

const Option = (props) => {
    return (
        <div>
            {props.optionText}
            <button 
                onClick={(e) => {
                    props.handleDeleteOption(props.optionText)
                }}
            >
                remove
            </button>
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
        this.setState(() => ({ error }));
        if(!error) {    
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

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));