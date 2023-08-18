import { View, Text } from "react-native";
import SocialInteraction from "../Social/SocialInteraction";
import ImageCard from "../../Atoms/Images/ImageCard";
import TopicTitle from "../../Atoms/IconCards/TopicTitle";
import { makeStyles } from "@rneui/themed";
import dayjs from "dayjs";

interface IProps {
  updateTopicStats: () => void;
  avatar?: string;
  title: string;
  content: string;
  imageUrl: string;
  author: string; 
  date: Date | string;
}
const PostDetailsCard = (props: IProps) => {
  const { updateTopicStats, author, avatar, content, title, imageUrl, date} = props;
  const styles = useStyles();

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
  return (
    <View style={styles.container} testID="swarm-card">
      <View style={styles.contentContainer}>
        <TopicTitle title={title}/>
        <View style={{gap: 5}}>
          <Text style={[styles.textStyles, {textAlign: 'justify'}]}>
            {content}
          </Text>
          <ImageCard imageUrl={imageUrl}/>
        </View>
        <View style={styles.metaDetails}>
            <Text style={styles.textStyles}>Created By: {author}</Text>
            <Text>&bull;</Text>
            <Text>{dayjs(date).format('DD/MM/YYYY')}</Text>
            <Text>&bull;</Text>
            <Text style={[styles.textStyles, {fontSize: 15}]}>{dayjs(date).format('HH:mm')}</Text>
        </View>
      </View>
      <View>
        <SocialInteraction
          handleReactions={onReactPress}
          handleComments={onCommentPress}
          handleShare={onSharePress}
        />
      </View>
    </View>
  );
};

export default PostDetailsCard;

const useStyles = makeStyles((theme)=>({
    container: {
        width: '100%',
    },
    contentContainer:{
        borderBottomWidth: 1, 
        borderBottomColor: theme.colors.stroke1, 
        paddingVertical: 10, 
        gap: 5
    },
    metaDetails:{
        display: 'flex', 
        flexDirection: 'row', 
        justifyContent: 'space-between',
        width: '100%',
    },
    textStyles: {
      color: theme.colors.text
    }
}))