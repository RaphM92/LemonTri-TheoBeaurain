import React, { useCallback, useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

import Wrapper from "../../hooks/Wrapper";

import Camera from "../../assets/icons/camera.svg";

import "./photoInput.css";

const FACING_MODE_USER = "user";
const FACING_MODE_ENVIRONMENT = "environment";

// const videoConstraints = { facingMode: FACING_MODE_ENVIRONMENT };

const PhotoInput = () => {
	const { t } = useTranslation();
	const navigate = useNavigate();

	const videoRef = useRef(null);
	const photoRef = useRef(null);

	const [ allowPickPhoto, setAllowPickPhoto ] = useState(false);
	const [ imageToUpload, setImageToUpload ] = useState("");
	const [ loading, setLoading ] = useState(false);
	const [ facingMode, setFacingMode ] = React.useState(FACING_MODE_ENVIRONMENT);

	const triggerCamera = () => {
		navigator.mediaDevices
		.getUserMedia({ video: true, audio: false })
		.then(stream => {
			const video = videoRef.current;

			video.srcObject = stream;
			video.play();

			setAllowPickPhoto(true);
		}).catch(() => {
			window.alert(t("Aucun device détecté !"));
		});
	};

	const takePicture = async () => {
		const width = 414;
		const height = width / (16 / 9);

		const video = videoRef.current;
		const photo = photoRef.current;

		photo.width = width;
		photo.height = height;

		photo.getContext('2d').drawImage(video, 0, 0, width, height);
		const imageToTest = photo.toDataURL("image/jpeg");

		setImageToUpload(imageToTest);
	}

	const handleClick = useCallback(() => {
		setFacingMode(facingMode === FACING_MODE_USER
			? FACING_MODE_ENVIRONMENT
			: FACING_MODE_USER
		);
	});

	// eslint-disable-next-line
	useEffect(() => { triggerCamera() }, [ videoRef ]);

	useEffect(() => {
		if (imageToUpload !== "") {
			setLoading(true);

			fetch('https://www.nyckel.com/v1/functions/g6kivstjrnb4niwq/invoke', {
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

	return (
		<Wrapper
			icon={Camera}
			onClick={() => {
				if (allowPickPhoto) takePicture();
				else triggerCamera();
			}}
		>
			<div className="photo-input-container">
				{
					!loading
						? <React.Fragment>
								{
									!allowPickPhoto
										? <span className="alert-message">{t("UseAlert")}</span>
										: null
								}

								<video className="video" ref={videoRef} id="video" autoPlay></video>
								<button onClick={handleClick}>Swap</button>

								<canvas ref={photoRef} className="canvas" width="600" height="600"></canvas>
						</React.Fragment>
						: <div className="lds-ring"><div></div><div></div><div></div><div></div></div>
				}
			</div>
		</Wrapper>
	);
};

export default PhotoInput;
