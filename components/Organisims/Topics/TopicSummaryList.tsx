import { View } from "react-native";
import TopicSummaryListCard from "./TopicsSummaryListCard";

const data = [
  {
    title: "Latest Topics",
    data: [
      {
        imageUrl:"https://www.wibbitz.com/wp-content/uploads/2016/06/blog2-emerging-technologies-media-industry.jpg",
        title: "Emerging Technologies",
        summary: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor beatae quaerat in incidunt amet modi",
      },
      {
        imageUrl: "https://www.wibbitz.com/wp-content/uploads/2016/06/blog2-emerging-technologies-media-industry.jpg",
        title: "Emerging Technologies",
        summary: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor beatae quaerat in incidunt amet modi",
      },
    ],
  },
  {
    title: "Recommended Topics",
    data: [
      {
        imageUrl:"https://www.wibbitz.com/wp-content/uploads/2016/06/blog2-emerging-technologies-media-industry.jpg",
        title: "Emerging Technologies",
        summary: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor beatae quaerat in incidunt amet modi",
      },
      {
        imageUrl: "https://www.wibbitz.com/wp-content/uploads/2016/06/blog2-emerging-technologies-media-industry.jpg",
        title: "Emerging Technologies",
        summary: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor beatae quaerat in incidunt amet modi",
      },
    ],
  },
];
const TopicSummaryList = () => {
  return (
    <View>
        {data.map((item, index)=>(
            <TopicSummaryListCard key={index} title={item.title} data={item.data}/>
        ))}
    </View>
  );
};

export default TopicSummaryList;
