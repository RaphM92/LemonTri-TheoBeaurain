import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

import Wrapper from "../../hooks/Wrapper";

import Camera from "../../assets/icons/camera.svg";

import "./photoInput.css";

const PhotoInput = () => {
	const { t } = useTranslation();
	const navigate = useNavigate();

	const [ allowPickPhoto, setAllowPickPhoto ] = useState(false);
	const [ imageToUpload, setImageToUpload ] = useState("");
	const [ loading, setLoading ] = useState(false);

	useEffect(() => {
		console.log('imageToUpload: ', imageToUpload);
		if (imageToUpload !== "") {
			setLoading(true);

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
				navigate(`/${data.labelName.toLowerCase()}`);
				setLoading(false);
			});
		}
		// eslint-disable-next-line
	}, [ imageToUpload ]);

	const triggerCamera = async () => {
		const video = document.querySelector("#video");

		try {
			const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: false });
			video.srcObject = stream;

			setAllowPickPhoto(true);
		} catch (e) {
			window.alert(t("Aucun device détecté !"));
			return "Error";
		};
	}

	const takePicture = async () => {
		const video = document.querySelector("#video");
		const noDevice = await triggerCamera();
		console.log('noDevice: ', noDevice);

		if (!noDevice) {
			const canvas = document.querySelector("#canvas");

			canvas.getContext('2d').drawImage(video, 0, 0, canvas.width, canvas.height);
			const imageDataUrl = canvas.toDataURL('image/jpeg');
			console.log('imageDataUrl: ', imageDataUrl);

			setImageToUpload(imageDataUrl);
		}
	}

	return (
		<Wrapper>
			<div className="photo-input-container">
				{
					!loading
						? <React.Fragment>
								{
									!allowPickPhoto
										? <span className="alert-message">{t("UseAlert")}</span>
										: null
								}

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
						</React.Fragment>
						: <div className="lds-ring"><div></div><div></div><div></div><div></div></div>
				}
			</div>
		</Wrapper>
	)
};

export default PhotoInput;
