import React from 'react'

const StartGame = () => {
  return (
    <div className='start-game'>
        <div>
                <div class="container">
                    <div class="section">
                        <span>Select Theme</span>
                        <div class="firstDiv">
                            <div class="numbers">
                                <p>Numbers</p>
                            </div>
                            <div class="icons">
                                <p>Icons</p>
                            </div>
                        </div>

                        <span>Numbers of Players</span>
                        <div class="secondDiv">
                            <div class="One">
                                <p>1</p>
                            </div>
                            <div class="two">
                                <p>2</p>
                            </div>
                            <div class="three">
                                <p>3</p>
                            </div>
                            <div class="four">
                                <p>4</p>
                            </div>
                        </div>

                        <span>Grid Size</span>
                        <div class="thirdDiv">
                            <div class="fourByfour">
                                <p>4x4</p>
                            </div>
                            <div class="sixBysix">
                                <p>6x6</p>
                            </div>
                        </div>
                         <button class="start">Start Game</button>
                    </div>
                </div>
        </div>
    </div>
  )
}

export default StartGame