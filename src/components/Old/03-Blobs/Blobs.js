import React from "react";
import blob1 from "../../media/blobs/blob1.png";
import blob2 from "../../media/blobs/blob2.png";
import { Blob1Cont, Blob2Cont } from "./style";

export const Blob1 = () => {
	return <Blob1Cont src={blob1}></Blob1Cont>;
};

export const Blob2 = () => {
	return <Blob2Cont src={blob2}></Blob2Cont>;
};
