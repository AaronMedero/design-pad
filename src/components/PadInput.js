// Here we must Render our PadInputs Container

import React from 'react';

class PadInput extends React.Component {
     constructor(props) {
     super(props); 

     this.state = {
         padButtons: [

            // {id: 'Red', color: "rgb(250, 4, 4)" },
            {id: 'Kakashi' , src: "https://media0.giphy.com/media/rrTXn4zEMp008/200.webp?cid=ecf05e47sz61688wmv1ujp1gzmm9wkrpqr09vhww27aikzgv&rid=200.webp&ct=g" },
            {id: 'Racoon', src: "https://media3.giphy.com/media/u8rS2ci3xJGU/200w.webp?cid=ecf05e47sv6e2vjl2wyiogznlxat9hqqzg6wlwwjxjtn92pg&rid=200w.webp&ct=g" },
            {id: '2 Fast', src: "https://media2.giphy.com/media/wz1FgPibXAJWg/100.webp?cid=ecf05e47nvvyoq426kp0cjz253czivavra05wrgh04y3cvnq&rid=100.webp&ct=g"}, 
            {id: 'Smart', src: "https://media1.giphy.com/media/d3mlE7uhX8KFgEmY/200w.webp?cid=ecf05e47flcj0msbgvz16lzxitol8pkf83atl2dc2p30p27a&rid=200w.webp&ct=g"}, 
            {id: 'Spike', src: "https://media0.giphy.com/media/dYQipD9VyRSkTK0iFm/giphy.webp"}, 
            {id: 'DaBaby', src: "https://media1.giphy.com/media/gKs325DcOgTTOu8UHx/200.webp?cid=ecf05e474rpn7v82znyaucr1wymxapxbw4cybn4t473x8gw6&rid=200.webp&ct=g"}, 
            {id: 'Hellcat', src: "https://media2.giphy.com/media/1wRaGtcKtDjyw/100.webp?cid=ecf05e47otc262vie19ncaqjabycz275kf4dlsc26gumvje8&rid=100.webp&ct=g"}, 
            {id: 'Bardi', src: "https://media3.giphy.com/media/3o751Yxe9UjX26BZbG/200.webp?cid=ecf05e47z391j9aquikme1jczta742mkc2t7vurow25v2y9m&rid=200.webp&ct=g"}
        ]
     }


     }

     onInputDrag = (event, padButton) => {
        event.preventDefault();
        this.props.onDrag(padButton)
     }
 
    render(){
        const {padButtons} = this.state;
        return(
            <div className= 'padInput'>
                {
                    padButtons.map((padButton)=>{
                        return(
                        <div
                            className= "padButton"
                            key={padButton.id}
                            draggable={true}
                            onDrag={(event) => this.onInputDrag(event, padButton)}
                        >
                        {padButton.id}
                        </div>
                        )

                    })
                }
            </div>
                    

        )
    }
    
    
}

export default PadInput