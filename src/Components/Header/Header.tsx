import * as React from 'react'
import 'react-toggle/style.css'
import './Header.css'

import { IoIosMoon } from "react-icons/io";
import { IoIosSunny } from "react-icons/io";
import Toggle from 'react-toggle'


interface IState {
    checked: boolean
}

export default class Header extends React.Component<any, IState> {
    constructor(props: any) {
        super(props)
        this.state = {
            checked: false
        }
        this.handleChange = this.handleChange.bind(this)
    }

    public handleChange(event: any) {
        this.setState({
            checked: event.target.checked
        })

        document.body.classList.toggle('nightmode');

        const headerText = document.querySelector('.headerText') as HTMLElement;
        headerText.classList.toggle('nightmode');

        const dropZone = document.querySelector('.dropZone') as HTMLElement;
        dropZone.classList.toggle('nightmode');

        const dank = document.querySelector('.dank') as HTMLElement;
        dank.classList.toggle('nightmode');
    }

    public render() {
        return (
            <div>
                <div className="right">
                    <label>
                        <Toggle
                            className='nightmode-toggle'
                            icons={{
                                checked: <IoIosMoon />,
                                unchecked: <IoIosSunny />,
                            }}
                            onChange={ this.handleChange }/>
                        <span>Night Mode</span>
                    </label>
                </div>
                <div className="header">
                    <h1 className='headerText'>How Old? 🤔</h1>
                </div>
            </div>
        )
    }


    
}