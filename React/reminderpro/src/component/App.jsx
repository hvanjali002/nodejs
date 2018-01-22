import React, { Component } from 'react'

class App extends Component {
    render() {
        return (
            <div className='App'>
                <div className='title'>
                    Reminder Pro
                </div>
                <div className='form-inline'>
                    <div className='form-group'>
                        <input
                            className='form-control'
                            placeholder='I have to ...'
                        />
                    </div>
                    <button type='button' className='btn btn-success'>
                        Add Reminder
                    </button>
                </div>
            </div>
        );
    }
}

// redux : reminder change a state that will change the whole store. We need a reminder action that can update the whole story.

// redux Actions : plains javascript.
// {
//     // what kind of action is being performed.
//     type : 'ADD_REMINDER',
//     // necessory info within javascript object which can be used to update the store.
//     payload : data
// }

// we should use action creator.

// creat provider-component from react reading that were passed down from the store to the whole application.

// in the redux all the applications exists as a store or single object. what the reducer do is take the state in an action and return to state.

// stores, reducers and providers. The purpose is chaning the application state with redux.


export default App;