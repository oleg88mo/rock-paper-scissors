import React, {Component} from 'react';
// components
import Loader from './components/loader';
import SelectedRole from './components/selectedRole';

class App extends Component {
    state = {
        loader: false,
        roleA: null,
        roleB: null,
        visibleRoleB: null,
    };

    async componentWillMount() {
        await this.loaderProgress();
    }

    loaderProgress = () => {
        let timerId = setInterval(() => {
        }, 0);

        setTimeout(() => {
            this.setState({loader: false});
            clearInterval(timerId);
        }, 2100);
    };

    handlerSelectHero = (selectedRole, component) => {
        if (component === 'roleA') {
            this.setState({roleA: selectedRole});
        } else {
            this.setState({roleB: selectedRole});
        }
    };

    handlerVisibleRoleB = () => this.setState({visibleRoleB: false});

    render() {
        let {roleA, visibleRoleB} = this.state;

        return (
            <>
                {this.state.loader ?
                    <Loader/>
                    :
                    <SelectedRole
                        disabled={visibleRoleB}
                        selected={roleA}
                        handlerSelectHero={this.handlerSelectHero}
                        handlerVisibleRoleB={this.handlerVisibleRoleB}
                    />}
            </>
        )
    }
}

export default App;
