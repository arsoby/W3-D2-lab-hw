let container = document.getElementById("root")
let element =(
    
    <div className="container">
    <div className="pInfo">
        <br></br>
        <h2>Presonal Information</h2>
        <p>Name:ABDULRAHMAN ALSOBY</p>
        <p>Address: SAUDI ARIBIA,RIADH</p>
        <p>EMAIL:A.R.EDU@GMAIL.COM</p>
        <p>Mobile: 966562525252</p>
    </div>
    <br></br>
    <hr></hr>
    <br></br>
    <div className="edu">
        <h2>EDUCATION</h2>
        <ul>
            <li>high school</li>
            <li>MID DEPLOMA in Computer Siences BY KSU </li>
        </ul>
    </div>
    <br></br>
    <hr></hr>
    <br></br>
    <div className="exp">
    <h2> Experince</h2>

        <ol>
            <li>Adminstarsion and Entery information</li>
            <li>Not </li>
            <li>Yet</li>
            <li>But</li>
            <li>See</li>
            <li>you</li>
            <li>Soon</li>
        </ol>
    </div>
    <div className="skills">
        <table>
        <caption>Computer Skils</caption>
            <tr>
                <th rowspan="3">out of 10</th>
                <th> Office 356</th>
                <th>Windwos OS</th>
                <th>MAc Os</th>
                <th>Linex OS</th>
            </tr>
            <tr>
                <td>7</td>
                <td>7</td>
                <td>1.01</td>
                <td>0.1</td>
            </tr>
        </table>
        <br></br>
        <h2>Programing Language</h2>
        <ol>
            <li value="">Java</li>
            <li value="">Html</li>
            <li value="">Css</li>
            <li value="">JavaScript</li>
        </ol>
    </div>
    </div>
)


ReactDOM.render(element, container) 


