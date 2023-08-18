import { ScrollView, View, Text } from "react-native";
import TopicCard from "../../../components/Molecules/Cards/TopicCard";
import { makeStyles, useTheme } from "@rneui/themed";
import SearchAndFilter from "../../../components/Molecules/Topics/SearchAndFilter";
import { useState } from "react";
import { useLocalSearchParams } from "expo-router";
import { BottomSheet } from "@rneui/base";
import FilterCard from "../../../components/Molecules/Cards/FilterCard";

const summaries = [
    {
      imageUri: "https://source.unsplash.com/random?sig=0",
      title: "Emerging Technologies",
      summary: `Exploring advancements in fields such as virtual reality and their potential impact on various industries.`,
      comments: [
        {
          id: 1,
          avatar: 'https://i.pinimg.com/236x/27/c7/af/27c7af04f7bee2f01c7411056052d053.jpg',
          content: 'A very nice swarm to get involved in',
        },
        {
          id: 2,
          avatar: 'https://i.pinimg.com/236x/27/c7/af/27c7af04f7bee2f01c7411056052d053.jpg',
          content: 'A very nice swarm to get involved in',
        },
        {
          id: 3,
          avatar: 'https://i.pinimg.com/236x/27/c7/af/27c7af04f7bee2f01c7411056052d053.jpg',
          content: 'A very nice swarm to get involved in',
        },
        {
          id: 4,
          avatar: 'https://i.pinimg.com/236x/27/c7/af/27c7af04f7bee2f01c7411056052d053.jpg',
          content: 'A very nice swarm to get involved in',
        }
      ],
      views: 6732,
      supporters:[
        {
          id: 1,
          avatar: 'https://i.pinimg.com/236x/27/c7/af/27c7af04f7bee2f01c7411056052d053.jpg',
          name: 'James Smart',
        },
        {
          id: 2,
          avatar: 'https://i.pinimg.com/236x/27/c7/af/27c7af04f7bee2f01c7411056052d053.jpg',
          name: 'Andrea Bocheli',
        },
        {
          id: 3,
          avatar: 'https://i.pinimg.com/236x/27/c7/af/27c7af04f7bee2f01c7411056052d053.jpg',
          name: 'Kim Un',
        },
        {
          id: 4,
          avatar: 'https://i.pinimg.com/236x/27/c7/af/27c7af04f7bee2f01c7411056052d053.jpg',
          name: 'Joe Kali',
        }
      ],
      duration: '5 Minutes ago'
    },
    {
      imageUri: "https://source.unsplash.com/random?sig=0",
      title: "Data Privacy and Security",
      summary: `Examining the implications of data privacy, cybersecurity, and the balance between data protection and innovation.`,
      comments: [
        {
          id: 1,
          avatar: 'https://i.pinimg.com/236x/27/c7/af/27c7af04f7bee2f01c7411056052d053.jpg',
          content: 'A very nice swarm to get involved in',
        },
        {
          id: 2,
          avatar: 'https://i.pinimg.com/236x/27/c7/af/27c7af04f7bee2f01c7411056052d053.jpg',
          content: 'A very nice swarm to get involved in',
        },
        {
          id: 3,
          avatar: 'https://i.pinimg.com/236x/27/c7/af/27c7af04f7bee2f01c7411056052d053.jpg',
          content: 'A very nice swarm to get involved in',
        },
        {
          id: 4,
          avatar: 'https://i.pinimg.com/236x/27/c7/af/27c7af04f7bee2f01c7411056052d053.jpg',
          content: 'A very nice swarm to get involved in',
        }
      ],
      views: '672k',
      supporters:[
        {
          id: 1,
          avatar: 'https://i.pinimg.com/236x/27/c7/af/27c7af04f7bee2f01c7411056052d053.jpg',
          name: 'James Smart',
        },
        {
          id: 2,
          avatar: 'https://i.pinimg.com/236x/27/c7/af/27c7af04f7bee2f01c7411056052d053.jpg',
          name: 'Andrea Bocheli',
        },
        {
          id: 3,
          avatar: 'https://i.pinimg.com/236x/27/c7/af/27c7af04f7bee2f01c7411056052d053.jpg',
          name: 'Kim Un',
        },
        {
          id: 4,
          avatar: 'https://i.pinimg.com/236x/27/c7/af/27c7af04f7bee2f01c7411056052d053.jpg',
          name: 'Joe Kali',
        }
      ],
      duration: '5 Days ago'
    },
    {
      imageUri: "https://source.unsplash.com/random?sig=0",
      title: "AI in Healthcare",
      summary: `Exploring the potential applications, benefits, and ethical considerations of AI in the healthcare industry.`,
      comments: [
        {
          id: 1,
          avatar: 'https://i.pinimg.com/236x/27/c7/af/27c7af04f7bee2f01c7411056052d053.jpg',
          content: 'A very nice swarm to get involved in',
        },
        {
          id: 2,
          avatar: 'https://i.pinimg.com/236x/27/c7/af/27c7af04f7bee2f01c7411056052d053.jpg',
          content: 'A very nice swarm to get involved in',
        },
        {
          id: 3,
          avatar: 'https://i.pinimg.com/236x/27/c7/af/27c7af04f7bee2f01c7411056052d053.jpg',
          content: 'A very nice swarm to get involved in',
        },
        {
          id: 4,
          avatar: 'https://i.pinimg.com/236x/27/c7/af/27c7af04f7bee2f01c7411056052d053.jpg',
          content: 'A very nice swarm to get involved in',
        }
      ],
      views: 6732,
      supporters:[
        {
          id: 1,
          avatar: 'https://i.pinimg.com/236x/27/c7/af/27c7af04f7bee2f01c7411056052d053.jpg',
          name: 'James Smart',
        },
        {
          id: 2,
          avatar: 'https://i.pinimg.com/236x/27/c7/af/27c7af04f7bee2f01c7411056052d053.jpg',
          name: 'Andrea Bocheli',
        },
        {
          id: 3,
          avatar: 'https://i.pinimg.com/236x/27/c7/af/27c7af04f7bee2f01c7411056052d053.jpg',
          name: 'Kim Un',
        },
        {
          id: 4,
          avatar: 'https://i.pinimg.com/236x/27/c7/af/27c7af04f7bee2f01c7411056052d053.jpg',
          name: 'Joe Kali',
        }
      ],
      duration: '5 Minutes ago'
    },
    {
      imageUri: "https://source.unsplash.com/random?sig=0",
      title: "Social Justice and Equality",
      summary: `Engaging in conversations about social issues, discrimination, inclusivity, and strategies for promoting equality.`,
      comments: [
        {
          id: 1,
          avatar: 'https://i.pinimg.com/236x/27/c7/af/27c7af04f7bee2f01c7411056052d053.jpg',
          content: 'A very nice swarm to get involved in',
        },
        {
          id: 2,
          avatar: 'https://i.pinimg.com/236x/27/c7/af/27c7af04f7bee2f01c7411056052d053.jpg',
          content: 'A very nice swarm to get involved in',
        },
        {
          id: 3,
          avatar: 'https://i.pinimg.com/236x/27/c7/af/27c7af04f7bee2f01c7411056052d053.jpg',
          content: 'A very nice swarm to get involved in',
        },
        {
          id: 4,
          avatar: 'https://i.pinimg.com/236x/27/c7/af/27c7af04f7bee2f01c7411056052d053.jpg',
          content: 'A very nice swarm to get involved in',
        }
      ],
      views: '672k',
      supporters:[
        {
          id: 1,
          avatar: 'https://i.pinimg.com/236x/27/c7/af/27c7af04f7bee2f01c7411056052d053.jpg',
          name: 'James Smart',
        },
        {
          id: 2,
          avatar: 'https://i.pinimg.com/236x/27/c7/af/27c7af04f7bee2f01c7411056052d053.jpg',
          name: 'Andrea Bocheli',
        },
        {
          id: 3,
          avatar: 'https://i.pinimg.com/236x/27/c7/af/27c7af04f7bee2f01c7411056052d053.jpg',
          name: 'Kim Un',
        },
        {
          id: 4,
          avatar: 'https://i.pinimg.com/236x/27/c7/af/27c7af04f7bee2f01c7411056052d053.jpg',
          name: 'Joe Kali',
        }
      ],
      duration: '27 Days ago'
    },
  ];
