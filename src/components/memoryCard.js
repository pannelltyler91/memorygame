import { React, Component } from "react";
import "../MemoryCard.css";

class MemoryCard extends Component {
    handle_click = (e) =>{
       console.log('clicked')
       this.setState(
           {
               isFlipped: !this.state.isFlipped
           }
       )
    }
    constructor(){
        super()
        this.state = {
            isFlipped:false
        }
    }
  render() {
      let memoryCardInnerClass = 'memoryCardInner'
      if(this.state.isFlipped){
          memoryCardInnerClass += " flipped"
      }
    return (
      <div className="MemoryCard" onClick={this.handle_click.bind(this)}>
        <div className={memoryCardInnerClass}>
          <div className="MemoryCardBack">
            <div></div>
            {/* <img src='../imgs/squirtle.jpg' alt='not found'></img> */}
          </div>
          <div className="MemoryCardFront">▲</div>
        </div>
      </div>
    );
  }
}

export default MemoryCard;
