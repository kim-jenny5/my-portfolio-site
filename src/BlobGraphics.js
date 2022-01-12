import React from "react";
import blob_1 from "./images/blob_1.png";
import blob_2 from "./images/blob_2.png";

export default function BlobGraphics() {
	return (
		<div>
			{/* <div className="blob-1"></div> */}
			<img src={blob_1} className="blob-1"></img>
			{/* <div className="blob-2"></div> */}
			<img src={blob_2} className="blob-2"></img>
		</div>
	);
}
