import React from "react";
import blob1 from "../../media/blobs/blob1.png";
import blob2 from "../../media/blobs/blob2.png";
// import { Blob1Cont, Blob2Cont, BlobsBackground } from "./style";
import { Blob1Cont, Blob2Cont } from "./style";

export const Blob1 = () => {
	return (
		// <div>
		// 	<img src={blob_1} className="blob-1"></img>
		// 	<img src={blob_2} className="blob-2"></img>
		// </div>
		<Blob1Cont src={blob1}></Blob1Cont>
	);
};

export const Blob2 = () => {
	return (
		// <div>

		// </div>
		<Blob2Cont src={blob2}></Blob2Cont>
		// <Blob2Cont>
		// 	<img src={blob2}></img>
		// </Blob2Cont>
	);
};

// export const Blobs = () => {
// 	return <BlobsBackground></BlobsBackground>;
// };
