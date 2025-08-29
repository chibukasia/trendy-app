import { ScrollView, View, Text, FlatList } from "react-native";
import React from "react";
import TopicCard from "../../../components/Molecules/Cards/TopicCard";
import { makeStyles, useTheme } from "@rneui/themed";
import SearchAndFilter from "../../../components/Molecules/Topics/SearchAndFilter";
import { useState } from "react";
import { useLocalSearchParams } from "expo-router";
import { BottomSheet } from "@rneui/base";
import FilterCard from "../../../components/Molecules/Cards/FilterCard";

const summaries = [
    {
      imageUri: "https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_image_Processing.jpg",
      title: "What you need to know about World Coin",
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
      imageUri: "https://1.bp.blogspot.com/-kK7Fxm7U9o0/YN0bSIwSLvI/AAAAAAAACFk/aF4EI7XU_ashruTzTIpifBfNzb4thUivACLcBGAsYHQ/s1280/222.jpg",
      title: "The beauty of nature",
      summary: `Nature has its own beauty that is fascinating and beyond compare. You must just love the beauty of nature`,
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
      imageUri: "https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80",
      title: "The top secrets about photographers",
      summary: `Exploring the universe in a different way, telling the different stories of the universe.`,
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
      imageUri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtG_CCF8jisxe87OSuA8x7olnYdLZX4-7_3Dd4lXcxYHGPSq6xs0VOlNoTEd9Lhmb-FL4&usqp=CAU",
      title: "The new car trends",
      summary: `Engaging in conversations about new trends in modern cars, and strategies for promoting equality.`,
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
           
            <FlatList
              data={summaries}
              keyExtractor={(_, index) => index.toString()}
              renderItem={({ item }) => (
                <TopicCard 
                  summary={item.summary} 
                  title={item.title} 
                  imageUrl={item.imageUri} 
                  comments={item.comments} 
                  views={item.views} 
                  supporters={item.supporters}
                  updateTopicStats={updateTopicStats}
                  duration={item.duration}
                />
              )}
            />
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