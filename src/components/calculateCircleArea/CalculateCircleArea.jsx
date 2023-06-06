const CalculateCircleArea = ({radio}) => {
	const area = Math.PI * (radio*radio);
	return (
		<p>El área del circulo es {area}</p>
	);
};

export default CalculateCircleArea;