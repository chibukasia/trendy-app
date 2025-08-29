import { Text, View } from "react-native";
import BaseInput from "../../Atoms/Inputs/BaseInput";
import TextArea from "../../Atoms/Inputs/TextArea";
import { Picker } from "react-native-rapi-ui";
import { useState } from "react";
import IconButton from "../../Atoms/Buttons/IconButton";
import { makeStyles } from "@rneui/themed";
import ActionButton from "../../Atoms/Buttons/ActionButton";
import * as ImagePicker from 'expo-image-picker';
import ImageCard from "../../Atoms/Images/ImageCard";
import React from "react";

const items = [
  { label: "Front-end Developer", value: "FED" },
  { label: "Back-end Developer", value: "BED" },
  { label: "Full-stack Developer", value: "FSD" },
];
const NewTopic = () => {
  const [title, setTitle] = useState<string>("");
  const [category, setCategory] = useState<string>("");
  const [description, setDesciption] = useState<string>("");
  const [selectedImage, setSelectedImage] = useState<string | null>("");

  const styles = useStyles()
  const asyncSelectImage = async()=>{
    let results = await ImagePicker.launchImageLibraryAsync({
        allowsEditing: false,
        quality: 1
    })

    if (!results.canceled){
        setSelectedImage(results.assets[0].uri)
    }else{
        alert('No image selected')
    }
  }

  const submitPost = ()=>{

  }

  const handleCancel = ()=>{

  }

  return (
    <View style={styles.containerStyles}>
      <View>
        <Text>Post title</Text>
        <BaseInput placeholder="What's the post title..." onChangeText={(value)=>setTitle(value)}/>
      </View>
      <View>
        <Text>Post Category</Text>
        <Picker
          items={items}
          value={category}
          onValueChange={(value) => setCategory(value)}
          placeholder="Choose category..."
        />
      </View>
      <View>
        <Text>Description</Text>
        <TextArea setDescription={setDesciption}/>
      </View>
      <View>
        {selectedImage && <ImageCard imageUrl={selectedImage} height={'auto'}/>}
      </View>
      <View>
        <IconButton name="upload" iconType="feather" onPress={asyncSelectImage} title="Upload image" backgroundColor="transparent" color="black"></IconButton>
      </View>
      <View style={styles.actionButtonsView}>
        <ActionButton width={170} onPress={submitPost}>Post</ActionButton>
        <ActionButton width={170} backgroundColor="#8f8f8f" onPress={handleCancel}>Cancel</ActionButton>
      </View>
      
    </View>
  );
};

export default NewTopic;

const useStyles = makeStyles(()=>({
    containerStyles: {
        gap: 10
    },
    actionButtonsView: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
}))