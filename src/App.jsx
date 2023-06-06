import CalculateCircleArea from "./components/calculateCircleArea/CalculateCircleArea";
import CalculateSquareArea from "./components/calculateSquareArea/CalculateSquareArea";
import CalculateTriangleArea from "./components/calculateTriangleArea/CalculateTriangleArea";
import CelsiusToFahrenheit from "./components/celsiusToFahrenheit/CelsiusToFahrenheit";
import ConvertVelocity from "./components/convertVelocity/ConvertVelocity";
import FahrenheitToCelsius from "./components/fahrenheitToCelsius/FahrenheitToCelsius";
import NumAverage from "./components/numAverage/NumAverage";
import SayHello from "./components/sayHello/SayHello";
import TotalPrice from "./components/totalPrice/TotalPrice";
import WriteMessage from "./components/writeMessage/WriteMessage";



const App = () => {
	return (
	<>
	<p>Ejercicio 1</p>
	<SayHello nombre="Unai"/>
	<hr/>
	<p>Ejercicio 2</p>
	<CalculateSquareArea  side={6}/>
	<hr/>
	<p>Ejercicio 3</p>
	<CalculateTriangleArea  base={8} height={5}/>
	<hr/>
	<p>Ejercicio 4</p>
	<CalculateCircleArea  radio={6} />
	<hr/>
	<p>Ejercicio 5</p>
	<CelsiusToFahrenheit  celsius={40} />
	<hr/>
	<p>Ejercicio 6</p>
	<FahrenheitToCelsius  fahrenheit={104} />
	<hr/>
	<p>Ejercicio 7</p>
	<TotalPrice  price={10} />
	<hr/>	
	<p>Ejercicio 8</p>
	<WriteMessage  name="Unai" material="madera" size={3} note="holaaaaa" />
	<hr/>
	<p>Ejercicio 9</p>
	<NumAverage  numberA={2} numberB={4} numberC={8} />
	<hr/>
	<p>Ejercicio 10</p>
	<ConvertVelocity velocity={120} />
	<hr/>
	</>
	);
};

export default App;
