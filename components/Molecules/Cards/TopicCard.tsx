import { makeStyles, useTheme } from "@rneui/themed";
import { View, Text, TouchableOpacity } from "react-native";
import SocialInteraction from "../Social/SocialInteraction";
import { Feather } from "@expo/vector-icons";
import ImageCard from "../../Atoms/Images/ImageCard";
import TopicTitle from "../../Atoms/IconCards/TopicTitle";
import Comment from "../Topics/Comment";
import { useState } from "react";
import AvatarWithText from "../../Atoms/IconCards/AvatarWithText";
import React from "react";

interface IProps {
  title: string;
  summary: string;
  comments: {
    id: string | number;
    avatar: string;
    content: string;
  }[];
  supporters: {
    id: string | number;
    name: string;
    avatar: string;
  }[];
  views: number | string;
  imageUrl: string;
  duration: string;
  updateTopicStats: () => void;
}
const TopicCard = (props: IProps) => {
  const {
    title,
    summary,
    comments,
    supporters,
    views,
    imageUrl,
    duration,
    updateTopicStats,
  } = props;
  const styles = useStyles();
  const {theme} = useTheme();
  const [showComments, setShowComments] = useState<boolean>(false);
  const [showSupporters, setShowSupporters] = useState<boolean>(false)

  const onReactPress = () => {
    updateTopicStats();
    /**
     * @todo implement logic
     */
  };
  const onCommentPress = () => {
    updateTopicStats();
    /**
     * @todo implement logic
     */
  };
  const onSharePress = () => {
    updateTopicStats();
    /**
     * @todo implement logic
     */
  };
  
  const onSeeCommentsPress=()=>{
    setShowComments(!showComments)
    setShowSupporters(false)
  }
  const handleViewSupporters=()=>{
    setShowSupporters(!showSupporters)
    setShowComments(false)
  }
  return (
    <View>
      <View style={{gap: 3, paddingVertical: 10,}}>
        <TopicTitle title={title}/>
        <Text style={[styles.textStyles, {textAlign: 'justify'}]}>{summary}</Text>
      </View>
      <View style={styles.ImageViewStyles}>
        <ImageCard imageUrl={imageUrl} />
        <View style={styles.countViewStyles}>
          <Text style={styles.textStyles}>{supporters.length} Suppotters</Text>
          <Text>&bull;</Text>
          <Text style={styles.textStyles}>{views} Views</Text>
        </View>
      </View>
      <View>
        <SocialInteraction
          handleReactions={onReactPress}
          handleComments={onCommentPress}
          handleShare={onSharePress}
        />
      </View>
      <View style={styles.commentsAndSuppport}>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <TouchableOpacity onPress={onSeeCommentsPress}>
            <View>
              <Text style={[styles.textStyles, { fontWeight: "400", fontSize: 16 }]}>
                {comments.length === 0
                  ? "No comments"
                  : comments.length === 1
                  ? "See 1 comment"
                  : showComments? 'Hide Comments': `See All ${comments.length} comments`}
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleViewSupporters}>
            <View style={styles.supporters}>
              <Feather name="users" size={17} color={theme.colors.text} />
              <Text style={[styles.textStyles,{ fontWeight: "600", fontSize: 16 }]}>
                Supporters
              </Text>
            </View>
          </TouchableOpacity>
        </View>
        { showComments && 
          <View>
            {comments.map((comment, index)=>(
              <Comment key={index} avatar={comment.avatar} content={comment.content} />
            ))}
          </View>}
          {showSupporters &&
          <View>
            {supporters.map((supporter, index)=>(
              <AvatarWithText key={index} avatar={supporter.avatar} content={supporter.name} />
            ))}
          </View>}
        <Text style={[styles.textStyles, { fontWeight: "400", fontSize: 13 }]}>
          Poseted: {duration} {duration === "Now" ? "" : "ago"}
        </Text>
      </View>
    </View>
  );
};

export default TopicCard;

const useStyles = makeStyles((theme, props) => ({
  container: {
    width: "100%",
    borderRadius: 5,
    borderWidth: 1,
    borderColor: theme.colors.stroke1,
  },
  ImageViewStyles: {
    position: "relative",
  },
  countViewStyles: {
    backgroundColor: theme.colors.background,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    paddingVertical: 5,
    position: "absolute",
    bottom: 6,
    right: 6,
    borderRadius: 5,
    width: 220,
  },
  commentsAndSuppport: {
    borderTopWidth: 1,
    borderTopColor: theme.colors.stroke1,
    marginTop: 10,
    paddingTop: 13,
    paddingHorizontal: 10,
    paddingBottom: 10,
    gap: 15,
  },
  supporters: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 5,
  },
  textStyles: {
    color: theme.colors.text
  }
}));