const TopicList = ()=>{
    const [isVisible, setIsVisible] = useState<boolean>();
    const {theme} = useTheme();
    const styles = useStyles();
    const {title} = useLocalSearchParams()

    const updateTopicStats=()=>{

    }
    const onDonePress =()=>{
      /**
       * @todo implement logic
       */
      setIsVisible(false)
    }
    const onBackdropPress = ()=>{
      setIsVisible(false)
    }

    const filters = ["Categories", "Popularity", "Recency", "Swarm Level"]
    return(
        <ScrollView style={styles.container}>
          <View style={styles.header}>
            <Text style={styles.title}>{title?? 'Trending Talks'}</Text>
          </View>
            <View>
                {summaries.map((item, index)=>(
                    <TopicCard 
                      key={index}
                      summary={item.summary} 
                      title={item.title} 
                      imageUrl={item.imageUri} 
                      comments={item.comments} 
                      views={item.views} 
                      supporters={item.supporters}
                      updateTopicStats={updateTopicStats}
                      duration={item.duration}
                    />
                ))}
            </View>
            <BottomSheet isVisible={isVisible} onBackdropPress={onBackdropPress}>
              <FilterCard onDonePress={onDonePress} filters={filters}/>
            </BottomSheet>
        </ScrollView>
    )
}

export default TopicList

const useStyles = makeStyles((theme)=>({
  container: {
    backgroundColor:theme.colors.background, 
    padding: 15,
    paddingTop: 10
  },
  header:{
    display: 'flex', 
    flexDirection: 'row', 
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  title: {
    fontSize: 18,
    fontWeight: '700'
  }
}))