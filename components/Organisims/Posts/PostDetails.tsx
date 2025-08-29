import { View, Text, TouchableOpacity, FlatList } from "react-native";
import PostDetailsCard from "../../Molecules/Cards/PostDetailsCard";
import { Ionicons } from "@expo/vector-icons";
import { makeStyles, useTheme } from "@rneui/themed";
import AvatarWithText from "../../Atoms/IconCards/AvatarWithText";
import ActionButton from "../../Atoms/Buttons/ActionButton";
import React from "react";

const comments = [
  {
    avatar:
      "https://i.pinimg.com/originals/fa/0c/eb/fa0ceb0e64f70e4b81b39f5328c477ff.jpg",
    content:
      "Lorem ipsum dolor sit amet, consectetur est a, mattis tellus. Sed dignissim,",
  },
  {
    avatar:
      "https://i.pinimg.com/originals/fa/0c/eb/fa0ceb0e64f70e4b81b39f5328c477ff.jpg",
    content:
      "Lorem ipsum dolor sit amet, consectetur est a, mattis tellus. Sed dignissim,",
  },
  {
    avatar:
      "https://i.pinimg.com/originals/fa/0c/eb/fa0ceb0e64f70e4b81b39f5328c477ff.jpg",
    content:
      "Lorem ipsum dolor sit amet, consectetur est a, mattis tellus. Sed dignissim,",
  },
];
const PostDetailsComponent = () => {
  const styles = useStyles();
  const { theme } = useTheme();

  const handleEditPost = () => {
    /**
     * @todo implement edit swarm
     */
  };
  const handleDeletePost = () => {
    /**
     * @todo implement delete swarm
     */
  };
  return (
    <View style={styles.container}>
      <PostDetailsCard
        updateTopicStats={() => null}
        title={"Data Privacy and Security"}
        content={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab beatae nulla reiciendis fuga soluta. Aspernatur cupiditate tempora dicta tenetur quod`}
        imageUrl={
          "https://cdn.xxl.thumbs.canstockphoto.com/notebook-with-words-data-privacy-internet-technology-concept-picture_csp25761810.jpg"
        }
        author={"Dan Abfalo"}
        date={new Date()}
      />
      <View>
        <TouchableOpacity onPress={() => null}>
          <View style={styles.swarmActivity}>
            <Ionicons name="stats-chart" size={24} color={theme.colors.text} />
            <Text style={styles.textStyles}>View Post Activity</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View>
        <Text style={styles.textStyles}>Comments</Text>
        <FlatList
          data={comments}
          keyExtractor={(_, index) => index.toString()}
          renderItem={({ item }) => (
            <AvatarWithText content={item.content} avatar={item.avatar} />
          )}
        />
      </View>
      <View style={{ gap: 15 }}>
        <ActionButton fullWidth onPress={handleEditPost}>
          Edit Post
        </ActionButton>
        <ActionButton
          fullWidth
          backgroundColor="#E6E6E6"
          color={"#000"}
          onPress={handleDeletePost}
        >
          Delete Post
        </ActionButton>
      </View>
    </View>
  );
};

export default PostDetailsComponent;

const useStyles = makeStyles((theme) => ({
  container: {
    paddingVertical: 10,
  },
  swarmActivity: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
    paddingVertical: 10,
  },
  textStyles: {
    fontWeight: "600",
    fontSize: 17,
    color: theme.colors.text,
  },
}));
