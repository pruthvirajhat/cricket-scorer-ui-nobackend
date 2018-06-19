import React from 'react';
import {Container,Row,Col,Button, ButtonGroup} from 'reactstrap';
import {connect} from "react-redux";
import {createGameAction} from "../home/actions";
import selectPlayerAction from "./actions"

class PlayerSelector extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {};
    }

    onRadioButtonClick(player)
    {
        this.setState({batsman:player})
        if(player === this.props.player1)
        {
            this.props.onSelectPlayerClick({
                batsman : this.props.player1, non_striker:this.props.player2
            })

        }else{
            this.props.onSelectPlayerClick({
                batsman : this.props.player2, non_striker:this.props.player1
            })
        }
    }

    render() {
        return(
            <div align="center">
                <ButtonGroup>
                    <Button onClick={() => this.onRadioButtonClick(this.props.player1)} active={this.state.batsman === this.props.player1}>{this.props.player1}</Button>
                    <Button onClick={() => this.onRadioButtonClick(this.props.player2)} active={this.state.batsman === this.props.player2}>{this.props.player2}</Button>
                </ButtonGroup>
            </div>
        );
    }
}

export const mapStateToProps = (state) => {
    return {
        player1 : state.gameInformation.team1[0],
        player2 : state.gameInformation.team1[1]
    }
}

export const mapDispatcherToProps = (dispatch) => {
    return{
        onSelectPlayerClick : (players) => dispatch(selectPlayerAction(players))
    }
}

export default connect(mapStateToProps,mapDispatcherToProps)(PlayerSelector);