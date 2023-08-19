import { View } from "react-native";
import TopicSummaryListCard from "./TopicsSummaryListCard";

const data = [
  {
    title: "Latest Topics",
    data: [
      {
        imageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQi0ldQfPJxxrLAh1QOa8QNx2FdBUYEne2jEdmWRXgy_Gd91Clw9N08Aoy84iQts3Wt2XQ&usqp=CAU",
        title: "Apples vision pro",
        summary: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor beatae quaerat in incidunt amet modi",
      },
      {
        imageUrl: "https://imgd-ct.aeplcdn.com/1056x660/n/cw/ec/141115/creta-exterior-front-view.jpeg?isig=0&q=75",
        title: "The Hyundai dream",
        summary: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor beatae quaerat in incidunt amet modi",
      },
    ],
  },
  {
    title: "Recommended Topics",
    data: [
      {
        imageUrl:"https://i.pcmag.com/imagery/articles/07rAFhJoVkZ5i45xNFpafzo-1..v1661185568.jpg",
        title: "James Web Telescope Images",
        summary: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor beatae quaerat in incidunt amet modi",
      },
      {
        imageUrl: "https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80",
        title: "Photography and story telling",
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
