// import * as MediaLibrary from 'expo-media-library';
// import * as FileSystem from 'expo-file-system';
// import * as Permissions from 'expo-permissions';

// export const saveFile = async ( content ) => {
//     console.log(content)
//     const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
//     if (status === "granted") {
//         try {
//             let fileUri = FileSystem.documentDirectory + "text.txt";
//             await FileSystem.writeAsStringAsync(fileUri, content, { encoding: FileSystem.EncodingType.UTF8 });
//             const asset = await MediaLibrary.createAssetAsync(fileUri)
//             await MediaLibrary.createAlbumAsync("Download", asset, false)
//         } catch (err) {
//             console.log(err)
//         }
//     }
// }