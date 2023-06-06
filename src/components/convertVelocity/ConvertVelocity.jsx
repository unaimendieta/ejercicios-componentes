const ConvertVelocity = ({velocity}) => {
	const velocidadConvertida = (velocity*1000)/3600;
	return (
		<p>{velocity} Km/h son {velocidadConvertida} m/s.</p>
	);
};

export default ConvertVelocity;