import React from "react";
// import blob_1 from "./images/blob_1.png";
// import blob_2 from "./images/blob_2.png";
import blob_1 from "./images/blob_1_frame.png";
import blob_2 from "./images/blob_2_frame.png";

export default function BlobGraphics() {
	return (
		<div>
			<img src={blob_1} className="blob-1"></img>
			<img src={blob_2} className="blob-2"></img>
		</div>
	);
}
