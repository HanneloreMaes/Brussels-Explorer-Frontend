import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { FC } from "react";

const RootStack = createNativeStackNavigator();

export const Navigator: FC = () => (
	<NavigationContainer>
		<RootStack.Navigator
			screenOptions={{ headerShown: false }}
		/>
	</NavigationContainer>
);