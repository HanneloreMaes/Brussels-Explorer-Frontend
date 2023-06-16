import React, { FC } from 'react';

import { Image, View } from 'react-native';
import Svg, { Path } from 'react-native-svg';

import { IconTypes } from './UserLocationIcon.types';

export const IconMarker: FC = () => (
	<View>
		<Svg width={40} height={40} viewBox="0 0 1024 1024">
			<Path d="M511.927479 574.368272m-261.22153 0a261.22153 261.22153 0 1 0 522.443059 0 261.22153 261.22153 0 1 0-522.443059 0Z" fill="#2CB5A7" />
			<Path d="M511.927479 835.734844a261.076487 261.076487 0 1 1 261.076487-261.076487 261.076487 261.076487 0 0 1-261.076487 261.076487z m0-493.144476a232.067989 232.067989 0 1 0 232.067988 232.067989 232.067989 232.067989 0 0 0-232.067988-232.648159z" fill="#FFFFFF" />
		</Svg>
	</View>
);
