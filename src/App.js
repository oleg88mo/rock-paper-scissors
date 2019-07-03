import React, {Component} from 'react';
// components
import Loader from './components/loader';
import SelectedRole from './components/selectedRole';
import PlayGame from './components/playGame';

class App extends Component {
    state = {
        loader: true,
        roleA: null,
        roleB: null,
        visibleRoleB: null,
        renderBlock: null
    };

    async componentWillMount() {
        await this.loaderProgress(false, 'selectedRole');
    }

    loaderProgress = (val, block) => {
        let timerId = setInterval(() => {
            this.setState({loader: true});
        }, 0);

        setTimeout(() => {
            this.setState({loader: val, renderBlock: block});
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

    handlerButtonClickA = () => this.setState({visibleRoleB: false});

    handlerButtonClickB = () => this.loaderProgress(false, 'playGame');

    handlerClearComponent = () => {
        this.loaderProgress(false, 'selectedRole');
        this.setState({roleA: null, roleB: null});
    };

    render() {
        let {roleA, roleB, visibleRoleB, renderBlock, loader} = this.state;

        return (
            <>
                {loader
                    ?
                        <Loader/>
                    :
                        renderBlock === 'selectedRole'
                            ?
                                <SelectedRole
                                    disabled={visibleRoleB}
                                    selectedA={roleA}
                                    selectedB={roleB}
                                    handlerSelectHero={this.handlerSelectHero}
                                    handlerButtonClickA={this.handlerButtonClickA}
                                    handlerButtonClickB={this.handlerButtonClickB}
                                />
                            :
                                <PlayGame
                                    roleA={roleA}
                                    roleB={roleB}
                                    handlerClearComponent={this.handlerClearComponent}
                                />
                }
            </>
        )
    }
}

export default App;
