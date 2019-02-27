import React, {Component, Fragment} from 'react'
import { CSSTransition, TransitionGroup} from 'react-transition-group'
import './style.css'

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            list: []
        }
        this.handlerAddItem = this.handlerAddItem.bind(this)
    }
    render() {
        return (
            <Fragment>
                <TransitionGroup
                    in={this.state.list}
                >
                    {
                        this.state.list.map((item, index) => {
                            return (
                                <CSSTransition
                                    key={index}
                                    timeout={1000}
                                    classNames={'fade'}
                                    unmountOnExit
                                    onEntered={(el)=>{el.style.color = 'blue'}}
                                    appear={true}
                                    >
                                        <div >{item}</div>
                                    </CSSTransition>

                            )
                        })
                    }
                </TransitionGroup>
                <button onClick={this.handlerAddItem}>toggle</button>
            </Fragment>
        )
    }
    handlerToggle() {
        this.setState({
            show: this.state.show ? false : true
        })
    }
    handlerAddItem() {
        this.setState((prevState)=>{
            return {
                list: [...prevState.list, 'item']
            }
        })
    }
}

export default App
