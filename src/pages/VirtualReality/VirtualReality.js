import React, {Fragment} from 'react';

// video
import video from './../../assets/video/lemon-tri.mp4';

//style
import './virtualReality.css';

export default function VirtualReality() {

	return (
		<Fragment>
				<div className={'center'}>
					<video className={'landscape'} width={'100%'} controls muted autoPlay preload="auto">
						<source src={video} type="video/mp4"/>
					</video>
				</div>

		</Fragment>
	);
}
