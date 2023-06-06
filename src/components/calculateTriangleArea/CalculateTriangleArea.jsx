const CalculateTriangleArea = ({base, height}) => {
	const area = (height * base)/2;
	return (
		<p>El área del triangulo es {area}</p>
	);
};

export default CalculateTriangleArea;