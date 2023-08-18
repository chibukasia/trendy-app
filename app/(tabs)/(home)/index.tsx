import { View, ScrollView, } from "react-native";
import { Link, useRouter } from "expo-router";
import { makeStyles, useTheme } from "@rneui/themed";
import IconButton from "../../../components/Atoms/Buttons/IconButton";
import SearchAndFilter from "../../../components/Molecules/Topics/SearchAndFilter";
import { BottomSheet } from "@rneui/base";
import TopicSummaryList from "../../../components/Organisims/Topics/TopicSummaryList";
import FilterCard from "../../../components/Molecules/Cards/FilterCard";
import { useState } from "react";
import Comment from "../../../components/Molecules/Topics/Comment";

const HomeView = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [search, setSearch] = useState<string>('')
  const styles = useStyles()
  const {push} = useRouter()
  
  const onFilterApply = () => {
    setIsVisible(false)
    /**
     * @todo implement other logic here
     */
  };
  const onBackdropPress=()=>{
    setIsVisible(false)
  }
  const handleAddPost=()=>{
    push('/(topics)')
  }

  const filters = [ "Categories"]
  return (
    <ScrollView style={styles.container}> 
        <View style={styles.buttonStyles}>
          <IconButton name="add" onPress={handleAddPost} title="Create Post"/> 
        </View>
          <SearchAndFilter filterVisible searchVisible setIsVisible={setIsVisible} setSearch={setSearch}/>
          <TopicSummaryList />
          <BottomSheet isVisible={isVisible} onBackdropPress={onBackdropPress}>
            <FilterCard
              filters={filters}
              onDonePress={onFilterApply}
            />
          </BottomSheet>
    </ScrollView>
  );
};

export default HomeView;

const useStyles = makeStyles((theme)=>({
  container: {
    backgroundColor: theme.colors.background,
    padding: 15,
    paddingTop: 60,
  },
  buttonStyles:{
    display: 'flex', 
    flexDirection:'row', 
    justifyContent: 'flex-end', 
    paddingBottom: 20
  }
}))