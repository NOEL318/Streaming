import ReactStars from "react-stars";

export const Card = ({ img_url, title, stars, _id, categoria }) => {
	return (
		<>
			<div className="card">
				<div
					className="img"
					style={{ backgroundImage: `url(${img_url})` }}
				>
					<div className="text">
						<p className="title">{title}</p>
						<p className="categoria">{categoria}</p>
						<div className="stars">
							<ReactStars
								count={stars}
								color1={"#ffd700"}
								color2={"#FFBF00"}
							/>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
