import React, { useEffect, useState } from "react";

import Wrapper from "../../hooks/Wrapper";

import Camera from "../../assets/icons/camera.svg";

import "./photoInput.css";

const PhotoInput = () => {
	const [ allowPickPhoto, setAllowPickPhoto ] = useState(false);
	const [ imageToUpload, setImageToUpload ] = useState("");

	useEffect(() => {
		if (imageToUpload !== "") {
			fetch('https://www.nyckel.com/v1/functions/du7reicg55xtbosf/invoke', {
				method: 'POST',
				headers: {
					'Authorization': `Bearer ${localStorage.getItem("bearer-token")}`,
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({ "data": imageToUpload })
			})
			.then(response => response.json())
			.then(data => {
				console.log('data: ', data);
				localStorage.setItem("label", data.labelName)
			});
		}
	}, [ imageToUpload ]);

	const triggerCamera = async () => {
		const video = document.querySelector("#video");
		const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: false });
		video.srcObject = stream;

		setAllowPickPhoto(true);
	}

	const takePicture = () => {
		const video = document.querySelector("#video");
		const canvas = document.querySelector("#canvas");

		canvas.getContext('2d').drawImage(video, 0, 0, canvas.width, canvas.height);
		const imageDataUrl = canvas.toDataURL('image/jpeg');

		setImageToUpload(imageDataUrl);
	}

	return (
		<Wrapper>
			<div className="photo-input-container">
				{
					allowPickPhoto
						? <button id="start-camera" className="camera-button" onClick={takePicture}>
							<img src={Camera} alt="" />
						</button>
						: <button id="start-camera" className="camera-button" onClick={triggerCamera}>
							<img src={Camera} alt="" />
						</button>
				}

				<video className="video" id="video" autoPlay></video>

				<canvas id="canvas" className="canvas" width="600" height="600"></canvas>
			</div>
		</Wrapper>
	)
};

export default PhotoInput;
