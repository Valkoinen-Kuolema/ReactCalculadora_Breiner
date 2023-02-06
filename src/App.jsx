import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [op , setOp]= useState(0)
  const [acomulador , setAcomulador]= useState(0)
    // let acomulador;
    // let agregar;
// --------------------------------- //
  const Cambio = (e) =>{
    // setCount(count + e.target.value);
    if(count == 0){
      setCount(e.target.value);
    }else{
      setCount(count+e.target.value);
    }
  }
// --------------------------------- //
const borrar = () =>{
  setCount(0);
  setAcomulador(0);
  setOp(0)
}

const Borra =(props)=>{
  return(
    <input type="button" value={props.value} onClick={borrar}/>
  );
}

  const Boton= (props)=>{
    if(props.value == "+"){
      return(
        <input type="button" value={props.value} onClick={Suma}/>
      );

    }else if(props.value == "-"){
       return(
        <input type="button" value={props.value} onClick={Resta}/>
       );
    }else if(props.value=="*"){
      return(
        <input type="button" value={props.value} onClick={Mult}/>
      );
    }else if(props.value == "/"){
      return(
        <input type="button" value={props.value} onClick={Div}/>
      );
    }else{
      return(
        <input type="button" value={props.value} onClick={Cambio}/>
      );
    }


    // return (
    //   <input type="button" value={props.value} onClick={Cambio}/>
    // );

  }
// ----------------------//


  const Pantalla =()=>{
    return(
      <input type="textfield" value={count}/>
    );
  }

  const Suma = ()=>{
    if(op == 0){
      setAcomulador(count)
      setCount(0);
      setOp("+")
    }else{
      setOp("+")
    }
  }

  const Resta = ()=>{
    if(op == 0){
      setAcomulador(count)
      setCount(0);
      setOp("-")
    }else{
      setOp("-")
    }
    
  }

  const Mult = ()=>{
    if(op == 0){
      setAcomulador(count)
      setCount(0);
      setOp("*")
    }else{
      setOp("*")
    }
    
  }

  const Div = ()=>{
    if(op == 0){
      setAcomulador(count)
      setCount(0);
      setOp("/")
    }else{
      setOp("/")
    }
    
  }
  // --------------------------------- //

  const Calcular = () =>{
    if(op == "*"){
      setCount(parseFloat(acomulador) * parseFloat(count))
    }
    if(op== "/"){
      setCount(parseFloat(acomulador) / parseFloat(count))
    }
    if(op == "+"){
       setCount(parseFloat(acomulador) + parseFloat(count))
    }
    if(op=="-"){
       setCount(parseFloat(acomulador) - parseFloat(count))
    }
  }

  const Igual = (props) =>{
    return(
      <input type="button" value={props.value} onClick={Calcular}/>
    );
  }


  return (
  
      <form name="calculator">
    {/* <h3>Calculadora <a href="#">Internetedadinero.com</a></h3>
    <p>Haz algun calculo para ver el resultado.</p> */}
    {/* <input type="textfield" name="ans" value=""/> */}
    <Pantalla/>
    <br/>
    <Boton value="1"/>            
    <Boton value="2"/>
    <Boton value="3"/>
    <Boton value="+"/>

    <Boton value="4"/>
    <Boton value="5"/>
    <Boton value="6"/>
    <Boton value="-"/>
    <br />
    <Boton value="7"/>
    <Boton value="8"/>
    <Boton value="9"/>
    <Boton value="*"/>
    <br />
    <Boton value="0"/>
    <Borra value="C"/>
    <Boton value="/"/>
    <Igual value="="/>


    {/* <input type="button" value="1" onClick="document.calculator.ans.value+='1'"/> */}
    {/* <input type="button" value="2" onClick="document.calculator.ans.value+='2'"/> */}
    {/* <input type="button" value="3" onClick="document.calculator.ans.value+='3'"/> */}
    {/* <input type="button" value="+" onClick="document.calculator.ans.value+='+'"/> */}
    {/* <br/> */}
    {/* <input type="button" value="4" onClick="document.calculator.ans.value+='4'"/> */}
    {/* <input type="button" value="5" onClick="document.calculator.ans.value+='5'"/> */}
    {/* <input type="button" value="6" onClick="document.calculator.ans.value+='6'"/> */}
    {/* <input type="button" value="-" onClick="document.calculator.ans.value+='-'"/> */}
    {/* <br/> */}
    {/* <input type="button" value="7" onClick="document.calculator.ans.value+='7'"/>
    <input type="button" value="8" onClick="document.calculator.ans.value+='8'"/>
    <input type="button" value="9" onClick="document.calculator.ans.value+='9'"/>
    <input type="button" value="*" onClick="document.calculator.ans.value+='*'"/> */}
    {/* <br/> */}
    {/* <input type="button" value="0" onClick="document.calculator.ans.value+='0'"/>
    <input type="reset" value="c"/>
    <input type="button" value="/" onClick="document.calculator.ans.value+='/'"/>
    <input type="button" value="=" onClick="document.calculator.ans.value=eval(document.calculator.ans.value)"/> */}
    </form>

    
  )
}

export default App
