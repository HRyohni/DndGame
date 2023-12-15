import "../styles/grid.css";
import {useState} from "react";

export default function Grid() {

    return (
        <div className="backgroundPlate">
            <h1 className="centerItem">DnD Game</h1>

            <div className="gridWrapper">
                <div className="backgroundImg">
                    <div className="grid">
                        { }
                        <div>

                        </div>
                        <div draggable>
                            <img  width="100%" height="100%" src="../../public/hero.png" alt={"hero"}></img>
                        </div>
                    </div>

                </div>
            </div>
        </div>

    );
}

