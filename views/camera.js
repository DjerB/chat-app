import React, { useState, useEffect } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { Icon, Thumbnail } from 'native-base';
import { Camera } from 'expo-camera';

const uri = "https://facebook.github.io/react-native/docs/assets/favicon.png";

const CameraView = () => {
    const [hasPermission, setHasPermission] = useState(null);
    const [type, setType] = useState(Camera.Constants.Type.back);

    useEffect(() => {
        (async () => {
            const { status } = await Camera.requestPermissionsAsync();
            setHasPermission(status === 'granted');
        })();
    }, []);

    if (hasPermission === null) {
        return <View />;
    }

    if (hasPermission === false) {
        return <Text>No access to camera</Text>;
    }
    
    return (
        <View style={{ flex: 1 }}>
            <Camera style={{ flex: 1 }} type={type}>
                <View
                    style={{
                        flex: 1,
                        backgroundColor: 'transparent',
                        flexDirection: 'row',
                        justifyContent: "space-evenly"
                    }}
                >
                    <TouchableOpacity
                        style={{
                            alignSelf: 'flex-end',
                            alignItems: 'center',
                            marginBottom: 20
                        }}>
                        <Thumbnail square small source={{ uri }} style={{ borderWidth: 3, borderColor: "white", borderRadius: 5 }} />
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={{
                            backgroundColor: "#fbfbfa",
                            height: 60,
                            width: 60,
                            borderRadius: 40,
                            alignSelf: 'flex-end',
                            alignItems: 'center',
                            display: "flex",
                            justifyContent: "center",
                            marginBottom: 10
                        }}
                    >
                        <TouchableOpacity
                            style={{
                                backgroundColor: "#e5e5e5",
                                borderRadius: 40,
                                borderWidth: 2,
                                height: 50,
                                width: 50,
                                elevation: 3
                            }}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={{
                            alignSelf: 'flex-end',
                            alignItems: 'center',
                            marginBottom: 20
                        }}
                        onPress={() => {
                            setType(
                                type === Camera.Constants.Type.back
                                ? Camera.Constants.Type.front
                                : Camera.Constants.Type.back
                            );
                        }}
                    >
                        {type === Camera.Constants.Type.back ? 
                        <Icon type="MaterialCommunityIcons" name="camera-front" style={{ color: "#fbfbfb", fontSize: 40 }} />:
                        <Icon type="MaterialCommunityIcons" name="camera" style={{ color: "#fbfbfb", fontSize: 40 }} />
                        }
                    </TouchableOpacity>
                </View>
            </Camera>
        </View>
      );
}

export default CameraView;