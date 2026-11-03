const app = ReactDOM.createRoot(document.getElementById('root'));

// app.render(
//     <div>
//         <h1>Hello, React!</h1>
//         {React.createElement('input', {
//             type: 'text',
//             placeholder: 'Enter your name',
//             onClick: () => alert('Input clicked!'),
//             onMouseEnter: () => console.log('Mouse entered!'),
//         })}
//     </div>
// );
const inputClick = () => {
    alert('Input clicked!');
}

const mouseEnter = () => {
    console.log('Mouse entered!');
} 

const placeholder = "Enter your name !" 
const heading = "Hello, React !"
const a = 10;
const b = 5;


const element = (
    <div className="container">
        <h1>{heading}</h1>
        <input placeholder={placeholder}
            onClick={inputClick} onMouseEnter={mouseEnter} />
        <p>{ a > b ? "a is greater than b" : "a is not greater than b"  }</p>
    </div>
);
app.render(element);