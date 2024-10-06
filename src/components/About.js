import React from 'react'

export default function About(props) {

    // const [myStyle, setMyStyle] = useState({
    //     color: 'black',
    //     backgroundColor: 'white'
    // })

    // const [btncolor , setBtncolor] = useState({
    //     backgroundColor: 'black',
    //     color: 'white'
    // })

    // const [btntext, setBtntext] = useState("Dark Mode")

    // const toggleStyle = ()=>{
    //     if(myStyle.color === 'white'){
    //         setMyStyle({
    //             color: 'black',
    //             backgroundColor: 'white',
    //             border: '1px solid black'
    //         })
    //         setBtntext("Dark Mode")
    //         setBtncolor({
    //             backgroundColor: 'black',
    //             color: 'white'
    //         })
    //     }
    //     else{
    //         setMyStyle({
    //             color: 'white',
    //             backgroundColor: 'black',
    //             border: '1px solid white'
    //         })
    //         setBtntext("Light Mode")
    //         setBtncolor({
    //             backgroundColor: 'white',
    //             color: 'black'
    //         })
    //     }
    // }

    let myStyle = {
        color: props.mode === 'dark'?'white':'black',
        backgroundColor: props.mode === 'light' ? 'white' : '#343a40',
    }

  return (
    <div className='container' style={{color: props.mode === 'dark'?'white':'black'}}>
        <h1 className='my-3'>About Us</h1>
        <div className="accordion" id="accordionExample">
            <div className="accordion-item">
                <h2 className="accordion-header">
                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={myStyle}>
                    <strong>Analyze your text</strong>
                </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                <div className="accordion-body" style={myStyle}>
                    Textutils give you a way to analyze your text quickly and effeciently. Be it word count, character count or
                </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={myStyle}>
                    <strong>Free to use</strong>
                </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div className="accordion-body" style={myStyle}>
                    Textutils is a free character counter tool that provides instant character count and word count statistics for a given text. Textutils reports the number of words and characters. Thus it is suitable for writung text with word / character limit.
                </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={myStyle}>
                <strong>Browaer Compatibility</strong>
                </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div className="accordion-body" style={myStyle}>
                    This word counter software works in any web browser such as Chrime, Firefox, Internet Explorer, Safari, Opera. It suits to count characters in Facebook, blog, books, word documnet, pdf document, essays, etc. 
                </div>
                </div>
            </div>
        </div>
    </div>
  )
}
