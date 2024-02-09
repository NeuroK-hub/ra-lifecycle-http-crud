
export default function Icon ({ name, ...props }) {
	return (
		<svg {...props}>
			<img href={'../icons/{name}.svg'} alt={name + ' svg'}/>
		</svg>
	);
}
